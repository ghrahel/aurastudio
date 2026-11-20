import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { AGENCY_DETAILS } from '../data/agencyData';
import { PageRoute, ROUTE_HASHES } from '../types/navigation';

interface NavbarProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; page: PageRoute }[] = [
    { label: 'Home', page: 'home' },
    { label: 'About', page: 'about' },
    { label: 'Services', page: 'services' },
    { label: 'Work', page: 'work' },
    { label: 'Blog', page: 'blog' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, page: PageRoute) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(page);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-[#181d2c]/10 py-3'
          : 'bg-white/95 backdrop-blur-xs py-4 border-b border-[#181d2c]/8'
      }`}
    >
      {/* Top Row: Centered Brand Header & Right Action */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-[1fr_auto_1fr] items-center gap-4">
        <div aria-hidden="true" />

        {/* Center Column: Larger Centered Brand Logo & Adelaide subtitle */}
        <a
          href={ROUTE_HASHES.home}
          className="group flex flex-col items-center text-center focus:outline-hidden shrink-0"
          onClick={(e) => handleLinkClick(e, 'home')}
        >
          <div className="flex items-center gap-2.5">
            <span className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#181d2c] transition-colors group-hover:text-[#2b5c84] whitespace-nowrap">
              {AGENCY_DETAILS.name.toUpperCase()}
            </span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#2b5c84] mt-0.5"></span>
          </div>
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#3e4452] font-semibold -mt-0.5">
            Adelaide · Tarntanya
          </span>
        </a>

        {/* Right Column: Desktop CTA Button & Mobile Menu Button */}
        <div className="flex items-center justify-end gap-4">
          <a
            href={ROUTE_HASHES.contact}
            onClick={(e) => handleLinkClick(e, 'contact')}
            className="group hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-[#2b5c84] text-white text-xs uppercase tracking-widest font-semibold rounded-sm hover:bg-[#1e4363] transition-all duration-200 shadow-xs shrink-0"
          >
            <span>Start Inquiry</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
            className="md:hidden p-2 text-[#181d2c] hover:text-[#2b5c84] focus:outline-hidden focus-visible:ring-1 focus-visible:ring-[#2b5c84]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Bottom Row: Centered Menu Options Under Header */}
      <div
        className={`hidden md:block max-w-7xl mx-auto px-6 md:px-10 border-t border-[#181d2c]/8 transition-all duration-300 ${
          isScrolled ? 'mt-2.5 pt-2.5' : 'mt-3.5 pt-3'
        }`}
      >
        <nav
          className="flex items-center justify-center gap-8 lg:gap-10 text-[13px] tracking-wide font-medium"
          aria-label="Primary Navigation"
        >
          {navLinks.map((item) => {
            const isActive = currentPage === item.page;
            return (
              <a
                key={item.page}
                href={ROUTE_HASHES[item.page]}
                onClick={(e) => handleLinkClick(e, item.page)}
                aria-current={isActive ? 'page' : undefined}
                className={`whitespace-nowrap transition-colors relative py-1 focus:outline-hidden focus-visible:text-[#2b5c84] ${
                  isActive
                    ? 'text-[#2b5c84] font-semibold'
                    : 'text-[#3e4452] hover:text-[#181d2c]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2b5c84]" />
                )}
              </a>
            );
          })}
        </nav>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-full bg-white border-b border-[#181d2c]/15 px-6 py-8 shadow-xl flex flex-col gap-6 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-3 text-base">
            {navLinks.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <a
                  key={item.page}
                  href={ROUTE_HASHES[item.page]}
                  onClick={(e) => handleLinkClick(e, item.page)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`tracking-wide py-2.5 border-b border-[#181d2c]/10 transition-colors flex items-center justify-between ${
                    isActive
                      ? 'text-[#2b5c84] font-semibold'
                      : 'text-[#3e4452] font-medium hover:text-[#181d2c]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#2b5c84]" />}
                </a>
              );
            })}
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <a
              href={ROUTE_HASHES.contact}
              onClick={(e) => handleLinkClick(e, 'contact')}
              className="w-full text-center py-3 bg-[#2b5c84] text-white text-xs uppercase tracking-widest font-semibold rounded-sm"
            >
              Start an Inquiry
            </a>
            <p className="text-xs text-[#626878] text-center mt-2">
              East End Studio, Adelaide · {AGENCY_DETAILS.hours}
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
