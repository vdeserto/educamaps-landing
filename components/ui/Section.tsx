import React from 'react';
import Container from './Container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerSize?: 'sm' | 'md' | 'lg' | 'full';
  background?: 'white' | 'muted' | 'primary' | 'gradient';
  id?: string;
}

const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  containerSize = 'lg',
  background = 'white',
  id
}) => {
  const backgrounds = {
    white: 'bg-white',
    muted: 'bg-muted',
    primary: 'bg-primary text-white',
    gradient: 'bg-gradient-to-br from-primary via-primary-dark to-sky-600 text-white'
  };

  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${backgrounds[background]} ${className}`}
    >
      <Container size={containerSize}>
        {children}
      </Container>
    </section>
  );
};

export default Section;
