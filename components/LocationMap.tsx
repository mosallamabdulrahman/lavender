import { motion } from 'framer-motion';

const LocationMap = () => {
  // الرابط الفعلي (تأكد من استخدام رابط Embed الصحيح من جوجل ماب)
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3476.9038237731995!2d47.97341037626359!3d29.373105775267332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf84ea02b0c913%3A0xe8546741762944f5!2sSouk%20Al-Safat!5e0!3m2!1sen!2skw!4v1707000000000!5m2!1sen!2skw";

  return (
    <section className="py-20 bg-ink relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="mb-12 text-center md:text-right">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-lavender font-bold tracking-widest uppercase text-sm"
          >
            تواصل معنا
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold text-white mt-2"
          >
            أين تجد <span className="text-lavender italic">إبداعنا؟</span>
          </motion.h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative group cursor-crosshair"
        >
          {/* Animated Outer Glow */}
          <div className="absolute -inset-2 bg-gradient-to-r from-lavender/20 via-lavender-deep/10 to-lavender/20 rounded-[2.5rem] blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-1000"></div>
          
          <div className="relative rounded-[2.5rem] overflow-hidden bg-[#1a1a1c] aspect-video md:aspect-[21/9] border border-white/5 shadow-2xl shadow-black/50">
            
            {/* Loading Shimmer - يظهر خلف الخريطة */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skeleton-animate"></div>

            {/* Google Map Iframe */}
            <iframe
              src={mapSrc}
              className="w-full h-full grayscale opacity-40 contrast-125 brightness-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:brightness-100 transition-all duration-1000 ease-in-out border-0 scale-105 group-hover:scale-100"
              loading="lazy"
              title="موقع شركة مشاتل البستان"
            ></iframe>

            {/* Premium Glass Overlay */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-ink/20 via-transparent to-ink/80 group-hover:opacity-0 transition-opacity duration-700"></div>

            {/* UI Elements */}
            <div className="absolute inset-0 p-8 flex flex-col justify-between pointer-events-none">
              
              {/* Top Badge */}
              <div className="flex justify-start">
                <motion.div 
                  initial={{ y: -10, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  className="bg-black/40 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl text-white/70 text-xs tracking-tighter"
                >
                  INTERACTIVE VIEW • KUWAIT CITY
                </motion.div>
              </div>

              {/* Bottom Info Bar */}
              <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                
                {/* Location Card */}
                <motion.div 
                  className="bg-white/5 backdrop-blur-2xl border border-white/10 p-5 rounded-[1.5rem] pointer-events-auto max-w-sm hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-lavender/20 p-3 rounded-full">
                      <div className="w-3 h-3 bg-lavender rounded-full animate-pulse shadow-[0_0_10px_#b794f4]"></div>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1">مشاتل البستان</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        سوق الصفات، الدور الثالث، منطقة القبلة، مدينة الكويت.
                      </p>
                    </div>
                  </div>
                </motion.div>
                
                {/* CTA Button */}
                <motion.a 
                  href="https://maps.app.goo.gl/YourLinkHere" 
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(183, 148, 244, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-lavender-deep text-white px-8 py-4 rounded-2xl shadow-xl pointer-events-auto flex items-center gap-3 font-bold transition-all"
                >
                  <span>فتح في الخرائط</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </motion.a>

              </div>
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default LocationMap;