import React from 'react';
import { ShieldCheck, Compass, Eye, HeartHandshake, MapPin } from 'lucide-react';
import { AGENCY_DETAILS } from '../data/agencyData';

export const AboutSection: React.FC = () => {
  const principles = [
    {
      num: '01',
      title: 'Restraint Over Synthetic Noise',
      desc: 'In an era where the internet is flooded with generic AI copy and bloated popups, true luxury is clarity, poise, and quiet conviction.',
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

  return (
    <section id="about" className="py-24 bg-[#faf9f6] border-t border-[#4b3b47]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-[0.25em] text-[#6a6262] font-medium mb-3">
            Our Provenance &amp; Ethos
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#4b3b47] font-normal tracking-tight mb-6">
            A boutique studio born from a belief in <span className="italic">considered</span> work.
          </h2>
          <p className="text-base text-[#6a6262] leading-relaxed">
            Founded on Frome Street in Adelaide’s vibrant East End, Aura Studio exists to serve
            brands that care deeply about their heritage, their products, and their reputation.
            We are not a high-volume agency assembly line—we are your dedicated strategic atelier.
          </p>
        </div>

        {/* Studio Atmosphere */}
        <div className="bg-white border border-[#4b3b47]/15 p-6 sm:p-10 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 aspect-[16/10] overflow-hidden bg-[#e0d8de]/30 border border-[#4b3b47]/10">
              <img
                src={AGENCY_DETAILS.assets.studio}
                alt="Aura Studio, Frome Street Adelaide"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#6a6262] mb-2">
                <MapPin className="w-3.5 h-3.5 text-[#4b3b47]" />
                <span>{AGENCY_DETAILS.location}</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#4b3b47] font-normal mb-4">
                Space to Think, Room to Craft
              </h3>
              <p className="text-xs sm:text-sm text-[#6a6262] leading-relaxed mb-4">
                Adelaide provides an unparalleled environment for strategic focus. Away from the
                frenetic hyper-tactics of congested eastern capitals, our team enjoys the mental
                clarity and cultural depth necessary to engineer strategies that endure across market cycles.
              </p>
              <p className="text-xs sm:text-sm text-[#6a6262] leading-relaxed">
                From our natural-light Frome Street studio, we work in close proximity to the Adelaide Hills,
                Barossa Valley, and Fleurieu Peninsula—immersed in the artisanal excellence that defines South Australia.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Core Studio Principles */}
        <div className="pt-12 border-t border-[#4b3b47]/10">
          <div className="text-xs uppercase tracking-[0.25em] text-[#6a6262] font-medium mb-8">
            The Aura Studio Commitments
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((pr) => (
              <div
                key={pr.num}
                className="p-6 bg-white border border-[#4b3b47]/12 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-sm text-[#9c9990] block mb-4">
                    {pr.num} /
                  </span>
                  <h4 className="font-serif text-lg text-[#4b3b47] font-medium mb-2.5">
                    {pr.title}
                  </h4>
                  <p className="text-xs text-[#6a6262] leading-relaxed">
                    {pr.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
