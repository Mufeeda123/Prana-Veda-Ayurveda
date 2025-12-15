import React from 'react';

const Section = ({ children, className = '', id, bgColor = 'white' }) => {
  const bgClasses = {
    white: 'bg-white',
    cream: 'bg-cream',
    dark: 'bg-primary text-white',
  };

  return (
    <section id={id} className={`py-16 md:py-24 ${bgClasses[bgColor]} ${className}`}>
      <div className="container mx-auto px-4 md:px-6">
        {children}
      </div>
    </section>
  );
};

export default Section;
