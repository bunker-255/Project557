import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SERVICES, WHATSAPP_URL } from '../data';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';

export const ServiceDetail = () => {
  const { slug } = useParams();
  const service = SERVICES.find(s => s.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-black mb-4">השירות לא נמצא</h2>
          <Link to="/" className="text-brand-600 hover:underline font-bold">חזרה לדף הבית</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Hero Image */}
      <div className="h-[50vh] min-h-[400px] relative overflow-hidden">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src={service.imageUrl} 
          alt={service.title} 
          className="w-full h-full object-cover"
        />
        {/* Strong Light Overlay for Dark Text - Increased to 60% */}
        <div className="absolute inset-0 bg-white/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-50 via-white/20 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 w-full px-6 pb-24 pt-10 md:p-16 text-brand-900 container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link to="/" className="inline-flex items-center text-brand-800 mb-6 hover:text-brand-600 transition-colors font-bold tracking-wide">
              <ArrowRight size={20} className="ml-2 stroke-[3px]" /> חזרה לדף הבית
            </Link>
            <h1 className="text-5xl md:text-8xl font-black mb-6 text-brand-900 tracking-tight">{service.title}</h1>
            <p className="text-xl md:text-3xl text-brand-800 max-w-3xl font-bold leading-tight">{service.shortDescription}</p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 -mt-10 relative z-10">
        <div className="bg-white rounded-t-[3rem] p-8 md:p-12 shadow-2xl max-w-6xl mx-auto border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            <div className="lg:col-span-2 space-y-8">
              {service.fullDescription.map((para, idx) => (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-xl text-gray-700 leading-relaxed font-normal"
                >
                  {para}
                </motion.p>
              ))}
            </div>

            <div className="lg:col-span-1">
              <div className="bg-brand-50 p-10 rounded-3xl sticky top-28 border border-brand-100">
                <h3 className="text-2xl font-black text-brand-900 mb-6">מעוניינת בטיפול?</h3>
                <p className="text-gray-700 mb-8 font-medium">
                  הצעד הראשון לשינוי מתחיל כאן. השאירי פרטים ואחזור אליך בהקדם לתיאום.
                </p>
                <a 
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-brand-900 hover:bg-brand-800 text-white py-4 px-6 rounded-2xl font-bold transition-all shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <MessageCircle size={22} />
                  תיאום בווטסאפ
                </a>
                <div className="mt-8 pt-8 border-t border-brand-200">
                  <p className="text-base text-gray-500 text-center font-bold">
                    "ההנאה מהריקוד מובילה לריפוי"
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};