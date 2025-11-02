'use client';

import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { Container } from '../ui';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary-dark to-sky-600 text-white overflow-hidden min-h-screen flex items-center">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-sky-300/10 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10 py-16 sm:py-20">
        <div className="text-center w-full max-w-6xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-full mb-10 border border-white/30">
            <MapPin className="w-5 h-5" />
            <span className="text-base font-medium">Encontre a instituição de ensino ideal</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1] tracking-tight">
            Descubra a melhor <br className="hidden sm:block" />
            educação perto de você
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl mb-12 text-white/95 max-w-4xl mx-auto leading-relaxed font-light">
            Encontre escolas, creches, faculdades e cursos próximos com informações completas
            sobre metodologia, valores e avaliações. Tudo em um só lugar.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
            <a
              href="#cadastro"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200 bg-white text-sky-600 hover:bg-gray-50 shadow-2xl hover:shadow-xl hover:scale-105 w-full sm:w-auto sm:min-w-[220px]"
            >
              Comece agora
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#problema"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200 border-2 border-white text-white hover:bg-white/10 w-full sm:w-auto sm:min-w-[220px]"
            >
              Saiba mais
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="text-4xl md:text-5xl font-bold mb-2">180k+</div>
              <div className="text-base md:text-lg text-white/90">Instituições no Brasil</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="text-4xl md:text-5xl font-bold mb-2">80%</div>
              <div className="text-base md:text-lg text-white/90">Buscam via celular</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
              <div className="text-base md:text-lg text-white/90">Gratuito para usuários</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
