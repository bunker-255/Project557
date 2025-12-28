import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { SITE_CONTENT, IMAGES } from '../data';
import { CheckCircle2 } from 'lucide-react';

export const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pb-16 min-h-screen bg-white">
      {/* Header */}
      <section className="bg-brand-50 py-16 mb-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-brand-900 tracking-tight"
          >
            {SITE_CONTENT.about.title}
          </motion.h1>
          <div className="w-20 h-2 bg-brand-500 mx-auto mt-6 rounded-full"></div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Text Content */}
          <div className="lg:w-3/5 space-y-8">
            {SITE_CONTENT.about.paragraphs.map((para, idx) => (
              <motion.p 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-xl text-gray-700 leading-relaxed font-normal"
              >
                {para}
              </motion.p>
            ))}

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-12 p-10 bg-brand-50 rounded-3xl border border-brand-100"
            >
              <h3 className="text-3xl font-extrabold text-brand-800 mb-8">תחומי ההתמחות שלי:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {SITE_CONTENT.about.specialties.map((spec, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <CheckCircle2 className="text-brand-500 mt-1 flex-shrink-0 stroke-[3px]" size={22} />
                    <span className="text-gray-800 font-bold text-lg">{spec}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Image Side */}
          <div className="lg:w-2/5 w-full">
            <div className="sticky top-32">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="rounded-[2.5rem] overflow-hidden shadow-2xl"
              >
                <img 
                  src={IMAGES.contact} 
                  alt="Tal Sharabi" 
                  className="w-full h-auto object-cover"
                />
              </motion.div>
              <div className="mt-8 text-center">
                <p className="text-3xl font-black text-brand-800 mb-2 tracking-wide">טל שרעבי</p>
                <p className="text-gray-500 text-lg font-medium">אמא, מטפלת ומורת דרך</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};