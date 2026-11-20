import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { AGENCY_DETAILS } from '../data/agencyData';
import { PageRoute, ROUTE_HASHES } from '../types/navigation';

interface FooterProps {
  onNavigate: (page: PageRoute, serviceId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [adelaideTime, setAdelaideTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Australia/Adelaide',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setAdelaideTime(new Intl.DateTimeFormat('en-AU', options).format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (
    e: React.MouseEvent<HTMLAnchorElement>,
    page: PageRoute,
    serviceId?: string
  ) => {
    e.preventDefault();
    onNavigate(page, serviceId);
  };

  return (
    <footer className="bg-[#181d2c] text-white pt-20 pb-12 border-t border-[#522D60]/40">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/15">
          {/* Studio Brand & Adelaide Time */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <a
                  href={ROUTE_HASHES.home}
                  onClick={(e) => handleNav(e, 'home')}
                  className="font-display text-3xl font-bold tracking-tight text-white hover:text-[#8eb8db] transition-colors"
                >
                  {AGENCY_DETAILS.name.toUpperCase()}
                </a>
                <span className="w-2.5 h-2.5 rounded-full bg-[#2b5c84]"></span>
              </div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#8eb8db] mb-6 font-semibold">
                Adelaide · Tarntanya
              </p>
              <p className="text-xs sm:text-sm text-[#eff3f8]/85 leading-relaxed max-w-sm mb-6">
                A creative digital marketing consultancy engineering forensic website audits,
                editorial brand content, organic search supremacy, and intentional strategy for
                South Australian leaders.
              </p>
            </div>

            {/* Live Adelaide Clock */}
            <div className="pt-4 border-t border-white/15 inline-flex items-center gap-3 text-xs text-[#eab340]">
              <span className="w-2 h-2 rounded-full bg-[#eab340] animate-ping" />
              <span>Adelaide Studio Time:</span>
              <span className="font-mono font-semibold text-white">
                {adelaideTime || '09:00 AM ACST'}
              </span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-widest text-[#8eb8db] font-semibold mb-4">
              Pages &amp; Directory
            </h4>
            <ul className="space-y-2.5 text-xs text-[#eff3f8]">
              <li>
                <a
                  href={ROUTE_HASHES.home}
                  onClick={(e) => handleNav(e, 'home')}
                  className="hover:text-[#8eb8db] transition-colors"
                >
                  Home Overview
                </a>
              </li>
              <li>
                <a
                  href={ROUTE_HASHES.about}
                  onClick={(e) => handleNav(e, 'about')}
                  className="hover:text-[#8eb8db] transition-colors"
                >
                  About Us &amp; Studio Ethos
                </a>
              </li>
              <li>
                <a
                  href={ROUTE_HASHES.services}
                  onClick={(e) => handleNav(e, 'services')}
                  className="hover:text-[#8eb8db] transition-colors"
                >
                  Services &amp; Audit Tool
                </a>
              </li>
              <li>
                <a
                  href={ROUTE_HASHES.work}
                  onClick={(e) => handleNav(e, 'work')}
                  className="hover:text-[#8eb8db] transition-colors"
                >
                  Selected Portfolio Works
                </a>
              </li>
              <li>
                <a
                  href={ROUTE_HASHES.contact}
                  onClick={(e) => handleNav(e, 'contact')}
                  className="hover:text-[#8eb8db] transition-colors"
                >
                  Contact &amp; Project Inquiry
                </a>
              </li>
            </ul>
          </div>

          {/* Core Services Quick List */}
          <div className="md:col-span-4">
            <h4 className="text-xs uppercase tracking-widest text-[#8eb8db] font-semibold mb-4">
              Practice Disciplines
            </h4>
            <ul className="space-y-2 text-xs text-[#eff3f8] mb-6">
              <li>
                <a
                  href={ROUTE_HASHES.services}
                  onClick={(e) => handleNav(e, 'services', 'website-audits')}
                  className="flex items-center gap-2 hover:text-[#8eb8db] transition-colors"
                >
                  <span className="text-[#8eb8db] font-mono font-semibold">01.</span>
                  <span>Website Audits (Technical, UX &amp; Core Web Vitals)</span>
                </a>
              </li>
              <li>
                <a
                  href={ROUTE_HASHES.services}
                  onClick={(e) => handleNav(e, 'services', 'content-creation')}
                  className="flex items-center gap-2 hover:text-[#8eb8db] transition-colors"
                >
                  <span className="text-[#8eb8db] font-mono font-semibold">02.</span>
                  <span>Content Creation (Editorial, Copy &amp; Photography)</span>
                </a>
              </li>
              <li>
                <a
                  href={ROUTE_HASHES.services}
                  onClick={(e) => handleNav(e, 'services', 'digital-strategy')}
                  className="flex items-center gap-2 hover:text-[#8eb8db] transition-colors"
                >
                  <span className="text-[#8eb8db] font-mono font-semibold">03.</span>
                  <span>Digital Strategy (Omnichannel DTC &amp; Brand Systems)</span>
                </a>
              </li>
              <li>
                <a
                  href={ROUTE_HASHES.services}
                  onClick={(e) => handleNav(e, 'services', 'seo')}
                  className="flex items-center gap-2 hover:text-[#8eb8db] transition-colors"
                >
                  <span className="text-[#8eb8db] font-mono font-semibold">04.</span>
                  <span>Search Engine Optimization (Local SA &amp; National Graph)</span>
                </a>
              </li>
            </ul>

            <div className="text-xs text-[#eff3f8]/80 leading-relaxed">
              <div className="text-[11px] uppercase tracking-wider text-[#8eb8db] font-semibold mb-1">
                Direct Inquiries
              </div>
              <div>{AGENCY_DETAILS.email}</div>
              <div>{AGENCY_DETAILS.phone}</div>
            </div>
          </div>
        </div>

        {/* Kaurna Yarta Acknowledgement & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs text-[#eff3f8]/75">
          <p className="max-w-2xl leading-relaxed text-[11px]">
            {AGENCY_DETAILS.countryAcknowledgment}
          </p>

          <div className="flex items-center gap-6 shrink-0">
            <span>© 2026 Aura Studio Pty Ltd. All Rights Reserved.</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 border border-white/25 text-white hover:border-[#8eb8db] hover:text-[#8eb8db] transition-colors rounded-xs"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
