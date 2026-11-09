import React, { useState, useEffect } from 'react';
import { ArrowUp, MapPin, Mail, Phone } from 'lucide-react';
import { AGENCY_DETAILS } from '../data/agencyData';

export const Footer: React.FC = () => {
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

  return (
    <footer className="bg-[#4b3b47] text-[#faf9f6] pt-20 pb-12 border-t border-[#6a6262]/30">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#6a6262]/30">
          {/* Studio Brand & Adelaide Time */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="font-serif text-3xl font-semibold tracking-wider text-[#faf9f6]">
                  {AGENCY_DETAILS.name.toUpperCase()}
                </span>
                <span className="w-2 h-2 rounded-full bg-[#cfd2b2]"></span>
              </div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#e0d8de] mb-6 font-medium">
                Adelaide · Tarntanya
              </p>
              <p className="text-xs sm:text-sm text-[#e0d8de]/80 leading-relaxed max-w-sm mb-6">
                A minimalist digital marketing consultancy engineering forensic website audits,
                editorial brand content, organic search supremacy, and intentional strategy for
                South Australian leaders.
              </p>
            </div>

            {/* Live Adelaide Clock */}
            <div className="pt-4 border-t border-[#6a6262]/40 inline-flex items-center gap-3 text-xs text-[#cfd2b2]">
              <span className="w-2 h-2 rounded-full bg-[#cfd2b2] animate-ping" />
              <span>Adelaide Studio Time:</span>
              <span className="font-mono font-medium text-[#faf9f6]">{adelaideTime || '09:00 AM ACST'}</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-widest text-[#cfd2b2] font-semibold mb-4">
              Directory
            </h4>
            <ul className="space-y-2.5 text-xs text-[#e0d8de]">
              <li>
                <a href="#work" className="hover:text-white transition-colors">
                  Selected Portfolio Works
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Capabilities &amp; Services
                </a>
              </li>
              <li>
                <a href="#audit-tool" className="hover:text-white transition-colors">
                  Instant Website Audit Tool
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  The Adelaide Studio Story
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors">
                  Client Reflections &amp; ROI
                </a>
              </li>
              <li>
                <a href="#inquiry" className="hover:text-white transition-colors">
                  Project Inquiry &amp; Intake
                </a>
              </li>
            </ul>
          </div>

          {/* Core Services Quick List */}
          <div className="md:col-span-4">
            <h4 className="text-xs uppercase tracking-widest text-[#cfd2b2] font-semibold mb-4">
              Practice Disciplines
            </h4>
            <ul className="space-y-2 text-xs text-[#e0d8de]/90 mb-6">
              <li className="flex items-center gap-2">
                <span className="text-[#cfd2b2] font-mono">01.</span>
                <span>Website Audits (Technical, UX &amp; Core Web Vitals)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#cfd2b2] font-mono">02.</span>
                <span>Content Creation (Editorial, Copy &amp; Photography)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#cfd2b2] font-mono">03.</span>
                <span>Digital Strategy (Omnichannel DTC &amp; Brand Systems)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#cfd2b2] font-mono">04.</span>
                <span>Search Engine Optimization (Local SA &amp; National Graph)</span>
              </li>
            </ul>

            <div className="text-xs text-[#e0d8de]/70 leading-relaxed">
              <div className="text-[11px] uppercase tracking-wider text-[#cfd2b2] mb-1">
                Direct Inquiries
              </div>
              <div>hello@aurastudio.com.au</div>
              <div>+61 8 8232 4190</div>
            </div>
          </div>
        </div>

        {/* Kaurna Yarta Acknowledgement & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs text-[#e0d8de]/70">
          <p className="max-w-2xl leading-relaxed text-[11px]">
            {AGENCY_DETAILS.countryAcknowledgment}
          </p>

          <div className="flex items-center gap-6 shrink-0">
            <span>© 2026 Aura Studio Pty Ltd. All Rights Reserved.</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 border border-[#6a6262] text-[#faf9f6] hover:bg-[#6a6262]/30 transition-colors rounded-xs"
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
