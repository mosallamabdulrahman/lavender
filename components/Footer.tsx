
import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig, navItems } from '../content/site';
import { base } from '../src/utils/base';

const Footer: React.FC = () => {
  const socials = [
    { 
      name: 'Instagram', 
      url: siteConfig.socials.instagram,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      )
    },
    { 
      name: 'X', 
      url: siteConfig.socials.twitter,
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      )
    },
    { 
      name: 'LinkedIn', 
      url: siteConfig.socials.linkedin,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      )
    },
  ];

  return (
    <footer className="bg-ink text-white pt-20 pb-10 text-right">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-12">
        <div className="space-y-6">
          {/* 1. الجانب الأيمن: اللوجو (RTL) */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                className='transition-all duration-300 rounded w-12 sm:w-14' 
                src={base + 'assets/images/logo.jpeg'} 
                alt="lavender logo" 
              />
            </Link>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed font-medium">
            تصوير فعاليات فاخرة في الكويت. نلتقط اللحظات بدقة، أناقة، واحترام كامل للخصوصية والتقاليد.
          </p>
          <div className="flex space-x-4 space-x-reverse">
            {socials.map(social => (
              <a 
                key={social.name} 
                href={social.url} 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-lavender hover:text-ink transition-all"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">استكشف</h4>
          <ul className="space-y-4 text-gray-400 text-sm font-bold">
            {navItems.map(item => (
              <li key={item.path}>
                <Link to={item.path} className="hover:text-lavender transition-colors">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">خدماتنا</h4>
          <ul className="space-y-4 text-gray-400 text-sm font-bold">
            <li><Link to="/#services" className="hover:text-lavender">حفلات الزفاف</Link></li>
            <li><Link to="/#services" className="hover:text-lavender">فعاليات الشركات</Link></li>
            <li><Link to="/#services" className="hover:text-lavender">حفلات التخرج</Link></li>
            <li><Link to="/#services" className="hover:text-lavender">تصوير المنتجات</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">تواصل معنا</h4>
          <ul className="space-y-4 text-gray-400 text-sm font-bold">
            <li>{siteConfig.address}</li>
            <li>{siteConfig.email}</li>
            <li dir='ltr'><a href="tel:+96569003952">{siteConfig.phone}</a></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-8 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-bold">
        <p dir="ltr">&copy; {new Date().getFullYear()} Lavender Studios Kuwait. All rights reserved.</p>
        <div className="flex space-x-6 space-x-reverse mt-4 md:mt-0">
          <a href="#" className="hover:text-white">سياسة الخصوصية</a>
          <a href="#" className="hover:text-white">شروط الخدمة</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
