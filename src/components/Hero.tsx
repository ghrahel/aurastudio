import React from 'react';
import { ArrowDownRight, Compass, ShieldCheck, Sparkles, MoveRight } from 'lucide-react';
import { AGENCY_DETAILS } from '../data/agencyData';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#faf9f6]">
      {/* Delicate background ambiance lines */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4b3b47]/15 to-transparent" />
        <div className="absolute top-2/3 left-10 right-10 h-px bg-gradient-to-r from-transparent via-[#cfd2b2]/40 to-transparent" />
        <div className="absolute -top-24 right-1/4 w-96 h-96 rounded-full bg-[#e0d8de]/40 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -left-20 w-80 h-80 rounded-full bg-[#cfd2b2]/30 blur-3xl pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
        {/* Editorial Sub-kicker / Studio Status */}
        <div className="inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-[#6a6262] font-medium mb-6">
          <span className="w-2 h-2 rounded-full bg-[#cfd2b2] animate-pulse"></span>
          <span>Creative Digital Marketing · Adelaide, South Australia</span>
          <span className="text-[#9c9990]">/</span>
          <span className="hidden sm:inline text-[#9c9990]">Q1 Client Intake Open</span>
        </div>

        {/* Hero Title with Cormorant Garamond */}
        <div className="max-w-4xl mb-8">
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal leading-[1.08] text-[#4b3b47] tracking-tight">
            Intentional digital marketing for{' '}
            <span className="italic font-normal text-[#6a6262]">visionary</span> South Australian brands.
          </h1>
        </div>

        {/* Lead Narrative */}
        <div className="max-w-2xl mb-10">
          <p className="text-base sm:text-lg text-[#6a6262] leading-relaxed font-normal">
            From our East End studio on Kaurna Yarta, we engineer forensic website audits,
            organic search supremacy, artisanal content, and mathematical growth strategy for
            discerning businesses who value enduring craft over synthetic noise.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 mb-16">
          <a
            href="#work"
            className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#4b3b47] text-[#faf9f6] text-xs uppercase tracking-widest font-medium rounded-sm hover:bg-[#382b35] transition-all duration-200 shadow-sm"
          >
            <span>Explore Past Work</span>
            <ArrowDownRight className="w-4 h-4 text-[#cfd2b2]" />
          </a>
          <a
            href="#audit-tool"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-transparent border border-[#4b3b47]/30 text-[#4b3b47] text-xs uppercase tracking-widest font-medium rounded-sm hover:border-[#4b3b47] hover:bg-[#e0d8de]/30 transition-all duration-200"
          >
            <span>Instant Website Audit</span>
          </a>
        </div>

        {/* Clean Typographic Numbers / Stats (Zero-Pill Discipline) */}
        <div className="pt-8 border-t border-[#4b3b47]/15 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {AGENCY_DETAILS.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="font-serif text-3xl sm:text-4xl text-[#4b3b47] font-semibold tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs uppercase tracking-wider text-[#6a6262] mt-1 font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
