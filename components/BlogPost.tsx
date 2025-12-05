import React from 'react';
import { Button } from './Button';

export interface BlogPostProps {
  id: number;
  title: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  content: React.ReactNode; // Can be JSX or string
  icon?: React.ReactNode;
  onBack?: () => void;
}

// Sidebar Component for reusability within the template
const Sidebar = () => (
  <div className="space-y-8">
    {/* Categories Widget */}
    <div className="bg-navy-800 rounded-xl p-6 border border-navy-700 shadow-lg">
      <h3 className="text-slate-lighter font-bold text-lg mb-4 border-b border-navy-700 pb-2">Categories</h3>
      <ul className="space-y-2">
        {['Local News', 'Tech Tips', 'Commercial Security', 'Company News', 'Case Studies'].map((cat, idx) => (
          <li key={idx}>
            <button className="text-slate-light hover:text-electric transition-colors text-sm flex items-center w-full">
              <span className="w-1.5 h-1.5 bg-electric/50 rounded-full mr-2"></span>
              {cat}
            </button>
          </li>
        ))}
      </ul>
    </div>

    {/* Newsletter Widget (Mini) */}
    <div className="bg-navy-900 rounded-xl p-6 border border-navy-700 shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-20 h-20 bg-electric/5 rounded-full blur-xl"></div>
        <h3 className="text-slate-lighter font-bold text-lg mb-2">Stay Secure</h3>
        <p className="text-slate-light text-sm mb-4">Get the latest Brampton security tips delivered to your inbox.</p>
        <input 
            type="email" 
            placeholder="Email address" 
            className="w-full bg-navy-800 border border-navy-700 rounded px-3 py-2 text-sm text-slate-lighter mb-3 focus:border-electric outline-none"
        />
        <Button variant="primary" fullWidth className="text-sm py-2">Subscribe</Button>
    </div>

    {/* Share Widget (Visual Only) */}
    <div className="bg-navy-800 rounded-xl p-6 border border-navy-700 shadow-lg">
      <h3 className="text-slate-lighter font-bold text-lg mb-4">Share Article</h3>
      <div className="flex gap-2">
        {['Twitter', 'LinkedIn', 'Facebook', 'Email'].map((social, idx) => (
            <button key={idx} className="flex-1 bg-navy-900 hover:bg-navy-700 text-slate-light hover:text-electric py-2 rounded border border-navy-700 transition-colors text-xs font-semibold">
                {social}
            </button>
        ))}
      </div>
    </div>
  </div>
);

export const BlogPost: React.FC<BlogPostProps> = ({
  title,
  category,
  date,
  author,
  readTime,
  content,
  icon,
  onBack
}) => {
  return (
    <div className="pt-20">
      {/* Back Navigation */}
      <div className="bg-navy-900 pt-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <button 
            onClick={onBack}
            className="flex items-center text-sm text-slate-light hover:text-electric transition-colors group"
        >
            <svg className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
        </button>
      </div>

      {/* Hero / Header Section */}
      <section className="bg-navy-900 py-12 md:py-16 border-b border-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="inline-block px-3 py-1 bg-electric/10 text-electric text-xs font-bold uppercase tracking-wide rounded mb-6 border border-electric/20">
            {category}
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-slate-lighter mb-8 leading-tight">
            {title}
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-light font-medium">
            <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-electric" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                {author}
            </div>
            <div className="w-1.5 h-1.5 bg-navy-700 rounded-full"></div>
            <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-electric" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {date}
            </div>
            <div className="w-1.5 h-1.5 bg-navy-700 rounded-full"></div>
            <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-electric" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {readTime}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="bg-navy-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                
                {/* Main Article Body */}
                <div className="lg:col-span-8">
                    {/* Featured Visual Placeholder */}
                    <div className="w-full h-64 md:h-96 bg-navy-800 rounded-xl mb-12 relative overflow-hidden border border-navy-700 flex items-center justify-center">
                        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(45deg,#112240_25%,transparent_25%,transparent_75%,#112240_75%,#112240),linear-gradient(45deg,#112240_25%,transparent_25%,transparent_75%,#112240_75%,#112240)] bg-[length:20px_20px]"></div>
                        <div className="transform scale-150 opacity-80 text-electric">
                            {icon}
                        </div>
                    </div>

                    {/* Content Typography Container */}
                    <div className="prose prose-invert prose-lg max-w-none text-slate-light">
                        {/* 
                           We render the children/content here. 
                           Since we aren't using @tailwindcss/typography plugin in the index.html setup, 
                           we'll wrap the content in a container and style typical elements manually or pass JSX.
                        */}
                        <div className="space-y-6 leading-relaxed">
                            {content}
                        </div>
                    </div>

                    {/* Bottom CTA for Article */}
                    <div className="mt-16 p-8 bg-navy-800 rounded-xl border-l-4 border-electric shadow-lg">
                        <h3 className="text-xl font-bold text-slate-lighter mb-2">Have questions about this topic?</h3>
                        <p className="text-slate-light mb-4">Our local experts in Brampton are happy to explain how this applies to your specific property.</p>
                        <Button variant="outline" className="text-sm">Speak to an Expert</Button>
                    </div>
                </div>

                {/* Sidebar */}
                <aside className="lg:col-span-4 space-y-8">
                    <div className="sticky top-24">
                        <Sidebar />
                    </div>
                </aside>

            </div>
        </div>
      </section>
    </div>
  );
};