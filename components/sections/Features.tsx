'use client';

import React from 'react';
import {
  MapPin,
  List,
  FileText,
  Star,
  Heart,
  Bell,
  Calendar,
  Users
} from 'lucide-react';
import { Section, SectionHeader, Card } from '../ui';

const Features: React.FC = () => {
  const features = [
    {
      icon: MapPin,
      title: 'Mapa Interativo',
      description: 'Veja todas as instituições próximas baseadas na sua localização via GPS.'
    },
    {
      icon: List,
      title: 'Lista Organizada',
      description: 'Ordene por distância, avaliação ou faixa de preço para encontrar o melhor match.'
    },
    {
      icon: FileText,
      title: 'Briefing Completo',
      description: 'Acesse informações detalhadas: metodologia, valores, turnos e proposta pedagógica.'
    },
    {
      icon: Star,
      title: 'Avaliações',
      description: 'Veja notas e comentários de outros pais para tomar decisões mais seguras.'
    },
    {
      icon: Heart,
      title: 'Favoritos',
      description: 'Salve suas instituições preferidas para comparar e revisar depois.'
    },
    {
      icon: Bell,
      title: 'Notificações',
      description: 'Receba alertas sobre novas escolas, eventos e promoções na sua região.'
    },
    {
      icon: Calendar,
      title: 'Agendamento',
      description: 'Agende visitas diretamente pelo app sem precisar ligar ou mandar mensagem.'
    },
    {
      icon: Users,
      title: 'Para Instituições',
      description: 'Cadastre sua escola gratuitamente e alcance mais famílias interessadas.'
    }
  ];

  return (
    <Section background="white" id="funcionalidades">
      <SectionHeader
        title="Tudo que você precisa em um só lugar"
        subtitle="Funcionalidades pensadas para facilitar sua busca pela instituição ideal"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {features.map((feature, index) => (
          <Card key={index} hover padding="md" className="text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-5">
              <feature.icon className="w-7 h-7" />
            </div>
            <h3 className="font-bold text-lg mb-3 tracking-tight">{feature.title}</h3>
            <p className="text-base text-muted-foreground leading-relaxed">{feature.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Features;
