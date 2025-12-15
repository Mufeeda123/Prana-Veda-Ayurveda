import React from 'react';
import Layout from '../components/Layout.jsx';
import Section from '../components/Section.jsx';

const About = () => {
  return (
    <Layout>
      {/* Header */}
      <div className="bg-primary text-white py-16 md:py-24 relative overflow-hidden">
         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
         <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">About Our Clinic</h1>
            <p className="text-lg text-secondary max-w-2xl mx-auto">Rooted in tradition, committed to your well-being.</p>
         </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
             <img 
              src="https://res.cloudinary.com/dzkqpuhft/image/upload/v1765734375/01_w3feie.jpg" 
              alt="Ayurvedic Herbs and Oils" 
              className="rounded-lg shadow-xl"
             />
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="font-serif text-3xl font-bold text-primary">Our Philosophy</h2>
            <p className="text-stone-600 leading-relaxed">
              Established in 2010, Prana Veda was founded with a singular vision: to make the authentic, healing science of Ayurveda accessible to the modern world without compromising its traditional integrity.
            </p>
            <p className="text-stone-600 leading-relaxed">
              We believe that health is a state of balance. In today's fast-paced world, stress, poor diet, and environmental toxins disrupt our natural rhythm. Our approach focuses on <strong>Nidana Parivarjana</strong> (removing the root cause) rather than just treating symptoms.
            </p>
            <div className="bg-cream p-6 border-l-4 border-primary rounded-r-md">
              <p className="italic text-stone-700 font-serif text-lg">
                "Swasthasya Swasthya Rakshanam" — To protect the health of the healthy and alleviate the suffering of the patient.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section bgColor="cream">
        <div className="max-w-4xl mx-auto text-center space-y-8">
           <h2 className="font-serif text-3xl font-bold text-primary">The Prana Veda Difference</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="p-6 bg-white rounded-lg shadow-sm">
               <h3 className="font-bold text-lg mb-3 text-primary">Pure Ingredients</h3>
               <p className="text-stone-600 text-sm">We source our herbs directly from organic farms in Kerala to ensure potency and purity.</p>
             </div>
             <div className="p-6 bg-white rounded-lg shadow-sm">
               <h3 className="font-bold text-lg mb-3 text-primary">Expert Therapists</h3>
               <p className="text-stone-600 text-sm">Our therapists undergo rigorous training in traditional Keraleeya Panchakarma techniques.</p>
             </div>
             <div className="p-6 bg-white rounded-lg shadow-sm">
               <h3 className="font-bold text-lg mb-3 text-primary">Time-Honored Recipes</h3>
               <p className="text-stone-600 text-sm">Medicinal oils and decoctions are prepared strictly according to classical texts.</p>
             </div>
           </div>
        </div>
      </Section>
    </Layout>
  );
};

export default About;
