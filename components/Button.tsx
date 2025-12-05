import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  fullWidth?: boolean;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  children, 
  className = '', 
  icon,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-300 rounded px-6 py-3 tracking-wide focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-navy-900";
  
  const variants = {
    primary: "bg-electric text-navy-900 hover:bg-opacity-90 focus:ring-electric shadow-[0_0_10px_rgba(100,255,218,0.2)] hover:shadow-[0_0_20px_rgba(100,255,218,0.4)]",
    secondary: "bg-navy-700 text-electric hover:bg-navy-800 focus:ring-navy-700 border border-transparent",
    outline: "bg-transparent border border-electric text-electric hover:bg-electric/10 focus:ring-electric",
    ghost: "bg-transparent text-slate-lighter hover:text-electric hover:bg-navy-800"
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
};