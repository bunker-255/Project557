import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { RETREATS } from '../data';
import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles, MapPin, Clock } from 'lucide-react';

export const Retreats = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pb-20 bg-brand-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-8 pt-16">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-100 text-brand-700 text-sm font-bold tracking-widest mb-6 uppercase border border-brand-200"
          >
            <Sparkles size={16} />
            <span>מרחבים של התחדשות</span>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-black text-brand-900 mb-6 tracking-tight">הריטריטים שלנו</h1>
          <p className="text-xl md:text-2xl text-gray-600 font-medium">
            הזמנה לעצירה. זמן איכות שמוקדש רק לך, לניקוי עומסים רגשיים ולהטענה מחודשת.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {RETREATS.map((retreat, idx) => (
            <motion.div
              key={retreat.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="group"
            >
              <Link to={`/retreat/${retreat.slug}`} className="block bg-white rounded-[3rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-brand-100 h-full flex flex-col">
                <div className="relative overflow-hidden bg-brand-50">
                  <img 
                    src={retreat.heroImage} 
                    alt={retreat.title} 
                    className="w-full h-auto block transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-900/80 via-transparent to-transparent opacity-40"></div>
                  <div className="absolute bottom-6 right-6 text-white drop-shadow-md">
                    <h2 className="text-4xl font-black tracking-tight">{retreat.title}</h2>
                  </div>
                </div>
                <div className="p-8 md:p-10 flex-grow flex flex-col justify-between">
                  <div>
                    <p className="text-brand-600 font-bold text-lg mb-4">{retreat.subtitle}</p>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">{retreat.tagline}</p>
                    
                    <div className="space-y-3 mb-10">
                      <div className="flex items-center gap-3 text-gray-500 font-medium">
                        <MapPin size={18} className="text-brand-400" />
                        <span>{retreat.details.location}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-500 font-medium">
                        <Clock size={18} className="text-brand-400" />
                        <span>{retreat.details.duration}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-brand-50">
                    <span className="text-2xl font-black text-brand-900">{retreat.details.price}</span>
                    <span className="inline-flex items-center gap-2 text-brand-800 font-extrabold group-hover:text-brand-600 transition-colors">
                      לפרטים והרשמה <ArrowLeft size={20} className="group-hover:-translate-x-2 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};