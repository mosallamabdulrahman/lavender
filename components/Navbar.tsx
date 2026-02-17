import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navItems } from '../content/site';
import { motion, AnimatePresence } from 'framer-motion';
import { base } from '../src/utils/base';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // تحديد ما إذا كنا في الصفحة الرئيسية
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : isHomePage 
            ? 'bg-transparent py-4' 
            : 'bg-white shadow-sm py-4 border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex justify-between items-center ">
          
{/* 1. الجانب الأيمن: اللوجو */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                className={`transition-all duration-300 rounded object-contain 
                  ${isScrolled ? 'w-12 md:w-14' : 'w-12 md:w-16'} 
                  w-10 sm:w-14 md:w-16`} 
                src={base + 'assets/images/logo.jpeg'} 
                alt="lavender logo" 
              />
            </Link>
          </div>

          {/* 2. المنتصف: الروابط */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-bold transition-colors relative pb-1 ${
                  location.pathname === item.path
                    ? 'text-lavender-deep border-b-2 border-lavender-deep'
                    : isHomePage && !isScrolled ? 'text-white hover:text-lavender-light' : 'text-ink hover:text-lavender-deep'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* 3. الجانب الأيسر: زر الحجز */}
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <Link
                to="/contact"
                className="px-8 py-2.5 bg-lavender-deep text-white rounded-full text-sm font-bold hover:bg-ink transition-all shadow-md"
              >
                احجز الآن
              </Link>
            </div>

            <button
              className={`md:hidden p-2 ${isHomePage && !isScrolled ? 'text-white' : 'text-ink'}`}
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Logic Remains the Same */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              className="fixed top-0 right-0 w-[80%] h-screen bg-white z-[70] p-8 md:hidden shadow-2xl"
            >
               <div className="flex justify-between items-center mb-10 border-b pb-4">
                <img className="w-14 rounded" src={base + 'assets/images/logo.jpeg'} alt="logo" />
                <button onClick={() => setIsMenuOpen(false)} className="text-ink">
                  <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="flex flex-col gap-6 text-right">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-xl font-bold text-ink border-b border-gray-50 pb-3"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;