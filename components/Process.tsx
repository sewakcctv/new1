import React from 'react';

const steps = [
  {
    number: "01",
    title: "Free Consultation",
    subtitle: "(No Pressure)",
    description: "We visit your property to assess your specific vulnerabilities. Honest advice, no sales tactics."
  },
  {
    number: "02",
    title: "Custom System Design",
    subtitle: "",
    description: "We design a security layout that covers blind spots and integrates seamlessly with your lifestyle."
  },
  {
    number: "03",
    title: "Professional Installation",
    subtitle: "(Certified & Insured)",
    description: "Our licensed technicians install your system cleanly, hiding wires and respecting your property."
  },
  {
    number: "04",
    title: "Training & Support",
    subtitle: "",
    description: "We teach you how to use your new system and provide ongoing local support whenever you need it."
  }
];

export const Process: React.FC = () => {
  return (
    <section className="py-24 bg-navy-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8892b0_1px,transparent_1px),linear-gradient(to_bottom,#8892b0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="text-electric font-mono text-sm tracking-wider uppercase block mb-2">How We Work</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-lighter">
            Our Process
          </h2>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-8 left-0 w-full h-0.5 bg-navy-700">
             {/* Gradient overlay for effect */}
             <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-navy-900 via-electric to-navy-900 opacity-20"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Step Number Bubble */}
                <div className="flex items-center justify-center mb-6 relative">
                   {/* Line connector for mobile - vertical */}
                   {index !== steps.length - 1 && (
                     <div className="lg:hidden absolute top-16 left-1/2 w-0.5 h-full bg-navy-700 -translate-x-1/2"></div>
                   )}
                   
                  <div className="w-16 h-16 rounded-full bg-navy-800 border-2 border-electric text-electric flex items-center justify-center text-xl font-bold z-10 shadow-[0_0_15px_rgba(100,255,218,0.2)] group-hover:shadow-[0_0_25px_rgba(100,255,218,0.5)] transition-shadow duration-300">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="text-center bg-navy-800/50 p-6 rounded-lg border border-transparent hover:border-navy-700 transition-colors lg:bg-transparent lg:p-0 lg:border-0">
                  <h3 className="text-xl font-bold text-slate-lighter mb-1">
                    {step.title}
                  </h3>
                  {step.subtitle && (
                    <span className="text-electric text-sm font-mono block mb-3">
                      {step.subtitle}
                    </span>
                  )}
                  <p className="text-slate-light leading-relaxed text-sm mt-3">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};