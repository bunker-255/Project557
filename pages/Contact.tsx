import React from 'react';
import { motion } from 'framer-motion';
import { SITE_CONTENT, IMAGES, WHATSAPP_URL } from '../data';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-brand-50">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-brand-900 mb-6 tracking-tight"
          >
            {SITE_CONTENT.contact.title}
          </motion.h1>
          <p className="text-xl text-gray-600 font-medium">{SITE_CONTENT.contact.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-[3rem] shadow-2xl overflow-hidden max-w-6xl mx-auto">
          
          {/* Contact Info & Image */}
          <div className="relative bg-brand-900 text-white p-12 md:p-16 flex flex-col justify-between overflow-hidden">
             {/* Background Image Overlay */}
             <div className="absolute inset-0 opacity-20 z-0">
                <img src={IMAGES.hero} alt="" className="w-full h-full object-cover grayscale" />
             </div>

             <div className="relative z-10 space-y-12">
               <div>
                 <h3 className="text-3xl font-black mb-10 text-brand-100">פרטי התקשרות</h3>
                 <div className="space-y-8">
                   <div className="flex items-center gap-6">
                     <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm text-brand-300">
                       <Phone size={28} />
                     </div>
                     <div className="text-xl ltr font-bold tracking-wider">{SITE_CONTENT.contact.phone}</div>
                   </div>
                   <div className="flex items-center gap-6">
                     <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm text-brand-300">
                       <Mail size={28} />
                     </div>
                     <div className="text-xl font-medium">{SITE_CONTENT.contact.email}</div>
                   </div>
                   <div className="flex items-center gap-6">
                     <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm text-brand-300">
                       <MapPin size={28} />
                     </div>
                     <div className="text-xl font-medium">תל אביב והמרכז (כתובת מלאה בתיאום)</div>
                   </div>
                 </div>
               </div>
             </div>
             
             <div className="relative z-10 mt-16">
               <div className="w-24 h-2 bg-brand-400 mb-6 rounded-full"></div>
               <p className="font-bold text-brand-100 text-2xl leading-relaxed">"אני אעשה זאת דרך מגוון כלים שונים כמו ריברסינג, רפלקסולוגיה ונומרולוגיה."</p>
             </div>
          </div>

          {/* WhatsApp CTA Section instead of Form */}
          <div className="p-12 md:p-16 flex flex-col items-center justify-center text-center h-full">
            <h3 className="text-4xl font-black text-gray-900 mb-8">רוצה לקבוע תור?</h3>
            <p className="text-xl text-gray-600 mb-12 max-w-md leading-relaxed font-medium">
              אני זמינה לכל שאלה, התייעצות או תיאום טיפול בווטסאפ. מוזמנת לשלוח הודעה ואחזור אליך בהקדם.
            </p>
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#25D366] hover:bg-[#128C7E] text-white font-black py-5 px-12 rounded-2xl transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center gap-4 text-xl tracking-wide"
            >
              <MessageCircle size={32} />
              שלחי הודעה בווטסאפ
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};