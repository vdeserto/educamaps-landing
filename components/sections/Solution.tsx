'use client';

import React from 'react';
import { CheckCircle2, Map, Filter, Star } from 'lucide-react';
import { Section, SectionHeader, Card } from '../ui';

const Solution: React.FC = () => {
  const solutions = [
    {
      icon: Map,
      title: 'Mapa interativo',
      description: 'Visualize todas as instituições próximas à sua localização em um mapa intuitivo e fácil de usar.',
      color: 'text-blue-600 bg-blue-100'
    },
    {
      icon: Filter,
      title: 'Filtros inteligentes',
      description: 'Encontre exatamente o que procura filtrando por tipo, preço, metodologia, turno e muito mais.',
      color: 'text-purple-600 bg-purple-100'
    },
    {
      icon: Star,
      title: 'Avaliações reais',
      description: 'Veja notas e comentários de outros pais e responsáveis para tomar decisões mais informadas.',
      color: 'text-amber-600 bg-amber-100'
    }
  ];

  return (
    <Section background="white" id="solucao">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left side - Content */}
        <div className="order-2 lg:order-1">
          <SectionHeader
            title="A solução que você esperava"
            subtitle="EducaMaps centraliza todas as informações que você precisa em uma única plataforma"
            centered={false}
          />

          <div className="space-y-6">
            {solutions.map((solution, index) => (
              <div key={index} className="flex gap-4">
                <div className={`flex-shrink-0 w-12 h-12 rounded-lg ${solution.color} flex items-center justify-center`}>
                  <solution.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 tracking-tight">{solution.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">{solution.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-3">
            {[
              'Economize tempo com informações centralizadas',
              'Compare opções de forma clara e objetiva',
              'Tome decisões mais seguras e informadas'
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right side - Visual/Mockup */}
        <div className="relative order-1 lg:order-2">
          <Card className="bg-gradient-to-br from-primary to-primary-dark text-white">
            <div className="p-8">
              <div className="mb-6">
                <div className="text-base text-white/90 mb-2">Interface intuitiva</div>
                <div className="text-2xl font-bold mb-4">Tudo em um só lugar</div>
              </div>

              <div className="space-y-3">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-white/30 rounded-full" />
                    <div className="flex-1">
                      <div className="h-3 bg-white/30 rounded w-3/4 mb-1" />
                      <div className="h-2 bg-white/20 rounded w-1/2" />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="h-2 bg-white/30 rounded w-full mb-2" />
                  <div className="h-2 bg-white/30 rounded w-5/6 mb-2" />
                  <div className="h-2 bg-white/30 rounded w-4/6" />
                </div>

                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-8 bg-white/30 rounded" />
                    <div className="h-8 bg-white/30 rounded" />
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Floating badge */}
          <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full shadow-xl font-bold">
            100% Gratuito
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Solution;
