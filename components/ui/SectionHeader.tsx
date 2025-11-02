import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  light?: boolean; // Para fundos escuros/coloridos
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  centered = true,
  className = '',
  light = false
}) => {
  const alignment = centered ? 'text-center' : 'text-left';
  const subtitleColor = light ? 'text-white/95' : 'text-slate-700';

  return (
    <div className={`mb-12 md:mb-16 ${alignment} ${className}`}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-[1.2] tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-xl md:text-2xl ${subtitleColor} leading-relaxed font-light ${centered ? 'max-w-3xl mx-auto' : 'max-w-2xl'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
