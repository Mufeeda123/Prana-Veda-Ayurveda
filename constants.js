// Set WhatsApp number and contact phone to the requested number.
// Use E.164 for WhatsApp (country code +91 for India).
export const WHATSAPP_NUMBER = "917034906550"; // 7034906550 with country code
export const CONTACT_PHONE = "+91 70349 06550";
export const CONTACT_EMAIL = "namaste@pranaveda.com";
export const ADDRESS = "123 Serenity Lane, Wellness Valley, 560001";

export const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Treatments', path: '/treatments' },
  { label: 'Doctors', path: '/doctors' },
  { label: 'Why Us', path: '/why-us' },
  { label: 'Contact', path: '/contact' },
];

export const TREATMENTS = [
  {
    id: 'abhyanga',
    title: 'Abhyanga (Full Body Massage)',
    description: 'A traditional synchronized full-body massage with warm medicated herbal oils chosen according to your body type (Dosha).',
    benefits: ['Improves circulation', 'Relieves fatigue', 'Enhances sleep quality'],
    duration: '45 - 60 mins',
    image: 'https://res.cloudinary.com/dzkqpuhft/image/upload/v1765732338/ayurvedic-massage-1000-05-medium_xjuqig.jpg',
  },
  {
    id: 'shirodhara',
    title: 'Shirodhara',
    description: 'A deeply relaxing therapy involving the continuous pouring of warm herbal oil over the forehead (third eye area).',
    benefits: ['Reduces anxiety & stress', 'Treats insomnia', 'Improves mental clarity'],
    duration: '45 mins',
    image: 'https://res.cloudinary.com/dzkqpuhft/image/upload/v1765732338/new-shirodhara1-v-300x300_hkqbk4.jpg',
  },
  {
    id: 'panchakarma',
    title: 'Panchakarma Detox',
    description: 'The ultimate Ayurvedic detoxification process comprising five therapeutic actions to cleanse the body of toxins.',
    benefits: ['Deep tissue detoxification', 'Restores metabolic fire', 'Rejuvenates tissues'],
    duration: '7 - 21 Days',
    image: 'https://res.cloudinary.com/dzkqpuhft/image/upload/v1765732337/shutterstock_697995811-1024x683_b1gx6r.jpg',
  },
  {
    id: 'nasya',
    title: 'Nasya',
    description: 'Administration of herbal oils or powders through the nasal passage to clear head and neck channels.',
    benefits: ['Relieves sinus congestion', 'Improves voice', 'Treats migraines'],
    duration: '30 mins',
    image: 'https://res.cloudinary.com/dzkqpuhft/image/upload/v1765732336/Nasya-Karma_ueqb8p.jpg',
  },
];

export const DOCTORS = [
  {
    id: 'dr-sharma',
    name: 'Dr. Ananya Sharma',
    title: 'Senior Ayurvedic Physician',
    qualifications: 'BAMS, MD (Ayurveda)',
    specialties: ['Panchakarma', 'Lifestyle Disorders', "Women's Health"],
    bio: 'With over 15 years of clinical experience, Dr. Sharma specializes in personalized detoxification protocols and preventive healthcare.',
    image: 'https://res.cloudinary.com/dzkqpuhft/image/upload/v1765732920/user-profile-icon-circle_1256048-12499_jsyxhy.avif',
  },
  {
    id: 'dr-nair',
    name: 'Dr. Rajesh Nair',
    title: 'Wellness Consultant',
    qualifications: 'BAMS, PhD (Yoga & Rehabilitation)',
    specialties: ['Musculoskeletal Disorders', 'Stress Management', 'Yoga Therapy'],
    bio: 'Dr. Nair integrates traditional Ayurvedic wisdom with therapeutic yoga to manage chronic pain and stress-related ailments.',
    image: 'https://res.cloudinary.com/dzkqpuhft/image/upload/v1765732920/user-profile-icon-circle_1256048-12499_jsyxhy.avif',
  },
];

export const TESTIMONIALS = [
  {
    id: 't1',
    name: 'Sarah Jenkins',
    location: 'London, UK',
    text: 'A truly transformative experience. The attention to detail and the authenticity of the treatments restored my energy levels completely.',
  },
  {
    id: 't2',
    name: 'Arjun Mehta',
    location: 'Bangalore',
    text: 'Prana Veda is an oasis of calm. Dr. Sharma’s diagnosis was spot on, and the staff is incredibly professional and caring.',
  },
];
