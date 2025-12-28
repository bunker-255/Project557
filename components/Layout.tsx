import React, { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Facebook, Mail, Phone, MessageCircle, Youtube, ArrowUp, Sparkles } from 'lucide-react';
import { IMAGES, SERVICES, SITE_CONTENT, WHATSAPP_URL, SPOTIFY_URL, YOUTUBE_URL } from '../data';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: -45 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0, rotate: 45 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 left-8 z-[100] cursor-pointer group"
        >
          <svg className="w-16 h-16 transform -rotate-90">
            <circle
              cx="32"
              cy="32"
              r="30"
              stroke="currentColor"
              strokeWidth="2"
              fill="transparent"
              className="text-brand-200 opacity-20"
            />
            <motion.circle
              cx="32"
              cy="32"
              r="30"
              stroke="currentColor"
              strokeWidth="2"
              fill="transparent"
              strokeDasharray="188.5"
              style={{ pathLength: scrollYProgress }}
              className="text-brand-500"
            />
          </svg>

          <motion.div
            animate={{
              borderRadius: [
                "40% 60% 70% 30% / 40% 50% 60% 70%",
                "60% 40% 30% 70% / 50% 60% 70% 40%",
                "40% 60% 70% 30% / 40% 50% 60% 70%"
              ]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 m-2 bg-gradient-to-br from-brand-600 to-brand-800 text-white flex items-center justify-center shadow-lg group-hover:shadow-brand-500/50 transition-shadow"
          >
            <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform duration-300" />
            <motion.div
              animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-brand-400 rounded-full blur-md -z-10"
            />
          </motion.div>
          <div className="absolute -top-2 -right-2 text-brand-400 animate-pulse">
            <Sparkles size={16} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

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
    { name: 'טיפולים', path: '/services' },
    { name: 'ריטריטים', path: '/retreats' },
    { name: 'אודות', path: '/about' },
    { name: 'גלריה', path: '/gallery' },
    { name: 'צור קשר', path: '/contact' }
  ];

  return (
    <nav 
      className={`sticky top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled 
          ? 'bg-white shadow-md py-2 border-brand-100' 
          : 'bg-brand-50 py-4 border-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <NavLink to="/" className="flex items-center">
          <img 
            src={IMAGES.logoDark} 
            alt="Tal Sharabi Logo" 
            className={`transition-all duration-300 ${scrolled ? 'h-12' : 'h-16 md:h-20'}`} 
          />
        </NavLink>

        <div className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-base font-bold transition-all duration-200 hover:text-brand-600 px-3 py-1 rounded-full ${
                  isActive 
                    ? 'text-brand-900 bg-white shadow-sm ring-1 ring-brand-100' 
                    : 'text-brand-800 hover:bg-white/50'
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
            className="mr-4 bg-brand-900 hover:bg-brand-800 text-white px-6 py-2 rounded-full font-bold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center gap-2"
          >
            <span>תיאום בווטסאפ</span>
            <MessageCircle size={18} />
          </a>
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="xl:hidden p-2 text-brand-900 hover:text-brand-700 transition-colors bg-white/40 rounded-full backdrop-blur-sm"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

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
          
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold text-white mb-2">נקודת הפלא</h3>
            <p className="text-brand-200 text-sm leading-relaxed max-w-xs">
              אבחון מדויק בשיטה ייחודית "נומרוליסטי" ומכלול של התמחויות לשיפור איכות החיים ואיזון הגוף והנפש.
            </p>
            <div className="flex gap-4 pt-4">
              <a href={SPOTIFY_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><MessageCircle size={20} /></a>
              <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Youtube size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">טיפולים וריטריטים</h4>
            <ul className="space-y-2 text-sm">
              <li><NavLink to="/services" className="hover:text-white hover:ps-1 transition-all">כל הטיפולים</NavLink></li>
              <li><NavLink to="/retreats" className="hover:text-white hover:ps-1 transition-all">ריטריטים קרובים</NavLink></li>
              {SERVICES.slice(0, 4).map(s => (
                <li key={s.id}>
                  <NavLink to={`/service/${s.slug}`} className="hover:text-white hover:ps-1 transition-all inline-block">
                    {s.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

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
      <main className="flex-grow">
        <Outlet />
      </main>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
};