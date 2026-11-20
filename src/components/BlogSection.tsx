import React from 'react';
import { ArrowRight, ArrowUpRight, Quote } from 'lucide-react';
import { PageRoute, ROUTE_HASHES } from '../types/navigation';

interface BlogSectionProps {
  onNavigate?: (page: PageRoute, serviceId?: string) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onNavigate }) => {
  const handleNav = (
    e: React.MouseEvent<HTMLAnchorElement>,
    page: PageRoute,
    serviceId?: string
  ) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(page, serviceId);
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <article id="blog" className="pt-32 pb-24 md:pt-48 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Article Masthead */}
        <header className="max-w-4xl pb-12 border-b border-[#181d2c]/12 mb-12">
          <div className="flex flex-wrap items-center gap-2.5 text-xs uppercase tracking-[0.22em] text-[#522D60] font-semibold mb-4">
            <span>Aura Studio Journal</span>
            <span aria-hidden="true" className="text-[#626878]">·</span>
            <span className="text-[#2b5c84]">Creative Strategy</span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl text-[#181d2c] font-bold tracking-tight leading-[1.08] mb-6">
            Why Safe Marketing Fails: How{' '}
            <span className="text-[#2b5c84]">Creative Strategy</span> Drives Real Business Growth
          </h1>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#3e4452] font-medium">
            <span>By Aura Studio Editorial</span>
            <span aria-hidden="true">·</span>
            <span>Adelaide, Tarntanya</span>
            <span aria-hidden="true">·</span>
            <span>4 Min Read</span>
            <span aria-hidden="true">·</span>
            <span>Strategy, Video &amp; Performance</span>
          </div>
        </header>

        {/* Main 12-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Sticky Index / Disciplines */}
          <aside className="lg:col-span-4 lg:sticky lg:top-40 space-y-6 order-2 lg:order-1">
            <div className="p-6 bg-[#f6f7fa] border border-[#181d2c]/12">
              <div className="text-xs uppercase tracking-[0.2em] text-[#522D60] font-semibold mb-4">
                In This Essay
              </div>
              <nav aria-label="Article Sections" className="space-y-3 text-xs">
                <button
                  type="button"
                  onClick={() => scrollToSection('creativity-multiplier')}
                  className="w-full text-left flex items-start gap-2.5 text-[#3e4452] hover:text-[#2b5c84] transition-colors font-medium"
                >
                  <span className="font-mono font-bold text-[#2b5c84]">01.</span>
                  <span>Creativity Is the Ultimate Performance Multiplier</span>
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection('video-first-world')}
                  className="w-full text-left flex items-start gap-2.5 text-[#3e4452] hover:text-[#2b5c84] transition-colors font-medium"
                >
                  <span className="font-mono font-bold text-[#2b5c84]">02.</span>
                  <span>Capturing Attention in a Video-First World</span>
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection('customer-connection')}
                  className="w-full text-left flex items-start gap-2.5 text-[#3e4452] hover:text-[#2b5c84] transition-colors font-medium"
                >
                  <span className="font-mono font-bold text-[#2b5c84]">03.</span>
                  <span>Turning Visibility Into Deep Customer Connection</span>
                </button>
              </nav>
            </div>

            <div className="p-6 bg-white border border-[#181d2c]/15">
              <div className="text-xs uppercase tracking-[0.2em] text-[#2b5c84] font-semibold mb-3">
                Related Disciplines
              </div>
              <p className="text-xs text-[#3e4452] leading-relaxed mb-5">
                Explore how our Adelaide studio pairs bold creative craft with technical precision:
              </p>
              <div className="space-y-2.5 text-xs font-semibold">
                <a
                  href={ROUTE_HASHES.services}
                  onClick={(e) => handleNav(e, 'services', 'content-creation')}
                  className="flex items-center justify-between py-2 border-b border-[#181d2c]/10 text-[#181d2c] hover:text-[#2b5c84] transition-colors"
                >
                  <span>Content Creation &amp; Video</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href={ROUTE_HASHES.services}
                  onClick={(e) => handleNav(e, 'services', 'digital-strategy')}
                  className="flex items-center justify-between py-2 border-b border-[#181d2c]/10 text-[#181d2c] hover:text-[#2b5c84] transition-colors"
                >
                  <span>Digital Strategy</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href={ROUTE_HASHES.services}
                  onClick={(e) => handleNav(e, 'services', 'website-audits')}
                  className="flex items-center justify-between py-2 border-b border-[#181d2c]/10 text-[#181d2c] hover:text-[#2b5c84] transition-colors"
                >
                  <span>Website Audits</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href={ROUTE_HASHES.services}
                  onClick={(e) => handleNav(e, 'services', 'seo')}
                  className="flex items-center justify-between py-2 text-[#181d2c] hover:text-[#2b5c84] transition-colors"
                >
                  <span>Search Engine Optimization</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </aside>

          {/* Right Editorial Essay Body */}
          <div className="lg:col-span-8 order-1 lg:order-2 space-y-12">
            {/* Lead Introduction */}
            <div className="space-y-5 text-base sm:text-lg text-[#3e4452] leading-relaxed">
              <p className="text-[#181d2c] font-medium text-lg sm:text-xl leading-relaxed">
                Most businesses treat digital marketing like a checklist. They set up a few ads,
                post consistently on social media, and optimize a handful of web pages. On paper,
                they are doing everything right. Yet, their growth plateaus.
              </p>
              <p>
                When every brand follows the exact same playbook, audiences tune out. Today’s
                consumers are bombarded with thousands of messages daily, meaning &ldquo;good
                enough&rdquo; content simply becomes invisible. To actually capture attention and
                scale, businesses need more than just a technical setup—they need innovative
                storytelling backed by a rock-solid digital strategy.
              </p>
              <p className="font-medium text-[#181d2c]">
                Here is why pairing high-level creativity with smart digital execution is the
                ultimate unlock for customer-obsessed brands.
              </p>
            </div>

            {/* Section 1 */}
            <section
              id="creativity-multiplier"
              className="pt-8 border-t border-[#181d2c]/12 scroll-mt-40"
            >
              <div className="text-xs uppercase tracking-[0.2em] text-[#522D60] font-semibold mb-2">
                01 / Art Meets Analytics
              </div>
              <h2 className="font-display text-2xl sm:text-4xl text-[#181d2c] font-bold tracking-tight mb-5">
                1. Creativity Is the Ultimate Performance Multiplier
              </h2>
              <div className="space-y-5 text-sm sm:text-base text-[#3e4452] leading-relaxed mb-8">
                <p>
                  There is a common misconception that you have to choose between &ldquo;brand
                  creativity&rdquo; and &ldquo;performance marketing.&rdquo; In reality, they rely
                  on each other. Algorithms and ad platforms are smarter than ever, which means
                  targeting alone is no longer a competitive advantage—your creative is.
                </p>
                <p>
                  When you partner with creative content agencies that understand both art and
                  analytics, your campaigns stop feeling like interruptions and start feeling like
                  experiences. Strategic content creation, thumb-stopping visuals, and sharp
                  copywriting lower acquisition costs simply because people actually want to engage
                  with what you are putting out.
                </p>
              </div>

              {/* Client Quote 1 */}
              <blockquote className="p-6 sm:p-8 bg-[#ebf1f7] border-l-4 border-[#2b5c84]">
                <Quote className="w-7 h-7 text-[#2b5c84] mb-3 stroke-1.5" />
                <p className="font-display text-lg sm:text-2xl text-[#181d2c] font-medium leading-relaxed mb-4">
                  &ldquo;Aura captured the soul of our windswept cliffs and native botanicals with
                  poetic precision. Our community feels understood and genuinely inspired.&rdquo;
                </p>
                <footer className="text-xs text-[#3e4452] font-medium">
                  — <strong className="text-[#181d2c] font-semibold">Clara Delamere</strong>,
                  Founder &amp; Master Herbalist, Fleurieu Botanicals
                </footer>
              </blockquote>
            </section>

            {/* Section 2 */}
            <section
              id="video-first-world"
              className="pt-8 border-t border-[#181d2c]/12 scroll-mt-40"
            >
              <div className="text-xs uppercase tracking-[0.2em] text-[#2b5c84] font-semibold mb-2">
                02 / Visual Storytelling
              </div>
              <h2 className="font-display text-2xl sm:text-4xl text-[#181d2c] font-bold tracking-tight mb-5">
                2. Capturing Attention in a Video-First World
              </h2>
              <div className="space-y-5 text-sm sm:text-base text-[#3e4452] leading-relaxed">
                <p>
                  Text and static images still have their place, but video is where deep brand
                  affinity is built. Consumers want to see the human side of the businesses they
                  buy from. High-impact video creative allows you to demonstrate value, build
                  trust, and spark emotion in a matter of seconds—whether that’s through a punchy
                  short-form Reel, a founder story, or a polished brand campaign.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section
              id="customer-connection"
              className="pt-8 border-t border-[#181d2c]/12 scroll-mt-40"
            >
              <div className="text-xs uppercase tracking-[0.2em] text-[#522D60] font-semibold mb-2">
                03 / Conversion &amp; Intent
              </div>
              <h2 className="font-display text-2xl sm:text-4xl text-[#181d2c] font-bold tracking-tight mb-5">
                3. Turning Visibility Into Deep Customer Connection
              </h2>
              <div className="space-y-5 text-sm sm:text-base text-[#3e4452] leading-relaxed mb-8">
                <p>
                  Clicks and impressions look great on a monthly report, but they don&apos;t pay the
                  bills. The real digital marketing benefits emerge when your technical foundation
                  and creative vision work together around your customer&apos;s actual desires, pain
                  points, and behaviors.
                </p>
                <p>
                  Even the boldest campaign will underperform if your digital storefront is leaking
                  traffic. Pairing comprehensive website audits and intentional SEO with compelling
                  storytelling ensures the right customers actually find you—and have a seamless
                  experience once they land on your page. When you align search intent with genuine
                  brand personality, you eliminate buyer friction and turn first-time visitors into
                  loyal advocates.
                </p>
              </div>

              {/* Client Quote 2 */}
              <blockquote className="p-6 sm:p-8 bg-[#f6f2f8] border-l-4 border-[#522D60]">
                <Quote className="w-7 h-7 text-[#522D60] mb-3 stroke-1.5" />
                <p className="font-display text-lg sm:text-2xl text-[#181d2c] font-medium leading-relaxed mb-4">
                  &ldquo;Aura Studio did not just deliver a standard report—they diagnosed exactly
                  where our heritage collectors were encountering friction. Their audit paid for
                  itself within the first release weekend.&rdquo;
                </p>
                <footer className="text-xs text-[#3e4452] font-medium">
                  — <strong className="text-[#181d2c] font-semibold">Marcus Lindner</strong>,
                  Estate Director, Barossa Reserve Vintners
                </footer>
              </blockquote>
            </section>

            {/* Closing CTA Card */}
            <section className="bg-[#181d2c] text-white p-8 sm:p-12 shadow-lg">
              <div className="text-xs uppercase tracking-[0.25em] text-[#8eb8db] font-semibold mb-3">
                Partner With Aura Studio
              </div>
              <h2 className="font-display text-2xl sm:text-4xl text-white font-bold tracking-tight mb-5">
                Ready to Build Something <span className="text-[#8eb8db]">Unforgettable</span>?
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-[#eff3f8] leading-relaxed mb-8">
                <p>
                  At Aura Studio, we bridge the gap between big-picture creative vision and
                  measurable digital growth. We don&apos;t believe in cookie-cutter templates or
                  safe, forgettable campaigns.
                </p>
                <p>
                  Whether we are uncovering hidden opportunities through website audits, mapping out
                  your overarching digital strategy, boosting your organic reach with SEO, or
                  executing end-to-end content creation and scroll-stopping video, everything we do
                  is engineered to connect with your audience and move the needle.
                </p>
                <p className="text-white font-medium">
                  If you are ready to turn your brand into a category leader, book a discovery call
                  with Aura Studio and map out your next phase of growth.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={ROUTE_HASHES.contact}
                  onClick={(e) => handleNav(e, 'contact')}
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#2b5c84] text-white text-xs uppercase tracking-widest font-bold rounded-sm hover:bg-[#1e4363] transition-colors shadow-xs"
                >
                  <span>Book a Discovery Call</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href={ROUTE_HASHES.services}
                  onClick={(e) => handleNav(e, 'services')}
                  className="px-6 py-3.5 border border-white/30 text-white text-xs uppercase tracking-widest font-semibold rounded-sm hover:border-[#8eb8db] hover:text-[#8eb8db] transition-colors"
                >
                  Explore Services
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </article>
  );
};
