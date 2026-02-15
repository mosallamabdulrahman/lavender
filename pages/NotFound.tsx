
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-9xl font-serif font-bold text-lavender-deep mb-4">404</h1>
      <h2 className="text-3xl font-bold mb-6">عذراً! الصفحة غير موجودة</h2>
      <p className="text-gray-500 mb-10 max-w-md font-medium">الصفحة التي تبحث عنها قد تم نقلها أو أنها لم تكن موجودة أبداً. دعنا نعدك إلى الاستوديو.</p>
      <Link to="/" className="px-10 py-4 bg-lavender-deep text-white rounded-full font-bold hover:bg-ink transition-all shadow-lg">
        العودة للرئيسية
      </Link>
    </div>
  );
};

export default NotFound;
