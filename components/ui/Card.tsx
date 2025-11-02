import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = false,
  padding = 'md'
}) => {
  const paddingSizes = {
    sm: 'p-5',
    md: 'p-7',
    lg: 'p-9'
  };

  const hoverEffect = hover
    ? 'transition-all duration-300 hover:shadow-xl hover:-translate-y-1'
    : '';

  return (
    <div
      className={`bg-white rounded-2xl shadow-lg border border-gray-100 ${paddingSizes[padding]} ${hoverEffect} ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
