import React, { useState } from 'react';
import {
  Activity,
  Feather,
  Compass,
  Search,
  Check,
  Clock,
  ArrowRight,
  Layers,
} from 'lucide-react';
import { SERVICES } from '../data/agencyData';

interface ServicesSectionProps {
  onSelectService?: (serviceTitle: string) => void;
  initialServiceId?: string;
  isStandalonePage?: boolean;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  initialServiceId,
  isStandalonePage = false,
}) => {
  const [activeTabId, setActiveTabId] = useState<string>(initialServiceId || SERVICES[0].id);

  React.useEffect(() => {
    if (initialServiceId) {
      setActiveTabId(initialServiceId);
    }
  }, [initialServiceId]);

  const activeService = SERVICES.find((s) => s.id === activeTabId) || SERVICES[0];

  const getIcon = (name: string, isSelected: boolean) => {
    const colorClass = isSelected ? 'text-[#eab340]' : 'text-[#522D60]';
    switch (name) {
      case 'Activity':
        return <Activity className={`w-5 h-5 ${colorClass}`} />;
      case 'Feather':
        return <Feather className={`w-5 h-5 ${colorClass}`} />;
      case 'Compass':
        return <Compass className={`w-5 h-5 ${colorClass}`} />;
      case 'Search':
        return <Search className={`w-5 h-5 ${colorClass}`} />;
      default:
        return <Layers className={`w-5 h-5 ${colorClass}`} />;
    }
  };

  const handleInquireClick = (serviceTitle: string) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    } else {
      const inquiryEl = document.getElementById('inquiry');
      if (inquiryEl) {
        inquiryEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id="services"
      className={`${
        isStandalonePage ? 'pt-32 pb-24 md:pt-40' : 'py-24 border-t border-[#181d2c]/10'
      } bg-white`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-[#522D60] font-semibold mb-3">
              Capabilities &amp; Core Disciplines
            </div>
            {isStandalonePage ? (
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#181d2c] font-bold tracking-tight">
                Bespoke digital services, <span className="text-[#522D60]">forensically</span> executed.
              </h1>
            ) : (
              <h2 className="font-display text-3xl sm:text-5xl text-[#181d2c] font-bold tracking-tight">
                Bespoke digital services, <span className="text-[#522D60]">forensically</span> executed.
              </h2>
            )}
          </div>
          <p className="max-w-md text-sm text-[#3e4452] leading-relaxed">
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
                    ? 'bg-[#522D60] text-white border-[#522D60] shadow-md'
                    : 'bg-white text-[#181d2c] border-[#181d2c]/15 hover:border-[#2b5c84] hover:bg-[#ebf1f7]/60'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-xs uppercase tracking-widest font-mono font-semibold ${
                        isSelected ? 'text-[#eab340]' : 'text-[#626878]'
                      }`}
                    >
                      0{index + 1}
                    </span>
                    <span>{getIcon(srv.deliverableIcon, isSelected)}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold tracking-tight mb-1">
                    {srv.title}
                  </h3>
                </div>
                <div
                  className={`text-[11px] uppercase tracking-wider mt-4 font-medium ${
                    isSelected ? 'text-[#ebf1f7]' : 'text-[#3e4452]'
                  }`}
                >
                  {srv.shortTag}
                </div>
              </button>
            );
          })}
        </div>

        {/* Deep Dive Active Service Detail Card */}
        <div className="bg-white border border-[#181d2c]/15 p-6 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Narrative & Deliverables */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#3e4452] font-medium mb-3">
                  <span>Service Specification</span>
                  <span aria-hidden="true">/</span>
                  <span className="text-[#2b5c84] font-semibold">{activeService.title}</span>
                </div>

                <h3 className="font-display text-2xl sm:text-4xl text-[#181d2c] font-bold mb-4 leading-snug">
                  {activeService.headline}
                </h3>

                <p className="text-sm sm:text-base text-[#3e4452] leading-relaxed mb-8">
                  {activeService.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="mb-8">
                  <h4 className="text-xs uppercase tracking-widest text-[#181d2c] font-bold mb-4">
                    Key Deliverables &amp; Artifacts
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeService.deliverables.map((deliv, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-[#181d2c] p-3 bg-[#f6f7fa] border border-[#181d2c]/10"
                      >
                        <Check className="w-4 h-4 text-[#522D60] shrink-0 mt-0.5" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Engagement Meta */}
              <div className="pt-6 border-t border-[#181d2c]/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-[#3e4452]">
                  <Clock className="w-4 h-4 text-[#2b5c84]" />
                  <span>
                    Estimated Horizon:{' '}
                    <strong className="text-[#181d2c] font-semibold">
                      {activeService.turnaround}
                    </strong>
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => handleInquireClick(activeService.title)}
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#2b5c84] text-white text-xs uppercase tracking-widest font-semibold rounded-sm hover:bg-[#1e4363] transition-colors"
                >
                  <span>Inquire for {activeService.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </button>
              </div>
            </div>

            {/* Right Column: 4-Step Process & Fit */}
            <div className="lg:col-span-5 bg-[#181d2c] text-white p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <h4 className="font-display text-xl text-white font-bold mb-6">
                  Our Methodological Sequence
                </h4>

                <div className="space-y-6">
                  {activeService.process.map((step) => (
                    <div key={step.step} className="flex gap-4">
                      <span className="font-mono text-sm text-[#eab340] font-bold pt-0.5">
                        {step.step}.
                      </span>
                      <div>
                        <div className="text-xs uppercase tracking-wider font-bold text-white">
                          {step.title}
                        </div>
                        <div className="text-xs text-[#ebf1f7] mt-1 leading-relaxed">
                          {step.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/15">
                <div className="text-[11px] uppercase tracking-wider text-[#8eb8db] font-semibold mb-1">
                  Ideal Partner Profile
                </div>
                <p className="text-xs text-[#ebf1f7] leading-relaxed">
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
