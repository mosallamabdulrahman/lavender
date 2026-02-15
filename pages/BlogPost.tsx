
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { blogPosts } from '../content/blog';
import ReactMarkdown from 'react-markdown';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/404" />;
  }

  return (
    <div className="py-16 text-right">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link to="/blog" className="inline-flex items-center text-sm font-bold text-lavender-deep mb-12 hover:translate-x-[4px] transition-transform">
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
          العودة للمقالات
        </Link>

        <header className="mb-12">
          <div className="flex space-x-2 space-x-reverse mb-6">
             {post.tags.map(t => <span key={t} className="px-3 py-1 bg-lavender-soft text-lavender-deep text-xs font-bold rounded-full">{t}</span>)}
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-ink mb-6 leading-tight">{post.title}</h1>
          <div className="flex items-center space-x-6 space-x-reverse text-gray-400 text-sm font-bold">
            <span>تحرير: استوديو لافندر</span>
            <span>{post.date}</span>
            <span>{post.readingTime}</span>
          </div>
        </header>

        <div className="rounded-[2.5rem] overflow-hidden aspect-[21/9] mb-16 shadow-xl">
           <img src={post.cover} className="w-full h-full object-cover" alt={post.title} />
        </div>

        <div className="prose prose-lg prose-lavender max-w-none text-right font-medium">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>

        <div className="mt-24 p-12 bg-lavender-soft rounded-3xl text-center">
          <h3 className="text-2xl font-serif font-bold mb-4">هل تريد المزيد من النصائح؟</h3>
          <p className="text-gray-600 mb-8 font-medium">اشترك في نشرتنا البريدية لتصلك أحدث نصائح التصوير وتحديثات الفعاليات في الكويت.</p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
             <input type="email" placeholder="البريد الإلكتروني" className="flex-grow px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-lavender-deep text-right" />
             <button className="px-8 py-4 bg-ink text-white rounded-full font-bold hover:bg-lavender-deep transition-colors shrink-0">اشترك الآن</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
