import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE_CONTENT, IMAGES, SERVICES, TESTIMONIALS, WHATSAPP_URL, RETREAT_CONTENT, LANDING_CONTENT } from '../data';
import { ArrowLeft, Quote, Heart, X, ChevronRight, ChevronLeft, ZoomIn, MessageCircle, Sparkles, Home as HomeIcon, CheckCircle2, Activity, BatteryCharging, Compass, ArrowDown, MapPin, Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
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
  const [activeObjection, setActiveObjection] = useState<number | null>(null);

  const toggleObjection = (idx: number) => {
    setActiveObjection(activeObjection === idx ? null : idx);
  };

  const openLightbox = (type: 'gallery' | 'atmosphere', index: number) => setLightboxState({ type, index });
  const closeLightbox = () => setLightboxState(null);

  // For the home page preview, we only use a subset of the gallery images
  const homeGalleryPreview = IMAGES.gallery.slice(0, 4);

  const getCurrentImageList = () => {
    if (!lightboxState) return [];
    // If opening gallery from home, only show the preview set in lightbox to avoid confusion, 
    // or arguably show full list. Let's show full list so they can browse even from preview.
    // However, to keep it simple with indices, if they click index 3 of preview, it maps to index 3 of full gallery.
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

  // Icons for the "Who Is It For" (General) section
  const whoIsItForIcons = [
     <Activity size={32} />,
     <BatteryCharging size={32} />,
     <Compass size={32} />,
     <Sparkles size={32} />
  ];

  return (
    <div className="overflow-x-hidden font-sans">
      
      {/* 1. GENERAL SITE HERO */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <motion.div 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
            className="w-full h-full"
          >
            <img 
              src={IMAGES.hero} 
              alt="Tal Sharabi" 
              className="w-full h-full object-cover object-top"
            />
          </motion.div>
          <div className="absolute inset-0 bg-white/40 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/50 to-brand-50/90"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center text-brand-900">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <img 
              src={IMAGES.logoDark} 
              alt="Tal Sharabi Logo" 
              className="h-28 md:h-44 mx-auto mb-10 drop-shadow-sm opacity-90"
            />
            <h2 className="text-xl md:text-3xl font-bold mb-6 tracking-[0.25em] text-brand-800 uppercase">
              {SITE_CONTENT.hero.subtitle}
            </h2>
            <h1 className="text-7xl md:text-9xl font-black mb-10 text-brand-900 leading-none tracking-tight">
              {SITE_CONTENT.hero.title}
            </h1>
            <p className="text-xl md:text-3xl font-medium text-brand-700 max-w-2xl mx-auto relative inline-block py-4 tracking-wide">
               {SITE_CONTENT.hero.quote}
            </p>
            <div className="mt-14">
              <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-brand-900 hover:bg-brand-80 text-white px-12 py-5 rounded-full text-lg font-bold transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl tracking-wider"
              >
                <span>התחילי את המסע שלך</span>
                <MessageCircle size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. GENERAL INTRO */}
      <section className="py-24 md:py-32 bg-brand-50/50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
            <motion.div 
              className="md:w-1/2 relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <div className="relative z-10">
                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5] max-w-md mx-auto">
                  <img 
                    src={IMAGES.about} 
                    alt="Tal Sharabi Portrait" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 border-[1px] border-white/30 rounded-[3rem]"></div>
                </div>
              </div>
              <div className="absolute top-12 -right-6 w-full h-full border-4 border-brand-200/50 rounded-[3rem] -z-10"></div>
            </motion.div>

            <motion.div 
              className="md:w-1/2 text-center md:text-right"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeIn} className="text-5xl md:text-7xl font-black text-brand-900 mb-10 leading-[1.1] tracking-tight">
                לחיות חיים של <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-l from-brand-500 to-brand-800">איזון ומשמעות</span>
              </motion.h2>
              <motion.div variants={fadeIn} className="space-y-6 text-lg md:text-xl text-gray-700 font-normal leading-relaxed">
                <p>
                  נעים להכיר, אני טל. בעשור האחרון אני מלווה אנשים למצוא את האור הפנימי שלהם, 
                  דרך שילוב ייחודי של נומרוליסטי, טיפולי מגע ועבודת תודעה.
                </p>
                <p>
                  המסע שלנו יחד הוא הזמנה להקשיב לגוף, לשחרר חסימות ישנות, 
                  ולגלות מחדש את הכוחות הטמונים בך לריפוי וצמיחה.
                </p>
              </motion.div>
              <motion.div variants={fadeIn} className="mt-12">
                <Link to="/about" className="group text-brand-900 font-extrabold text-lg inline-flex items-center gap-3 border-b-2 border-brand-200 hover:border-brand-900 pb-1 transition-all">
                  קרא עוד עלי <ArrowLeft size={24} className="group-hover:-translate-x-2 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. GENERAL PAIN POINTS ("Who is it for?") */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-black text-brand-900 mb-6 tracking-tight">
              {LANDING_CONTENT.whoIsItFor.title}
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 font-medium">
              {LANDING_CONTENT.whoIsItFor.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {LANDING_CONTENT.whoIsItFor.points.map((point, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-brand-50 p-8 rounded-[2rem] border border-brand-100 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-brand-100 flex items-center justify-center text-brand-600 mb-6 group-hover:bg-brand-500 group-hover:text-white transition-all">
                  {whoIsItForIcons[idx % whoIsItForIcons.length]}
                </div>
                <h3 className="text-2xl font-bold text-brand-900 mb-4">{point.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FEATURED RETREAT SECTION - "THE RESTART" */}
      <section className="py-24 bg-brand-900 text-white relative overflow-hidden">
         {/* Decorative BG */}
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3"></div>
         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-600/20 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3"></div>

         <div className="container mx-auto px-4 md:px-8 relative z-10">
            {/* Header for Retreat */}
            <div className="text-center mb-16">
               <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500 text-white text-sm font-bold tracking-widest mb-6 uppercase shadow-lg">
                  <Sparkles size={16} />
                  <span>אירוע קרוב ומיוחד</span>
               </div>
               <h2 className="text-5xl md:text-8xl font-black mb-6 tracking-tight leading-none text-brand-50">
                  {RETREAT_CONTENT.hero.title}
               </h2>
               <p className="text-2xl md:text-3xl text-brand-200 font-medium max-w-3xl mx-auto">
                  {RETREAT_CONTENT.hero.subtitle}
               </p>
            </div>

            {/* Split Content: Schedule/Info & Objections */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-white/5 backdrop-blur-sm rounded-[3rem] p-8 md:p-12 border border-white/10">
               
               {/* Left: Info & Schedule */}
               <div className="lg:col-span-7 space-y-12">
                  <div>
                     <h3 className="text-3xl font-bold mb-6 text-brand-100">"אני אוהבת את עצמי"</h3>
                     <p className="text-lg leading-relaxed text-brand-50/90 mb-4">
                        {RETREAT_CONTENT.intro.description[1]}
                     </p>
                     <p className="text-lg leading-relaxed text-brand-50/90">
                        {RETREAT_CONTENT.intro.description[2]}
                     </p>
                  </div>

                  {/* Mini Schedule */}
                  <div className="bg-brand-800/50 p-8 rounded-3xl border border-brand-700/50">
                     <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                        <Clock className="text-brand-300" /> 
                        לו"ז הריטריט (09:45 - 19:00)
                     </h4>
                     <div className="space-y-4">
                        {RETREAT_CONTENT.schedule.slice(0, 5).map((item, idx) => (
                           <div key={idx} className="flex gap-4 items-center text-brand-100">
                              <span className="font-bold w-12 text-brand-300">{item.time}</span>
                              <span className="text-sm md:text-base border-b border-brand-700/50 pb-1 w-full">{item.activity}</span>
                           </div>
                        ))}
                        <div className="text-center pt-2 text-brand-300 text-sm font-bold">...ועוד הפתעות</div>
                     </div>
                  </div>
               </div>

               {/* Right: Objections & CTA */}
               <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
                  <div className="bg-white rounded-3xl p-8 text-brand-900 shadow-xl">
                     <h4 className="text-2xl font-black mb-6">מחשבות שחוסמות אותנו</h4>
                     <div className="space-y-3">
                        {RETREAT_CONTENT.objections.map((obj, idx) => (
                           <div key={idx} className="border-b border-gray-100 pb-3 last:border-0">
                              <button 
                                 onClick={() => toggleObjection(idx)}
                                 className="flex items-center justify-between w-full text-right font-bold text-lg hover:text-brand-600 transition-colors"
                              >
                                 <span>"{obj.belief}"</span>
                                 {activeObjection === idx ? <ArrowDown size={18} /> : <ArrowLeft size={18} />}
                              </button>
                              {activeObjection === idx && (
                                 <motion.div 
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    className="pt-2 text-sm text-gray-600 leading-relaxed"
                                 >
                                    <span className="font-bold text-brand-600 block mb-1">המציאות:</span>
                                    {obj.conclusion}
                                 </motion.div>
                              )}
                           </div>
                        ))}
                     </div>
                  </div>

                  <div className="bg-brand-500 rounded-3xl p-8 text-white shadow-xl text-center">
                     <div className="mb-6 space-y-2">
                        <div className="flex items-center justify-center gap-2 text-brand-100">
                           <MapPin size={18} /> {RETREAT_CONTENT.details.location}
                        </div>
                        <div className="text-4xl font-black">{RETREAT_CONTENT.details.price}</div>
                     </div>
                     <a 
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-white text-brand-600 py-4 rounded-xl font-bold text-xl flex items-center justify-center gap-2 hover:bg-brand-100 transition-colors shadow-lg"
                     >
                        לפרטים והרשמה <ArrowLeft strokeWidth={3} size={20} />
                     </a>
                  </div>
               </div>

            </div>
         </div>
      </section>

      {/* 5. GENERAL PROCESS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-4xl mx-auto mb-20">
             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 text-brand-600 text-sm font-bold tracking-widest mb-6 uppercase border border-brand-100">
                <CheckCircle2 size={16} />
                <span>הדרך לריפוי</span>
              </div>
            <h2 className="text-5xl md:text-7xl font-black text-brand-900 mb-6 tracking-tight">
              {LANDING_CONTENT.process.title}
            </h2>
            <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto">
              {LANDING_CONTENT.process.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-12 right-0 left-0 h-0.5 bg-gradient-to-l from-transparent via-brand-200 to-transparent -z-10 w-3/4 mx-auto"></div>
            {LANDING_CONTENT.process.steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative bg-white pt-8 text-center md:text-right group"
              >
                <div className="flex flex-col items-center md:items-start">
                   <div className="w-24 h-24 rounded-full bg-brand-50 border-4 border-white shadow-xl flex items-center justify-center text-3xl font-black text-brand-300 mb-8 group-hover:bg-brand-500 group-hover:text-white transition-colors duration-500">
                     {step.number}
                   </div>
                   <h3 className="text-3xl font-black text-brand-900 mb-4">{step.title}</h3>
                   <p className="text-gray-600 leading-relaxed text-lg pl-0 md:pl-8">
                     {step.description}
                   </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. GENERAL SERVICES GRID */}
      <section className="py-24 bg-brand-50/50 relative">
        <div className="container mx-auto px-4 md:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-5xl md:text-7xl font-black text-brand-900 mb-6 tracking-tight">הטיפולים שלנו</h2>
            <div className="w-24 h-2 bg-brand-500 mx-auto mb-8"></div>
            <p className="text-brand-600 text-xl font-bold tracking-wide">גישה הוליסטית המשלבת גוף, נפש ורוח לריפוי שלם</p>
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
                <Link to={`/service/${service.slug}`} className="block h-full bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col border border-brand-100">
                  <div className="h-80 overflow-hidden relative">
                    <img 
                      src={service.imageUrl} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80"></div>
                    <div className="absolute bottom-8 right-8 text-white">
                      <h3 className="text-4xl font-black leading-none mb-2">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-8 flex-grow flex flex-col justify-between">
                    <p className="text-gray-600 mb-8 leading-relaxed font-medium text-lg">
                      {service.shortDescription}
                    </p>
                    <div className="flex items-center text-brand-800 font-extrabold tracking-wide text-base group-hover:text-brand-600 transition-colors">
                      <span className="border-b-2 border-brand-200 pb-1 group-hover:border-brand-600 transition-all">גלי עוד</span>
                      <ArrowLeft size={20} className="mr-2 transform group-hover:-translate-x-1 transition-transform stroke-[3px]" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. ATMOSPHERE & GALLERY */}
      <section className="py-24 bg-brand-900 text-brand-50 overflow-hidden">
         <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row justify-between md:items-end mb-16 gap-6">
              <div>
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="inline-flex items-center gap-2 text-brand-300 font-bold tracking-widest mb-4 uppercase"
                >
                  <HomeIcon size={18} />
                  <span>הקליניקה</span>
                </motion.div>
                <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight">מרחב הטיפולים</h2>
              </div>
              <p className="text-brand-200 max-w-md text-xl leading-relaxed font-medium">
                תמונות מתוך הקליניקה והמרחב העוטף, המשרים רוגע, שקט וחיבור פנימי.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[300px]">
               {IMAGES.atmosphere.slice(0, 8).map((img, idx) => (
                 <motion.div
                   key={`atmos-${idx}`}
                   initial={{ opacity: 0, scale: 0.9 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   transition={{ delay: idx * 0.05 }}
                   className={`relative rounded-2xl overflow-hidden cursor-pointer group ${
                      idx === 0 || idx === 5 ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1'
                   }`}
                   onClick={() => openLightbox('atmosphere', idx)}
                 >
                   <img 
                      src={img} 
                      alt="Atmosphere" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" 
                   />
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
                   <div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-md p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                      <ZoomIn className="text-white" size={24} />
                   </div>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 8. GENERAL GALLERY (PREVIEW ONLY) */}
      <section className="py-24 bg-brand-50/30">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
             <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="w-16 h-16 bg-brand-200 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-600"
             >
                <Heart size={32} fill="currentColor" />
             </motion.div>
            <h2 className="text-5xl md:text-7xl font-black text-brand-900 mb-6 tracking-tight">רגעים של קסם</h2>
            <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto">
              הצצה קטנה אל תוך הטיפולים. 
            </p>
          </div>
          
          <div className="columns-2 md:columns-4 gap-4 md:gap-8 space-y-4 md:space-y-8 mb-12">
            {homeGalleryPreview.map((img, idx) => (
              <motion.div
                key={`gallery-${idx}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => openLightbox('gallery', idx)}
                className="break-inside-avoid rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl relative group bg-white cursor-pointer"
              >
                <img 
                  src={img} 
                  alt={`Gallery Preview ${idx}`} 
                  className="w-full h-auto block transform transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                 <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/gallery" className="inline-flex items-center gap-2 bg-transparent border-2 border-brand-900 text-brand-900 hover:bg-brand-900 hover:text-white px-8 py-3 rounded-full text-lg font-bold transition-all transform hover:scale-105">
              <span>לגלריה המלאה</span>
              <ArrowLeft size={20} />
            </Link>
          </div>

        </div>
      </section>

      {/* 9. TESTIMONIALS */}
      <section className="py-24 bg-brand-100 relative overflow-hidden">
        {/* Decorative Blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-200/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-200/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-brand-900 mb-6 tracking-tight">מילים מחממות לב</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {TESTIMONIALS.map((t) => (
              <motion.div 
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-12 rounded-[2rem] shadow-xl border border-brand-50 hover:shadow-2xl transition-all relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-50 rounded-bl-[4rem] -mr-4 -mt-4 transition-colors group-hover:bg-brand-100"></div>
                <Quote className="text-brand-300 mb-8 relative z-10" size={48} />
                <p className="text-2xl leading-relaxed mb-10 font-medium text-brand-800 relative z-10">"{t.text}"</p>
                <div className="flex items-center gap-5 border-t border-brand-100 pt-8 relative z-10">
                  <div className="w-14 h-14 rounded-full bg-brand-500 flex items-center justify-center font-bold text-xl shadow-lg text-white">
                    {t.author.charAt(0)}
                  </div>
                  <span className="font-extrabold text-brand-900 text-xl tracking-wide">{t.author}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxState !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 backdrop-blur-md"
            onClick={closeLightbox}
          >
            <button onClick={closeLightbox} className="absolute top-6 left-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all z-20"><X size={28} /></button>
            <button onClick={nextImage} className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-4 rounded-full transition-all z-20 hover:scale-105"><ChevronRight size={36} /></button>
            <button onClick={prevImage} className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-4 rounded-full transition-all z-20 hover:scale-105"><ChevronLeft size={36} /></button>
            <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
               <motion.img
                key={`${lightboxState.type}-${lightboxState.index}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                src={getCurrentImageList()[lightboxState.index]}
                alt="Lightbox"
                className="max-w-full max-h-[90vh] object-contain shadow-2xl rounded-lg"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
