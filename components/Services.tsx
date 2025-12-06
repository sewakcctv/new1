import React from 'react';
import { RevealOnScroll } from './RevealOnScroll';

// Icons for services
const CameraIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-electric" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
);

const LockClosedIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-electric" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

const ChatAltIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-electric" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
  </svg>
);

const BellIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-electric" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
  </svg>
);

const ChipIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-electric" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
  </svg>
);

const EyeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-electric" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const servicesData = [
  {
    id: "security-cameras",
    title: "Security Cameras",
    description: "IP camera installation, residential & commercial. High-definition surveillance for complete peace of mind.",
    icon: <CameraIcon />,
  },
  {
    id: "access-control",
    title: "Access Control",
    description: "Biometric systems, card readers, and gate access solutions to manage entry points securely.",
    icon: <LockClosedIcon />,
  },
  {
    id: "video-intercom",
    title: "Video Intercom",
    description: "Remote unlock, cloud-based mobile apps, and visitor recording. Screen visitors before they enter.",
    icon: <ChatAltIcon />,
  },
  {
    id: "alarm-systems",
    title: "Alarm Systems",
    description: "Intrusion and fire detection with remote access via app. Immediate alerts for any unauthorized activity.",
    icon: <BellIcon />,
  },
  {
    id: "cabling",
    title: "Cabling",
    description: "Fibre optic, voice/data cabling, and low voltage wiring. Professional infrastructure for your tech.",
    icon: <ChipIcon />,
  },
  {
    id: "video-monitoring",
    title: "Video Monitoring",
    description: "24/7 Live Monitoring and Virtual Guard Tours. Proactive surveillance to prevent incidents before they happen.",
    icon: <EyeIcon />,
  }
];

interface ServicesProps {
    onServiceClick?: (serviceId: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onServiceClick }) => {
  return (
    <section id="services" className="py-24 bg-slate-50 relative">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-electric/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealOnScroll>
            <div className="text-center mb-16">
            <span className="text-electric font-mono text-sm tracking-wider uppercase mb-2 block">What We Do</span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                Our Services
            </h2>
            <p className="max-w-2xl mx-auto text-slate-600 text-lg">
                Comprehensive security solutions tailored to protect what matters most to you.
            </p>
            </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <RevealOnScroll key={index} delay={index * 0.1}>
                <div 
                className="bg-white rounded-sm p-8 border border-slate-200 hover:border-electric transition-all duration-300 group hover:shadow-lg h-full"
                >
                <div className="mb-6 inline-block p-3 rounded-sm bg-slate-50 group-hover:bg-slate-100 transition-colors">
                    {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-electric transition-colors">
                    {service.title}
                </h3>
                
                <p className="text-slate-600 mb-6 leading-relaxed">
                    {service.description}
                </p>
                
                <button 
                    onClick={() => onServiceClick && onServiceClick(service.id)}
                    className="inline-flex items-center text-electric font-semibold hover:text-electric/80 transition-colors group-hover:translate-x-1 duration-300"
                >
                    Learn More
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </button>
                </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};