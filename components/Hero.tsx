import React, { useEffect, useState } from 'react';
import { Button } from './Button';

interface HeroProps {
  onNavigate?: (page: string, targetId?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [scrollY, setScrollY] = useState(0);

  // Parallax Effect Logic
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      
      {/* --- Cinematic Background Image --- */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2670"
            alt="Secure Industrial Warehouse"
            className="w-full h-full object-cover opacity-60 transform scale-105 animate-[pulse-slow_10s_ease-in-out_infinite]" 
            style={{ 
                transform: `scale(${1.05 + scrollY * 0.0005}) translateY(${scrollY * 0.2}px)`,
                transition: 'transform 0.1s linear'
            }}
        />
        {/* Dark Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/40"></div>
        <div className="absolute inset-0 bg-slate-900/20 mix-blend-multiply"></div>
      </div>

      {/* --- Content --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        
        {/* Animated Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-yellow-400 text-sm font-medium mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <span className="flex h-2 w-2 relative mr-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400"></span>
          </span>
          Trusted by 200+ Brampton Families
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight mb-8 leading-[1.1] animate-fade-in-up drop-shadow-lg" style={{ animationDelay: '0.2s' }}>
          Security <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
            Without Compromise.
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-2xl text-slate-200 mb-12 font-light leading-relaxed animate-fade-in-up drop-shadow-md" style={{ animationDelay: '0.4s' }}>
          Local technicians. Industrial-grade hardware.<br className="hidden md:block" /> 
          Protecting what matters most, 24/7.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          
          <Button 
            shape="pill" 
            className="bg-yellow-400 text-slate-900 hover:bg-yellow-300 border-none text-lg font-bold shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:shadow-[0_0_30px_rgba(250,204,21,0.5)] transition-all duration-300 transform hover:-translate-y-1"
            onClick={() => onNavigate && onNavigate('contact')}
          >
            Get Free Quote
          </Button>

          <Button 
            shape="pill" 
            className="bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-md text-lg font-medium transition-all duration-300"
            onClick={() => onNavigate && onNavigate('home', 'services')}
          >
            View Our Services
          </Button>

        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-80 z-10">
        <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>

    </section>
  );
};