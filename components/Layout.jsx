import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Leaf } from 'lucide-react';
import { NAV_ITEMS, CONTACT_PHONE, CONTACT_EMAIL } from '../constants';
import FloatingWhatsApp from './FloatingWhatsApp.jsx';
import Button from './Button.jsx';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen font-sans text-stone-800">
      {/* Top Bar - Contact Info (Desktop only) */}
      <div className="hidden md:flex bg-primary text-stone-300 py-2 px-6 justify-between text-sm">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1"><Phone size={14} /> {CONTACT_PHONE}</span>
          <span className="flex items-center gap-1"><Mail size={14} /> {CONTACT_EMAIL}</span>
        </div>
        <div>
          <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
        </div>
      </div>

      {/* Main Navigation */}
      <header 
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' : 'bg-cream py-4'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="https://res.cloudinary.com/dzkqpuhft/image/upload/v1765736930/Screenshot_2025-12-14_235825_xmbbfx.png"
              alt="Prana Veda logo"
              className="w-36 h-auto object-contain"
              loading="lazy"
            />
            <div className="hidden sm:block">
              <h1 className="font-serif text-2xl font-bold text-primary leading-none">Prana Veda</h1>
              <p className="text-xs text-stone-500 uppercase tracking-widest">Ayurveda</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium uppercase tracking-wide transition-colors hover:text-primary ${
                  location.pathname === item.path ? 'text-primary border-b-2 border-primary' : 'text-stone-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button to="/contact" variant="primary" className="py-2 px-4 text-sm">
              Book Now
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-stone-100 flex flex-col p-4 animate-in fade-in slide-in-from-top-5">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`py-3 px-4 text-lg font-medium border-b border-stone-100 last:border-0 ${
                   location.pathname === item.path ? 'text-primary bg-stone-50' : 'text-stone-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4">
              <Button to="/contact" variant="primary" className="w-full justify-center">
                Book Consultation
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-stone-300 pt-16 pb-8">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Leaf className="text-secondary" size={24} />
              <h3 className="font-serif text-2xl font-bold text-white">Prana Veda</h3>
            </div>
            <p className="text-stone-400 leading-relaxed">
              Restoring the natural balance of your body, mind, and soul through authentic Ayurvedic traditions and personalized care.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg text-white font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_ITEMS.map(item => (
                <li key={item.path}>
                  <Link to={item.path} className="hover:text-secondary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
             <h4 className="font-serif text-lg text-white font-semibold">Contact Us</h4>
             <ul className="space-y-3">
               <li className="flex items-center gap-3">
                 <Phone className="text-secondary shrink-0" size={18} />
                 <a href={`tel:${CONTACT_PHONE}`} className="hover:text-white">{CONTACT_PHONE}</a>
               </li>
               <li className="flex items-center gap-3">
                 <Mail className="text-secondary shrink-0" size={18} />
                 <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white">{CONTACT_EMAIL}</a>
               </li>
             </ul>
          </div>
        </div>

        <div className="border-t border-stone-700 mt-12 pt-8 text-center text-sm text-stone-500">
          <p>&copy; {new Date().getFullYear()} Prana Veda Ayurveda. All rights reserved.</p>
        </div>
      </footer>

      <FloatingWhatsApp />
    </div>
  );
};

export default Layout;
