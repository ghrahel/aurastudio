import React, { useState, useEffect, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PortfolioSection } from './components/PortfolioSection';
import { ServicesSection } from './components/ServicesSection';
import { AuditTeaserTool } from './components/AuditTeaserTool';
import { AboutSection } from './components/AboutSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { InquirySection } from './components/InquirySection';
import { BlogSection } from './components/BlogSection';
import { Footer } from './components/Footer';
import { HomeServicesOverview, HomeContactBand } from './components/HomeBands';
import { PageRoute, ROUTE_HASHES, parseRouteFromHash } from './types/navigation';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>(() =>
    parseRouteFromHash(window.location.hash)
  );
  const [activeServiceId, setActiveServiceId] = useState<string>('website-audits');
  const [selectedService, setSelectedService] = useState<string>('');
  const [auditDataForInquiry, setAuditDataForInquiry] = useState<{
    url: string;
    industry: string;
    painPoint: string;
    score: number;
  } | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(parseRouteFromHash(window.location.hash));
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const defaultTitle = 'Aura Studio | Adelaide Boutique Digital Marketing';
    const defaultDescription =
      'Minimalist boutique digital marketing consultancy in Adelaide specializing in website audits, content creation, digital strategy, and search engine optimization for cultured brands.';

    const title =
      currentPage === 'blog'
        ? 'Why Creative Strategy Drives Growth | Aura Studio'
        : defaultTitle;
    const description =
      currentPage === 'blog'
        ? 'Discover the true digital marketing benefits of pairing data with bold storytelling. Learn how Aura Studio’s innovative video creative and strategy help growth-obsessed brands stand out.'
        : defaultDescription;

    document.title = title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', description);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);
  }, [currentPage]);

  const handleNavigate = useCallback((page: PageRoute, serviceId?: string) => {
    if (serviceId) {
      setActiveServiceId(serviceId);
    }
    const targetHash = ROUTE_HASHES[page];
    if (window.location.hash !== targetHash) {
      window.location.hash = targetHash;
    } else {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const handleSelectServiceForInquiry = (serviceName: string) => {
    setSelectedService(serviceName);
    handleNavigate('contact');
  };

  const handleForwardAudit = (data: {
    url: string;
    industry: string;
    painPoint: string;
    score: number;
  }) => {
    setAuditDataForInquiry(data);
    handleNavigate('contact');
  };

  return (
    <div className="min-h-screen bg-white text-[#181d2c] selection:bg-[#2b5c84] selection:text-white flex flex-col font-sans">
      {/* Top Navigation */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      <main className="flex-1">
        {currentPage === 'home' && (
          <>
            <Hero onNavigate={handleNavigate} />
            <HomeServicesOverview onNavigate={handleNavigate} />
            <PortfolioSection onNavigate={handleNavigate} featuredLimit={3} />
            <TestimonialsSection />
            <HomeContactBand onNavigate={handleNavigate} />
          </>
        )}

        {currentPage === 'about' && (
          <AboutSection isStandalonePage onNavigate={handleNavigate} />
        )}

        {currentPage === 'services' && (
          <>
            <ServicesSection
              isStandalonePage
              initialServiceId={activeServiceId}
              onSelectService={handleSelectServiceForInquiry}
            />
            <AuditTeaserTool onForwardToInquiry={handleForwardAudit} />
          </>
        )}

        {currentPage === 'work' && (
          <>
            <PortfolioSection isStandalonePage onNavigate={handleNavigate} />
            <TestimonialsSection />
            <HomeContactBand onNavigate={handleNavigate} />
          </>
        )}

        {currentPage === 'blog' && <BlogSection onNavigate={handleNavigate} />}

        {currentPage === 'contact' && (
          <InquirySection
            isStandalonePage
            preselectedService={selectedService}
            prefilledAuditData={auditDataForInquiry}
          />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
