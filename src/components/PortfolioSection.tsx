import React, { useState, useEffect } from 'react';
import { ArrowUpRight, X, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';
import { PROJECTS, Project } from '../data/agencyData';

export const PortfolioSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = ['All', 'Website Audits', 'Content Creation', 'Digital Strategy', 'SEO'];

  const filteredProjects =
    selectedCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  // Keyboard navigation & body scroll lock for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveProject(null);
      }
    };
    if (activeProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeProject]);

  return (
    <section id="work" className="py-24 bg-[#faf9f6] border-t border-[#4b3b47]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-[#6a6262] font-medium mb-3">
              Selected Works · 2024–2026
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#4b3b47] font-normal tracking-tight">
              A curated portfolio of <span className="italic">tangible</span> impact.
            </h2>
          </div>

          <p className="max-w-md text-sm text-[#6a6262] leading-relaxed">
            We partner with an intentional cohort of premium lifestyle, wine, hospitality,
            fashion, and architectural brands across Adelaide and Australia.
          </p>
        </div>

        {/* Category Filter Tabs (Functional segmented controls) */}
        <div className="flex flex-wrap items-center gap-2 mb-12 pb-4 border-b border-[#4b3b47]/10 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-medium transition-all duration-200 rounded-xs ${
                selectedCategory === cat
                  ? 'bg-[#4b3b47] text-[#faf9f6]'
                  : 'bg-transparent text-[#6a6262] hover:text-[#4b3b47] hover:bg-[#e0d8de]/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="group cursor-pointer bg-white border border-[#4b3b47]/12 overflow-hidden flex flex-col transition-all duration-300 hover:border-[#4b3b47]/30 hover:shadow-md"
            >
              {/* Asset Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#e0d8de]/30">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Metric Overlay Plaque */}
                <div className="absolute bottom-3 right-3 bg-[#4b3b47]/90 text-white backdrop-blur-xs px-3 py-1.5 text-right">
                  <div className="font-serif text-base font-semibold leading-none text-[#cfd2b2]">
                    {project.heroMetric}
                  </div>
                  <div className="text-[10px] uppercase tracking-wider text-[#e0d8de] mt-0.5">
                    {project.heroMetricLabel}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  {/* Clean unboxed metadata */}
                  <div className="flex items-center gap-2 text-xs text-[#6a6262] font-medium mb-2.5">
                    <span>{project.client}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.location}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-[#4b3b47] font-medium group-hover:text-[#6a6262] transition-colors leading-snug mb-3">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#6a6262] line-clamp-3 leading-relaxed mb-4">
                    {project.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#4b3b47]/10 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-[#9c9990] font-medium">
                    {project.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[#4b3b47] group-hover:translate-x-1 transition-transform">
                    <span>Read Study</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-[#4b3b47]/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 md:p-10 animate-in fade-in duration-200">
          <div
            className="bg-[#faf9f6] w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-[#4b3b47]/20 shadow-2xl relative my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Bar */}
            <div className="sticky top-0 z-10 bg-[#faf9f6]/95 backdrop-blur-md border-b border-[#4b3b47]/10 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-[#6a6262] uppercase tracking-wider">
                <span>{activeProject.client}</span>
                <span>/</span>
                <span className="text-[#4b3b47] font-semibold">{activeProject.category}</span>
              </div>
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="p-1.5 text-[#4b3b47] hover:text-[#6a6262] hover:bg-[#e0d8de]/40 transition-colors"
                aria-label="Close Case Study"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-10">
              {/* Title & Location */}
              <div className="mb-6">
                <span className="text-xs tracking-[0.2em] uppercase text-[#9c9990] font-medium">
                  {activeProject.location} · {activeProject.year}
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#4b3b47] font-normal mt-1 mb-4">
                  {activeProject.title}
                </h3>
                <p className="text-base text-[#6a6262] leading-relaxed">
                  {activeProject.summary}
                </p>
              </div>

              {/* Main Visual */}
              <div className="mb-8 border border-[#4b3b47]/15 overflow-hidden aspect-[16/9] bg-[#e0d8de]/40">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Metrics Spotlight */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 bg-[#e0d8de]/30 border border-[#4b3b47]/10 mb-8">
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-[#6a6262]">
                    Primary Outcome
                  </div>
                  <div className="font-serif text-2xl sm:text-3xl font-semibold text-[#4b3b47] mt-1">
                    {activeProject.heroMetric}
                  </div>
                  <div className="text-xs text-[#6a6262] mt-0.5">
                    {activeProject.heroMetricLabel}
                  </div>
                </div>
                <div className="sm:col-span-2 flex flex-col justify-center">
                  <div className="text-[11px] uppercase tracking-wider text-[#6a6262] mb-1">
                    Key Performance Indicators
                  </div>
                  <ul className="space-y-1 text-xs text-[#4b3b47]">
                    {activeProject.results.map((res, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4b3b47]"></span>
                        <span>{res}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* The Challenge & Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="p-6 bg-white border border-[#4b3b47]/10">
                  <h4 className="font-serif text-xl text-[#4b3b47] font-medium mb-3">
                    The Challenge
                  </h4>
                  <p className="text-xs sm:text-sm text-[#6a6262] leading-relaxed">
                    {activeProject.challenge}
                  </p>
                </div>

                <div className="p-6 bg-white border border-[#4b3b47]/10">
                  <h4 className="font-serif text-xl text-[#4b3b47] font-medium mb-3">
                    The Strategic Solution
                  </h4>
                  <p className="text-xs sm:text-sm text-[#6a6262] leading-relaxed">
                    {activeProject.solution}
                  </p>
                </div>
              </div>

              {/* Scope of Deliverables */}
              <div className="mb-8 p-6 bg-white border border-[#4b3b47]/10">
                <h4 className="font-serif text-lg text-[#4b3b47] font-medium mb-4">
                  Scope &amp; Deliverables Executed
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeProject.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#4b3b47]">
                      <CheckCircle2 className="w-4 h-4 text-[#9c9990] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial Quote */}
              {activeProject.testimonial && (
                <div className="p-6 bg-[#cfd2b2]/20 border-l-2 border-[#4b3b47] mb-8">
                  <p className="font-serif text-lg sm:text-xl text-[#4b3b47] italic leading-relaxed mb-3">
                    "{activeProject.testimonial.quote}"
                  </p>
                  <div className="text-xs text-[#6a6262] font-medium">
                    <span className="font-semibold text-[#4b3b47]">
                      {activeProject.testimonial.author}
                    </span>{' '}
                    — {activeProject.testimonial.role}
                  </div>
                </div>
              )}

              {/* Modal Bottom CTA */}
              <div className="pt-6 border-t border-[#4b3b47]/10 flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-[#6a6262]">
                  Interested in similar outcomes for your business?
                </p>
                <a
                  href="#inquiry"
                  onClick={() => setActiveProject(null)}
                  className="px-6 py-2.5 bg-[#4b3b47] text-[#faf9f6] text-xs uppercase tracking-widest font-medium rounded-sm hover:bg-[#382b35] transition-colors"
                >
                  Inquire For Your Brand
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
