'use client';

import React, { useState } from 'react';
import { Mail, User, Building, Send } from 'lucide-react';
import { Section, SectionHeader, Card, Button } from '../ui';

// Lista de domínios de email descartáveis (mesma do backend)
const DISPOSABLE_DOMAINS = [
  '10minutemail.com', 'guerrillamail.com', 'mailinator.com', 'maildrop.cc',
  'tempmail.com', 'temp-mail.org', 'throwaway.email', 'getnada.com',
  'trashmail.com', 'yopmail.com', 'fakeinbox.com', 'sharklasers.com'
];

const CTA: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'parent',
    message: '',
    website: '' // Honeypot field - deve permanecer vazio
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [emailError, setEmailError] = useState<string>('');

  // Validar email no frontend
  const validateEmail = (email: string): string => {
    if (!email) return '';

    // Regex rigoroso
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    if (!emailRegex.test(email)) {
      return 'Formato de email inválido';
    }

    // Verificar domínio descartável
    const domain = email.split('@')[1]?.toLowerCase();
    if (domain && DISPOSABLE_DOMAINS.includes(domain)) {
      return 'Emails temporários não são permitidos';
    }

    // Verificar se tem TLD válido
    const tldRegex = /\.[a-z]{2,}$/i;
    if (!domain || !tldRegex.test(domain)) {
      return 'Domínio de email inválido';
    }

    return '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validar email antes de enviar
    const error = validateEmail(formData.email);
    if (error) {
      setEmailError(error);
      return;
    }

    setStatus('loading');
    setEmailError('');

    try {
      // Preparar dados para envio
      const emailData = {
        name: formData.name,
        email: formData.email,
        subject: `Interesse no EducaMaps - ${formData.type === 'parent' ? 'Pai/Mãe' : formData.type === 'student' ? 'Estudante' : formData.type === 'institution' ? 'Instituição' : 'Outro'}`,
        message: formData.message || 'Nenhuma mensagem adicional fornecida.',
        website: formData.website // Honeypot - deve estar vazio
      };

      // Enviar para a API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });

      const data = await response.json();

      if (!response.ok) {
        // Se for erro de validação de email, mostrar no campo
        if (response.status === 400 && data.error) {
          setEmailError(data.error);
          setStatus('idle');
          return;
        }
        throw new Error(data.error || 'Erro ao enviar email');
      }

      // Sucesso
      setStatus('success');
      setFormData({ name: '', email: '', type: 'parent', message: '', website: '' });

      // Resetar status após 5 segundos
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      setStatus('error');

      // Resetar status de erro após 5 segundos
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Limpar erro de email quando usuário digita
    if (name === 'email' && emailError) {
      setEmailError('');
    }
  };

  const handleEmailBlur = () => {
    const error = validateEmail(formData.email);
    setEmailError(error);
  };

  return (
    <Section background="gradient" id="cadastro">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          title="Cadastre seu interesse"
          subtitle="Seja um dos primeiros a conhecer o EducaMaps. Deixe seus dados e entraremos em contato!"
          light={true}
        />

        <Card className="max-w-2xl mx-auto">
          {status === 'success' ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">Cadastro realizado!</h3>
              <p className="text-muted-foreground">
                Obrigado pelo seu interesse. Em breve entraremos em contato.
              </p>
            </div>
          ) : status === 'error' ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">Erro ao enviar</h3>
              <p className="text-muted-foreground mb-4">
                Ocorreu um erro ao enviar seu cadastro. Por favor, tente novamente.
              </p>
              <Button
                onClick={() => setStatus('idle')}
                variant="primary"
                size="md"
              >
                Tentar novamente
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-base font-medium mb-2">
                  Nome completo *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-slate-900 placeholder:text-slate-400"
                    placeholder="Seu nome"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-base font-medium mb-2">
                  E-mail *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleEmailBlur}
                    required
                    className={`w-full pl-11 pr-4 py-3 border ${emailError ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 ${emailError ? 'focus:ring-red-500' : 'focus:ring-primary'} focus:border-transparent outline-none transition-all text-slate-900 placeholder:text-slate-400`}
                    placeholder="seu@email.com"
                  />
                </div>
                {emailError && (
                  <p className="mt-1 text-sm text-red-600">{emailError}</p>
                )}
              </div>

              {/* Honeypot field - invisible to humans, visible to bots */}
              <div style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }} aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div>
                <label htmlFor="type" className="block text-base font-medium mb-2">
                  Você é... *
                </label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    required
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all appearance-none bg-white text-slate-900"
                  >
                    <option value="parent">Pai/Mãe ou Responsável</option>
                    <option value="student">Estudante</option>
                    <option value="institution">Instituição de Ensino</option>
                    <option value="other">Outro</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-base font-medium mb-2">
                  Mensagem (opcional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none text-slate-900 placeholder:text-slate-400"
                  placeholder="Conte-nos mais sobre suas necessidades..."
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                icon={Send}
                disabled={status === 'loading'}
                className="w-full"
              >
                {status === 'loading' ? 'Enviando...' : 'Cadastrar interesse'}
              </Button>

              <p className="text-sm text-center text-slate-600">
                Ao cadastrar, você concorda em receber comunicações sobre o EducaMaps.
              </p>
            </form>
          )}
        </Card>
      </div>
    </Section>
  );
};

export default CTA;
