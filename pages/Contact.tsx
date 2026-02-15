
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../content/site';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    setTimeout(() => setFormState('success'), 1500);
  };

  return (
    <div className="py-16 text-right">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-ink mb-8">لنصنع <br />مشروعاً جديداً</h1>
            <p className="text-xl text-gray-500 mb-12 font-medium">سواء كان حفل زفاف فخم أو مؤتمر أعمال رفيع المستوى، نحن هنا لنساعدك في توثيق كل ثانية.</p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-lavender-soft rounded-2xl flex items-center justify-center text-lavender-deep shrink-0 ml-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">استوديو العاصمة</h4>
                  <p className="text-gray-500 font-medium">{siteConfig.address}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-lavender-soft rounded-2xl flex items-center justify-center text-lavender-deep shrink-0 ml-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">البريد الإلكتروني</h4>
                  <p className="text-gray-500 font-medium">{siteConfig.email}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-lavender-soft rounded-2xl flex items-center justify-center text-lavender-deep shrink-0 ml-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">اتصل بنا</h4>
                  <p className="text-gray-500 font-medium">{siteConfig.phone}</p>
                </div>
              </div>
            </div>

          <div className="relative mt-16 rounded-3xl overflow-hidden bg-zinc-900 aspect-video border border-white/10 shadow-2xl group">
            {/* خريطة جوجل الحقيقية مع فلاتر CSS مدمجة للمظهر الفاخر */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3478.147250269273!2d47.97127637626155!3d29.33668855164319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf9d26d8b0ca13%3A0xeb545707198541f5!2sBustan%20Holding!5e0!3m2!1sen!2skw!4v1700000000000!5m2!1sen!2skw"
              className="w-full h-full grayscale opacity-60 contrast-125 brightness-75 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100 group-hover:brightness-100 border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="موقع شركة مشاتل البستان"
            ></iframe>

            {/* طبقة حماية شفافة (Overlay) تمنع التفاعل بالخطأ أثناء التمرير وتختفي عند التحويم */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/50 via-transparent to-transparent group-hover:opacity-0 transition-opacity duration-500"></div>

            {/* ملصق توضيحي صغير يظهر في الزاوية */}
            <div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-2xl pointer-events-none group-hover:opacity-0 transition-opacity duration-500">
              <span className="flex items-center gap-2 text-white text-xs font-medium">
                <span className="w-2 h-2 bg-lavender rounded-full animate-pulse"></span>
                موقعنا في مدينة الكويت
              </span>
            </div>
          </div>
          </div>

          <div className="bg-lavender-soft rounded-[3rem] p-8 md:p-12 h-fit">
            {formState === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-20"
              >
                <div className="w-20 h-20 bg-lavender-deep rounded-full flex items-center justify-center text-white mb-6">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-3xl font-serif font-bold mb-4">تم الإرسال بنجاح!</h3>
                <p className="text-gray-600 mb-8 font-medium">شكراً لتواصلكم معنا. سنقوم بالرد عليكم خلال 24 ساعة كحد أقصى.</p>
                <button
                  onClick={() => setFormState('idle')}
                  className="px-8 py-4 bg-ink text-white rounded-full font-bold"
                >
                  إرسال رسالة أخرى
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold mr-4">الاسم الكامل</label>
                    <input required type="text" className="w-full px-6 py-4 rounded-2xl bg-white border border-transparent focus:border-lavender-deep outline-none transition-all text-right" placeholder="مثال: جابر الأحمد" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold mr-4">البريد الإلكتروني</label>
                    <input required type="email" className="w-full px-6 py-4 rounded-2xl bg-white border border-transparent focus:border-lavender-deep outline-none transition-all text-right" placeholder="jaber@example.kw" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold mr-4">نوع الفعالية</label>
                  <select className="w-full px-6 py-4 rounded-2xl bg-white border border-transparent focus:border-lavender-deep outline-none transition-all appearance-none text-right">
                    <option>حفل زفاف</option>
                    <option>فعالية شركات</option>
                    <option>إطلاق منتج</option>
                    <option>حفل تخرج</option>
                    <option>أخرى</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold mr-4">الرسالة</label>
                  <textarea rows={5} required className="w-full px-6 py-4 rounded-2xl bg-white border border-transparent focus:border-lavender-deep outline-none transition-all resize-none text-right" placeholder="أخبرنا المزيد عن فعاليتك..." />
                </div>
                <button
                  disabled={formState === 'loading'}
                  className="w-full py-5 bg-lavender-deep text-white rounded-full font-bold text-lg hover:bg-ink transition-all disabled:opacity-50"
                >
                  {formState === 'loading' ? 'جاري الإرسال...' : 'إرسال الطلب'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
