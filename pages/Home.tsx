
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { services } from '../content/services';
import { packages } from '../content/packages';
import { portfolioItems } from '../content/work';
import { blogPosts } from '../content/blog';
import HeroSection from '@/components/HeroSection';

const Home: React.FC = () => {
  const categoryMap: Record<string, string> = {
    'Corporate': 'شركات',
    'Wedding': 'زفاف',
    'Product': 'منتجات',
    'Graduation': 'تخرج',
    'Event': 'فعالية'
  };

  return (
    <div className="overflow-hidden">
    <HeroSection />

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-ink mb-4">تخصصاتنا</h2>
            <p className="text-gray-500 max-w-xl mx-auto font-medium">خبرات مصممة لتناسب الطبيعة الفريدة للمناسبات الاجتماعية والمهنية في الكويت.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-lavender-soft rounded-3xl hover:bg-white hover:shadow-2xl hover:shadow-lavender-deep/10 border border-transparent hover:border-lavender-soft transition-all"
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 text-lavender-deep shadow-sm">
                   <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 font-medium">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map(f => (
                    <li key={f} className="text-xs text-lavender-deep font-bold flex items-center">
                      <span className="w-1.5 h-1.5 bg-lavender-deep rounded-full ml-2"></span>
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Grid */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-serif font-bold text-ink mb-2">أبرز أعمالنا</h2>
              <p className="text-gray-500 font-medium">لمحة عن أحدث مشاريعنا في مختلف مناطق الكويت.</p>
            </div>
            <Link to="/work" className="mt-4 md:mt-0 text-lavender-deep font-bold border-b-2 border-lavender-deep pb-1 hover:text-ink hover:border-ink transition-colors">
              استكشف المعرض الكامل
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {portfolioItems.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className={`group relative overflow-hidden rounded-2xl ${idx % 3 === 0 ? 'row-span-2' : ''}`}
              >
                <img src={item.imageUrl} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt={item.title} loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6 text-right">
                  <p className="text-lavender text-[10px] uppercase font-bold mb-1 tracking-widest">{categoryMap[item.category] || item.category}</p>
                  <h4 className="text-white text-lg font-bold">{item.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-ink mb-4">باقات الاستثمار</h2>
            <p className="text-gray-500 font-medium">أسعار شفافة بجودة فائقة. ابحث عن الباقة المناسبة لفعاليتك.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.slice(0, 3).map((pkg) => (
              <div key={pkg.id} className={`relative p-8 rounded-3xl border transition-all hover:shadow-2xl ${pkg.isFeatured ? 'border-lavender-deep shadow-xl shadow-lavender-deep/10' : 'border-gray-100'}`}>
                {pkg.isFeatured && (
                  <span className="absolute top-0 left-8 -translate-y-1/2 bg-accent text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                    الأكثر طلباً
                  </span>
                )}
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-gray-400 text-sm mb-6">{pkg.description}</p>
                <div className="text-4xl font-bold text-ink mb-8">{pkg.price}</div>
                <ul className="space-y-4 mb-10">
                  {pkg.features.map(feat => (
                    <li key={feat} className="flex items-start text-sm text-gray-600 font-medium">
                      <svg className="w-5 h-5 text-lavender-deep ml-3 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
                      {feat}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className={`block text-center py-4 rounded-xl font-bold transition-all ${pkg.isFeatured ? 'bg-lavender-deep text-white hover:bg-ink' : 'bg-gray-100 text-ink hover:bg-lavender-soft'}`}>
                  اختيار الباقة
                </Link>
              </div>
            ))}
          </div>
<div className="mt-16 text-center">
  <Link
    to="/packages"
    className="
      group relative inline-flex items-center gap-3
      px-14 py-5
      rounded-full
      bg-gradient-to-r from-lavender to-purple-500
      text-white font-bold text-lg
      shadow-[0_10px_30px_rgba(124,58,237,0.35)]
      transition-all duration-300
      hover:shadow-[0_15px_40px_rgba(124,58,237,0.5)]
      hover:-translate-y-1
      active:scale-95
      overflow-hidden
    "
  >
    <span className="relative z-10">جميع الباقات</span>

    {/* subtle shine effect */}
    <span className="
      absolute inset-0
      bg-white/10
      opacity-0
      group-hover:opacity-100
      transition-opacity duration-300
    "/>

    {/* animated light sweep */}
    <span className="
      absolute -left-20 top-0 h-full w-20
      bg-white/30 blur-xl
      rotate-12
      translate-x-0
      group-hover:translate-x-[400%]
      transition-all duration-700
    "/>
  </Link>
</div>

        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-24 bg-lavender-soft/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-ink mb-4">كواليس الاستوديو</h2>
            <p className="text-gray-500 font-medium">نصائح في التصوير، أدلة للفعاليات المحلية، وآخر أخبار الاستوديو.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map(post => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="group h-full">
                <article className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all h-full flex flex-col">
                  <div className="aspect-video overflow-hidden">
                    <img src={post.cover} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={post.title} loading="lazy" />
                  </div>
                  <div className="p-8 flex-grow">
                    <div className="flex space-x-2 space-x-reverse mb-4">
                      {post.tags.map(t => <span key={t} className="text-[10px] uppercase tracking-wider font-bold text-lavender-deep bg-lavender-soft px-2 py-1 rounded">{t}</span>)}
                    </div>
                    <h3 className="text-xl font-bold text-ink mb-4 group-hover:text-lavender-deep transition-colors leading-tight">{post.title}</h3>
                    <p className="text-gray-500 text-sm line-clamp-2 font-medium">{post.excerpt}</p>
                  </div>
                  <div className="px-8 py-6 border-t border-gray-50 flex justify-between items-center text-xs text-gray-400 font-bold">
                    <span>{post.date}</span>
                    <span>{post.readingTime}</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-ink rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
             <div className="absolute top-0 left-0 w-96 h-96 bg-lavender-deep/10 blur-[100px] -translate-y-1/2 -translate-x-1/2"></div>
             <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8 relative z-10">هل أنت مستعد لتوثيق <br />فعاليتك القادمة؟</h2>
             <Link to="/contact" className="relative z-10 inline-block px-12 py-5 bg-lavender text-ink rounded-full font-bold text-lg hover:bg-white hover:scale-105 transition-all shadow-xl">
                لنبدأ المحادثة الآن
             </Link>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Home;
