
import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../content/blog';

const Blog: React.FC = () => {
  return (
    <div className="py-16 bg-white text-right">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mb-16">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-ink mb-6">المدونة</h1>
          <p className="text-xl text-gray-500 font-medium">رؤى من الميدان، تعمق تقني، وقصص من مجتمعنا الفوتوغرافي.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <Link key={post.slug} to={`/blog/${post.slug}`} className="group flex flex-col h-full">
              <div className="aspect-video rounded-3xl overflow-hidden mb-6 bg-lavender-soft">
                <img src={post.cover} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={post.title} />
              </div>
              <div className="flex-grow">
                <div className="flex space-x-2 space-x-reverse mb-3">
                   {post.tags.map(t => <span key={t} className="text-[10px] font-bold uppercase tracking-widest text-lavender-deep">{t}</span>)}
                </div>
                <h2 className="text-2xl font-bold text-ink group-hover:text-lavender-deep transition-colors mb-4">{post.title}</h2>
                <p className="text-gray-500 text-sm line-clamp-3 mb-6 font-medium">{post.excerpt}</p>
              </div>
              <div className="flex items-center text-xs text-gray-400 pt-6 border-t border-gray-100 font-bold">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>{post.readingTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
