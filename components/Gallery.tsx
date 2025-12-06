import React from 'react';
import { Button } from './Button';
import { PHONE_LINK } from '../constants';

const projects = [
  {
    id: 1,
    title: "Neat Cabling in Brampton Warehouse",
    category: "Cabling",
    imgUrl: "https://images.unsplash.com/photo-1544197150-b99a580bbc7c?auto=format&fit=crop&q=80&w=600",
    description: "Structured Cat6 installation organized in server rack."
  },
  {
    id: 2,
    title: "Dome Camera Install",
    category: "Commercial",
    imgUrl: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=600",
    description: "Vandal-proof dome cameras for retail perimeter."
  },
  {
    id: 3,
    title: "Luxury Home Security",
    category: "Residential",
    imgUrl: "https://images.unsplash.com/photo-1558036117-15db97929410?auto=format&fit=crop&q=80&w=600",
    description: "Integrated smart alarm and camera system."
  },
  {
    id: 4,
    title: "Office Access Control",
    category: "Commercial",
    imgUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600",
    description: "Keycard entry system for 50+ employee office."
  },
  {
    id: 5,
    title: "Industrial PTZ Deployment",
    category: "Industrial",
    imgUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600",
    description: "Long-range PTZ cameras for logistics yard monitoring."
  },
  {
    id: 6,
    title: "Video Intercom Upgrade",
    category: "Residential",
    imgUrl: "https://images.unsplash.com/photo-1512446733611-9099a758eed8?auto=format&fit=crop&q=80&w=600",
    description: "Cloud-connected video doorbell for remote access."
  },
  {
    id: 7,
    title: "Fiber Optic Backbone",
    category: "Cabling",
    imgUrl: "https://images.unsplash.com/photo-1558494949-efc02220ec98?auto=format&fit=crop&q=80&w=600",
    description: "High-speed fiber uplinks between warehouse units."
  },
  {
    id: 8,
    title: "Night Vision Calibration",
    category: "Commercial",
    imgUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600",
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
                {/* Image Area */}
                <div className="h-64 relative overflow-hidden">
                   <img 
                      src={project.imgUrl} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                   />
                   
                   {/* Overlay */}
                   <div className="absolute inset-0 bg-navy-900/40 group-hover:bg-navy-900/10 transition-colors duration-500"></div>

                   {/* Category Tag */}
                   <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-navy-900/90 backdrop-blur-sm border border-electric/30 text-electric text-xs font-bold rounded uppercase tracking-wider">
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