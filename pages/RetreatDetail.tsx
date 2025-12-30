// Fixed missing useState and useEffect imports from 'react'
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { RETREATS, WHATSAPP_URL, IMAGES } from '../data';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, MessageCircle, CheckCircle2, ChevronDown, 
  Sparkles, Quote, MapPin, Clock, Camera, Calendar, 
  Target, Info, ChevronRight 
} from 'lucide-react';

export const RetreatDetail = () => {
  const { slug } = useParams();
  const retreat = RETREATS.find(r => r.slug === slug);
  const otherRetreats = RETREATS.filter(r => r.slug !== slug);
  
  // Fixed: useState is now imported from 'react'
  const [activeObjection, setActiveObjection] = useState<number | null>(null);

  // Fixed: useEffect is now imported from 'react'
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!retreat) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-50">
        <div className="text-center">
          <h2 className="text-3xl font-black mb-4">הריטריט לא נמצא</h2>
          <Link to="/retreats" className="text-brand-600 hover:underline font-bold">חזרה לקטלוג</Link>
        </div>
      </div>
    );
  }

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="bg-white overflow-hidden font-sans">
      {/* 1. Hero Section - With High Light Flare (Zasvet) */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 15, ease: "linear" }}
            src={retreat.heroImage} 
            alt={retreat.title} 
            className="w-full h-full object-cover brightness-[1.05] contrast-[0.95]"
          />
          
          {/* Light Overlays (The "Zasvet" Effect) */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]"></div>
          
          {/* Top-Right Light Flare */}
          <div className="absolute -top-20 -right-20 w-[120%] h-[120%] bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.8)_0%,transparent_60%)] mix-blend-overlay"></div>
          
          {/* Bottom-Up Fade */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white"></div>
          
          {/* Extra Glow Layer */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.4)_0%,transparent_50%)]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-20 text-center text-brand-900">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/80 backdrop-blur-xl text-brand-950 text-sm font-black tracking-widest mb-10 uppercase shadow-2xl border border-white"
            >
              <Sparkles size={20} className="text-brand-500" />
              <span>{retreat.tagline}</span>
            </motion.div>
            <h1 className="text-7xl md:text-[11rem] font-black mb-10 tracking-tighter drop-shadow-[0_10px_30px_rgba(255,255,255,0.8)] leading-none text-brand-950">
              {retreat.title}
            </h1>
            <p className="text-3xl md:text-5xl font-medium max-w-4xl mx-auto text-brand-900 font-serif italic mb-14 leading-tight">
              {retreat.subtitle}
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-xl font-black text-brand-950">
              <div className="flex items-center gap-3 bg-white/70 backdrop-blur-md px-8 py-3 rounded-full shadow-sm border border-white/50">
                <MapPin size={24} className="text-brand-500" /> {retreat.details.location}
              </div>
              <div className="flex items-center gap-3 bg-white/70 backdrop-blur-md px-8 py-3 rounded-full shadow-sm border border-white/50">
                <Clock size={24} className="text-brand-500" /> {retreat.details.duration}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Intro / The Story */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-5xl mx-auto text-center md:text-right">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}
              className="relative"
            >
              <Quote className="text-brand-100 absolute -top-16 -right-16 md:-right-24 opacity-50" size={160} />
              <div className="space-y-10 relative z-10">
                {retreat.intro.map((p, i) => (
                  <p key={i} className="text-3xl md:text-4xl text-gray-800 leading-tight font-medium font-serif">
                    {p}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Methods - Detailed Display (MOVED HERE: BEFORE GALLERY) */}
      <section className="py-32 bg-brand-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-10"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-6xl md:text-9xl font-black mb-8 tracking-tighter">הכלים שלנו לשינוי</h2>
            <div className="w-32 h-3 bg-brand-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {retreat.methods.map((method, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-xl p-12 rounded-[4rem] border border-white/20 hover:bg-white/20 transition-all group"
              >
                <div className="flex items-center gap-6 mb-8">
                   <div className="w-16 h-16 rounded-2xl bg-brand-500 flex items-center justify-center font-black text-2xl group-hover:rotate-12 transition-transform">
                      {i + 1}
                   </div>
                   <h3 className="text-4xl font-black text-brand-300">{method.title}</h3>
                </div>
                <p className="text-2xl leading-relaxed text-brand-50 opacity-90 font-medium">{method.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Gallery Teaser */}
      <section className="py-24 bg-brand-50 border-y border-brand-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
            <div className="text-right">
              <h2 className="text-4xl md:text-6xl font-black text-brand-900 mb-4 tracking-tighter">רגעים מהמסע</h2>
              <p className="text-xl text-gray-600 font-bold">הצצה לאנרגיה, לחיבור ולשלווה שמחכים לך</p>
            </div>
            <Link to="/gallery" className="group flex items-center gap-4 bg-brand-900 text-white px-8 py-4 rounded-full font-black text-xl hover:bg-brand-800 transition-all shadow-xl">
              <Camera size={24} />
              לגלריה המלאה
              <ArrowLeft size={24} className="group-hover:-translate-x-2 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {IMAGES.gallery.slice(0, 4).map((img, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -10, scale: 1.02 }}
                className="aspect-square rounded-[2.5rem] overflow-hidden shadow-lg border-4 border-white"
              >
                <img src={img} className="w-full h-full object-cover" alt="" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Who is it for? */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} className="space-y-12">
              <div className="inline-flex items-center gap-3 text-brand-500 font-black tracking-widest uppercase">
                <Target size={24} />
                <span>קהל יעד</span>
              </div>
              <h2 className="text-5xl md:text-8xl font-black text-brand-900 tracking-tighter leading-none">{retreat.audience.title}</h2>
              <div className="grid grid-cols-1 gap-6">
                {retreat.audience.points.map((point, i) => (
                  <div key={i} className="flex items-start gap-6 bg-brand-50 p-8 rounded-[2.5rem] border border-brand-100 group hover:bg-brand-900 hover:text-white transition-all duration-500">
                    <CheckCircle2 className="text-brand-500 mt-1 flex-shrink-0 group-hover:text-white" size={32} />
                    <p className="text-2xl font-bold leading-tight">{point}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <div className="relative">
              <div className="rounded-[4rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.2)] aspect-square border-8 border-white">
                <img src={retreat.heroImage} alt="Vibe" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-brand-500 rounded-full flex flex-col items-center justify-center text-white text-center p-8 shadow-2xl rotate-12">
                <div className="font-black text-3xl mb-1">{retreat.details.duration}</div>
                <div className="text-lg font-bold opacity-90">של התחדשות</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Schedule - Single Column Timeline */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-brand-50 text-brand-700 text-sm font-black tracking-widest mb-8 uppercase border border-brand-100">
              <Calendar size={20} />
              <span>המסע שלנו ביום הריטריט</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black text-brand-900 mb-6 tracking-tighter">מה מחכה לך?</h2>
            <p className="text-2xl text-gray-500 font-bold">לו"ז מפורט שנועד להעביר אותך תהליך מלא של ניקוי והטענה</p>
          </div>
          <div className="relative md:pr-12">
            {/* Main Vertical Line (Adjusted for RTL single column) */}
            <div className="absolute top-0 right-10 md:right-16 bottom-0 w-px bg-brand-100 -z-10"></div>
            
            <div className="space-y-16">
              {retreat.schedule.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12"
                >
                  {/* Timeline Point */}
                  <div className="absolute right-[33px] md:right-[57px] top-4 md:top-auto w-4 h-4 rounded-full bg-brand-900 border-4 border-white shadow-lg z-10 flex-shrink-0"></div>
                  
                  {/* Time Block */}
                  <div className="pr-16 md:pr-0 md:w-32 flex-shrink-0">
                    <span className="inline-block text-2xl font-black text-brand-600 bg-brand-50 px-5 py-2 rounded-2xl shadow-sm border border-brand-100">
                      {item.time}
                    </span>
                  </div>
                  
                  {/* Activity Text */}
                  <div className="pr-16 md:pr-0">
                    <span className="text-3xl md:text-4xl font-black text-gray-800 hover:text-brand-900 transition-colors leading-tight">
                      {item.activity}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Objections - Mindset Flip */}
      <section className="py-32 bg-brand-50 relative">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-8xl font-black text-brand-900 mb-8 tracking-tighter">מחסומים שקופים</h2>
            <p className="text-2xl text-gray-600 font-bold">זיהוי וניפוץ הדפוסים שמונעים ממך לעשות טוב לעצמך</p>
          </div>
          <div className="space-y-8">
            {retreat.objections.map((obj, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white rounded-[3.5rem] shadow-xl overflow-hidden border border-brand-100"
              >
                <button 
                  onClick={() => setActiveObjection(activeObjection === i ? null : i)}
                  className="w-full p-10 md:p-12 text-right flex items-center justify-between group bg-white hover:bg-brand-50 transition-colors"
                >
                  <div className="flex items-center gap-6">
                    <Info className="text-brand-300" size={32} />
                    <span className="text-3xl font-black text-brand-800 group-hover:text-brand-950 transition-colors">"{obj.belief}"</span>
                  </div>
                  <div className={`w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center transition-transform duration-500 ${activeObjection === i ? 'rotate-180 bg-brand-900 text-white' : ''}`}>
                    <ChevronDown size={24} />
                  </div>
                </button>
                <AnimatePresence>
                  {activeObjection === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: "circOut" }}
                    >
                      <div className="p-12 pt-0 border-t border-brand-50 bg-brand-50/30">
                        <div className="flex flex-col gap-8">
                          <div className="flex gap-4">
                            <span className="text-brand-500 font-black text-2xl">המציאות:</span>
                            <p className="text-2xl font-black text-gray-900">{obj.reality}</p>
                          </div>
                          <p className="text-2xl leading-relaxed text-gray-700 italic border-r-4 border-brand-300 pr-6">
                            {obj.conclusion}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Final CTA Landing Style */}
      <section className="py-40 bg-brand-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-500 rounded-full blur-[200px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} className="text-7xl md:text-9xl font-black mb-16 tracking-tighter">מוכנה לצאת לדרך?</motion.h2>
          <div className="bg-white/10 backdrop-blur-3xl p-16 md:p-24 rounded-[5rem] border border-white/20 max-w-4xl mx-auto mb-16 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 justify-center gap-16 mb-16 border-b border-white/10 pb-16">
              <div className="text-center">
                <p className="text-brand-300 font-black text-sm uppercase tracking-widest mb-4">היכן</p>
                <p className="text-4xl font-black">{retreat.details.location}</p>
              </div>
              <div className="text-center">
                <p className="text-brand-300 font-black text-sm uppercase tracking-widest mb-4">משך המסע</p>
                <p className="text-4xl font-black">{retreat.details.duration}</p>
              </div>
              <div className="text-center">
                <p className="text-brand-300 font-black text-sm uppercase tracking-widest mb-4">השקעה בעצמך</p>
                <p className="text-4xl font-black">{retreat.details.price}</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-8">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-grow bg-white text-brand-900 py-8 rounded-[2rem] font-black text-3xl flex items-center justify-center gap-4 hover:bg-brand-50 transition-all shadow-[0_20px_50px_rgba(255,255,255,0.2)]"
              >
                <MessageCircle size={40} />
                דברי איתי ונתאם
              </motion.a>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-grow">
                <Link 
                  to="/retreats"
                  className="w-full h-full bg-brand-800/50 backdrop-blur-md text-white py-8 rounded-[2rem] font-black text-2xl flex items-center justify-center gap-4 border border-white/20 hover:bg-brand-700 transition-all"
                >
                  עוד ריטריטים
                </Link>
              </motion.div>
            </div>
          </div>
          <Link to="/" className="inline-flex items-center gap-3 text-brand-200 hover:text-white transition-colors font-black text-2xl">
            <ArrowLeft size={24} /> חזרה לדף הבית
          </Link>
        </div>
      </section>

      {/* 9. Recommendations - Visual Cards */}
      {otherRetreats.length > 0 && (
        <section className="py-32 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <h3 className="text-5xl md:text-8xl font-black text-brand-900 mb-20 text-center tracking-tighter">אולי יעניין אותך גם</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
              {otherRetreats.map((r) => (
                <Link 
                  key={r.id}
                  to={`/retreat/${r.slug}`}
                  className="group block bg-white rounded-[4rem] overflow-hidden shadow-2xl hover:shadow-[0_40px_100px_rgba(0,0,0,0.1)] transition-all duration-700 transform hover:-translate-y-4 border border-brand-100"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img src={r.heroImage} alt={r.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-brand-900/20 group-hover:bg-transparent transition-colors"></div>
                  </div>
                  <div className="p-12">
                    <h4 className="text-4xl font-black text-brand-900 mb-4">{r.title}</h4>
                    <p className="text-brand-600 font-bold text-2xl mb-8">{r.subtitle}</p>
                    <div className="flex items-center gap-4 text-brand-900 font-black text-xl border-b-4 border-brand-100 pb-2 group-hover:border-brand-900 transition-all inline-flex">
                      גלי עוד <ArrowLeft size={24} className="group-hover:-translate-x-2 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};