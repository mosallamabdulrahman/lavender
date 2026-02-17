
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioItems } from '../content/work';

const categoryTranslation: Record<string, string> = {
  'All': 'الكل',
  'Wedding': 'زفاف',
  'Corporate': 'شركات',
  'Graduation': 'تخرج',
  'Product': 'منتجات',
  'Event': 'فعاليات'
};

const categories = ['All', 'Wedding', 'Graduation', 'Product', 'Event'];

const Work: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-16 text-right">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-ink mb-6">معرض أعمالنا</h1>
          <p className="text-xl text-gray-500 font-medium">مجموعة مختارة من أفضل لقطاتنا التي تغطي مختلف القطاعات والمناسبات في الكويت.</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-4 mb-12 justify-start">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                activeCategory === cat
                  ? 'bg-lavender-deep text-white shadow-lg'
                  : 'bg-lavender-soft text-ink hover:bg-lavender-deep/20'
              }`}
            >
              {categoryTranslation[cat]}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative aspect-[4/5] rounded-3xl overflow-hidden bg-gray-100"
              >
                <img src={item.imageUrl} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={item.title} />
                <div className="absolute inset-0 bg-ink/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8 text-white text-right">
                  <span className="text-xs uppercase tracking-widest font-bold mb-2 text-lavender">{categoryTranslation[item.category] || item.category}</span>
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Work;
