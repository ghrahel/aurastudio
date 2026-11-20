import React from 'react';
import { ArrowRight, Activity, Feather, Compass, Search, Layers } from 'lucide-react';
import { SERVICES } from '../data/agencyData';
import { PageRoute, ROUTE_HASHES } from '../types/navigation';

interface HomeOverviewBandsProps {
  onNavigate: (page: PageRoute, serviceId?: string) => void;
}

export const HomeServicesOverview: React.FC<HomeOverviewBandsProps> = ({ onNavigate }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Activity':
        return <Activity className="w-5 h-5 text-[#522D60]" />;
      case 'Feather':
        return <Feather className="w-5 h-5 text-[#2b5c84]" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-[#522D60]" />;
      case 'Search':
        return <Search className="w-5 h-5 text-[#2b5c84]" />;
      default:
        return <Layers className="w-5 h-5 text-[#522D60]" />;
    }
  };

  return (
    <section className="py-24 bg-white border-t border-[#181d2c]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-[#2b5c84] font-semibold mb-3">
              Practice Disciplines
            </div>
            <h2 className="font-display text-3xl sm:text-5xl text-[#181d2c] font-bold tracking-tight">
              Four pillars of <span className="text-[#522D60]">enduring</span> growth.
            </h2>
          </div>

          <a
            href={ROUTE_HASHES.services}
            onClick={(e) => {
              e.preventDefault();
              onNavigate('services');
            }}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#2b5c84] hover:text-[#1e4363] transition-colors shrink-0"
          >
            <span>Explore Full Services</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((srv, idx) => (
            <button
              key={srv.id}
              type="button"
              onClick={() => onNavigate('services', srv.id)}
              className="group text-left bg-white border border-[#181d2c]/14 p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:border-[#2b5c84] hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-xs font-semibold text-[#626878]">0{idx + 1}</span>
                  {getIcon(srv.deliverableIcon)}
                </div>
                <div className="text-[11px] uppercase tracking-wider text-[#2b5c84] font-semibold mb-1.5">
                  {srv.shortTag}
                </div>
                <h3 className="font-display text-2xl text-[#181d2c] font-bold mb-3 group-hover:text-[#2b5c84] transition-colors">
                  {srv.title}
                </h3>
                <p className="text-xs text-[#3e4452] leading-relaxed line-clamp-3">
                  {srv.description}
                </p>
              </div>

              <div className="pt-5 mt-6 border-t border-[#181d2c]/10 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#181d2c] group-hover:text-[#2b5c84]">
                <span>View Specification</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export const HomeContactBand: React.FC<{ onNavigate: (page: PageRoute) => void }> = ({
  onNavigate,
}) => {
  return (
    <section className="py-24 bg-white border-t border-[#181d2c]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="bg-[#181d2c] text-white p-8 sm:p-14 flex flex-col lg:flex-row lg:items-center justify-between gap-8 shadow-lg">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.25em] text-[#8eb8db] font-semibold mb-3">
              Adelaide East End · New Partner Intake
            </div>
            <h2 className="font-display text-3xl sm:text-5xl text-white font-bold tracking-tight mb-4">
              Ready to elevate your digital <span className="text-[#8eb8db]">presence</span>?
            </h2>
            <p className="text-sm sm:text-base text-[#eff3f8] leading-relaxed">
              We collaborate with a selective roster of brands each quarter. Share your
              ambitions or request a forensic review with our Adelaide principals.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <a
              href={ROUTE_HASHES.about}
              onClick={(e) => {
                e.preventDefault();
                onNavigate('about');
              }}
              className="px-6 py-3.5 border border-white/30 text-white text-xs uppercase tracking-widest font-semibold rounded-sm hover:border-[#8eb8db] hover:text-[#8eb8db] transition-colors"
            >
              About the Studio
            </a>
            <a
              href={ROUTE_HASHES.contact}
              onClick={(e) => {
                e.preventDefault();
                onNavigate('contact');
              }}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#2b5c84] text-white text-xs uppercase tracking-widest font-bold rounded-sm hover:bg-[#1e4363] transition-colors shadow-xs"
            >
              <span>Start an Inquiry</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
