import React from 'react';

// Icons
const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-electric" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const LightBulbIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-electric" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const AdjustmentsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-electric" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
  </svg>
);

const WrenchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-electric" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.055a4.001 4.001 0 01-3.51 3.51h-.546c-.536 0-1.07.218-1.472.637l-4.225 4.672a2.013 2.013 0 00.323 3.09l.487.351a2.013 2.013 0 003.091-.322l4.671-4.226c.419-.4.637-.935.637-1.472v-.546A4.001 4.001 0 0113 4.055v.06a5 5 0 011.666-3.837 5 5 0 015.694 0 5 5 0 011.666 3.838v.06z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.99 15.01a4.5 4.5 0 015.11 5.12" />
  </svg>
);

const features = [
  {
    title: "Local Experts, Immediate Support",
    description: "We utilize local technicians, not call centers in other provinces.",
    icon: <MapPinIcon />
  },
  {
    title: "No Commissioned Sales",
    description: "Educational consultations, no pushing unnecessary equipment.",
    icon: <LightBulbIcon />
  },
  {
    title: "Flexible Monitoring",
    description: "Choice of self-monitoring or professional monitoring (Alerted Security brand). No forced long-term contracts.",
    icon: <AdjustmentsIcon />
  },
  {
    title: "Respectful Installation",
    description: "We protect floors/walls, route cables cleanly, and test thoroughly.",
    icon: <WrenchIcon />
  }
];

export const Features: React.FC = () => {
  return (
    <section id="why-us" className="py-20 bg-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-lighter mb-4">
            Why Brampton Families <span className="text-electric">Choose Us</span>
          </h2>
          <div className="h-1 w-20 bg-electric mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-navy-900/50 p-6 rounded-lg border border-navy-700 hover:border-electric/50 transition-all duration-300 hover:transform hover:-translate-y-1 group"
            >
              <div className="mb-4 bg-navy-800 w-16 h-16 rounded-full flex items-center justify-center border border-navy-700 group-hover:border-electric/30 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-lighter mb-3 group-hover:text-electric transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-light leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};