import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import 'material-symbols';
import { base } from '../src/utils/base';

const HeroSection = () => {
  const handleScrollToServices = () => {
    const section = document.getElementById("services");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[100svh] w-full flex items-center overflow-hidden bg-[#12131A]">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src={base + 'assets/images/camra.png'}
          alt="Professional photography setup"
          className="w-full h-full object-cover object-right md:object-center scale-110"
        />
        {/* Overlay لتسهيل القراءة وضمان تباين النصوص على اليمين */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#12131A] via-[#12131A]/40 to-transparent md:bg-gradient-to-l md:from-[#12131A] md:via-[#12131A]/50 md:to-transparent"></div>
      </div>

      {/* Content Container - محاذاة كاملة جهة اليمين */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full pt-24 pb-12">
        <div className="flex flex-col text-right w-full">
          
          {/* Tagline */}
          <motion.span 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block w-fit px-4 py-1.5 rounded-full bg-[#DCC2F9]/20 text-[#DCC2F9] border border-[#DCC2F9]/30 text-xs md:text-sm font-semibold mb-6 backdrop-blur-md"
          >
            تصوير احترافي فاخر في الكويت
          </motion.span>

          {/* Main Title - Responsive sizing */}
          <motion.h1 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.15] mb-6 drop-shadow-lg"
          >
            توثيق لحظاتكم
            <br />
            <span className="text-[#DCC2F9]">بأسمى معايير الإحترافية</span>
          </motion.h1>

          {/* Description Paragraph */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-300 text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl mb-10 drop-shadow-md"
          >
            متخصصون في تغطية المناسبات الرجالية، وتصوير المنتجات الفاخرة. نروي القصة بعدسة احترافية تعكس الفخامة والدقة.
          </motion.p>

          {/* Buttons Group - محاذاة لليمين في الديسكتوب وتملأ العرض في الموبايل الصغير */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            {/* الزر الرئيسي */}
            <Link
              to="/contact"
              className="bg-[#DCC2F9] text-[#12131A] font-bold py-4 px-12 rounded-2xl text-center hover:bg-white transition-all shadow-xl shadow-[#DCC2F9]/10 active:scale-95"
            >
              احجز جلستك الآن
            </Link>

            {/* زر اكتشف المزيد */}
            <button
              onClick={handleScrollToServices}
              className="border-2 border-white/20 text-white font-bold py-4 px-10 rounded-2xl hover:bg-white/10 transition-all backdrop-blur-sm active:scale-95"
            >
              اكتشف المزيد
            </button>
          </motion.div>
          
        </div>
      </div>

      {/* Scroll Down Indicator - تم تكبير الأيقونة وتحسين موضعها */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer z-20 flex flex-col items-center group"
        onClick={handleScrollToServices}
      >
        <span className="text-white/40 tracking-widest uppercase mb-1 group-hover:text-[#DCC2F9] transition-colors">اكتشف</span>
        <motion.span 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="material-symbols-outlined text-[#DCC2F9] text-5xl md:text-6xl select-none"
        >
          expand_more
        </motion.span>
      </motion.div>
    </section>
  );
};

export default HeroSection;