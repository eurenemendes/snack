import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 rounded-full px-8 py-3 font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95";
  
  const variants = {
    primary: "bg-brand-yellow text-brand-brown hover:bg-yellow-400 shadow-lg",
    secondary: "bg-brand-brown text-white hover:bg-gray-800 shadow-lg",
    outline: "border-2 border-white text-white hover:bg-white hover:text-brand-red",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
      <ArrowRight className="w-5 h-5" />
    </button>
  );
};

export default Button;