import React from 'react';
import Layout from '../components/Layout.jsx';
import Section from '../components/Section.jsx';
import { DOCTORS } from '../constants';
import Button from '../components/Button.jsx';

const Doctors = () => {
  return (
    <Layout>
      <div className="bg-primary text-white py-20 text-center">
         <div className="container mx-auto px-4">
            <h1 className="font-serif text-4xl font-bold mb-4">Our Practitioners</h1>
            <p className="text-secondary text-lg">Guided by wisdom, driven by compassion.</p>
         </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 gap-12 max-w-5xl mx-auto">
          {DOCTORS.map((doctor) => (
            <div key={doctor.id} className="bg-white rounded-2xl shadow-md overflow-hidden border border-stone-100 flex flex-col md:flex-row">
              <div className="w-full md:w-1/3 h-80 md:h-auto relative">
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="w-full md:w-2/3 p-8 md:p-10 flex flex-col justify-center">
                <div className="mb-4">
                  <h2 className="font-serif text-3xl font-bold text-primary mb-1">{doctor.name}</h2>
                  <p className="text-secondary font-medium text-lg">{doctor.title}</p>
                  <p className="text-stone-400 text-sm mt-1">{doctor.qualifications}</p>
                </div>
                
                <p className="text-stone-600 leading-relaxed mb-6">
                  {doctor.bio}
                </p>

                <div className="mb-8">
                  <h4 className="text-sm font-bold text-primary uppercase tracking-wide mb-3">Specialties</h4>
                  <div className="flex flex-wrap gap-2">
                    {doctor.specialties.map((spec, i) => (
                      <span key={i} className="bg-stone-100 text-stone-700 px-3 py-1 rounded-full text-sm font-medium">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <Button to="/contact" variant="primary">Book with {doctor.name.split(' ')[1]}</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </Layout>
  );
};

export default Doctors;
