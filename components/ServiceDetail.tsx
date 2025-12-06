import React from 'react';
import { Button } from './Button';
import { PHONE_LINK, PHONE_NUMBER } from '../constants';

export interface ServiceBenefit {
  title: string;
  description: string;
  icon?: React.ReactNode; 
}

export interface ServiceFeature {
  title: string;
  description?: string;
  icon?: React.ReactNode;
}

export interface ServicePageProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  benefits: ServiceBenefit[];
  features: ServiceFeature[];
  brands: string[];
  onBack?: () => void;
  onGetQuote?: () => void;
}

// Map service titles to Unsplash Images
const getImageForService = (title: string, index: number) => {
    // Default Fallbacks
    const defaults = [
        "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=1000", // Cameras
        "https://images.unsplash.com/photo-1558494949-efc02220ec98?auto=format&fit=crop&q=80&w=1000", // Servers
    ];
    
    const lower = title.toLowerCase();
    
    if (lower.includes('camera') || lower.includes('monitoring')) {
        return index === 0 
            ? "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=1000" // CCTV
            : "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=1000"; // Tech working
    }
    if (lower.includes('access') || lower.includes('intercom')) {
        return index === 0
            ? "https://images.unsplash.com/photo-1625314897458-9e7395790277?auto=format&fit=crop&q=80&w=1000" // Hand scan
            : "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000"; // Office
    }
    if (lower.includes('cabling')) {
        return index === 0
            ? "https://images.unsplash.com/photo-1544197150-b99a580bbc7c?auto=format&fit=crop&q=80&w=1000" // Cables
            : "https://images.unsplash.com/photo-1558494949-efc02220ec98?auto=format&fit=crop&q=80&w=1000"; // Server Room
    }
    if (lower.includes('alarm')) {
        return index === 0
            ? "https://images.unsplash.com/photo-1558036117-15db97929410?auto=format&fit=crop&q=80&w=1000" // Home
            : "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000"; // Smart app
    }

    return defaults[index % defaults.length];
}

// Visual Image Component
const ServiceImageCard = ({ title, index }: { title: string, index: number }) => {
    const imgSrc = getImageForService(title, index);
    
    return (
        <div className={`relative h-64 md:h-80 w-full rounded-lg overflow-hidden bg-navy-800 border border-navy-700 shadow-xl group`}>
            {/* Image */}
            <img 
                src={imgSrc} 
                alt={title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Dark Overlay for "Tech" feel */}
            <div className="absolute inset-0 bg-navy-900/20 group-hover:bg-navy-900/0 transition-colors duration-500"></div>

            {/* Decorative accents */}
            <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent group-hover:border-electric/20 transition-colors duration-500 rounded-lg pointer-events-none"></div>
        </div>
    );
};

const CheckIcon = () => (
  <svg className="w-5 h-5 text-electric mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export const ServiceDetail: React.FC<ServicePageProps> = ({
  title,
  subtitle,
  ctaText = "Get A Free Quote",
  benefits,
  features,
  brands,
  onBack,
  onGetQuote
}) => {
  return (
    <div className="pt-20">
       {/* Breadcrumb / Back */}
       <div className="bg-navy-900 pt-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <button 
                onClick={onBack}
                className="flex items-center text-sm text-slate-light hover:text-electric transition-colors"
            >
                <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Services
            </button>
       </div>

      {/* Hero Section */}
      <section className="bg-navy-900 py-16 md:py-24 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-lighter mb-6 leading-tight">
            {title}
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-light mb-10 leading-relaxed">
            {subtitle}
          </p>
          <Button 
            variant="primary" 
            className="text-lg px-8 py-4"
            onClick={onGetQuote}
          >
              {ctaText}
          </Button>
        </div>
      </section>

      {/* Key Benefits (Zig-Zag) */}
      <section className="bg-navy-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {benefits.map((benefit, index) => (
             <div key={index} className="flex flex-col md:flex-row items-center gap-12">
                {/* Visual */}
                <div className={`w-full md:w-1/2 ${index % 2 !== 0 ? 'md:order-last' : ''}`}>
                    <ServiceImageCard title={title} index={index} />
                </div>
                
                {/* Content */}
                <div className="w-full md:w-1/2 text-left">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="flex items-center justify-center w-8 h-8 rounded bg-electric/10 text-electric font-bold border border-electric/30">
                            {index + 1}
                        </span>
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-lighter">
                            {benefit.title}
                        </h2>
                    </div>
                    <p className="text-slate-light text-lg leading-relaxed">
                        {benefit.description}
                    </p>
                </div>
             </div>
          ))}

        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-navy-900 py-20 border-y border-navy-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-slate-lighter mb-4">Standard Features</h2>
                <div className="h-1 w-20 bg-electric mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                    <div key={index} className="bg-navy-800 p-6 rounded-lg border border-navy-700 hover:border-electric/50 transition-colors group">
                        <div className="mb-4 text-electric group-hover:scale-110 transition-transform duration-300">
                            {feature.icon || <CheckIcon />}
                        </div>
                        <h3 className="text-lg font-bold text-slate-lighter mb-2">{feature.title}</h3>
                        {feature.description && (
                            <p className="text-slate-light text-sm">{feature.description}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="bg-navy-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-slate-light text-sm uppercase tracking-widest mb-8 font-mono">Trusted Technology Partners</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                {brands.map((brand, idx) => (
                    <span key={idx} className="text-xl md:text-2xl font-bold text-slate-lighter border-b-2 border-transparent hover:border-electric pb-1 cursor-default">
                        {brand}
                    </span>
                ))}
            </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-electric py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-navy-900 opacity-90 pattern-grid-lg"></div>
          <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to upgrade your security?</h2>
              <p className="text-slate-lighter text-lg mb-8">Get a free assessment from a local expert today. No hidden fees, just honest advice.</p>
              <a href={PHONE_LINK}>
                <button className="bg-white text-navy-900 font-bold text-xl px-10 py-5 rounded hover:bg-slate-100 transition-colors shadow-xl">
                    Call {PHONE_NUMBER}
                </button>
              </a>
          </div>
      </section>
    </div>
  );
};