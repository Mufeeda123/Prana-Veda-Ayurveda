import React from 'react';
import { Shield, Users, HeartHandshake, Leaf, Droplet, Star } from 'lucide-react';
import Layout from '../components/Layout.jsx';
import Section from '../components/Section.jsx';

const WhyUs = () => {
  const points = [
    {
      icon: Shield,
      title: "Uncompromising Hygiene",
      desc: "We adhere to hospital-grade sterilization protocols. All linens are single-use or sterilized, and therapy rooms are sanitized after every session."
    },
    {
      icon: Users,
      title: "Experienced Team",
      desc: "Our therapists have an average of 8+ years of experience in Keraleeya Panchakarma and are trained to deliver therapies with compassion."
    },
    {
      icon: HeartHandshake,
      title: "Honest Counsel",
      desc: "We promise ethical practice. We will never recommend a treatment you don't need. Our consultations are transparent and focused on your wellbeing."
    },
    {
      icon: Leaf,
      title: "Authentic Medicine",
      desc: "Our pharmacy is stocked with authentic formulations. We strictly avoid adulterated or commercial-grade substitutes."
    },
    {
      icon: Droplet,
      title: "Customized Oils",
      desc: "Unlike many centers that use generic oils, we select specific medicated oils tailored to your Dosha imbalance for maximum efficacy."
    },
    {
      icon: Star,
      title: "Serene Ambience",
      desc: "Healing begins the moment you step in. Our center is designed to be a quiet sanctuary away from city noise, promoting mental relaxation."
    }
  ];

  return (
    <Layout>
      <div className="bg-secondary/20 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">Why Choose Prana Veda?</h1>
          <p className="text-xl text-stone-700 max-w-3xl mx-auto leading-relaxed">
            In a world full of wellness trends, we stand firmly on the roots of tradition, trust, and transparency.
          </p>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((point, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-stone-100 hover:border-secondary transition-colors duration-300">
              <div className="w-14 h-14 bg-cream rounded-full flex items-center justify-center text-primary mb-6">
                <point.icon size={28} />
              </div>
              <h3 className="font-serif text-xl font-bold text-primary mb-3">{point.title}</h3>
              <p className="text-stone-600 leading-relaxed">
                {point.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section bgColor="cream">
        <div className="flex flex-col md:flex-row items-center gap-12">
           <div className="w-full md:w-1/2">
             <img 
               src="https://res.cloudinary.com/dzkqpuhft/image/upload/v1765732336/property-557-profile-21426-20190603064659_h5379o.jpg" 
               alt="Doctor Consultation" 
               className="rounded-lg shadow-xl"
             />
           </div>
           <div className="w-full md:w-1/2 space-y-6">
             <h2 className="font-serif text-3xl font-bold text-primary">Our Process</h2>
             <ol className="space-y-6">
               <li className="flex gap-4">
                 <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">1</span>
                 <div>
                   <h4 className="font-bold text-lg text-stone-800">Nadi Pariksha (Pulse Diagnosis)</h4>
                   <p className="text-stone-600 text-sm mt-1">Detailed consultation to understand your body constitution and root cause of ailments.</p>
                 </div>
               </li>
               <li className="flex gap-4">
                 <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">2</span>
                 <div>
                   <h4 className="font-bold text-lg text-stone-800">Customized Plan</h4>
                   <p className="text-stone-600 text-sm mt-1">Dietary advice, lifestyle changes, and herbal medications prescribed specifically for you.</p>
                 </div>
               </li>
               <li className="flex gap-4">
                 <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">3</span>
                 <div>
                   <h4 className="font-bold text-lg text-stone-800">Therapeutic Care</h4>
                   <p className="text-stone-600 text-sm mt-1">Treatments administered by skilled therapists in a hygienic environment.</p>
                 </div>
               </li>
             </ol>
           </div>
        </div>
      </Section>
    </Layout>
  );
};

export default WhyUs;
