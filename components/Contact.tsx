import React from 'react';
import { Button } from './Button';
import { PHONE_NUMBER, PHONE_LINK, EMAIL_ADDRESS } from '../constants';

const MapPinIcon = () => (
  <svg className="w-6 h-6 text-electric shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-6 h-6 text-electric shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const MailIcon = () => (
  <svg className="w-6 h-6 text-electric shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-6 h-6 text-electric shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const Contact: React.FC = () => {
  return (
    <div className="pt-20">
        {/* Header */}
        <div className="bg-navy-900 py-16 text-center border-b border-navy-800">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-lighter mb-4">Contact Us</h1>
            <p className="text-slate-light text-lg max-w-2xl mx-auto px-4">
                Ready to secure your property? Reach out for a free consultation or quote.
            </p>
        </div>

        <section className="bg-navy-900 py-12 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    
                    {/* Left Column: Info */}
                    <div>
                        <div className="bg-navy-800 p-8 rounded-xl border border-navy-700 shadow-xl space-y-8">
                            <h2 className="text-2xl font-bold text-slate-lighter mb-6 border-b border-navy-700 pb-4">
                                Contact Information
                            </h2>
                            
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <MapPinIcon />
                                    <div>
                                        <h3 className="font-bold text-slate-lighter text-lg">Headquarters</h3>
                                        <p className="text-slate-light mt-1 leading-relaxed">
                                            2565 Steeles Ave E Unit 20,<br />
                                            Brampton, ON L6T 4L6
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <PhoneIcon />
                                    <div>
                                        <h3 className="font-bold text-slate-lighter text-lg">Phone</h3>
                                        <a href={PHONE_LINK} className="text-slate-light mt-1 block hover:text-electric transition-colors">
                                            {PHONE_NUMBER}
                                        </a>
                                        <span className="text-xs text-electric/80 font-mono mt-1 block">Monitored 24/7 for Emergencies</span>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <MailIcon />
                                    <div>
                                        <h3 className="font-bold text-slate-lighter text-lg">Email</h3>
                                        <a href={`mailto:${EMAIL_ADDRESS}`} className="text-slate-light mt-1 block hover:text-electric transition-colors">
                                            {EMAIL_ADDRESS}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <ClockIcon />
                                    <div>
                                        <h3 className="font-bold text-slate-lighter text-lg">Office Hours</h3>
                                        <p className="text-slate-light mt-1">
                                            Mon – Fri : 10 am – 6 pm<br />
                                            <span className="text-xs opacity-70">Weekend appointments available by request.</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-navy-700">
                                <h3 className="font-bold text-slate-lighter text-lg mb-3">Service Areas</h3>
                                <div className="flex flex-wrap gap-2">
                                    {["Brampton", "Mississauga", "Etobicoke", "Toronto", "Vaughan", "Kitchener", "Niagara", "Hamilton", "London"].map(area => (
                                        <span key={area} className="px-2 py-1 bg-navy-900 rounded text-xs text-slate-light border border-navy-700">
                                            {area}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div>
                        <div className="bg-navy-800 p-8 rounded-xl border border-navy-700 shadow-xl">
                            <h2 className="text-2xl font-bold text-slate-lighter mb-2">Request A Callback</h2>
                            <p className="text-slate-light mb-8 text-sm">Fill out the form below and we'll get back to you within 24 hours.</p>

                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-light mb-2">Full Name</label>
                                    <input 
                                        type="text" 
                                        id="name" 
                                        className="w-full bg-navy-900 border border-navy-700 rounded-lg px-4 py-3 text-slate-lighter focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric transition-colors placeholder-slate-light/30"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-slate-light mb-2">Phone Number</label>
                                        <input 
                                            type="tel" 
                                            id="phone" 
                                            className="w-full bg-navy-900 border border-navy-700 rounded-lg px-4 py-3 text-slate-lighter focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric transition-colors placeholder-slate-light/30"
                                            placeholder="(905) 555-0123"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-slate-light mb-2">Email Address</label>
                                        <input 
                                            type="email" 
                                            id="email" 
                                            className="w-full bg-navy-900 border border-navy-700 rounded-lg px-4 py-3 text-slate-lighter focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric transition-colors placeholder-slate-light/30"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="service" className="block text-sm font-medium text-slate-light mb-2">Service Needed</label>
                                    <select 
                                        id="service" 
                                        className="w-full bg-navy-900 border border-navy-700 rounded-lg px-4 py-3 text-slate-lighter focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric transition-colors"
                                    >
                                        <option value="">Select a service...</option>
                                        <option value="cameras">Security Cameras</option>
                                        <option value="access">Access Control</option>
                                        <option value="intercom">Video Intercom</option>
                                        <option value="alarm">Alarm Systems</option>
                                        <option value="cabling">Network Cabling</option>
                                        <option value="monitoring">Video Monitoring</option>
                                        <option value="other">Other / Consultation</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-slate-light mb-2">Message</label>
                                    <textarea 
                                        id="message" 
                                        rows={4} 
                                        className="w-full bg-navy-900 border border-navy-700 rounded-lg px-4 py-3 text-slate-lighter focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric transition-colors placeholder-slate-light/30"
                                        placeholder="Tell us about your security needs..."
                                    ></textarea>
                                </div>

                                <Button variant="primary" fullWidth className="py-4 text-lg">
                                    Request Callback
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Map Section */}
        <section className="h-96 w-full bg-navy-800 border-t border-navy-700 relative grayscale hover:grayscale-0 transition-all duration-700">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.2547672236357!2d-79.67389142381534!3d43.70523297109968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3dc925555555%3A0x123456789abcdef!2s2565%20Steeles%20Ave%20E%20%2320%2C%20Brampton%2C%20ON%20L6T%204L6!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Sewak Security Location"
            ></iframe>
            {/* Map Overlay for blending if needed */}
             <div className="absolute inset-0 bg-navy-900/10 pointer-events-none"></div>
        </section>
    </div>
  );
};