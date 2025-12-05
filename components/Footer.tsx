
import React from 'react';
import { NAV_LINKS, PHONE_NUMBER, PHONE_LINK } from '../constants';

const footerLinks = NAV_LINKS;

const serviceAreas = [
  "Brampton", "GTA", "Kitchener", "Niagara", 
  "Hamilton", "London", "Barrie", "Durham"
];

const brands = [
  "Hikvision", "Genetec", "Axis", "Avigilon"
];

interface FooterProps {
    onNavigate?: (page: string, targetId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {

  const handleLinkClick = (e: React.MouseEvent, linkName: string, href: string) => {
    e.preventDefault();
    if (!onNavigate) return;

    let targetId = href.startsWith('#') ? href.substring(1) : undefined;
    let page = 'home';

    if (linkName === 'About') {
        page = 'about';
        targetId = undefined; 
    } else if (linkName === 'Contact') {
        page = 'contact';
        targetId = undefined;
    } else if (linkName === 'Services') {
        page = 'home'; 
        targetId = 'services';
    } else if (linkName === 'Industries') {
        page = 'industries';
        targetId = undefined;
    } else if (linkName === 'Brands' || linkName === 'Brands & Partners') {
        page = 'brands';
        targetId = undefined;
    } else if (linkName === 'Careers') {
        page = 'careers';
        targetId = undefined;
    } else if (linkName === 'Gallery') {
        page = 'gallery';
        targetId = undefined;
    } else if (linkName === 'Blog') {
        page = 'blog';
        targetId = undefined;
    } else {
        // Home
        page = 'home';
        targetId = 'home';
    }
    
    onNavigate(page, targetId);
  };

  return (
    <footer id="contact" className="bg-navy-800 border-t border-navy-700 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 border border-electric flex items-center justify-center rounded-sm">
                    <span className="text-electric font-bold text-lg">S</span>
                </div>
                <span className="font-bold text-lg text-slate-lighter tracking-tight">
                  SEWAK <span className="text-electric">SECURITY</span>
                </span>
            </div>
            <p className="text-slate-light text-sm leading-relaxed mb-6">
              Premium security solutions for homes and businesses. With over 10 years of experience, we provide industrial-grade protection you can trust.
            </p>
            <div className="space-y-3 text-slate-lighter text-sm">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-electric mr-3 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>2565 Steeles Ave E Unit 20,<br />Brampton, ON L6T 4L6</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-electric mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={PHONE_LINK} className="hover:text-electric transition-colors font-medium">
                  {PHONE_NUMBER}
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-slate-lighter font-bold text-lg mb-6 border-l-2 border-electric pl-3">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    onClick={(e) => handleLinkClick(e, link.name, link.href)}
                    className="text-slate-light hover:text-electric transition-colors text-sm flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-electric rounded-full mr-2 opacity-0 hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </a>
                </li>
              ))}
               {/* Added extra links manually */}
               <li>
                  <a 
                    href="#industries"
                    onClick={(e) => handleLinkClick(e, 'Industries', '#industries')}
                    className="text-slate-light hover:text-electric transition-colors text-sm flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-electric rounded-full mr-2 opacity-0 hover:opacity-100 transition-opacity"></span>
                    Industries
                  </a>
                </li>
                <li>
                  <a 
                    href="#brands"
                    onClick={(e) => handleLinkClick(e, 'Brands & Partners', '#brands')}
                    className="text-slate-light hover:text-electric transition-colors text-sm flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-electric rounded-full mr-2 opacity-0 hover:opacity-100 transition-opacity"></span>
                    Brands & Partners
                  </a>
                </li>
                <li>
                  <a 
                    href="#gallery"
                    onClick={(e) => handleLinkClick(e, 'Gallery', '#gallery')}
                    className="text-slate-light hover:text-electric transition-colors text-sm flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-electric rounded-full mr-2 opacity-0 hover:opacity-100 transition-opacity"></span>
                    Gallery
                  </a>
                </li>
                <li>
                  <a 
                    href="#careers"
                    onClick={(e) => handleLinkClick(e, 'Careers', '#careers')}
                    className="text-slate-light hover:text-electric transition-colors text-sm flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-electric rounded-full mr-2 opacity-0 hover:opacity-100 transition-opacity"></span>
                    Careers
                  </a>
                </li>
            </ul>
          </div>

          {/* Column 3: Service Areas */}
          <div>
            <h3 className="text-slate-lighter font-bold text-lg mb-6 border-l-2 border-electric pl-3">Service Areas</h3>
            <ul className="grid grid-cols-2 gap-2">
              {serviceAreas.map((area) => (
                <li key={area} className="text-slate-light text-sm">
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Trusted Brands */}
          <div>
            <h3 className="text-slate-lighter font-bold text-lg mb-6 border-l-2 border-electric pl-3">Trusted Brands</h3>
            <div className="flex flex-wrap gap-3">
              {brands.map((brand) => (
                <span 
                  key={brand} 
                  className="px-3 py-1 bg-navy-900 border border-navy-700 rounded text-slate-light text-xs font-mono hover:border-electric/50 hover:text-electric transition-colors cursor-default"
                >
                  {brand}
                </span>
              ))}
            </div>
            <div className="mt-8">
               <h4 className="text-sm font-semibold text-slate-lighter mb-3">Professional Certifications</h4>
               <p className="text-slate-light text-xs">Fully Insured & Licensed Security Professionals.</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-navy-700 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-light">
          <p>&copy; {new Date().getFullYear()} Sewak Security Solutions. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
             <a href="#" className="hover:text-electric transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-electric transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
