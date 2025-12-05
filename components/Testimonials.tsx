import React from 'react';

// Star Icon Component
const StarIcon = ({ filled = true }: { filled?: boolean }) => (
  <svg 
    className={`w-6 h-6 ${filled ? 'text-electric' : 'text-navy-700'}`} 
    fill="currentColor" 
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const QuoteIcon = () => (
  <svg className="w-12 h-12 text-electric/20 absolute top-4 left-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 7.55228 14.017 7V3H19.017C20.6739 3 22.017 4.34315 22.017 6V15C22.017 16.6569 20.6739 18 19.017 18H16.017V21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 7.55228 5.0166 7V3H10.0166C11.6735 3 13.0166 4.34315 13.0166 6V15C13.0166 16.6569 11.6735 18 10.0166 18H7.0166V21H5.0166Z" />
  </svg>
);

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-navy-800 border-t border-navy-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <StarIcon key={i} />
            ))}
          </div>
          <p className="text-electric font-mono text-sm tracking-wider uppercase mb-2">
            5.0 Star Google Rating
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-lighter">
            Here's What Your Neighbors Say
          </h2>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Review 1 */}
          <div className="bg-navy-900 p-8 rounded-lg relative border border-navy-700 shadow-lg hover:border-electric/30 transition-colors">
            <QuoteIcon />
            <div className="relative z-10 pt-6">
              <p className="text-slate-light text-lg italic mb-6 leading-relaxed">
                "Switched from a major competitor. The difference in service is night and day. They actually care about securing your home properly."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-electric text-navy-900 flex items-center justify-center font-bold mr-3">
                  LR
                </div>
                <div>
                  <h4 className="text-slate-lighter font-semibold">Local Resident</h4>
                  <p className="text-slate-light text-xs">Brampton, ON</p>
                </div>
              </div>
            </div>
          </div>

          {/* Review 2 */}
          <div className="bg-navy-900 p-8 rounded-lg relative border border-navy-700 shadow-lg hover:border-electric/30 transition-colors">
            <QuoteIcon />
            <div className="relative z-10 pt-6">
              <p className="text-slate-light text-lg italic mb-6 leading-relaxed">
                "Professional, clean, and quick installation. The team respected our office space and the system works perfectly."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-navy-700 text-electric border border-electric flex items-center justify-center font-bold mr-3">
                  BO
                </div>
                <div>
                  <h4 className="text-slate-lighter font-semibold">Business Owner</h4>
                  <p className="text-slate-light text-xs">Mississauga, ON</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};