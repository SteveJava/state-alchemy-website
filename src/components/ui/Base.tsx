import { motion } from "motion/react";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  className?: string;
  type?: 'button' | 'submit';
}

export const Button = ({ children, onClick, variant = 'primary', className = '', type = 'button' }: ButtonProps) => {
  const variants = {
    primary: 'bg-brand-primary text-brand-bg hover:bg-brand-primary/90 glow-primary',
    secondary: 'bg-brand-secondary text-brand-bg hover:bg-brand-secondary/90 glow-secondary',
    outline: 'border border-brand-primary text-brand-primary hover:bg-brand-primary/10',
    ghost: 'text-brand-text-muted hover:text-brand-text hover:bg-white/5',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      type={type}
      onClick={onClick}
      className={`px-6 py-2.5 rounded-full font-display font-medium transition-all duration-300 ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
};

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card = ({ children, className = '' }: CardProps) => (
  <div className={`glass rounded-2xl overflow-hidden transition-all duration-500 hover:border-brand-primary/30 ${className}`}>
    {children}
  </div>
);

interface SectionProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  id?: string;
}

export const Section = ({ children, title, subtitle, className = '', id }: SectionProps) => (
  <section id={id} className={`py-20 px-6 max-w-7xl mx-auto ${className}`}>
    {(title || subtitle) && (
      <div className="mb-12">
        {subtitle && <p className="text-brand-primary font-display text-sm uppercase tracking-widest mb-2">{subtitle}</p>}
        {title && <h2 className="text-4xl md:text-5xl font-bold">{title}</h2>}
      </div>
    )}
    {children}
  </section>
);
