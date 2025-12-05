import React from 'react';

// Icons for Values
const ShieldCheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-electric mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const BadgeCheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-electric mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
);

const UserGroupIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-electric mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const values = [
  {
    title: "Integrity",
    description: "Honest advice is our policy. We never push unnecessary upsells or fear-based tactics. You get exactly what you need to be safe.",
    icon: <ShieldCheckIcon />
  },
  {
    title: "Quality",
    description: "We install only top-tier, industrial-grade brands like Hikvision and Axis. We refuse to compromise your safety with cheap, unreliable hardware.",
    icon: <BadgeCheckIcon />
  },
  {
    title: "Community",
    description: "We live here, we work here, and we protect our neighbors. Being a local Brampton business means we treat every client like family.",
    icon: <UserGroupIcon />
  }
];

export const About: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-navy-900 overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 bg-navy-900">
           <div className="absolute inset-0 bg-[linear-gradient(30deg,#112240_12%,transparent_12.5%,transparent_87%,#112240_87.5%,#112240),linear-gradient(150deg,#112240_12%,transparent_12.5%,transparent_87%,#112240_87.5%,#112240),linear-gradient(30deg,#112240_12%,transparent_12.5%,transparent_87%,#112240_87.5%,#112240),linear-gradient(150deg,#112240_12%,transparent_12.5%,transparent_87%,#112240_87.5%,#112240),linear-gradient(60deg,#11224077_25%,transparent_25.5%,transparent_75%,#11224077_75%,#11224077),linear-gradient(60deg,#11224077_25%,transparent_25.5%,transparent_75%,#11224077_75%,#11224077)] bg-[length:80px_140px] opacity-20"></div>
           <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/80 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-electric font-mono text-sm tracking-wider uppercase mb-4 block">Est. 2014</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-lighter mb-6 leading-tight">
            10+ Years of Protecting<br />
            <span className="text-electric">Brampton & the GTA</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-light leading-relaxed">
            A local team dedicated to safeguarding your home and business with industrial-grade technology.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-navy-800 border-y border-navy-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-lighter mb-8">
            Our Mission: To Safeguard <span className="text-electric">What Matters Most</span>
          </h2>
          <div className="bg-navy-900 p-8 rounded-2xl border border-navy-700 shadow-[0_0_50px_rgba(10,25,47,0.5)]">
             <p className="text-lg md:text-xl text-slate-light leading-relaxed italic">
              "At Sewak Security, we don't just sell cameras; we design peace of mind. We are a locally owned company that answers the phone when you call, not a remote call center. We believe that true security comes from understanding our community's specific needs."
             </p>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-lighter mb-4">Core Values</h2>
            <div className="h-1 w-20 bg-electric mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, index) => (
              <div 
                key={index} 
                className="bg-navy-800 p-8 rounded-xl border border-navy-700 hover:border-electric transition-all duration-300 group text-center"
              >
                <div className="flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {val.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-lighter mb-4 group-hover:text-electric transition-colors">
                  {val.title}
                </h3>
                <p className="text-slate-light leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};