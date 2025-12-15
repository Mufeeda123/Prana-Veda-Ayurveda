import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  to, 
  onClick, 
  variant = 'primary', 
  className = '',
  external = false
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-md transition-all duration-300 shadow-sm";
  
  const variants = {
    primary: "border-transparent text-white bg-primary hover:bg-green-900",
    outline: "border-primary text-primary bg-transparent hover:bg-primary hover:text-white",
    white: "border-transparent text-primary bg-white hover:bg-stone-100",
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    if (external) {
       return (
        <a href={to} className={combinedClasses} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link to={to} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
};

export default Button;
