import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonShape = 'default' | 'pill' | 'square';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  shape?: ButtonShape;
  fullWidth?: boolean;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  shape = 'default',
  fullWidth = false, 
  children, 
  className = '', 
  icon,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-300 tracking-wide focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white disabled:opacity-50 disabled:cursor-not-allowed";
  
  const shapes = {
    default: "rounded-sm px-6 py-3",
    pill: "rounded-full px-8 py-4",
    square: "rounded-none px-6 py-3"
  };

  const variants = {
    primary: "bg-yellow-400 text-slate-900 hover:bg-yellow-300 focus:ring-yellow-400 border border-transparent shadow-sm hover:shadow-md",
    secondary: "bg-slate-900 text-white hover:bg-slate-800 focus:ring-slate-900 border border-transparent shadow-sm",
    outline: "bg-transparent border-2 border-slate-900 text-slate-900 hover:bg-slate-50 focus:ring-slate-900",
    ghost: "bg-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100"
  };
  
  // Specific override for glow effect if requested via className, otherwise standard styles
  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${shapes[shape]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
};