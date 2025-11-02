'use client';

import React from 'react';
import { MapPin, Mail, Phone, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Container } from '../ui';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <Container>
        <div className="py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">EducaMaps</span>
            </div>
            <p className="text-slate-400 text-sm mb-4">
              Conectando famílias às melhores instituições de ensino do Brasil.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-11 h-11 bg-slate-800 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-11 h-11 bg-slate-800 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-11 h-11 bg-slate-800 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold mb-4">Produto</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#funcionalidades" className="text-slate-400 hover:text-white transition-colors">Funcionalidades</a></li>
              <li><a href="#para-quem" className="text-slate-400 hover:text-white transition-colors">Para quem é</a></li>
              <li><a href="#diferenciais" className="text-slate-400 hover:text-white transition-colors">Diferenciais</a></li>
              <li><a href="#cadastro" className="text-slate-400 hover:text-white transition-colors">Cadastre-se</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#sobre" className="text-slate-400 hover:text-white transition-colors">Sobre nós</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Carreiras</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Parcerias</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-slate-400">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>67 99853-9665</span>
              </li>
              <li className="flex items-start gap-2 text-slate-400">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>contato@educamaps.com.br</span>
              </li>
              <li className="flex items-start gap-2 text-slate-400">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>R. Gen. Câmara, 114 - Vila Planalto<br />Campo Grande - MS</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <p>
              © {currentYear} EducaMaps. Desenvolvido por{' '}
              <a href="https://wknoticias.com.br" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                WK Comunicação
              </a>
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
