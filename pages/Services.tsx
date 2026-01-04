import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../data';
import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles } from 'lucide-react';

export const Services = () => {
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
            <span>הוליסטיקה • ריפוי • איזון</span>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-black text-brand-900 mb-6 tracking-tight">הטיפולים שלנו</h1>
          <p className="text-xl md:text-2xl text-gray-600 font-medium max-w-2xl mx-auto">
            גישה ייחודית המשלבת גוף, נפש ותודעה. גלי את הכלים שיעזרו לך למצוא את השקט הפנימי והאיזון המחודש.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group h-full"
            >
              <Link to={`/service/${service.slug}`} className="block h-full bg-white rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col border border-brand-100">
                <div className="relative overflow-hidden bg-brand-50">
                  <img 
                    src={service.imageUrl} 
                    alt={service.title} 
                    className="w-full h-auto block transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40"></div>
                  <div className="absolute bottom-6 right-6 text-white drop-shadow-md">
                    <h3 className="text-3xl font-black leading-none">{service.title}</h3>
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col justify-between">
                  <p className="text-gray-600 mb-8 leading-relaxed font-medium text-lg">
                    {service.shortDescription}
                  </p>
                  <div className="flex items-center text-brand-800 font-extrabold tracking-wide text-base group-hover:text-brand-600 transition-colors">
                    <span className="border-b-2 border-brand-200 pb-1 group-hover:border-brand-600 transition-all">לכל הפרטים</span>
                    <ArrowLeft size={20} className="mr-2 transform group-hover:-translate-x-1 transition-transform stroke-[3px]" />
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