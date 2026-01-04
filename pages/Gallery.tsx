import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IMAGES } from '../data';
import { X, ChevronRight, ChevronLeft, Heart } from 'lucide-react';

export const Gallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const nextImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! + 1) % IMAGES.gallery.length);
    }
  }, [lightboxIndex]);

  const prevImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! - 1 + IMAGES.gallery.length) % IMAGES.gallery.length);
    }
  }, [lightboxIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage(); 
      if (e.key === 'ArrowLeft') prevImage(); 
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, nextImage, prevImage]);

  return (
    <div className="pb-16 min-h-screen bg-brand-50/30">
      
      {/* Header */}
      <section className="bg-brand-50 py-16 mb-16">
        <div className="container mx-auto px-4 text-center">
           <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-16 h-16 bg-brand-200 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-600"
           >
              <Heart size={32} fill="currentColor" />
           </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-brand-900 tracking-tight mb-6"
          >
            גלריית רגעים
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
             <p className="text-xl md:text-2xl text-gray-600 font-medium leading-relaxed">
               התמונות מספרות את הסיפור של הטיפול - רגעים של שקט, חיבור ועומק. כאן תוכלו להתרשם מהאווירה הייחודית בקליניקה, מהמגע המרפא ומהתהליכים המרגשים שאנו עוברים יחד.
             </p>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <div className="container mx-auto px-4 md:px-8">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-8 space-y-4 md:space-y-8">
            {IMAGES.gallery.map((img, idx) => (
              <motion.div
                key={`gallery-full-${idx}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "100px" }}
                transition={{ duration: 0.5, delay: (idx % 4) * 0.1 }}
                onClick={() => openLightbox(idx)}
                className="break-inside-avoid rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl relative group bg-white cursor-pointer"
              >
                <img 
                  src={img} 
                  alt={`Gallery ${idx}`} 
                  className="w-full h-auto block transform transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
              </motion.div>
            ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
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
                key={`lightbox-${lightboxIndex}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                src={IMAGES.gallery[lightboxIndex]}
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