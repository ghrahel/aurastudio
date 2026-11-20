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
    <section id="testimonials" className="py-24 bg-white border-t border-[#181d2c]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-[#2b5c84] font-semibold mb-3">
              Client Voices &amp; Reflections
            </div>
            <h2 className="font-display text-3xl sm:text-5xl text-[#181d2c] font-bold tracking-tight">
              Endorsements from <span className="text-[#522D60]">reputable</span> leaders.
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#3e4452] leading-relaxed">
            The South Australian commercial community is built on trust, craft, and accountability.
            Here is what our long-standing partners say about working with Aura Studio.
          </p>
        </div>

        {/* Featured Testimonial Highlight Card */}
        <div className="bg-white border border-[#181d2c]/15 p-8 sm:p-12 mb-12 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Quote content */}
            <div className="lg:col-span-8 flex flex-col justify-between">
              <Quote className="w-10 h-10 text-[#2b5c84] mb-6 stroke-1.5" />
              <blockquote className="font-display text-xl sm:text-3xl text-[#181d2c] leading-relaxed font-medium mb-8">
                "{current.quote}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#2b5c84] text-white font-display font-bold text-lg flex items-center justify-center">
                  {current.author.charAt(0)}
                </div>
                <div>
                  <div className="font-display text-lg font-bold text-[#181d2c]">
                    {current.author}
                  </div>
                  <div className="text-xs text-[#3e4452]">
                    {current.role} ·{' '}
                    <strong className="font-semibold text-[#181d2c]">{current.company}</strong>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-[#626878] mt-0.5">
                    <MapPin className="w-3 h-3 text-[#2b5c84]" />
                    <span>{current.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Metric Box */}
            <div className="lg:col-span-4 bg-[#181d2c] p-6 sm:p-8 flex flex-col items-center justify-center text-center">
              <div className="text-xs uppercase tracking-widest text-[#eff3f8] mb-1 font-medium">
                Verified Outcome
              </div>
              <div className="font-display text-4xl sm:text-5xl font-bold text-[#eab340] my-2">
                {current.metric}
              </div>
              <div className="text-xs uppercase tracking-wider text-[#8eb8db] font-semibold">
                {current.metricLabel}
              </div>
            </div>
          </div>

          {/* Slider controls */}
          <div className="mt-8 pt-6 border-t border-[#181d2c]/10 flex items-center justify-between">
            <div className="text-xs text-[#3e4452] font-mono font-semibold">
              0{activeIndex + 1} / 0{TESTIMONIALS.length}
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous Testimonial"
                className="p-2 border border-[#181d2c]/20 text-[#181d2c] hover:bg-[#2b5c84] hover:text-white hover:border-[#2b5c84] transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next Testimonial"
                className="p-2 border border-[#181d2c]/20 text-[#181d2c] hover:bg-[#2b5c84] hover:text-white hover:border-[#2b5c84] transition-colors"
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
                  ? 'bg-[#2b5c84] text-white border-[#2b5c84]'
                  : 'bg-white text-[#181d2c] border-[#181d2c]/12 hover:border-[#2b5c84]'
              }`}
            >
              <div
                className={`text-[10px] uppercase tracking-wider mb-1 font-semibold ${
                  activeIndex === idx ? 'text-[#ebf1f7]' : 'text-[#626878]'
                }`}
              >
                {t.location}
              </div>
              <div className="font-display text-sm font-bold truncate">{t.company}</div>
              <div
                className={`text-xs mt-1 ${
                  activeIndex === idx ? 'text-white/90' : 'text-[#3e4452]'
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
