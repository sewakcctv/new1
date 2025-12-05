import React from 'react';
import { Button } from './Button';

// Icons
const HomeIcon = () => (
  <svg className="w-16 h-16 text-electric mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const OfficeIcon = () => (
  <svg className="w-16 h-16 text-electric mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const FactoryIcon = () => (
  <svg className="w-16 h-16 text-electric mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
  </svg>
);

const SchoolIcon = () => (
  <svg className="w-16 h-16 text-electric mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
  </svg>
);

const sectors = [
  {
    title: "Residential",
    description: "Complete home protection including perimeter defense, smart doorbells, and interior motion detection. Keep your family safe with systems that are easy to use.",
    icon: <HomeIcon />
  },
  {
    title: "Commercial",
    description: "Retail loss prevention, office access control, and employee time tracking. Protect your inventory and data with enterprise-grade solutions.",
    icon: <OfficeIcon />
  },
  {
    title: "Industrial",
    description: "Warehouse monitoring, fleet tracking, and perimeter guarding for large facilities. Rugged hardware built to withstand harsh environments.",
    icon: <FactoryIcon />
  },
  {
    title: "Institutional",
    description: "Security for schools, hospitals, and government buildings. High-capacity systems designed for public safety and compliance.",
    icon: <SchoolIcon />
  }
];

interface IndustriesProps {
    onGetQuote?: () => void;
}

export const Industries: React.FC<IndustriesProps> = ({ onGetQuote }) => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-navy-900 py-16 md:py-24 text-center border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-electric font-mono text-sm tracking-wider uppercase mb-4 block">Sectors We Serve</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-lighter mb-6 leading-tight">
            Security Solutions for <span className="text-electric">Every Sector</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-light mb-8">
            From single-family homes to sprawling industrial complexes, we scale our solutions to meet your unique needs.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-navy-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {sectors.map((sector, index) => (
                    <div key={index} className="bg-navy-900 p-10 rounded-xl border border-navy-700 hover:border-electric transition-colors group">
                        <div className="group-hover:scale-110 transition-transform duration-500 origin-left">
                            {sector.icon}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-lighter mb-4 group-hover:text-electric transition-colors">
                            {sector.title}
                        </h3>
                        <p className="text-slate-light text-lg leading-relaxed mb-6">
                            {sector.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
      </section>

       {/* CTA */}
       <section className="bg-navy-900 py-16 border-t border-navy-700">
          <div className="max-w-7xl mx-auto px-4 text-center">
               <h2 className="text-2xl md:text-3xl font-bold text-slate-lighter mb-6">Need a specialized solution?</h2>
               <Button variant="primary" onClick={onGetQuote} className="px-8 py-4 text-lg">
                   Consult with an Expert
               </Button>
          </div>
       </section>
    </div>
  );
};