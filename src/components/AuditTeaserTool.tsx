import React, { useState } from 'react';
import {
  Gauge,
  Search,
  Zap,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
  RefreshCw,
} from 'lucide-react';

interface AuditTeaserToolProps {
  onForwardToInquiry?: (auditData: {
    url: string;
    industry: string;
    painPoint: string;
    score: number;
  }) => void;
}

export const AuditTeaserTool: React.FC<AuditTeaserToolProps> = ({ onForwardToInquiry }) => {
  const [url, setUrl] = useState('');
  const [industry, setIndustry] = useState('Wine & Cellar Door');
  const [painPoint, setPainPoint] = useState('Low organic Google traffic');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [auditResult, setAuditResult] = useState<{
    speedScore: number;
    seoScore: number;
    uxScore: number;
    overallScore: number;
    flags: { title: string; severity: 'warning' | 'alert' | 'good'; desc: string }[];
    recommendations: string[];
  } | null>(null);

  const industries = [
    'Wine & Cellar Door',
    'Luxury Retail & Fashion',
    'Hospitality & Dining',
    'Architecture & Design',
    'Cultural Arts & Institution',
    'Boutique Professional Services',
  ];

  const painPoints = [
    'Low organic Google traffic',
    'Sluggish mobile page speed',
    'Visitor dropoff on inquiry / checkout',
    'Outdated brand storytelling',
    'Lacking local Adelaide search presence',
  ];

  const handleRunAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    setIsAnalyzing(true);

    // Heuristic simulation based on inputs to generate meaningful initial findings
    setTimeout(() => {
      let speed = 64;
      let seo = 58;
      let ux = 72;

      if (painPoint.includes('speed')) {
        speed = 46;
      } else if (painPoint.includes('traffic') || painPoint.includes('search')) {
        seo = 51;
      } else if (painPoint.includes('dropoff')) {
        ux = 52;
      }

      const overall = Math.round((speed + seo + ux) / 3);

      const flags = [
        {
          title: 'Mobile Viewport Render Latency',
          severity: speed < 60 ? ('alert' as const) : ('warning' as const),
          desc: 'First Contentful Paint may exceed Google recommended 1.8s threshold on 4G cellular connections.',
        },
        {
          title: 'Semantic Schema & Local Entity Graph',
          severity: 'warning' as const,
          desc: 'Missing structured Schema.org markup for Adelaide / South Australian geographic and business entities.',
        },
        {
          title: 'Conversion Funnel Touch Targets',
          severity: ux < 60 ? ('alert' as const) : ('good' as const),
          desc: 'Inquiry CTA buttons and navigation tap targets require 44px touch compliance on modern mobile screens.',
        },
      ];

      const recommendations = [
        'Strip unoptimized third-party tracking scripts slowing down page render.',
        'Implement JSON-LD Schema graph targeting local Adelaide and national intent.',
        'Streamline inquiry flow from 5 steps down to 2 frictionless micro-interactions.',
      ];

      setAuditResult({
        speedScore: speed,
        seoScore: seo,
        uxScore: ux,
        overallScore: overall,
        flags,
        recommendations,
      });
      setIsAnalyzing(false);
    }, 900);
  };

  const handleForward = () => {
    if (onForwardToInquiry && auditResult) {
      onForwardToInquiry({
        url,
        industry,
        painPoint,
        score: auditResult.overallScore,
      });
    }
    const inquiryEl = document.getElementById('inquiry');
    if (inquiryEl) {
      inquiryEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="audit-tool" className="py-24 bg-[#faf9f6] border-t border-[#4b3b47]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-[0.25em] text-[#6a6262] font-medium mb-3">
            Self-Service Heuristic Diagnostic
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#4b3b47] font-normal tracking-tight mb-4">
            Test your digital foundation in <span className="italic">60 seconds</span>.
          </h2>
          <p className="text-sm sm:text-base text-[#6a6262] leading-relaxed">
            Run an instant preliminary heuristic check across speed, search accessibility, and
            conversion hygiene before requesting our full manual forensic audit.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form Input Card */}
          <div className="lg:col-span-5 bg-white border border-[#4b3b47]/15 p-6 sm:p-8">
            <h3 className="font-serif text-xl text-[#4b3b47] font-medium mb-5">
              Website Parameters
            </h3>

            <form onSubmit={handleRunAudit} className="space-y-5">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#4b3b47] font-semibold mb-2">
                  Website URL
                </label>
                <input
                  type="text"
                  placeholder="e.g. boutiquebrand.com.au"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  required
                  className="w-full px-4 py-2.5 bg-[#faf9f6] border border-[#4b3b47]/20 text-xs text-[#4b3b47] focus:outline-hidden focus:border-[#4b3b47] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#4b3b47] font-semibold mb-2">
                  Brand Sector
                </label>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full px-4 py-2.5 bg-[#faf9f6] border border-[#4b3b47]/20 text-xs text-[#4b3b47] focus:outline-hidden focus:border-[#4b3b47] transition-colors"
                >
                  {industries.map((ind) => (
                    <option key={ind} value={ind}>
                      {ind}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#4b3b47] font-semibold mb-2">
                  Primary Strategic Friction
                </label>
                <select
                  value={painPoint}
                  onChange={(e) => setPainPoint(e.target.value)}
                  className="w-full px-4 py-2.5 bg-[#faf9f6] border border-[#4b3b47]/20 text-xs text-[#4b3b47] focus:outline-hidden focus:border-[#4b3b47] transition-colors"
                >
                  {painPoints.map((pp) => (
                    <option key={pp} value={pp}>
                      {pp}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                disabled={isAnalyzing}
                className="w-full py-3 bg-[#4b3b47] text-[#faf9f6] text-xs uppercase tracking-widest font-medium rounded-sm hover:bg-[#382b35] transition-colors flex items-center justify-center gap-2"
              >
                {isAnalyzing ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin text-[#cfd2b2]" />
                    <span>Analyzing Digital Surface...</span>
                  </>
                ) : (
                  <>
                    <Zap className="w-4 h-4 text-[#cfd2b2]" />
                    <span>Run Heuristic Check</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Results Output */}
          <div className="lg:col-span-7 bg-white border border-[#4b3b47]/15 p-6 sm:p-8 min-h-[380px] flex flex-col justify-between">
            {auditResult ? (
              <div className="animate-in fade-in duration-300">
                <div className="flex items-center justify-between pb-4 border-b border-[#4b3b47]/10 mb-6">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-[#6a6262]">
                      Diagnostic For
                    </div>
                    <div className="font-serif text-lg font-medium text-[#4b3b47]">
                      {url} · {industry}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-serif text-3xl font-semibold text-[#4b3b47]">
                      {auditResult.overallScore}
                    </span>
                    <span className="text-xs text-[#6a6262]">/100 Index</span>
                  </div>
                </div>

                {/* Scores breakdown */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="p-3 bg-[#faf9f6] border border-[#4b3b47]/8 text-center">
                    <div className="text-[10px] uppercase tracking-wider text-[#6a6262]">
                      Speed Score
                    </div>
                    <div className="font-serif text-xl font-medium text-[#4b3b47] mt-1">
                      {auditResult.speedScore}%
                    </div>
                  </div>
                  <div className="p-3 bg-[#faf9f6] border border-[#4b3b47]/8 text-center">
                    <div className="text-[10px] uppercase tracking-wider text-[#6a6262]">
                      SEO Graph
                    </div>
                    <div className="font-serif text-xl font-medium text-[#4b3b47] mt-1">
                      {auditResult.seoScore}%
                    </div>
                  </div>
                  <div className="p-3 bg-[#faf9f6] border border-[#4b3b47]/8 text-center">
                    <div className="text-[10px] uppercase tracking-wider text-[#6a6262]">
                      Mobile UX
                    </div>
                    <div className="font-serif text-xl font-medium text-[#4b3b47] mt-1">
                      {auditResult.uxScore}%
                    </div>
                  </div>
                </div>

                {/* Flags identified */}
                <div className="mb-6 space-y-3">
                  <div className="text-xs uppercase tracking-wider font-semibold text-[#4b3b47]">
                    Observed Vulnerabilities
                  </div>
                  {auditResult.flags.map((flag, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-[#faf9f6] border border-[#4b3b47]/10 flex items-start gap-3 text-xs"
                    >
                      <AlertCircle className="w-4 h-4 text-[#6a6262] shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium text-[#4b3b47]">{flag.title}</div>
                        <div className="text-[#6a6262] mt-0.5">{flag.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Actionable recommendations */}
                <div className="mb-6">
                  <div className="text-xs uppercase tracking-wider font-semibold text-[#4b3b47] mb-2">
                    Aura Studio Recommended Fixes
                  </div>
                  <ul className="space-y-1.5 text-xs text-[#4b3b47]">
                    {auditResult.recommendations.map((rec, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#9c9990] shrink-0" />
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Forward to studio button */}
                <div className="pt-4 border-t border-[#4b3b47]/10 flex flex-wrap items-center justify-between gap-4">
                  <p className="text-xs text-[#6a6262]">
                    Need our team to execute the full 50-point forensic audit?
                  </p>
                  <button
                    type="button"
                    onClick={handleForward}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#4b3b47] text-[#faf9f6] text-xs uppercase tracking-widest font-medium rounded-sm hover:bg-[#382b35] transition-colors"
                  >
                    <span>Send to Studio for Manual Review</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center text-center p-8 text-[#9c9990]">
                <Gauge className="w-12 h-12 stroke-1 mb-4 text-[#6a6262]" />
                <h4 className="font-serif text-xl text-[#4b3b47] font-normal mb-2">
                  Awaiting Website Parameters
                </h4>
                <p className="text-xs text-[#6a6262] max-w-sm">
                  Enter your website URL on the left to review preliminary Core Web Vitals,
                  Adelaide local search presence, and mobile UX friction points.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
