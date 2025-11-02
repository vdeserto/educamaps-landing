'use client';

import React from 'react';
import { AlertCircle, Search, Phone, BarChart3 } from 'lucide-react';
import { Section, SectionHeader, Card } from '../ui';

const Problem: React.FC = () => {
  const problems = [
    {
      icon: Search,
      title: 'Pesquisas manuais',
      description: 'Buscar no Google Maps sem dados confiáveis de mensalidade, metodologia ou infraestrutura.'
    },
    {
      icon: Phone,
      title: 'Contato individual',
      description: 'Ligar para cada escola ou mandar WhatsApp um por um, perdendo tempo precioso.'
    },
    {
      icon: BarChart3,
      title: 'Falta de comparação',
      description: 'Impossibilidade de comparar preços, métodos pedagógicos, distância e turnos de forma clara.'
    }
  ];

  return (
    <Section background="muted" id="problema">
      <SectionHeader
        title="O desafio de encontrar a escola ideal"
        subtitle="Atualmente, pais e responsáveis enfrentam diversos obstáculos ao buscar instituições de ensino"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {problems.map((problem, index) => (
          <Card key={index} hover padding="lg" className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600 mb-6">
              <problem.icon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4 tracking-tight">{problem.title}</h3>
            <p className="text-base text-muted-foreground leading-relaxed">{problem.description}</p>
          </Card>
        ))}
      </div>

      <div className="mt-12 p-6 bg-white rounded-xl border-l-4 border-red-500 shadow-md">
        <div className="flex items-start gap-4">
          <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-bold text-lg mb-2">O resultado?</h4>
            <p className="text-muted-foreground">
              Decisões apressadas, falta de informação e escolhas que nem sempre atendem às
              necessidades da família. Um processo que deveria ser simples se torna desgastante.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Problem;
