import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PortfolioSection } from './components/PortfolioSection';
import { ServicesSection } from './components/ServicesSection';
import { AuditTeaserTool } from './components/AuditTeaserTool';
import { AboutSection } from './components/AboutSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { InquirySection } from './components/InquirySection';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('');
  const [auditDataForInquiry, setAuditDataForInquiry] = useState<{
    url: string;
    industry: string;
    painPoint: string;
    score: number;
  } | null>(null);

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
  };

  const handleForwardAudit = (data: {
    url: string;
    industry: string;
    painPoint: string;
    score: number;
  }) => {
    setAuditDataForInquiry(data);
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#4b3b47] selection:bg-[#cfd2b2] selection:text-[#4b3b47] flex flex-col font-sans">
      {/* Top Navigation */}
      <Navbar onSelectService={handleSelectService} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Portfolio of Past Client Projects (Gallery) */}
        <PortfolioSection />

        {/* Services Listing (Website Audits, Content Creation, Digital Strategy, SEO) */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* Interactive Instant Website Audit Tool */}
        <AuditTeaserTool onForwardToInquiry={handleForwardAudit} />

        {/* About Us (Adelaide East End Roots & Principles) */}
        <AboutSection />

        {/* Client Testimonials Section */}
        <TestimonialsSection />

        {/* Integrated Inquiry Form */}
        <InquirySection
          preselectedService={selectedService}
          prefilledAuditData={auditDataForInquiry}
        />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
