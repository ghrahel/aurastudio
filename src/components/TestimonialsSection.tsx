import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { TESTIMONIALS } from '../data/agencyData';

export const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const current = TESTIMONIALS[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-24 bg-[#faf9f6] border-t border-[#4b3b47]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-[#6a6262] font-medium mb-3">
              Client Voices &amp; Reflections
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#4b3b47] font-normal tracking-tight">
              Endorsements from <span className="italic">reputable</span> leaders.
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#6a6262] leading-relaxed">
            The South Australian commercial community is built on trust, craft, and accountability.
            Here is what our long-standing partners say about working with Aura Studio.
          </p>
        </div>

        {/* Featured Testimonial Highlight Card */}
        <div className="bg-white border border-[#4b3b47]/15 p-8 sm:p-12 mb-12 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Quote content */}
            <div className="lg:col-span-8 flex flex-col justify-between">
              <Quote className="w-10 h-10 text-[#cfd2b2] mb-6 stroke-1" />
              <blockquote className="font-serif text-xl sm:text-3xl text-[#4b3b47] leading-relaxed font-normal mb-8">
                "{current.quote}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#4b3b47] text-[#cfd2b2] font-serif font-semibold text-lg flex items-center justify-center">
                  {current.author.charAt(0)}
                </div>
                <div>
                  <div className="font-serif text-lg font-medium text-[#4b3b47]">
                    {current.author}
                  </div>
                  <div className="text-xs text-[#6a6262]">
                    {current.role} · <strong className="font-medium text-[#4b3b47]">{current.company}</strong>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-[#9c9990] mt-0.5">
                    <MapPin className="w-3 h-3" />
                    <span>{current.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Metric Box */}
            <div className="lg:col-span-4 bg-[#faf9f6] p-6 sm:p-8 border border-[#4b3b47]/10 flex flex-col items-center justify-center text-center">
              <div className="text-xs uppercase tracking-widest text-[#6a6262] mb-1">
                Verified Outcome
              </div>
              <div className="font-serif text-4xl sm:text-5xl font-semibold text-[#4b3b47] my-2">
                {current.metric}
              </div>
              <div className="text-xs uppercase tracking-wider text-[#9c9990]">
                {current.metricLabel}
              </div>
            </div>
          </div>

          {/* Slider controls */}
          <div className="mt-8 pt-6 border-t border-[#4b3b47]/10 flex items-center justify-between">
            <div className="text-xs text-[#6a6262] font-mono">
              0{activeIndex + 1} / 0{TESTIMONIALS.length}
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous Testimonial"
                className="p-2 border border-[#4b3b47]/20 text-[#4b3b47] hover:bg-[#e0d8de]/40 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next Testimonial"
                className="p-2 border border-[#4b3b47]/20 text-[#4b3b47] hover:bg-[#e0d8de]/40 transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Client Grid Thumbnails */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {TESTIMONIALS.map((t, idx) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={`text-left p-4 border transition-all duration-200 ${
                activeIndex === idx
                  ? 'bg-[#4b3b47] text-[#faf9f6] border-[#4b3b47]'
                  : 'bg-white text-[#4b3b47] border-[#4b3b47]/12 hover:border-[#4b3b47]/30'
              }`}
            >
              <div
                className={`text-[10px] uppercase tracking-wider mb-1 ${
                  activeIndex === idx ? 'text-[#cfd2b2]' : 'text-[#9c9990]'
                }`}
              >
                {t.location}
              </div>
              <div className="font-serif text-sm font-medium truncate">{t.company}</div>
              <div
                className={`text-xs mt-1 ${
                  activeIndex === idx ? 'text-[#e0d8de]' : 'text-[#6a6262]'
                }`}
              >
                {t.metric} {t.metricLabel}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
