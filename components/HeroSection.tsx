import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import 'material-symbols';
import { base } from '../src/utils/base';

const HeroSection = () => {
  // استخدام Ref بدلاً من التلاعب المباشر بـ DOM
  const handleScrollToServices = () => {
    const section = document.getElementById("services");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-[600px] md:h-screen w-full flex items-center overflow-hidden bg-[#12131A]">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src={base + 'assets/camra.png'}
          alt="Professional event photography setup in Kuwait"
          className="w-full h-full object-cover object-center scale-105"
        />

        {/* Improved Overlays for better readability on all screens */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#12131A] via-[#12131A]/40 to-transparent md:bg-gradient-to-l md:from-[#12131A]/90 md:via-[#12131A]/60 md:to-transparent"></div>
        <div className="absolute inset-0 bg-[#9C95DA]/5 mix-blend-overlay"></div>
      </div>

      {/* Content Container */}
      <div className="py-2 md:py-0 relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl text-right md:text-right">
          <motion.span 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-[#DCC2F9]/20 text-[#DCC2F9] border border-[#DCC2F9]/30 text-xs md:text-sm font-semibold mb-3 md:mb-6 backdrop-blur-md"
          >
            تصوير احترافي فاخر في الكويت
          </motion.span>

          <motion.h1 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="font-bold text-4xl sm:text-5xl md:text-7xl text-white leading-[1.2] md:leading-tight mb-3 md:mb-6"
          >
            توثيق لحظاتكم
            <br />
            <span className="text-[#DCC2F9]">بأسمى معايير الإحترافية</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-base md:text-xl text-gray-300 mb-5 md:mb-10 leading-relaxed max-w-2xl"
          >
            متخصصون في تغطية المناسبات الرجالية، الفعاليات الشركاتية، وتصوير المنتجات الفاخرة. نروي القصة بعدسة احترافية تعكس الفخامة والدقة.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-start"
          >
            <Link
              to="/contact"
              className="bg-[#DCC2F9] text-[#12131A] font-bold py-4 px-10 rounded-2xl text-center hover:bg-white transition-all shadow-xl shadow-[#DCC2F9]/20 active:scale-95"
            >
              احجز جلستك
            </Link>

            <button
              onClick={handleScrollToServices}
              className="border border-white/20 text-white font-semibold py-4 px-10 rounded-2xl hover:bg-white/10 transition-all backdrop-blur-md active:scale-95"
            >
              اكتشف المزيد
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Functional & Responsive */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 cursor-pointer z-20"
        onClick={handleScrollToServices}
      >
        <div className="flex flex-col items-center gap-2 group">
           <span className="text-white/40 tracking-[0.2em] uppercase group-hover:text-[#DCC2F9] transition-colors">اكتشف</span>
           <span className="material-symbols-outlined text-[#DCC2F9]/70 text-4xl animate-bounce group-hover:text-white transition-colors duration-300">
            keyboard_arrow_down
          </span>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;