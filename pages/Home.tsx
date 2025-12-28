import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE_CONTENT, IMAGES, SERVICES, TESTIMONIALS, WHATSAPP_URL, RETREATS, LANDING_CONTENT } from '../data';
import { ArrowLeft, Quote, Heart, X, ChevronRight, ChevronLeft, MessageCircle, Sparkles, CheckCircle2, Activity, BatteryCharging, Compass, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export const Home = () => {
  const [lightboxState, setLightboxState] = useState<{ type: 'gallery' | 'atmosphere', index: number } | null>(null);
  const openLightbox = (type: 'gallery' | 'atmosphere', index: number) => setLightboxState({ type, index });
  const closeLightbox = () => setLightboxState(null);

  const featuredRetreat = RETREATS[0];

  const getCurrentImageList = () => {
    if (!lightboxState) return [];
    return lightboxState.type === 'gallery' ? IMAGES.gallery : IMAGES.atmosphere;
  };

  const nextImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxState) {
      const list = getCurrentImageList();
      setLightboxState((prev) => prev ? ({ ...prev, index: (prev.index + 1) % list.length }) : null);
    }
  }, [lightboxState]);

  const prevImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxState) {
      const list = getCurrentImageList();
      setLightboxState((prev) => prev ? ({ ...prev, index: (prev.index - 1 + list.length) % list.length }) : null);
    }
  }, [lightboxState]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxState) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage(); 
      if (e.key === 'ArrowLeft') prevImage(); 
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxState, nextImage, prevImage]);

  const whoIsItForIcons = [
     <Activity size={32} />,
     <BatteryCharging size={32} />,
     <Compass size={32} />,
     <Sparkles size={32} />
  ];

  return (
    <div className="overflow-x-hidden font-sans bg-white">
      {/* 1. HERO - Enhanced Visuals */}
      <section className="relative h-screen min-h-[750px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div 
            initial={{ scale: 1.2 }} 
            animate={{ scale: 1 }} 
            transition={{ duration: 20, ease: "linear" }} 
            className="w-full h-full"
          >
            <img src={IMAGES.hero} alt="Tal Sharabi" className="w-full h-full object-cover object-top" />
          </motion.div>
          {/* Intelligent Overlays for readability */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-brand-50/80 via-transparent to-white"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center text-brand-900 pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            <img src={IMAGES.logoDark} alt="Logo" className="h-32 md:h-48 mx-auto mb-12 drop-shadow-2xl" />
            <motion.h2 
              initial={{ opacity: 0, letterSpacing: "0.5em" }}
              animate={{ opacity: 1, letterSpacing: "0.25em" }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="text-xl md:text-3xl font-bold mb-8 text-brand-800 uppercase"
            >
              {SITE_CONTENT.hero.subtitle}
            </motion.h2>
            <h1 className="text-7xl md:text-9xl font-black mb-12 text-brand-900 leading-none tracking-tighter">
              {SITE_CONTENT.hero.title}
            </h1>
            <p className="text-2xl md:text-4xl font-medium text-brand-700 italic max-w-3xl mx-auto mb-16 font-serif">
              "{SITE_CONTENT.hero.quote}"
            </p>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/retreats" className="inline-flex items-center gap-4 bg-brand-900 text-white px-16 py-6 rounded-full text-xl font-black transition-all shadow-2xl hover:shadow-brand-900/40 tracking-widest uppercase">
                <span>גלי את הריטריטים</span>
                <Sparkles size={24} />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
        >
          <span className="text-xs font-black uppercase tracking-widest text-brand-900">גללי מטה</span>
          <div className="w-px h-12 bg-brand-900"></div>
        </motion.div>
      </section>

      {/* 2. INTRO - Premium Layout */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-20">
            <motion.div 
              className="md:w-1/2 relative" 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            >
              <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] aspect-[4/5]">
                <img src={IMAGES.about} alt="Tal" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-100 rounded-full -z-10 blur-3xl opacity-60"></div>
              <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-brand-200 rounded-full -z-10 blur-3xl opacity-40"></div>
            </motion.div>
            
            <motion.div 
              className="md:w-1/2 text-center md:text-right" 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            >
              <motion.h2 variants={fadeIn} className="text-6xl md:text-8xl font-black text-brand-900 mb-12 leading-tight tracking-tighter">
                לחיות חיים של <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-l from-brand-400 to-brand-800">איזון ומשמעות</span>
              </motion.h2>
              <motion.div variants={fadeIn} className="space-y-8 text-xl md:text-2xl text-gray-700 font-medium leading-relaxed">
                <p>נעים להכיר, אני טל. בעשור האחרון אני מלווה אנשים למצוא את האור הפנימי שלהם, דרך שילוב ייחודי של נומרוליסטי, טיפולי מגע ועבודת תודעה.</p>
                <p>המסע שלנו יחד הוא הזמנה להקשיב לגוף, לשחרר חסימות ישנות, ולגלות מחדש את הכוחות הטמונים בך לריפוי וצמיחה.</p>
              </motion.div>
              <motion.div variants={fadeIn} className="mt-16">
                <Link to="/about" className="group text-brand-900 font-black text-2xl inline-flex items-center gap-4 border-b-4 border-brand-100 hover:border-brand-900 pb-2 transition-all">
                  קראי עוד עלי 
                  <ArrowLeft size={32} className="group-hover:-translate-x-3 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. PAIN POINTS - Aesthetic Grid */}
      <section className="py-32 bg-brand-50 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-4xl mx-auto mb-24">
            <h2 className="text-5xl md:text-8xl font-black text-brand-900 mb-8 tracking-tighter">{LANDING_CONTENT.whoIsItFor.title}</h2>
            <p className="text-2xl md:text-3xl text-gray-600 font-bold">{LANDING_CONTENT.whoIsItFor.subtitle}</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {LANDING_CONTENT.whoIsItFor.points.map((point, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 50 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-12 rounded-[3.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 group border border-brand-100 flex flex-col items-center md:items-start"
              >
                <div className="w-20 h-20 rounded-3xl bg-brand-50 flex items-center justify-center text-brand-600 mb-10 group-hover:bg-brand-900 group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
                  {whoIsItForIcons[idx % whoIsItForIcons.length]}
                </div>
                <h3 className="text-3xl font-black text-brand-900 mb-6">{point.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg font-medium">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FEATURED RETREAT - Cinematic Section */}
      <section className="py-40 bg-brand-900 text-white relative overflow-hidden">
         <div className="absolute inset-0 opacity-40">
            <img src={featuredRetreat.heroImage} className="w-full h-full object-cover grayscale" alt="" />
         </div>
         <div className="absolute inset-0 bg-gradient-to-r from-brand-900 via-brand-900/80 to-transparent"></div>
         
         <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="max-w-4xl">
               <motion.div 
                 initial={{ opacity: 0, x: 50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-brand-500 text-white text-sm font-black tracking-widest mb-10 uppercase shadow-2xl"
               >
                  <Sparkles size={20} />
                  <span>אירוע קרוב ומיוחד</span>
               </motion.div>
               <h2 className="text-6xl md:text-9xl font-black mb-10 tracking-tighter leading-none text-brand-50">
                {featuredRetreat.title}
               </h2>
               <p className="text-3xl md:text-5xl text-brand-200 font-medium mb-16 font-serif">
                {featuredRetreat.subtitle}
               </p>
               <Link to={`/retreat/${featuredRetreat.slug}`} className="inline-flex items-center gap-6 bg-white text-brand-900 px-16 py-7 rounded-full text-2xl font-black hover:bg-brand-50 transition-all shadow-2xl hover:scale-105 transform">
                 גלי את המסע המלא <ArrowLeft size={32} />
               </Link>
            </div>
         </div>
      </section>

      {/* 5. PROCESS - Visual Timeline */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-4xl mx-auto mb-24">
             <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-brand-50 text-brand-700 text-sm font-black tracking-widest mb-8 uppercase border border-brand-100">
              <CheckCircle2 size={20} />
              <span>הדרך לריפוי</span>
             </div>
            <h2 className="text-6xl md:text-8xl font-black text-brand-900 mb-8 tracking-tighter">{LANDING_CONTENT.process.title}</h2>
            <p className="text-2xl text-gray-500 font-bold max-w-2xl mx-auto">{LANDING_CONTENT.process.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-24 left-0 w-full h-px bg-brand-100 -z-10"></div>
            
            {LANDING_CONTENT.process.steps.map((step, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, scale: 0.9 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                viewport={{ once: true }} 
                transition={{ delay: idx * 0.2 }}
                className="relative bg-white text-center md:text-right group"
              >
                <div className="flex flex-col items-center md:items-start">
                   <div className="w-32 h-32 rounded-full bg-white border-[12px] border-brand-50 shadow-2xl flex items-center justify-center text-4xl font-black text-brand-900 mb-10 group-hover:bg-brand-900 group-hover:text-white transition-all duration-700">
                    {step.number}
                   </div>
                   <h3 className="text-4xl font-black text-brand-900 mb-6">{step.title}</h3>
                   <p className="text-gray-600 leading-relaxed text-xl font-medium">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SERVICES - Grid Display */}
      <section className="py-32 bg-brand-50 relative">
        <div className="container mx-auto px-4 md:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="text-6xl md:text-8xl font-black text-brand-900 mb-8 tracking-tighter">הטיפולים שלנו</h2>
            <div className="w-32 h-3 bg-brand-500 mx-auto rounded-full mb-10"></div>
            <p className="text-brand-700 text-2xl font-black tracking-wide">גישה הוליסטית המשלבת גוף, נפש ורוח לריפוי שלם</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {SERVICES.map((service, index) => (
              <motion.div 
                key={service.id} 
                initial={{ opacity: 0, y: 50 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: index * 0.1 }}
                className="group h-full"
              >
                <Link to={`/service/${service.slug}`} className="block h-full bg-white rounded-[3rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 flex flex-col border border-brand-100">
                  <div className="relative overflow-hidden aspect-[4/3] bg-brand-50">
                    <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                    <div className="absolute bottom-8 right-8 text-white drop-shadow-2xl">
                      <h3 className="text-4xl font-black mb-2">{service.title}</h3>
                    </div>
                  </div>
                  <div className="p-10 flex-grow">
                    <p className="text-gray-600 leading-relaxed font-bold text-xl mb-8">
                      {service.shortDescription}
                    </p>
                    <div className="flex items-center gap-3 text-brand-900 font-black text-lg">
                      <span>למידע נוסף</span>
                      <ArrowLeft size={20} className="group-hover:-translate-x-2 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. ATMOSPHERE - The Space */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8">
           <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl">
                 <h2 className="text-5xl md:text-7xl font-black text-brand-900 mb-6 tracking-tighter">המקום המרפא</h2>
                 <p className="text-2xl text-gray-500 font-bold">הצצה אל תוך הקליניקה - מרחב של שקט, ביטחון ואסתטיקה.</p>
              </div>
              <div className="flex items-center gap-4">
                 <Camera className="text-brand-500" size={32} />
                 <span className="text-brand-900 font-black text-xl uppercase tracking-widest">גלריית אווירה</span>
              </div>
           </div>
           
           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {IMAGES.atmosphere.slice(0, 10).map((img, idx) => (
                <motion.div 
                  key={`atmos-${idx}`}
                  whileHover={{ scale: 0.98 }}
                  onClick={() => openLightbox('atmosphere', idx)}
                  className="cursor-pointer rounded-3xl overflow-hidden aspect-square shadow-sm hover:shadow-xl transition-all"
                >
                   <img src={img} alt="" className="w-full h-full object-cover" />
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS - Heartfelt Words */}
      <section className="py-32 bg-brand-900 text-white relative overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-brand-500 rounded-full blur-[150px] opacity-20"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter">מילים מחממות לב</h2>
            <div className="w-24 h-2 bg-brand-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {TESTIMONIALS.map((t) => (
              <motion.div 
                key={t.id} 
                initial={{ opacity: 0, scale: 0.95 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                viewport={{ once: true }} 
                className="bg-white/10 backdrop-blur-xl p-16 rounded-[4rem] border border-white/20 relative"
              >
                <Quote className="text-brand-300 mb-12 opacity-50" size={64} />
                <p className="text-2xl md:text-3xl leading-relaxed mb-12 font-medium italic">"{t.text}"</p>
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-full bg-brand-500 flex items-center justify-center font-black text-2xl text-white shadow-lg">
                    {t.author.charAt(0)}
                  </div>
                  <span className="font-black text-brand-100 text-2xl tracking-wide">{t.author}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. GALLERY PREVIEW */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
           <h2 className="text-5xl md:text-7xl font-black text-brand-900 mb-16 tracking-tighter">רגעים של חיבור</h2>
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
              {IMAGES.gallery.slice(0, 5).map((img, idx) => (
                <motion.div 
                  key={`gal-pre-${idx}`}
                  whileHover={{ y: -10 }}
                  onClick={() => openLightbox('gallery', idx)}
                  className="cursor-pointer rounded-[2rem] overflow-hidden shadow-lg aspect-[3/4]"
                >
                   <img src={img} alt="" className="w-full h-full object-cover" />
                </motion.div>
              ))}
           </div>
           <Link to="/gallery" className="inline-flex items-center gap-4 text-brand-900 font-black text-2xl hover:text-brand-600 transition-all border-b-4 border-brand-100 pb-2">
             לצפייה בגלריה המלאה <ArrowLeft size={32} />
           </Link>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxState !== null && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} 
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-2xl" 
            onClick={closeLightbox}
          >
            <button onClick={closeLightbox} className="absolute top-8 left-8 text-white/70 hover:text-white bg-white/10 p-4 rounded-full transition-all"><X size={32} /></button>
            <button onClick={nextImage} className="absolute right-6 top-1/2 -translate-y-1/2 text-white/70 bg-white/10 p-6 rounded-full z-20 hover:bg-white/20"><ChevronRight size={48} /></button>
            <button onClick={prevImage} className="absolute left-6 top-1/2 -translate-y-1/2 text-white/70 bg-white/10 p-6 rounded-full z-20 hover:bg-white/20"><ChevronLeft size={48} /></button>
            <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
               <motion.img 
                key={`${lightboxState.type}-${lightboxState.index}`} 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                src={getCurrentImageList()[lightboxState.index]} 
                alt="Lightbox" 
                className="max-w-full max-h-[85vh] object-contain shadow-[0_0_100px_rgba(0,0,0,0.5)] rounded-2xl" 
               />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};