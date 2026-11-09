import React, { useState } from 'react';
import {
  Activity,
  Feather,
  Compass,
  Search,
  Check,
  Clock,
  ArrowRight,
  Sparkles,
  Layers,
} from 'lucide-react';
import { SERVICES, ServiceItem } from '../data/agencyData';

interface ServicesSectionProps {
  onSelectService?: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeTabId, setActiveTabId] = useState<string>(SERVICES[0].id);

  const activeService = SERVICES.find((s) => s.id === activeTabId) || SERVICES[0];

  const getIcon = (name: string) => {
    switch (name) {
      case 'Activity':
        return <Activity className="w-5 h-5 text-[#4b3b47]" />;
      case 'Feather':
        return <Feather className="w-5 h-5 text-[#4b3b47]" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-[#4b3b47]" />;
      case 'Search':
        return <Search className="w-5 h-5 text-[#4b3b47]" />;
      default:
        return <Layers className="w-5 h-5 text-[#4b3b47]" />;
    }
  };

  const handleInquireClick = (serviceTitle: string) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    }
    const inquiryEl = document.getElementById('inquiry');
    if (inquiryEl) {
      inquiryEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 bg-[#faf9f6] border-t border-[#4b3b47]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-[#6a6262] font-medium mb-3">
              Capabilities &amp; Core Disciplines
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#4b3b47] font-normal tracking-tight">
              Bespoke digital services, <span className="italic">forensically</span> executed.
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#6a6262] leading-relaxed">
            We avoid generic marketing templates. Every engagement is rooted in deep technical
            hygiene, narrative resonance, and commercial accountability.
          </p>
        </div>

        {/* 4 Core Services Navigation Selector */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {SERVICES.map((srv, index) => {
            const isSelected = srv.id === activeTabId;
            return (
              <button
                key={srv.id}
                type="button"
                onClick={() => setActiveTabId(srv.id)}
                className={`text-left p-5 border transition-all duration-200 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#4b3b47] text-[#faf9f6] border-[#4b3b47] shadow-sm'
                    : 'bg-white text-[#4b3b47] border-[#4b3b47]/15 hover:border-[#4b3b47]/30 hover:bg-[#e0d8de]/20'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-xs uppercase tracking-widest font-mono ${
                        isSelected ? 'text-[#cfd2b2]' : 'text-[#9c9990]'
                      }`}
                    >
                      0{index + 1}
                    </span>
                    <span className={isSelected ? 'text-[#cfd2b2]' : 'text-[#6a6262]'}>
                      {getIcon(srv.deliverableIcon)}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-medium tracking-tight mb-1">
                    {srv.title}
                  </h3>
                </div>
                <div
                  className={`text-[11px] uppercase tracking-wider mt-4 ${
                    isSelected ? 'text-[#e0d8de]' : 'text-[#6a6262]'
                  }`}
                >
                  {srv.shortTag}
                </div>
              </button>
            );
          })}
        </div>

        {/* Deep Dive Active Service Detail Card */}
        <div className="bg-white border border-[#4b3b47]/15 p-6 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Narrative & Deliverables */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#6a6262] font-medium mb-3">
                  <span>Service Specification</span>
                  <span aria-hidden="true">/</span>
                  <span className="text-[#4b3b47] font-semibold">{activeService.title}</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-4xl text-[#4b3b47] font-normal mb-4 leading-snug">
                  {activeService.headline}
                </h3>

                <p className="text-sm sm:text-base text-[#6a6262] leading-relaxed mb-8">
                  {activeService.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="mb-8">
                  <h4 className="text-xs uppercase tracking-widest text-[#4b3b47] font-semibold mb-4">
                    Key Deliverables &amp; Artifacts
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeService.deliverables.map((deliv, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4b3b47] p-2.5 bg-[#faf9f6] border border-[#4b3b47]/8"
                      >
                        <Check className="w-4 h-4 text-[#4b3b47] shrink-0 mt-0.5" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Engagement Meta */}
              <div className="pt-6 border-t border-[#4b3b47]/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-[#6a6262]">
                  <Clock className="w-4 h-4 text-[#9c9990]" />
                  <span>
                    Estimated Horizon:{' '}
                    <strong className="text-[#4b3b47] font-medium">{activeService.turnaround}</strong>
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => handleInquireClick(activeService.title)}
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#4b3b47] text-[#faf9f6] text-xs uppercase tracking-widest font-medium rounded-sm hover:bg-[#382b35] transition-colors"
                >
                  <span>Inquire for {activeService.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Column: 4-Step Process & Fit */}
            <div className="lg:col-span-5 bg-[#faf9f6] p-6 sm:p-8 border border-[#4b3b47]/10 flex flex-col justify-between">
              <div>
                <h4 className="font-serif text-xl text-[#4b3b47] font-medium mb-6">
                  Our Methodological Sequence
                </h4>

                <div className="space-y-6">
                  {activeService.process.map((step) => (
                    <div key={step.step} className="flex gap-4">
                      <span className="font-mono text-sm text-[#6a6262] font-semibold pt-0.5">
                        {step.step}.
                      </span>
                      <div>
                        <div className="text-xs uppercase tracking-wider font-semibold text-[#4b3b47]">
                          {step.title}
                        </div>
                        <div className="text-xs text-[#6a6262] mt-1 leading-relaxed">
                          {step.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#4b3b47]/10">
                <div className="text-[11px] uppercase tracking-wider text-[#9c9990] font-medium mb-1">
                  Ideal Partner Profile
                </div>
                <p className="text-xs text-[#4b3b47] italic leading-relaxed">
                  "{activeService.idealFor}"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
