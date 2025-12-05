import React from 'react';
import { Button } from './Button';

const brandsList = [
  "Hikvision", "AEYEPLUS", "Genetec", "Axis", 
  "Avigilon", "AI Base", "Lorex", "HID", 
  "Camden", "CDVI", "Kantech", "Dahua"
];

interface BrandsProps {
    onGetQuote?: () => void;
}

export const Brands: React.FC<BrandsProps> = ({ onGetQuote }) => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-navy-900 py-16 md:py-24 text-center border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-electric font-mono text-sm tracking-wider uppercase mb-4 block">Hardware Partners</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-lighter mb-6 leading-tight">
            Trusted Security Partners
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-light mb-10 leading-relaxed">
            We only install premium, reliable hardware. Quality components mean fewer false alarms and longer system lifespans.
          </p>
        </div>
      </section>

      {/* Logos Grid */}
      <section className="bg-navy-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
                {brandsList.map((brand, index) => (
                    <div 
                        key={index}
                        className="bg-navy-900 h-28 md:h-40 rounded-lg border border-navy-700 flex items-center justify-center p-4 group hover:border-electric transition-all duration-300 hover:shadow-[0_0_20px_rgba(100,255,218,0.1)]"
                    >
                        <span className="text-lg md:text-2xl font-bold text-slate-light group-hover:text-electric transition-colors tracking-wide text-center break-words">
                            {brand}
                        </span>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-navy-900 py-20 border-t border-navy-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-lighter mb-6">Looking for a specific brand?</h2>
            <p className="text-slate-light text-lg mb-8">
                We are certified installers for all the major manufacturers listed above. 
                If you have a specific hardware requirement for your project, let us know.
            </p>
            <Button 
                variant="primary" 
                className="w-full md:w-auto px-8 py-4 text-lg"
                onClick={onGetQuote}
            >
                Get a Quote for Specific Hardware
            </Button>
        </div>
      </section>
    </div>
  );
};