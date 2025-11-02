'use client';

import React from 'react';
import { Sparkles, TrendingUp, Shield, Zap } from 'lucide-react';
import { Section, SectionHeader, Card } from '../ui';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: Sparkles,
      title: 'Nicho Pouco Explorado',
      description: 'Enquanto existem apps para restaurantes, médicos e serviços, o setor educacional ainda carece de soluções modernas e integradas.',
      highlight: 'Oceano azul'
    },
    {
      icon: TrendingUp,
      title: 'UX Moderna',
      description: 'Interface intuitiva, mapa interativo em tempo real e dados atualizados. Uma experiência que os usuários esperam em 2025.',
      highlight: 'Design pensado'
    },
    {
      icon: Shield,
      title: 'Impacto Social',
      description: 'Democratizamos o acesso à informação educacional, especialmente para famílias que não têm tempo ou recursos para pesquisas extensas.',
      highlight: 'Propósito real'
    },
    {
      icon: Zap,
      title: 'Crescimento Sustentável',
      description: 'Modelo de monetização baseado em planos premium para instituições, publicidade local e intermediação de visitas.',
      highlight: 'Viável'
    }
  ];

  return (
    <Section background="muted" id="diferenciais">
      <SectionHeader
        title="Por que EducaMaps é diferente?"
        subtitle="Nossos diferenciais vão além da tecnologia - estamos criando impacto real"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {benefits.map((benefit, index) => (
          <Card key={index} hover padding="lg">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-primary-dark text-white flex items-center justify-center">
                <benefit.icon className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3">
                  <h3 className="font-bold text-xl tracking-tight">{benefit.title}</h3>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full w-fit">
                    {benefit.highlight}
                  </span>
                </div>
                <p className="text-base text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Additional info */}
      <div className="mt-12 text-center max-w-3xl mx-auto">
        <p className="text-lg text-muted-foreground">
          Com mais de <span className="font-bold text-primary">180 mil instituições de ensino no Brasil</span> e{' '}
          <span className="font-bold text-primary">90% delas com presença digital deficiente</span>, o EducaMaps
          preenche uma lacuna crítica no mercado educacional.
        </p>
      </div>
    </Section>
  );
};

export default Benefits;
