import React from 'react';
import { Button } from './Button';

// Icons for placeholders
const CameraIcon = () => (
  <svg className="w-16 h-16 text-electric/40 mb-4 group-hover:text-electric transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
);

const ShieldIcon = () => (
  <svg className="w-16 h-16 text-electric/40 mb-4 group-hover:text-electric transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const ChipIcon = () => (
  <svg className="w-16 h-16 text-electric/40 mb-4 group-hover:text-electric transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
  </svg>
);

export const posts = [
  {
    id: 1,
    title: "Porch Pirates on the Rise in the GTA: How to Protect Your Packages",
    category: "Local News",
    date: "Oct 24, 2024",
    excerpt: "With the holiday season approaching, package theft is spiking in Brampton and Mississauga. Here are 3 actionable steps to secure your deliveries.",
    icon: <CameraIcon />,
    readTime: "4 min read"
  },
  {
    id: 2,
    title: "Wired vs. Wireless Cameras: Why Professional Installation Matters",
    category: "Tech Tips",
    date: "Oct 12, 2024",
    excerpt: "Wireless cameras seem convenient, but battery issues and WiFi jamming are real risks. Discover why we recommend hardwired IP systems for reliability.",
    icon: <ChipIcon />,
    readTime: "6 min read"
  },
  {
    id: 3,
    title: "5 Signs Your Business Access Control System is Outdated",
    category: "Commercial Security",
    date: "Sep 28, 2024",
    excerpt: "Still using physical metal keys? You might be exposing your business to internal theft. Learn about the benefits of switching to fob or mobile access.",
    icon: <ShieldIcon />,
    readTime: "5 min read"
  },
  {
    id: 4,
    title: "Sewak Security Celebrates 10 Years Serving Brampton",
    category: "Company News",
    date: "Sep 15, 2024",
    excerpt: "A look back at our journey from a single van to a fleet of technicians protecting over 200 local families and businesses.",
    icon: <ShieldIcon />,
    readTime: "3 min read"
  }
];

interface BlogProps {
    onReadMore?: (id: number) => void;
}

export const Blog: React.FC<BlogProps> = ({ onReadMore }) => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-navy-900 py-16 md:py-24 text-center border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-electric font-mono text-sm tracking-wider uppercase mb-4 block">Industry Insights</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-lighter mb-6 leading-tight">
            Security News & <span className="text-electric">Tips</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-light leading-relaxed">
            Stay ahead of threats with expert advice, local crime trends, and company updates.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="bg-navy-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
            {posts.map((post) => (
              <div 
                key={post.id} 
                className="group bg-navy-900 rounded-xl overflow-hidden border border-navy-700 hover:border-electric transition-all duration-300 hover:-translate-y-1 shadow-lg"
              >
                {/* Image Placeholder */}
                <div className="h-64 bg-navy-900 relative overflow-hidden flex items-center justify-center border-b border-navy-700">
                  <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,#64ffda_25%,transparent_25%,transparent_75%,#64ffda_75%,#64ffda),linear-gradient(45deg,#64ffda_25%,transparent_25%,transparent_75%,#64ffda_75%,#64ffda)] bg-[length:20px_20px]"></div>
                  <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-500">
                    {post.icon}
                  </div>
                  <div className="absolute top-4 left-4 bg-navy-800/90 backdrop-blur px-3 py-1 rounded text-xs font-bold text-electric uppercase tracking-wider border border-navy-700">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center text-sm text-slate-light mb-4 space-x-4">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 bg-electric rounded-full"></span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-lighter mb-4 group-hover:text-electric transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-light leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                  <button 
                    onClick={() => onReadMore && onReadMore(post.id)}
                    className="text-electric font-semibold flex items-center hover:underline focus:outline-none"
                  >
                    Read Full Article
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-navy-900 py-20 border-t border-navy-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-navy-800 rounded-2xl p-8 md:p-12 border border-navy-700 shadow-2xl relative overflow-hidden">
            {/* Decorative Glow */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-electric/5 rounded-full blur-3xl"></div>
            
            <h2 className="text-3xl font-bold text-slate-lighter mb-4 relative z-10">Don't Miss a Security Update</h2>
            <p className="text-slate-light mb-8 relative z-10">
              Join 1,000+ Brampton residents receiving our monthly safety tips and exclusive hardware offers.
            </p>
            
            <form className="flex flex-col md:flex-row gap-4 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-grow bg-navy-900 border border-navy-700 rounded-lg px-6 py-4 text-slate-lighter focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric transition-all"
              />
              <Button variant="primary" className="whitespace-nowrap px-8">
                Subscribe
              </Button>
            </form>
            <p className="text-xs text-slate-light mt-4 opacity-60 relative z-10">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};