import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Compass } from 'lucide-react';
import { AGENCY_DETAILS } from '../data/agencyData';

interface NavbarProps {
  onSelectService?: (serviceName: string) => void;
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onSelectService }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'Audit Tool', href: '#audit-tool' },
    { label: 'About Us', href: '#about' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#inquiry' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#faf9f6]/95 backdrop-blur-md shadow-xs border-b border-[#4b3b47]/10 py-3.5'
          : 'bg-[#faf9f6]/80 backdrop-blur-xs py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Brand Logo & Adelaide subtitle */}
        <a
          href="#"
          className="group flex flex-col items-start focus:outline-hidden"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <div className="flex items-center gap-2">
            <span className="font-serif text-2xl md:text-3xl font-semibold tracking-wider text-[#4b3b47] transition-colors group-hover:text-[#6a6262]">
              {AGENCY_DETAILS.name.toUpperCase()}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#cfd2b2] mt-0.5"></span>
          </div>
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#6a6262] font-medium -mt-0.5">
            Adelaide · Tarntanya
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-[13px] tracking-wide text-[#6a6262] font-medium">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href)}
              className="transition-colors hover:text-[#4b3b47] relative py-1 focus:outline-hidden focus-visible:text-[#4b3b47]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#inquiry"
            onClick={(e) => handleLinkClick(e, '#inquiry')}
            className="group inline-flex items-center gap-2 px-5 py-2.5 bg-[#4b3b47] text-[#faf9f6] text-xs uppercase tracking-widest font-medium rounded-sm hover:bg-[#382b35] transition-all duration-200 shadow-xs"
          >
            <span>Start Inquiry</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
          className="lg:hidden p-2 text-[#4b3b47] hover:text-[#6a6262] focus:outline-hidden focus-visible:ring-1 focus-visible:ring-[#4b3b47]"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[64px] bg-[#faf9f6] border-b border-[#4b3b47]/15 px-6 py-8 shadow-xl flex flex-col gap-6 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-4 text-base">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="text-[#4b3b47] font-medium tracking-wide py-2 border-b border-[#4b3b47]/5 hover:text-[#6a6262] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <a
              href="#inquiry"
              onClick={(e) => handleLinkClick(e, '#inquiry')}
              className="w-full text-center py-3 bg-[#4b3b47] text-[#faf9f6] text-xs uppercase tracking-widest font-medium rounded-sm"
            >
              Start an Inquiry
            </a>
            <p className="text-xs text-[#9c9990] text-center mt-2">
              East End Studio, Adelaide · {AGENCY_DETAILS.hours}
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
