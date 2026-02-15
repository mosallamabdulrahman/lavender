
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="py-16 text-right">
      <section className="container mx-auto px-4 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-ink mb-8">صناعة الإرث البصري منذ 2012</h1>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed font-medium">
              تأسس استوديو لافندر في قلب مدينة الكويت بمهمة واحدة: تقديم تصوير فوتوغرافي عالمي المستوى يحترم ويحتفي بثقافتنا المحلية الغنية.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed font-medium">
              نحن ندرك أن المناسبات الكويتية هي أكثر من مجرد تجمعات؛ إنها تراث قيد التوثيق. يقدم فريقنا من المصورين المتمرسين مزيجاً من الإتقان التقني والرؤية الفنية، لضمان أن كل لقطة تحكي قصة تستحق التذكر.
            </p>
            <div className="flex space-x-12 space-x-reverse">
              <div>
                <div className="text-4xl font-bold text-lavender-deep">500+</div>
                <div className="text-gray-400 text-sm font-bold uppercase tracking-widest mt-2">فعالية تمت تغطيتها</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-lavender-deep">12+</div>
                <div className="text-gray-400 text-sm font-bold uppercase tracking-widest mt-2">سنة من الخبرة</div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[3rem] overflow-hidden aspect-square shadow-2xl relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop" 
              className="w-full h-full object-cover" 
              alt="Professional Studio Equipment" 
              loading="lazy"
            />
            <div className="absolute inset-0 bg-lavender-deep/10 mix-blend-multiply"></div>
          </motion.div>
        </div>
      </section>

      <section className="bg-lavender-soft py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-center mb-16">قيمنا الجوهرية</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'النزاهة الثقافية', desc: 'احترام عميق للتقاليد الكويتية وبروتوكولات المناسبات الاجتماعية والرجالية.' },
              { title: 'الرؤية العصرية', desc: 'تطوير مستمر لجمالياتنا لنبقى دائماً في طليعة الابتكار البصري العالمي.' },
              { title: 'الجودة المطلقة', desc: 'من اللقطة الأولى حتى الطباعة النهائية، نهدف دوماً إلى بلوغ الكمال.' }
            ].map(v => (
              <div key={v.title} className="text-center group">
                <div className="w-16 h-16 bg-white rounded-full mx-auto mb-6 flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm">
                   <div className="w-3 h-3 bg-lavender-deep rounded-full"></div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{v.title}</h3>
                <p className="text-gray-600 leading-relaxed font-medium">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
