import React from 'react';
import { Button } from './Button';
import { PHONE_LINK } from '../constants';

// Icons for placeholders to make them visually distinct
const HomeIcon = () => (
  <svg className="w-16 h-16 text-slate-700 group-hover:text-electric/50 transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const CameraIcon = () => (
  <svg className="w-16 h-16 text-slate-700 group-hover:text-electric/50 transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
);

const ChipIcon = () => (
  <svg className="w-16 h-16 text-slate-700 group-hover:text-electric/50 transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
  </svg>
);

const projects = [
  {
    id: 1,
    title: "Neat Cabling in Brampton Warehouse",
    category: "Cabling",
    icon: <ChipIcon />,
    description: "Structured Cat6 installation organized in server rack."
  },
  {
    id: 2,
    title: "Dome Camera Install",
    category: "Commercial",
    icon: <CameraIcon />,
    description: "Vandal-proof dome cameras for retail perimeter."
  },
  {
    id: 3,
    title: "Luxury Home Security",
    category: "Residential",
    icon: <HomeIcon />,
    description: "Integrated smart alarm and camera system."
  },
  {
    id: 4,
    title: "Office Access Control",
    category: "Commercial",
    icon: <ChipIcon />,
    description: "Keycard entry system for 50+ employee office."
  },
  {
    id: 5,
    title: "Industrial PTZ Deployment",
    category: "Industrial",
    icon: <CameraIcon />,
    description: "Long-range PTZ cameras for logistics yard monitoring."
  },
  {
    id: 6,
    title: "Video Intercom Upgrade",
    category: "Residential",
    icon: <HomeIcon />,
    description: "Cloud-connected video doorbell for remote access."
  },
  {
    id: 7,
    title: "Fiber Optic Backbone",
    category: "Cabling",
    icon: <ChipIcon />,
    description: "High-speed fiber uplinks between warehouse units."
  },
  {
    id: 8,
    title: "Night Vision Calibration",
    category: "Commercial",
    icon: <CameraIcon />,
    description: "Optimizing IR settings for pitch-black parking lot."
  }
];

export const Gallery: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-navy-900 py-16 md:py-24 text-center border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-electric font-mono text-sm tracking-wider uppercase mb-4 block">Portfolio</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-lighter mb-6 leading-tight">
            Our Recent Projects
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-light leading-relaxed">
            See the quality of our craftsmanship firsthand. From clean wiring to strategic camera placement, we take pride in every detail.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="bg-navy-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filter Tabs (Visual Only for now) */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['All', 'Residential', 'Commercial', 'Industrial', 'Cabling'].map((filter, idx) => (
              <button 
                key={idx}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  idx === 0 
                    ? 'bg-electric text-navy-900 shadow-[0_0_10px_rgba(100,255,218,0.3)]' 
                    : 'bg-navy-900 text-slate-light border border-navy-700 hover:border-electric hover:text-electric'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="group relative bg-navy-900 rounded-lg overflow-hidden border border-navy-700 hover:border-electric transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
              >
                {/* Image Placeholder Area */}
                <div className="h-64 bg-navy-900 relative overflow-hidden">
                   {/* Background Pattern */}
                   <div className="absolute inset-0 opacity-20 bg-[linear-gradient(45deg,#112240_25%,transparent_25%,transparent_75%,#112240_75%,#112240),linear-gradient(45deg,#112240_25%,transparent_25%,transparent_75%,#112240_75%,#112240)] bg-[length:20px_20px]"></div>
                   <div className="absolute inset-0 bg-gradient-to-t from-navy-900 to-transparent opacity-80"></div>
                   
                   {/* Centered Icon */}
                   <div className="absolute inset-0 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-700">
                      {project.icon}
                   </div>

                   {/* Category Tag */}
                   <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-navy-800/90 backdrop-blur-sm border border-electric/30 text-electric text-xs font-bold rounded uppercase tracking-wider">
                        {project.category}
                      </span>
                   </div>
                </div>

                {/* Content Area */}
                <div className="p-6 relative z-10 bg-navy-900 border-t border-navy-800">
                  <h3 className="text-lg font-bold text-slate-lighter mb-2 group-hover:text-electric transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-light leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion CTA */}
      <section className="bg-electric py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-navy-900 opacity-90"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Like what you see?</h2>
            <p className="text-slate-lighter mb-8">We can bring this same level of quality to your home or business.</p>
            <a href={PHONE_LINK}>
                <Button className="bg-white text-navy-900 hover:bg-slate-100 border-none font-bold">
                    Start Your Project
                </Button>
            </a>
        </div>
      </section>
    </div>
  );
};