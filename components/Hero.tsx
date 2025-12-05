import React from 'react';
import { Button } from './Button';

// Icons for trust signals
const ShieldCheckIcon = () => (
  <svg className="w-5 h-5 text-electric mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const StarIcon = () => (
  <svg className="w-5 h-5 text-electric mr-2" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const UserGroupIcon = () => (
  <svg className="w-5 h-5 text-electric mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

interface HeroProps {
  onNavigate?: (page: string, targetId?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-navy-900">
      
      {/* Background Decor - Industrial Grid/Lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8892b0_1px,transparent_1px),linear-gradient(to_bottom,#8892b0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>
      
      {/* Subtle Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-electric/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center lg:text-left">
          
          {/* Pre-headline label */}
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-electric/30 bg-electric/10 text-electric text-sm font-mono mb-6 animate-fade-in-up">
            <span className="flex h-2 w-2 relative mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-electric"></span>
            </span>
            Serving Brampton & GTA since 2015
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-slate-lighter tracking-tight mb-6 leading-tight">
            Securing Brampton <br className="hidden lg:block" /> 
            <span className="text-slate-light">Homes and Businesses.</span>
          </h1>

          <p className="mt-4 max-w-2xl mx-auto lg:mx-0 text-lg md:text-xl text-slate-light mb-8 leading-relaxed">
            Local Service You Can Trust, Not Corporate Call Centers. 
            We provide industrial-grade security solutions tailored for your peace of mind.
          </p>

          {/* Trust Signals */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-8 mb-10 text-slate-light text-sm font-medium">
             <div className="flex items-center">
                <UserGroupIcon />
                <span>Trusted by 200+ Families</span>
             </div>
             <div className="flex items-center">
                <StarIcon />
                <span>5.0 Star Google Rating</span>
             </div>
             <div className="flex items-center">
                <ShieldCheckIcon />
                <span>No High-Pressure Sales</span>
             </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              variant="primary" 
              className="text-base md:text-lg px-8 py-4"
              onClick={() => onNavigate && onNavigate('contact')}
            >
              Schedule Free Security Assessment
            </Button>
            <Button 
              variant="outline" 
              className="text-base md:text-lg px-8 py-4"
              onClick={() => onNavigate && onNavigate('contact')}
            >
              Honest Pricing Estimator
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};