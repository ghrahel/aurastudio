import React, { useState, useEffect } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  Send,
  Copy,
  Download,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { AGENCY_DETAILS } from '../data/agencyData';

interface InquirySectionProps {
  preselectedService?: string;
  prefilledAuditData?: {
    url: string;
    industry: string;
    painPoint: string;
    score: number;
  } | null;
}

export const InquirySection: React.FC<InquirySectionProps> = ({
  preselectedService,
  prefilledAuditData,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    services: [] as string[],
    budget: '$6,000 – $12,000',
    timeline: '1 – 2 Months',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [inquiryId, setInquiryId] = useState('');

  // Handle preselected service if passed from services section
  useEffect(() => {
    if (preselectedService && !formData.services.includes(preselectedService)) {
      setFormData((prev) => ({
        ...prev,
        services: Array.from(new Set([...prev.services, preselectedService])),
      }));
    }
  }, [preselectedService]);

  // Handle prefilled audit data if passed from audit teaser
  useEffect(() => {
    if (prefilledAuditData) {
      setFormData((prev) => ({
        ...prev,
        website: prefilledAuditData.url,
        services: Array.from(new Set([...prev.services, 'Website Audits'])),
        message: `Preliminary Heuristic Score: ${prefilledAuditData.score}/100. Sector: ${prefilledAuditData.industry}. Identified Friction: ${prefilledAuditData.painPoint}. Requesting full forensic review from Aura Studio.`,
      }));
    }
  }, [prefilledAuditData]);

  const availableServices = [
    'Website Audits',
    'Content Creation',
    'Digital Strategy',
    'Search Engine Optimization',
  ];

  const budgetTiers = [
    '$3,000 – $6,000',
    '$6,000 – $12,000',
    '$12,000 – $25,000',
    '$25,000+',
  ];

  const timelines = [
    'Immediate (Next 2 Weeks)',
    '1 – 2 Months',
    'Q1 / Q2 Strategic Planning',
    'Exploratory Discovery',
  ];

  const handleServiceToggle = (srv: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(srv);
      return {
        ...prev,
        services: exists
          ? prev.services.filter((s) => s !== srv)
          : [...prev.services, srv],
      };
    });
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name.';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = 'Please provide a valid work email address.';
    }
    if (!formData.company.trim()) errs.company = 'Please specify your brand or organization.';
    if (formData.services.length === 0) {
      errs.services = 'Please select at least one discipline.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const randomId = `AUR-ADL-${Math.floor(1000 + Math.random() * 9000)}`;
    setInquiryId(randomId);
    setSubmitted(true);
  };

  const handleCopySummary = () => {
    const text = `AURA STUDIO INQUIRY SUMMARY
Reference ID: ${inquiryId}
Client: ${formData.name} (${formData.company})
Email: ${formData.email}
Phone: ${formData.phone || 'N/A'}
Website: ${formData.website || 'N/A'}
Requested Services: ${formData.services.join(', ')}
Budget: ${formData.budget}
Timeline: ${formData.timeline}
Brief: ${formData.message || 'Standard consultation requested'}
Studio: ${AGENCY_DETAILS.location}`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadSummary = () => {
    const text = `AURA STUDIO INQUIRY SUMMARY
Reference ID: ${inquiryId}
Client: ${formData.name} (${formData.company})
Email: ${formData.email}
Phone: ${formData.phone || 'N/A'}
Website: ${formData.website || 'N/A'}
Requested Services: ${formData.services.join(', ')}
Budget: ${formData.budget}
Timeline: ${formData.timeline}
Brief: ${formData.message || 'Standard consultation requested'}
Studio: ${AGENCY_DETAILS.location}`;

    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Aura-Studio-Inquiry-${inquiryId}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section id="inquiry" className="py-24 bg-[#faf9f6] border-t border-[#4b3b47]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Adelaide Studio Context */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-[#6a6262] font-medium mb-3">
                Direct Dialogue · Intake Open
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#4b3b47] font-normal tracking-tight mb-6 leading-tight">
                Initiate a conversation with our <span className="italic">principals</span>.
              </h2>
              <p className="text-sm sm:text-base text-[#6a6262] leading-relaxed mb-8">
                Every project begins with an unhurried, transparent diagnostic discussion.
                Tell us about your brand, your current commercial bottlenecks, and where you aspire to be.
              </p>

              {/* Contact Credentials */}
              <div className="space-y-4 mb-8 text-xs text-[#4b3b47]">
                <div className="flex items-start gap-3 p-3 bg-white border border-[#4b3b47]/10">
                  <MapPin className="w-4 h-4 text-[#6a6262] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold uppercase tracking-wider text-[11px]">
                      Adelaide Studio Location
                    </div>
                    <div className="text-[#6a6262] mt-0.5">{AGENCY_DETAILS.location}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-white border border-[#4b3b47]/10">
                  <Mail className="w-4 h-4 text-[#6a6262] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold uppercase tracking-wider text-[11px]">
                      Direct Dispatch
                    </div>
                    <a
                      href={`mailto:${AGENCY_DETAILS.email}`}
                      className="text-[#4b3b47] hover:underline mt-0.5 block"
                    >
                      {AGENCY_DETAILS.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-white border border-[#4b3b47]/10">
                  <Phone className="w-4 h-4 text-[#6a6262] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold uppercase tracking-wider text-[11px]">
                      Telephone
                    </div>
                    <a
                      href={`tel:${AGENCY_DETAILS.phone.replace(/\s+/g, '')}`}
                      className="text-[#4b3b47] hover:underline mt-0.5 block"
                    >
                      {AGENCY_DETAILS.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-white border border-[#4b3b47]/10">
                  <Clock className="w-4 h-4 text-[#6a6262] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold uppercase tracking-wider text-[11px]">
                      Studio Hours
                    </div>
                    <div className="text-[#6a6262] mt-0.5">{AGENCY_DETAILS.hours}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#cfd2b2]/20 border border-[#4b3b47]/10 text-xs text-[#4b3b47] leading-relaxed">
              <span className="font-semibold">Confidentiality Note:</span> All proprietary
              commercial metrics, vintage release data, and architectural tenders shared with
              Aura Studio remain strictly protected under Australian professional non-disclosure standards.
            </div>
          </div>

          {/* Right Column: Inquiry Form or Confirmed State */}
          <div className="lg:col-span-7 bg-white border border-[#4b3b47]/15 p-6 sm:p-10 shadow-xs">
            {submitted ? (
              <div className="animate-in fade-in duration-300 py-6">
                <div className="flex items-center gap-3 text-[#4b3b47] mb-4">
                  <CheckCircle2 className="w-8 h-8 text-[#4b3b47]" />
                  <div>
                    <div className="text-xs uppercase tracking-widest text-[#6a6262]">
                      Inquiry Received
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#4b3b47]">
                      Thank you, {formData.name}.
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#6a6262] leading-relaxed mb-6">
                  Your project brief has been logged with reference{' '}
                  <strong className="text-[#4b3b47] font-mono">{inquiryId}</strong>. Elena Vance,
                  Principal Strategist, reviews all prospective partner briefs personally and will
                  reach out via email within 24 business hours.
                </p>

                {/* Structured Brief Snapshot */}
                <div className="p-5 bg-[#faf9f6] border border-[#4b3b47]/10 mb-8 space-y-3 text-xs">
                  <div className="flex justify-between py-1 border-b border-[#4b3b47]/8">
                    <span className="text-[#6a6262]">Brand:</span>
                    <span className="font-medium text-[#4b3b47]">{formData.company}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#4b3b47]/8">
                    <span className="text-[#6a6262]">Selected Disciplines:</span>
                    <span className="font-medium text-[#4b3b47]">
                      {formData.services.join(', ')}
                    </span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#4b3b47]/8">
                    <span className="text-[#6a6262]">Budget Range:</span>
                    <span className="font-medium text-[#4b3b47]">{formData.budget}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#4b3b47]/8">
                    <span className="text-[#6a6262]">Target Timeline:</span>
                    <span className="font-medium text-[#4b3b47]">{formData.timeline}</span>
                  </div>
                  {formData.website && (
                    <div className="flex justify-between py-1 border-b border-[#4b3b47]/8">
                      <span className="text-[#6a6262]">Website:</span>
                      <span className="font-medium text-[#4b3b47]">{formData.website}</span>
                    </div>
                  )}
                  {formData.message && (
                    <div className="pt-2">
                      <span className="text-[#6a6262] block mb-1">Brief Overview:</span>
                      <p className="italic text-[#4b3b47]">{formData.message}</p>
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={handleCopySummary}
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#4b3b47] text-[#faf9f6] text-xs uppercase tracking-wider font-medium rounded-sm hover:bg-[#382b35] transition-colors"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copied ? 'Copied to Clipboard' : 'Copy Brief Summary'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleDownloadSummary}
                    className="inline-flex items-center gap-2 px-4 py-2.5 border border-[#4b3b47]/30 text-[#4b3b47] text-xs uppercase tracking-wider font-medium rounded-sm hover:bg-[#e0d8de]/30 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download TXT Record</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        company: '',
                        website: '',
                        services: [],
                        budget: '$6,000 – $12,000',
                        timeline: '1 – 2 Months',
                        message: '',
                      });
                    }}
                    className="text-xs text-[#6a6262] hover:text-[#4b3b47] underline ml-auto py-2"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl text-[#4b3b47] font-medium mb-1">
                    Partner Inquiry Brief
                  </h3>
                  <p className="text-xs text-[#6a6262]">
                    Fields marked with an asterisk (*) are required.
                  </p>
                </div>

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#4b3b47] font-semibold mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Thomas Avery"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-2.5 bg-[#faf9f6] border text-xs text-[#4b3b47] focus:outline-hidden transition-colors ${
                        errors.name ? 'border-red-500' : 'border-[#4b3b47]/20 focus:border-[#4b3b47]'
                      }`}
                    />
                    {errors.name && <p className="text-[11px] text-red-600 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#4b3b47] font-semibold mb-1.5">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      placeholder="t.avery@winery.com.au"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-2.5 bg-[#faf9f6] border text-xs text-[#4b3b47] focus:outline-hidden transition-colors ${
                        errors.email ? 'border-red-500' : 'border-[#4b3b47]/20 focus:border-[#4b3b47]'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Company & Phone Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#4b3b47] font-semibold mb-1.5">
                      Brand / Organization *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Barossa Reserve Vintners"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className={`w-full px-4 py-2.5 bg-[#faf9f6] border text-xs text-[#4b3b47] focus:outline-hidden transition-colors ${
                        errors.company
                          ? 'border-red-500'
                          : 'border-[#4b3b47]/20 focus:border-[#4b3b47]'
                      }`}
                    />
                    {errors.company && (
                      <p className="text-[11px] text-red-600 mt-1">{errors.company}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#4b3b47] font-semibold mb-1.5">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="+61 400 000 000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#faf9f6] border border-[#4b3b47]/20 text-xs text-[#4b3b47] focus:outline-hidden focus:border-[#4b3b47] transition-colors"
                    />
                  </div>
                </div>

                {/* Website URL */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#4b3b47] font-semibold mb-1.5">
                    Current Website URL
                  </label>
                  <input
                    type="text"
                    placeholder="https://www.yourbrand.com.au"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#faf9f6] border border-[#4b3b47]/20 text-xs text-[#4b3b47] focus:outline-hidden focus:border-[#4b3b47] transition-colors"
                  />
                </div>

                {/* Services Checkboxes */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#4b3b47] font-semibold mb-2">
                    Disciplines Required *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {availableServices.map((srv) => {
                      const isChecked = formData.services.includes(srv);
                      return (
                        <button
                          key={srv}
                          type="button"
                          onClick={() => handleServiceToggle(srv)}
                          className={`p-3 text-left border flex items-center justify-between text-xs transition-all ${
                            isChecked
                              ? 'bg-[#4b3b47] text-[#faf9f6] border-[#4b3b47]'
                              : 'bg-[#faf9f6] text-[#4b3b47] border-[#4b3b47]/15 hover:border-[#4b3b47]/30'
                          }`}
                        >
                          <span className="font-medium">{srv}</span>
                          <span
                            className={`w-4 h-4 rounded-xs border flex items-center justify-center text-[10px] ${
                              isChecked
                                ? 'bg-[#cfd2b2] text-[#4b3b47] border-[#cfd2b2]'
                                : 'border-[#4b3b47]/30 bg-white'
                            }`}
                          >
                            {isChecked && '✓'}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                  {errors.services && (
                    <p className="text-[11px] text-red-600 mt-1.5">{errors.services}</p>
                  )}
                </div>

                {/* Budget & Timeline */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#4b3b47] font-semibold mb-1.5">
                      Estimated Investment
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#faf9f6] border border-[#4b3b47]/20 text-xs text-[#4b3b47] focus:outline-hidden focus:border-[#4b3b47] transition-colors"
                    >
                      {budgetTiers.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#4b3b47] font-semibold mb-1.5">
                      Target Launch Window
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#faf9f6] border border-[#4b3b47]/20 text-xs text-[#4b3b47] focus:outline-hidden focus:border-[#4b3b47] transition-colors"
                    >
                      {timelines.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message Brief */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#4b3b47] font-semibold mb-1.5">
                    Project Context or Ambitions
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Outline your current challenges, key milestones, or specific audit goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#faf9f6] border border-[#4b3b47]/20 text-xs text-[#4b3b47] focus:outline-hidden focus:border-[#4b3b47] transition-colors resize-y"
                  />
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#4b3b47] text-[#faf9f6] text-xs uppercase tracking-widest font-medium rounded-sm hover:bg-[#382b35] transition-colors flex items-center justify-center gap-2 shadow-xs"
                >
                  <Send className="w-3.5 h-3.5 text-[#cfd2b2]" />
                  <span>Transmit Inquiry to Studio</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
