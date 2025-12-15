import React from 'react';
import { Clock, CheckCircle } from 'lucide-react';
import Layout from '../components/Layout.jsx';
import Section from '../components/Section.jsx';
import Button from '../components/Button.jsx';
import { TREATMENTS } from '../constants';

const Services = () => {
  return (
    <Layout>
      <div className="bg-stone-100 py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">Treatments & Therapies</h1>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Comprehensive Ayurvedic care designed to detoxify, rejuvenate, and restore your body's innate intelligence.
          </p>
        </div>
      </div>

      <Section>
        <div className="space-y-16">
          {TREATMENTS.map((treatment, index) => (
            <div key={treatment.id} className={`flex flex-col md:flex-row gap-8 md:gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Image Side */}
              <div className="w-full md:w-1/2">
                <div className="relative rounded-xl overflow-hidden shadow-lg group">
                   <img 
                    src={treatment.image} 
                    alt={treatment.title} 
                    className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105" 
                   />
                   <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-semibold text-primary flex items-center gap-2">
                     <Clock size={14} /> {treatment.duration}
                   </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full md:w-1/2 space-y-4">
                <h2 className="font-serif text-3xl font-bold text-primary">{treatment.title}</h2>
                <div className="w-12 h-1 bg-secondary rounded-full"></div>
                <p className="text-stone-600 text-lg leading-relaxed">
                  {treatment.description}
                </p>
                
                <div className="bg-cream p-5 rounded-lg mt-4">
                  <h4 className="font-semibold text-primary mb-3 text-sm uppercase tracking-wide">Key Benefits:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {treatment.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2 text-stone-700 text-sm">
                        <CheckCircle size={16} className="text-secondary shrink-0" /> {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4">
                  <Button to="/contact">Book Appointment</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section bgColor="cream">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-primary mb-4">Not sure which treatment is right for you?</h2>
          <p className="text-stone-600 mb-8">
            Ayurveda is highly personalized. We recommend a consultation with our doctors to determine the best course of treatment for your unique constitution.
          </p>
          <Button to="/contact" variant="outline">Schedule Consultation</Button>
        </div>
      </Section>
    </Layout>
  );
};

export default Services;
