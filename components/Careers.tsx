import React from 'react';
import { Button } from './Button';

export const Careers: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-navy-900 py-16 md:py-24 text-center border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-electric font-mono text-sm tracking-wider uppercase mb-4 block">Work With Us</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-lighter mb-6 leading-tight">
            Join the Sewak Security Team
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-light leading-relaxed">
            We are always looking for skilled technicians who share our values of integrity and quality craftsmanship.
          </p>
        </div>
      </section>

      <section className="bg-navy-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            
            {/* Left Column: Job Description */}
            <div>
              <div className="bg-navy-900 p-8 rounded-xl border border-navy-700 shadow-xl">
                <div className="inline-block px-3 py-1 bg-electric/10 text-electric text-xs font-bold uppercase tracking-wide rounded mb-4">
                  Now Hiring
                </div>
                <h2 className="text-3xl font-bold text-slate-lighter mb-6">Cable Technician / Installer</h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-lighter mb-4 border-l-4 border-electric pl-3">
                      Responsibilities
                    </h3>
                    <ul className="space-y-3 text-slate-light">
                      {[
                        "Inspect and test telecommunication signals and security hardware.",
                        "Repair or replace faulty cables, power supplies, and devices.",
                        "Climb poles and ladders safely to install equipment at heights.",
                        "Maintain accurate reports of installations and service calls.",
                        "Clean up job sites and respect customer property.",
                        "Criminal record check required for all employees."
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="w-5 h-5 text-electric mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-lighter mb-4 border-l-4 border-electric pl-3">
                      Requirements
                    </h3>
                    <ul className="space-y-3 text-slate-light">
                      {[
                        "Valid Driver's License and reliable transportation.",
                        "Strong attention to detail and ability to follow schematics.",
                        "Physical stamina (lifting equipment, standing for long periods).",
                        "Experience with low voltage wiring is a strong asset.",
                        "Professional demeanor and good communication skills."
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="w-5 h-5 text-electric mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Application Form */}
            <div>
              <div className="bg-navy-900 p-8 rounded-xl border border-navy-700 shadow-xl lg:sticky lg:top-24">
                <h2 className="text-2xl font-bold text-slate-lighter mb-2">Apply Now</h2>
                <p className="text-slate-light mb-8 text-sm">Fill out the form below to be considered for this position.</p>

                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-slate-light mb-2">Full Name</label>
                    <input 
                      type="text" 
                      id="fullName" 
                      className="w-full bg-navy-800 border border-navy-700 rounded-lg px-4 py-3 text-slate-lighter focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric transition-colors placeholder-slate-light/30"
                      placeholder="Jane Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-slate-light mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phoneNumber" 
                      className="w-full bg-navy-800 border border-navy-700 rounded-lg px-4 py-3 text-slate-lighter focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric transition-colors placeholder-slate-light/30"
                      placeholder="(905) 555-0123"
                    />
                  </div>

                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-slate-light mb-2">Years of Experience / Key Skills</label>
                    <textarea 
                      id="experience" 
                      rows={4} 
                      className="w-full bg-navy-800 border border-navy-700 rounded-lg px-4 py-3 text-slate-lighter focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric transition-colors placeholder-slate-light/30"
                      placeholder="Tell us briefly about your background..."
                    ></textarea>
                  </div>

                  <div>
                    <label htmlFor="resume" className="block text-sm font-medium text-slate-light mb-2">Upload Resume (PDF)</label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-navy-700 border-dashed rounded-lg hover:border-electric/50 transition-colors bg-navy-800">
                      <div className="space-y-1 text-center">
                        <svg className="mx-auto h-12 w-12 text-slate-light" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                          <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div className="flex text-sm text-slate-light">
                          <label htmlFor="file-upload" className="relative cursor-pointer bg-navy-800 rounded-md font-medium text-electric hover:text-electric/80 focus-within:outline-none">
                            <span>Upload a file</span>
                            <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-slate-light/70">
                          PDF up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button variant="primary" fullWidth className="py-4 text-lg">
                    Submit Application
                  </Button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};