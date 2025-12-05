import React, { useState, useEffect } from 'react';
import { COMPANY_NAME, NAV_LINKS, PHONE_NUMBER, PHONE_LINK } from '../constants';
import { Button } from './Button';

// Simple Icons
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

interface NavbarProps {
  onNavigate: (page: string, targetId?: string) => void;
  activePage: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, activePage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent, linkName: string, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    let targetId = href.startsWith('#') ? href.substring(1) : undefined;
    let page = 'home';

    if (linkName === 'About') {
        page = 'about';
        targetId = undefined; // Scroll to top of About
    } else if (linkName === 'Contact') {
        page = 'contact';
        targetId = undefined; // Scroll to top of Contact page
    } else if (linkName === 'Services') {
        page = 'home'; 
        targetId = 'services';
    } else {
        // Home
        page = 'home';
        targetId = 'home';
    }
    
    onNavigate(page, targetId);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-navy-900/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a 
              href="#" 
              onClick={(e) => handleLinkClick(e, 'Home', '#home')}
              className="flex items-center gap-2 group"
            >
                <div className="w-10 h-10 border-2 border-electric flex items-center justify-center rounded-sm relative overflow-hidden group-hover:bg-electric/10 transition-colors">
                    <span className="text-electric font-bold text-xl">S</span>
                </div>
                <span className="font-bold text-xl text-slate-lighter tracking-tight group-hover:text-electric transition-colors">
                  SEWAK <span className="text-electric">SECURITY</span>
                </span>
            </a>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleLinkClick(e, link.name, link.href)}
                className={`text-sm font-medium transition-colors ${
                  (activePage === 'about' && link.name === 'About') || 
                  (activePage === 'contact' && link.name === 'Contact')
                  ? 'text-electric' 
                  : 'text-slate-lighter hover:text-electric'
                }`}
              >
                <span className="text-electric mr-1 font-mono text-xs">0{NAV_LINKS.indexOf(link) + 1}.</span> 
                {link.name}
              </a>
            ))}
            <a href={PHONE_LINK}>
                <Button variant="outline" className="py-2 px-4 text-sm" icon={<PhoneIcon />}>
                    {PHONE_NUMBER}
                </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-electric hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-navy-800 shadow-xl border-t border-navy-700 h-screen">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.name, link.href)}
                className="block px-3 py-3 text-base font-medium text-slate-lighter hover:text-electric hover:bg-navy-700 rounded-md"
              >
                 <span className="text-electric mr-2 font-mono">0{NAV_LINKS.indexOf(link) + 1}.</span>
                 {link.name}
              </a>
            ))}
             <div className="mt-4 pt-4 border-t border-navy-700">
                <a href={PHONE_LINK} className="block">
                     <Button variant="outline" fullWidth icon={<PhoneIcon />}>
                        {PHONE_NUMBER}
                    </Button>
                </a>
             </div>
          </div>
        </div>
      )}
    </nav>
  );
};