import React from 'react';
import { MapPin, ArrowUpRight } from 'lucide-react';
import { AGENCY_DETAILS } from '../data/agencyData';
import { PageRoute, ROUTE_HASHES } from '../types/navigation';

interface AboutSectionProps {
  isStandalonePage?: boolean;
  onNavigate?: (page: PageRoute) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  isStandalonePage = false,
  onNavigate,
}) => {
  const principles = [
    {
      num: '01',
      title: 'Clarity Over Synthetic Noise',
      desc: 'In an era where the internet is flooded with generic AI copy and bloated popups, true distinction is precision, energy, and grounded conviction.',
    },
    {
      num: '02',
      title: 'Forensic Scientific Truth',
      desc: 'We never guess. Every recommendation is anchored in crawl audits, server diagnostics, verified keyword intent, and unit economics.',
    },
    {
      num: '03',
      title: 'Capped Client Roster',
      desc: 'We deliberately cap active partnerships to 6 brands at any given time. You work directly with principal strategists, not junior delegates.',
    },
    {
      num: '04',
      title: 'Adelaide Craft & Global Standard',
      desc: 'Rooted on Kaurna Yarta in Adelaide’s East End, we leverage our state’s world-class design and wine pedigree to compete on the global stage.',
    },
  ];

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, page: PageRoute) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(page);
    }
  };

  return (
    <section
      id="about"
      className={`${
        isStandalonePage ? 'pt-32 pb-24 md:pt-48' : 'py-24 border-t border-[#181d2c]/10'
      } bg-white`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-[0.25em] text-[#522D60] font-semibold mb-3">
            Our Provenance &amp; Ethos
          </div>
          {isStandalonePage ? (
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#181d2c] font-bold tracking-tight mb-6">
              A creative studio born from a belief in <span className="text-[#522D60]">considered</span> work.
            </h1>
          ) : (
            <h2 className="font-display text-3xl sm:text-5xl text-[#181d2c] font-bold tracking-tight mb-6">
              A creative studio born from a belief in <span className="text-[#522D60]">considered</span> work.
            </h2>
          )}
          <p className="text-base text-[#3e4452] leading-relaxed">
            Founded on Frome Street in Adelaide’s vibrant East End, Aura Studio exists to serve
            brands that care deeply about their heritage, their products, and their reputation.
            We are not a high-volume agency assembly line—we are your dedicated strategic atelier.
          </p>
        </div>

        {/* Studio Atmosphere */}
        <div className="bg-white border border-[#181d2c]/15 p-6 sm:p-10 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 aspect-[16/10] overflow-hidden bg-[#f6f2f8] border border-[#181d2c]/10">
              <img
                src={AGENCY_DETAILS.assets.studio}
                alt="Aura Studio, Frome Street Adelaide"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#522D60] font-semibold mb-2">
                <MapPin className="w-3.5 h-3.5 text-[#2b5c84]" />
                <span>{AGENCY_DETAILS.location}</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl text-[#181d2c] font-bold mb-4">
                Space to Think, Room to Craft
              </h3>
              <p className="text-xs sm:text-sm text-[#3e4452] leading-relaxed mb-4">
                Adelaide provides an unparalleled environment for strategic focus. Away from the
                frenetic hyper-tactics of congested eastern capitals, our team enjoys the mental
                clarity and cultural depth necessary to engineer strategies that endure across market cycles.
              </p>
              <p className="text-xs sm:text-sm text-[#3e4452] leading-relaxed">
                From our natural-light Frome Street studio, we work in close proximity to the Adelaide Hills,
                Barossa Valley, and Fleurieu Peninsula—immersed in the artisanal excellence that defines South Australia.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Core Studio Principles */}
        <div className="pt-12 border-t border-[#181d2c]/10">
          <div className="text-xs uppercase tracking-[0.25em] text-[#522D60] font-semibold mb-8">
            The Aura Studio Commitments
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((pr) => (
              <div
                key={pr.num}
                className="p-6 bg-[#f6f7fa] border border-[#181d2c]/12 flex flex-col justify-between hover:border-[#2b5c84] transition-colors"
              >
                <div>
                  <span className="font-mono text-sm font-bold text-[#2b5c84] block mb-4">
                    {pr.num} /
                  </span>
                  <h4 className="font-display text-lg text-[#181d2c] font-bold mb-2.5">
                    {pr.title}
                  </h4>
                  <p className="text-xs text-[#3e4452] leading-relaxed">
                    {pr.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Standalone About Page Footer CTA */}
        {isStandalonePage && onNavigate && (
          <div className="mt-20 pt-12 border-t border-[#181d2c]/10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-[#522D60] font-semibold mb-2">
                Next Steps
              </div>
              <h3 className="font-display text-2xl sm:text-3xl text-[#181d2c] font-bold">
                Explore our practice disciplines or initiate a private briefing.
              </h3>
            </div>
            <div className="flex flex-wrap md:justify-end gap-4">
              <a
                href={ROUTE_HASHES.services}
                onClick={(e) => handleNav(e, 'services')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-[#181d2c]/25 text-[#181d2c] text-xs uppercase tracking-widest font-semibold rounded-sm hover:border-[#522D60] hover:text-[#522D60] transition-colors"
              >
                <span>View Services</span>
              </a>
              <a
                href={ROUTE_HASHES.contact}
                onClick={(e) => handleNav(e, 'contact')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#2b5c84] text-white text-xs uppercase tracking-widest font-semibold rounded-sm hover:bg-[#1e4363] transition-colors"
              >
                <span>Contact Studio</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
