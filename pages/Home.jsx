import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Heart, ShieldCheck } from 'lucide-react';
import Layout from '../components/Layout.jsx';
import Section from '../components/Section.jsx';
import Button from '../components/Button.jsx';
import { TREATMENTS, TESTIMONIALS } from '../constants';

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://res.cloudinary.com/dzkqpuhft/image/upload/v1765732338/slider-01_s5pyxy.jpg" 
            alt="Peaceful Ayurvedic Center" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center md:text-left">
          <div className="max-w-2xl text-white">
            <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-sm tracking-widest uppercase mb-4 backdrop-blur-sm bg-white/10">
              Holistic Wellness Center
            </span>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Restore Balance. <br/> Reclaim Health.
            </h1>
            <p className="text-lg md:text-xl text-stone-100 mb-8 leading-relaxed font-light">
              Experience the ancient healing wisdom of Ayurveda, tailored to your unique body type in a serene and hygienic environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button to="/contact" variant="primary" className="bg-secondary text-primary hover:bg-white hover:text-primary border-none">
                Book Consultation
              </Button>
              <Button to="/treatments" variant="white" className="bg-transparent text-white border-white hover:bg-white hover:text-primary">
                Explore Treatments
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <Section bgColor="cream">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="font-serif text-3xl md:text-4xl text-primary font-bold">Welcome to Prana Veda</h2>
          <div className="w-16 h-1 bg-secondary mx-auto rounded-full"></div>
          <p className="text-lg text-stone-600 leading-relaxed">
            At Prana Veda, we believe true health is more than just the absence of disease—it is the vibrant balance of body, mind, and spirit. Our clinic offers authentic Kerala Ayurveda treatments administered by experienced therapists under the guidance of qualified doctors.
          </p>
        </div>
      </Section>

      {/* Key Values */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Heart, title: 'Personalized Care', desc: 'Customized treatment plans based on your Prakriti (Body Constitution).' },
            { icon: ShieldCheck, title: 'Authentic Medicine', desc: 'We use only certified, high-quality herbal oils and medicines.' },
            { icon: Sparkles, title: 'Hygiene Focused', desc: 'Modern sanitation standards meet traditional healing practices.' },
          ].map((feature, idx) => (
            <div key={idx} className="bg-stone-50 p-8 rounded-xl border border-stone-100 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                <feature.icon size={32} />
              </div>
              <h3 className="font-serif text-xl font-semibold text-primary mb-3">{feature.title}</h3>
              <p className="text-stone-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Featured Services Preview */}
      <Section bgColor="cream">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-primary font-bold mb-4">Our Therapies</h2>
            <p className="text-stone-600 max-w-xl">Curated treatments designed to detoxify, rejuvenate, and heal.</p>
          </div>
          <Link to="/treatments" className="hidden md:flex items-center gap-2 text-primary font-semibold hover:text-green-900">
            View All <ArrowRight size={20} />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TREATMENTS.slice(0, 4).map((treatment) => (
            <div key={treatment.id} className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={treatment.image} 
                  alt={treatment.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-lg font-bold text-primary mb-2 line-clamp-1">{treatment.title}</h3>
                <p className="text-stone-600 text-sm mb-4 line-clamp-2">{treatment.description}</p>
                <Link to="/treatments" className="text-secondary font-medium text-sm hover:text-primary transition-colors">
                  Learn More &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Button to="/treatments" variant="outline">View All Therapies</Button>
        </div>
      </Section>

      {/* Testimonial Snippet */}
      <Section bgColor="dark" className="relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-5">
          <Sparkles size={200} />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-8 text-secondary">
             <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="mx-auto">
               <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
             </svg>
          </div>
          <blockquote className="font-serif text-2xl md:text-3xl text-stone-100 italic mb-8">
            "{TESTIMONIALS[0].text}"
          </blockquote>
          <cite className="not-italic font-sans text-secondary font-semibold tracking-wide">
            — {TESTIMONIALS[0].name}, {TESTIMONIALS[0].location}
          </cite>
        </div>
      </Section>
    </Layout>
  );
};

export default Home;
