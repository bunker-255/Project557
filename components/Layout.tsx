import React, { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Facebook, Mail, Phone, MessageCircle } from 'lucide-react';
import { IMAGES, SERVICES, SITE_CONTENT, WHATSAPP_URL } from '../data';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'ראשי', path: '/' },
    { name: 'אודות', path: '/about' },
    ...SERVICES.map(s => ({ name: s.title, path: `/service/${s.slug}` })),
    { name: 'גלריה', path: '/gallery' },
    { name: 'צור קשר', path: '/contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo - Always Dark because the background is light (Hero overlay or White scrolled bg) */}
        <NavLink to="/" className="flex items-center">
          <img 
            src={IMAGES.logoDark} 
            alt="Tal Sharabi Logo" 
            className={`transition-all duration-300 ${scrolled ? 'h-12' : 'h-16 md:h-20'}`} 
          />
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-base font-medium transition-colors duration-200 hover:text-brand-600 ${
                  isActive ? 'text-brand-900 font-bold border-b-2 border-brand-500' : 'text-brand-800'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4 bg-brand-900 hover:bg-brand-800 text-white px-6 py-2 rounded-full font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center gap-2"
          >
            <span>תיאום בווטסאפ</span>
            <MessageCircle size={18} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="xl:hidden p-2 text-brand-900 hover:text-brand-700 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-white border-t border-brand-100 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-lg transition-colors ${
                      isActive ? 'bg-brand-50 text-brand-900 font-bold' : 'text-brand-700 hover:bg-brand-50'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-3 rounded-lg bg-brand-900 text-white font-bold text-center mt-2"
              >
                תיאום בווטסאפ
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-900 text-brand-100 py-12 border-t border-brand-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold text-white mb-2">נקודת הפלא</h3>
            <p className="text-brand-200 text-sm leading-relaxed max-w-xs">
              אבחון מדויק בשיטה ייחודית "נומרוליסטי" ומכלול של התמחויות לשיפור איכות החיים ואיזון הגוף והנפש.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">טיפולים</h4>
            <ul className="space-y-2 text-sm">
              {SERVICES.map(s => (
                <li key={s.id}>
                  <NavLink to={`/service/${s.slug}`} className="hover:text-white hover:ps-1 transition-all inline-block">
                    {s.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">יצירת קשר</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-brand-400" />
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  {SITE_CONTENT.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-brand-400" />
                <span>{SITE_CONTENT.contact.email}</span>
              </div>
              <p className="text-brand-300 text-xs mt-4">
                * הטיפולים אינם מחליפים ייעוץ רפואי
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-brand-800 text-center text-xs text-brand-400">
          <p>© {new Date().getFullYear()} נקודת הפלא - כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
};

export const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-brand-50 text-gray-800">
      <Navbar />
      <main className="flex-grow pt-0">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};