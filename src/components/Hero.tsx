import React from 'react';
import { ArrowDownRight } from 'lucide-react';
import { AGENCY_DETAILS } from '../data/agencyData';
import { PageRoute, ROUTE_HASHES } from '../types/navigation';

interface HeroProps {
  onNavigate?: (page: PageRoute) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, page: PageRoute) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(page);
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-white">
      {/* Subtle organic botanical glow on pure white */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#522D60]/15 to-transparent" />
        <div className="absolute top-2/3 left-10 right-10 h-px bg-gradient-to-r from-transparent via-[#2b5c84]/18 to-transparent" />
        <div className="absolute -top-24 right-1/4 w-96 h-96 rounded-full bg-[#522D60]/8 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -left-20 w-80 h-80 rounded-full bg-[#2b5c84]/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-64 h-64 rounded-full bg-[#eab340]/12 blur-3xl pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
        {/* Studio Status */}
        <div className="inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-[#3e4452] font-semibold mb-6">
          <span className="w-2.5 h-2.5 rounded-full bg-[#2b5c84] animate-pulse"></span>
          <span>Creative Digital Marketing · Adelaide, South Australia</span>
          <span className="text-[#626878]">/</span>
          <span className="hidden sm:inline text-[#522D60]">Q1 Client Intake Open</span>
        </div>

        {/* Hero Title in Space Grotesk Sans */}
        <div className="max-w-4xl mb-8">
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold leading-[1.06] text-[#181d2c] tracking-tight">
            Intentional digital marketing for{' '}
            <span className="text-[#2b5c84]">visionary</span> South Australian brands.
          </h1>
        </div>

        {/* Lead Narrative */}
        <div className="max-w-2xl mb-10">
          <p className="text-base sm:text-lg text-[#3e4452] leading-relaxed font-normal">
            From our East End studio on Kaurna Yarta, we engineer forensic website audits,
            organic search supremacy, grounded editorial content, and mathematical growth strategy
            for discerning businesses who value enduring craft over synthetic noise.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 mb-16">
          <a
            href={ROUTE_HASHES.work}
            onClick={(e) => handleNav(e, 'work')}
            className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#522D60] text-white text-xs uppercase tracking-widest font-semibold rounded-sm hover:bg-[#3e2049] transition-all duration-200 shadow-sm"
          >
            <span>Explore Past Work</span>
            <ArrowDownRight className="w-4 h-4 text-[#eab340]" />
          </a>
          <a
            href={ROUTE_HASHES.services}
            onClick={(e) => handleNav(e, 'services')}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-white border border-[#181d2c]/25 text-[#181d2c] text-xs uppercase tracking-widest font-semibold rounded-sm hover:border-[#2b5c84] hover:text-[#2b5c84] transition-all duration-200"
          >
            <span>Our Services &amp; Audit Tool</span>
          </a>
        </div>

        {/* Clean Typographic Numbers / Stats */}
        <div className="pt-8 border-t border-[#181d2c]/12 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {AGENCY_DETAILS.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="font-display text-3xl sm:text-4xl text-[#181d2c] font-bold tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs uppercase tracking-wider text-[#3e4452] mt-1 font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
