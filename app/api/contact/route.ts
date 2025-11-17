import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { resolveMx } from 'dns/promises';

// Rate limiting em memória (Map de IP -> array de timestamps)
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hora em milissegundos
const MAX_REQUESTS_PER_WINDOW = 5; // máximo 5 requisições por hora

// Lista de domínios de email descartáveis/temporários conhecidos
const DISPOSABLE_EMAIL_DOMAINS = [
  '10minutemail.com', 'guerrillamail.com', 'mailinator.com', 'maildrop.cc',
  'tempmail.com', 'temp-mail.org', 'throwaway.email', 'getnada.com',
  'trashmail.com', 'yopmail.com', 'fakeinbox.com', 'sharklasers.com',
  'grr.la', 'spam4.me', 'mintemail.com', 'emailondeck.com',
  'tmpeml.info', 'tempinbox.com', 'mohmal.com', 'mailnesia.com'
];

// Função para validar email com verificação DNS
async function isValidEmail(email: string): Promise<{ valid: boolean; reason?: string }> {
  // 1. Regex rigoroso (RFC 5322 simplificado)
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  if (!emailRegex.test(email)) {
    return { valid: false, reason: 'Formato de email inválido' };
  }

  // 2. Extrair domínio
  const domain = email.split('@')[1].toLowerCase();

  // 3. Validar TLD (top-level domain)
  const tldRegex = /\.[a-z]{2,}$/i;
  if (!tldRegex.test(domain)) {
    return { valid: false, reason: 'Domínio inválido' };
  }

  // 4. Bloquear domínios descartáveis
  if (DISPOSABLE_EMAIL_DOMAINS.includes(domain)) {
    return { valid: false, reason: 'Emails temporários não são permitidos' };
  }

  // 5. Verificar se domínio tem registros MX (servidores de email)
  try {
    const mxRecords = await resolveMx(domain);
    if (!mxRecords || mxRecords.length === 0) {
      return { valid: false, reason: 'Domínio sem servidor de email configurado' };
    }
    return { valid: true };
  } catch (error) {
    // Domínio não existe ou não tem MX records
    return { valid: false, reason: 'Domínio de email não existe ou está indisponível' };
  }
}

// Validação dos dados
interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  website?: string; // Honeypot field
}

export async function POST(request: NextRequest) {
  try {
    // Parse do body
    const body: ContactFormData = await request.json();
    const { name, email, subject, message, website } = body;

    // 1. HONEYPOT: Se o campo website (invisível) foi preenchido, é bot
    if (website && website.trim() !== '') {
      // Retornar sucesso falso para não dar dica ao bot
      return NextResponse.json(
        { success: true, message: 'Email enviado com sucesso!' },
        { status: 200 }
      );
    }

    // 2. RATE LIMITING: Verificar se IP excedeu limite
    const ip = request.headers.get('x-forwarded-for') ||
                request.headers.get('x-real-ip') ||
                'unknown';

    const now = Date.now();
    const userRequests = rateLimitMap.get(ip) || [];

    // Filtrar apenas requisições dentro da janela de tempo
    const recentRequests = userRequests.filter(
      timestamp => now - timestamp < RATE_LIMIT_WINDOW
    );

    if (recentRequests.length >= MAX_REQUESTS_PER_WINDOW) {
      return NextResponse.json(
        { error: 'Muitas requisições. Por favor, tente novamente mais tarde.' },
        { status: 429 }
      );
    }

    // Adicionar timestamp atual
    recentRequests.push(now);
    rateLimitMap.set(ip, recentRequests);

    // Limpar entradas antigas do Map periodicamente
    if (rateLimitMap.size > 1000) {
      for (const [key, timestamps] of rateLimitMap.entries()) {
        const validTimestamps = timestamps.filter(
          t => now - t < RATE_LIMIT_WINDOW
        );
        if (validTimestamps.length === 0) {
          rateLimitMap.delete(key);
        }
      }
    }

    // Validação básica
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios' },
        { status: 400 }
      );
    }

    // Validação avançada de email
    const emailValidation = await isValidEmail(email);
    if (!emailValidation.valid) {
      return NextResponse.json(
        { error: emailValidation.reason || 'Email inválido' },
        { status: 400 }
      );
    }

    // Criar transportador de email com as variáveis de ambiente
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true para 465, false para outras portas
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Configuração do email
    const mailOptions = {
      from: `"EducaMaps Contato" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `[Contato Site] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #10b981;">Nova mensagem de contato - EducaMaps</h2>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Nome:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong>Assunto:</strong> ${subject}</p>
          </div>
          <div style="margin: 20px 0;">
            <h3 style="color: #374151;">Mensagem:</h3>
            <p style="white-space: pre-wrap; background-color: #f9fafb; padding: 15px; border-left: 4px solid #10b981; border-radius: 4px;">${message}</p>
          </div>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
          <p style="color: #6b7280; font-size: 12px;">Esta mensagem foi enviada através do formulário de contato do site EducaMaps.</p>
        </div>
      `,
      text: `
Nome: ${name}
Email: ${email}
Assunto: ${subject}

Mensagem:
${message}
      `.trim(),
    };

    // Enviar email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: 'Email enviado com sucesso!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return NextResponse.json(
      { error: 'Erro ao enviar email. Por favor, tente novamente mais tarde.' },
      { status: 500 }
    );
  }
}
