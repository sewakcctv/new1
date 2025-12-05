import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Process } from './components/Process';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { Contact } from './components/Contact';
import { Brands } from './components/Brands';
import { Industries } from './components/Industries';
import { Careers } from './components/Careers';
import { ServiceDetail, ServicePageProps } from './components/ServiceDetail';

// --- ICONS ---
const CAMERA_ICON = (
    <svg className="w-32 h-32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
);
const ACCESS_ICON = (
    <svg className="w-32 h-32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
);
const INTERCOM_ICON = (
    <svg className="w-32 h-32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
    </svg>
);
const ALARM_ICON = (
    <svg className="w-32 h-32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
);
const CABLING_ICON = (
    <svg className="w-32 h-32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
    </svg>
);
const MONITORING_ICON = (
    <svg className="w-32 h-32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
);

const DETECTION_ICON = (
    <svg className="w-32 h-32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
    </svg>
);

const NIGHT_VISION_ICON = (
    <svg className="w-32 h-32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
);

// Small icons for features
const SERVER_ICON = (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>);
const MOBILE_ICON = (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>);
const PLUG_ICON = (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>);
const SHIELD_ICON = (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>);
const USER_ICON = (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>);
const CLOUD_ICON = (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>);
const FINGERPRINT_ICON = (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.131A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" /></svg>);

// --- DATA DEFINITIONS FOR ALL SERVICES ---

const securityCameraData: ServicePageProps = {
    title: "Professional IP Security Camera Installation",
    subtitle: "Crystal clear 4K video, smart detection, and mobile access.",
    ctaText: "Get A Free Camera Quote",
    benefits: [
        {
            title: "Smart Detection",
            description: "Say goodbye to false alarms. Our systems use advanced AI to distinguish between people, vehicles, and pets. You only get alerted when it actually matters.",
            icon: DETECTION_ICON
        },
        {
            title: "Night Vision & 24/7 Recording",
            description: "Crime doesn't sleep, and neither does your system. With powerful infrared night vision and ColorVu technology, capture every detail even in total darkness.",
            icon: NIGHT_VISION_ICON
        }
    ],
    features: [
        { title: "Pro-grade NVR Storage", description: "Local recording means you own your footage. No monthly cloud fees.", icon: SERVER_ICON },
        { title: "Mobile App Viewing", description: "Check in on your property from anywhere in the world in real-time.", icon: MOBILE_ICON },
        { title: "Clean Wiring", description: "We pride ourselves on aesthetic installations. No messy hanging wires.", icon: PLUG_ICON },
        { title: "3-Year Warranty", description: "We stand behind our hardware and our craftsmanship.", icon: SHIELD_ICON }
    ],
    brands: ["Hikvision", "Dahua", "Axis", "Hanwha"]
};

const accessControlData: ServicePageProps = {
    title: "Commercial Access Control Systems",
    subtitle: "Manage who enters your business, when, and where. Secure your assets with modern entry solutions.",
    ctaText: "Request Access Consultation",
    benefits: [
        {
            title: "Total Entry Management",
            description: "Easily add or remove employees from the system instantly. No more changing locks when a key is lost or an employee leaves.",
            icon: ACCESS_ICON
        },
        {
            title: "Detailed Audit Logs",
            description: "Know exactly who entered a specific door and at what time. Cloud-based reporting keeps you compliant and informed.",
            icon: CLOUD_ICON
        }
    ],
    features: [
        { title: "Key Fob & Card Entry", description: "Durable, encrypted credentials for staff.", icon: USER_ICON },
        { title: "Biometric Options", description: "Fingerprint and Face ID for high-security areas.", icon: FINGERPRINT_ICON },
        { title: "Remote Lock/Unlock", description: "Open doors for deliveries from your phone.", icon: MOBILE_ICON },
        { title: "Time & Attendance", description: "Integrate with payroll for accurate hour tracking.", icon: SERVER_ICON }
    ],
    brands: ["Paxton", "CDVI", "Hikvision", "Keyscan"]
};

const videoIntercomData: ServicePageProps = {
    title: "Smart Video Intercom Systems",
    subtitle: "See, speak, and unlock doors for visitors from your smartphone or front desk.",
    ctaText: "Get Intercom Quote",
    benefits: [
        {
            title: "Visual Verification",
            description: "Never open the door blind again. High-definition video lets you verify delivery drivers, clients, or unexpected guests before granting access.",
            icon: INTERCOM_ICON
        },
        {
            title: "Mobile Connectivity",
            description: "Answer your doorbell from anywhere. Whether you're in the back office or on vacation, you're always home.",
            icon: MOBILE_ICON
        }
    ],
    features: [
        { title: "Remote Unlock", description: "Open gates and doors with a tap.", icon: PLUG_ICON },
        { title: "Wide-Angle Lens", description: "Capture head-to-toe views of visitors.", icon: CAMERA_ICON },
        { title: "Visitor History", description: "Review photos of missed callers.", icon: SERVER_ICON },
        { title: "Vandal Resistant", description: "Built tough to withstand abuse.", icon: SHIELD_ICON }
    ],
    brands: ["Hikvision", "ButterflyMX", "Aiphone", "Dahua"]
};

const alarmSystemsData: ServicePageProps = {
    title: "Intrusion & Fire Alarm Systems",
    subtitle: "Robust protection against break-ins, fire, and emergencies with 24/7 monitoring.",
    ctaText: "Secure Your Property",
    benefits: [
        {
            title: "Instant Response",
            description: "Seconds count. Our monitored systems immediately alert the authorities in case of break-in, fire, or medical emergency.",
            icon: ALARM_ICON
        },
        {
            title: "Smart Home Integration",
            description: "Control your alarm, lights, and thermostat from a single app. Automate your security to arm itself when you leave.",
            icon: MOBILE_ICON
        }
    ],
    features: [
        { title: "Motion Sensors", description: "Pet-immune detection for interior spaces.", icon: DETECTION_ICON },
        { title: "Glass Break", description: "Detects the sound of smashing windows.", icon: SHIELD_ICON },
        { title: "Smoke & CO", description: "Life safety integration for complete peace of mind.", icon: ALARM_ICON },
        { title: "Cellular Backup", description: "System works even if Wi-Fi goes down.", icon: SERVER_ICON }
    ],
    brands: ["DSC", "Honeywell", "Qolsys", "Paradox"]
};

const cablingData: ServicePageProps = {
    title: "Structured Cabling & Networking",
    subtitle: "The invisible backbone of your business technology. Clean, certified, and reliable.",
    ctaText: "Get Cabling Quote",
    benefits: [
        {
            title: "Future-Proof Infrastructure",
            description: "We install high-speed Cat6 and Fiber Optic cabling designed to handle the data demands of today and tomorrow.",
            icon: CABLING_ICON
        },
        {
            title: "Clean Organization",
            description: "No more rats' nests. We label, organize, and dress cables in server racks for easy maintenance and troubleshooting.",
            icon: PLUG_ICON
        }
    ],
    features: [
        { title: "Voice & Data", description: "Unified cabling for phones and computers.", icon: SERVER_ICON },
        { title: "Fiber Optics", description: "Long-distance, high-speed backbone connections.", icon: CLOUD_ICON },
        { title: "Server Rack Setup", description: "Professional patch panel termination.", icon: SERVER_ICON },
        { title: "Fluke Testing", description: "Certified performance verification.", icon: SHIELD_ICON }
    ],
    brands: ["Belden", "Panduit", "CommScope", "Ubiquiti"]
};

const videoMonitoringData: ServicePageProps = {
    title: "24/7 Live Video Monitoring",
    subtitle: "Proactive virtual guards watching your property in real-time to stop crime before it happens.",
    ctaText: "Start Monitoring Today",
    benefits: [
        {
            title: "Proactive Intervention",
            description: "Unlike passive recording, our virtual guards can use voice-down speakers to warn intruders they are being watched and police are en route.",
            icon: MONITORING_ICON
        },
        {
            title: "Cost Effective Security",
            description: "Get the protection of on-site security guards at a fraction of the cost. Cover your entire perimeter simultaneously.",
            icon: SHIELD_ICON
        }
    ],
    features: [
        { title: "Voice Talk-Down", description: "Audio intervention scares away 98% of intruders.", icon: INTERCOM_ICON },
        { title: "Police Priority", description: "Verified video alarms get faster police response.", icon: ALARM_ICON },
        { title: "Daily Reports", description: "Receive activity logs every morning.", icon: SERVER_ICON },
        { title: "Perimeter Guarding", description: "Virtual tripwires protect fences and yards.", icon: DETECTION_ICON }
    ],
    brands: ["Avigilon", "Hikvision", "Dahua", "Alerted Security"]
};

// --- END DATA DEFINITIONS ---

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<string>('home');
  const [currentServiceData, setCurrentServiceData] = useState<ServicePageProps>(securityCameraData);

  const handleNavigate = (page: string, targetId?: string) => {
    setActivePage(page);
    
    // If there is a target section ID (e.g. #services), scroll to it
    // We use setTimeout to allow the view to render first
    if (targetId) {
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // If no target (e.g. clicked Home or About top level), scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleServiceClick = (serviceId: string) => {
      let data = securityCameraData;

      switch(serviceId) {
          case 'security-cameras':
              data = securityCameraData;
              break;
          case 'access-control':
              data = accessControlData;
              break;
          case 'video-intercom':
              data = videoIntercomData;
              break;
          case 'alarm-systems':
              data = alarmSystemsData;
              break;
          case 'cabling':
              data = cablingData;
              break;
          case 'video-monitoring':
              data = videoMonitoringData;
              break;
          default:
              data = securityCameraData;
      }
      
      setCurrentServiceData(data);
      setActivePage('service-detail');
      window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-navy-900 text-slate-lighter font-sans selection:bg-electric selection:text-navy-900 flex flex-col">
      <Navbar onNavigate={handleNavigate} activePage={activePage} />
      
      <main className="flex-grow">
        {activePage === 'home' ? (
          <>
            <Hero onNavigate={handleNavigate} />
            <Features />
            <Services onServiceClick={handleServiceClick} />
            <Testimonials />
            <Process />
          </>
        ) : activePage === 'about' ? (
          <About />
        ) : activePage === 'contact' ? (
            <Contact />
        ) : activePage === 'brands' ? (
            <Brands onGetQuote={() => handleNavigate('contact')} />
        ) : activePage === 'industries' ? (
            <Industries onGetQuote={() => handleNavigate('contact')} />
        ) : activePage === 'careers' ? (
            <Careers />
        ) : activePage === 'service-detail' ? (
            <ServiceDetail 
                {...currentServiceData} 
                onBack={() => handleNavigate('home', 'services')}
                onGetQuote={() => handleNavigate('contact')}
            />
        ) : null}
      </main>
      
      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;