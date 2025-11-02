'use client';

import React from 'react';
import { Users, GraduationCap, Building2 } from 'lucide-react';
import { Section, SectionHeader, Card } from '../ui';

const ForWho: React.FC = () => {
  const audiences = [
    {
      icon: Users,
      title: 'Pais e Responsáveis',
      description: 'Encontre a escola ou creche ideal para seus filhos com informações completas e confiáveis.',
      features: [
        'Compare escolas próximas',
        'Veja avaliações de outros pais',
        'Agende visitas facilmente',
        'Filtre por metodologia e preço'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: GraduationCap,
      title: 'Estudantes',
      description: 'Busque faculdades, cursos técnicos e profissionalizantes na sua região.',
      features: [
        'Descubra cursos próximos',
        'Compare valores e turnos',
        'Veja infraestrutura',
        'Acesse informações de contato'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Building2,
      title: 'Instituições de Ensino',
      description: 'Divulgue sua escola gratuitamente e alcance famílias que buscam educação de qualidade.',
      features: [
        'Cadastro gratuito',
        'Painel administrativo',
        'Planos premium disponíveis',
        'Alcance geolocalizado'
      ],
      color: 'from-amber-500 to-orange-500'
    }
  ];

  return (
    <Section background="white" id="para-quem">
      <SectionHeader
        title="Feito para você"
        subtitle="Seja qual for sua necessidade, o EducaMaps tem a solução"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {audiences.map((audience, index) => (
          <Card key={index} hover padding="lg" className="flex flex-col h-full">
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${audience.color} text-white flex items-center justify-center mb-6`}>
              <audience.icon className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold mb-4 tracking-tight">{audience.title}</h3>
            <p className="text-base text-muted-foreground mb-6 leading-relaxed">{audience.description}</p>

            <ul className="space-y-3 mt-auto">
              {audience.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default ForWho;
