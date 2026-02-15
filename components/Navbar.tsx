import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navItems } from '../content/site';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  /* ================= Scroll Effect ================= */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* ================= Lock Scroll When Menu Open ================= */
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  /* ================= Close on ESC ================= */
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <nav
      className={`fixed top-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 space-x-reverse">
          <span className="text-2xl font-serif font-bold text-ink">
            لافندر <span className="text-lavender-deep">للتصوير</span>
          </span>
        </Link>

        {/* ================= Desktop Nav (لم يتم تغييره نهائيًا) ================= */}
        <div className="hidden md:flex items-center space-x-8 space-x-reverse">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-bold transition-colors hover:text-lavender-deep ${
                location.pathname === item.path
                  ? 'text-lavender-deep border-b-2 border-lavender-deep'
                  : 'text-ink'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="px-6 py-2.5 bg-lavender-deep text-white rounded-full text-sm font-bold hover:bg-ink transition-colors"
          >
            احجز الآن
          </Link>
        </div>

        {/* ================= Mobile Toggle ================= */}
        <button
          className="md:hidden text-ink p-2"
          onClick={() => setIsMenuOpen(true)}
          aria-label="القائمة"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* ================= Mobile Menu ================= */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Side Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="fixed top-0 right-0 w-full h-screen bg-lavender-soft z-50 flex flex-col p-8 md:hidden"
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-16">
                <span className="text-2xl font-bold text-ink">
                  لافندر
                </span>

                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-ink hover:text-lavender-deep transition-colors"
                  aria-label="إغلاق"
                >
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Links */}
              <div className="flex flex-col gap-10 text-2xl text-ink text-right font-bold">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="hover:text-lavender-deep transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-auto">
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full bg-lavender-deep text-white text-center py-4 rounded-2xl font-bold mt-16 hover:bg-ink transition-colors"
                >
                  احجز الآن
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
