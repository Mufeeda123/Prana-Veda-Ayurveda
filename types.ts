import { LucideIcon } from 'lucide-react';

export interface Treatment {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  duration: string; // e.g., "60-90 mins"
  image: string;
}

export interface Doctor {
  id: string;
  name: string;
  title: string;
  qualifications: string;
  specialties: string[];
  bio: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  location: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface FeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
}