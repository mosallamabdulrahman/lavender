import { packages } from '../content/packages';
import { Link } from "react-router-dom";


const Packages: React.FC = () => {
  return (
    <>
    {/* Pricing Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-ink mb-4">باقات الاستثمار</h2>
            <p className="text-gray-500 font-medium">أسعار شفافة بجودة فائقة. ابحث عن الباقة المناسبة لفعاليتك.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
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
        </div>
      </section>
    </>
  );
};

export default Packages;
