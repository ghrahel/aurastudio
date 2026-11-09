import peninsulaImg from '../assets/work-peninsula.svg';
import barossaImg from '../assets/work-barossa.svg';
import eastEndImg from '../assets/work-east-end.svg';
import northTerraceImg from '../assets/work-north-terrace.svg';
import flindersImg from '../assets/work-flinders.svg';
import leighStreetImg from '../assets/work-leigh-street.svg';
import studioImg from '../assets/studio-frome-st.svg';
import founderImg from '../assets/founder-portrait.svg';

export interface Project {
  id: string;
  title: string;
  client: string;
  location: string;
  category: 'Website Audits' | 'Content Creation' | 'Digital Strategy' | 'SEO';
  heroMetric: string;
  heroMetricLabel: string;
  summary: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  results: string[];
  image: string;
  year: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export interface ServiceItem {
  id: string;
  title: string;
  shortTag: string;
  headline: string;
  description: string;
  deliverables: string[];
  process: { step: string; title: string; desc: string }[];
  idealFor: string;
  turnaround: string;
  deliverableIcon: string;
  badgeAccent?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  location: string;
  metric: string;
  metricLabel: string;
}

export const AGENCY_DETAILS = {
  name: 'Aura Studio',
  tagline: 'Intentional Digital Marketing for Cultured Brands',
  location: 'Level 2, 142 Frome Street, Adelaide SA 5000',
  countryAcknowledgment:
    'Aura Studio respectfully acknowledges the Kaurna people, the traditional custodians of the Adelaide Plains (Tarntanya), on whose unceded lands we live and create. We pay our deepest respects to Elders past, present, and emerging.',
  email: 'hello@aurastudio.com.au',
  phone: '+61 8 8232 4190',
  hours: 'Monday – Friday, 9:00 AM – 5:30 PM ACST',
  stats: [
    { value: '42+', label: 'Boutique Brands Elevated' },
    { value: '3.8x', label: 'Average Client Organic ROI' },
    { value: '100%', label: 'Adelaide & SA Led Studio' },
    { value: '98%', label: 'Long-term Client Retention' },
  ],
  assets: {
    studio: studioImg,
    founder: founderImg,
  },
};

export const PROJECTS: Project[] = [
  {
    id: 'barossa-reserve',
    title: 'Heritage Cellar Door DTC Transformation',
    client: 'Barossa Reserve Vintners',
    location: 'Barossa Valley, SA',
    category: 'Website Audits',
    heroMetric: '+215%',
    heroMetricLabel: 'DTC Wine Club Revenue',
    summary:
      'A forensic technical and UX website audit that eradicated mobile checkout friction, revitalized allocation release mechanics, and elevated wine club subscriptions.',
    challenge:
      'Despite producing benchmark Grenache and Shiraz with international acclaim, the estate was losing over 68% of mobile visitors on their vintage release checkout page due to legacy plugins and sluggish server responses.',
    solution:
      'We conducted a 360-degree technical and behavioral audit, stripping away bloated scripts, restructuring the mobile allocation experience, and introducing tactile storytelling at pivotal conversion points.',
    deliverables: [
      'Comprehensive 48-Point Technical Website Audit',
      'Core Web Vitals Remediation & Speed Optimization',
      'Allocation Funnel Architecture Redesign',
      'Conversion Rate Optimization (CRO) Protocol',
    ],
    results: [
      'Checkout abandonment fell from 68% to 19%',
      'Annual wine club sign-ups surged by +215%',
      'Page load time reduced from 4.8s to 0.9s on cellular networks',
    ],
    image: barossaImg,
    year: '2025',
    testimonial: {
      quote:
        'Aura Studio did not just deliver a standard report—they diagnosed exactly where our heritage collectors were encountering friction. Their audit paid for itself within the first release weekend.',
      author: 'Marcus Lindner',
      role: 'Estate Director, Barossa Reserve Vintners',
    },
  },
  {
    id: 'fleurieu-botanicals',
    title: 'Organic Apothecary Editorial Launch',
    client: 'Fleurieu Botanicals',
    location: 'Fleurieu Peninsula, SA',
    category: 'Content Creation',
    heroMetric: '+320%',
    heroMetricLabel: 'Engaged Brand Reach',
    summary:
      'Editorial brand storytelling, artisanal art direction, and a weekly botanical journal that positioned this coastal apothecary as Australia’s quiet luxury skincare darling.',
    challenge:
      'Fleurieu Botanicals formulated rare native coastal extracts, but their digital presence resembled a sterile pharmaceutical catalog rather than an evocative sensory sanctuary.',
    solution:
      'We directed a unified creative content suite: evocative essays on native botanicals, artisanal photography styling, bi-weekly subscriber dispatches, and sensory product stories that resonated deeply with mindful buyers.',
    deliverables: [
      'Creative Content Direction & Editorial Narrative',
      'Monthly Botanical Journal & Long-form Publishing',
      'Artisanal Product Storytelling Copywriting',
      'High-Conversion Retention Email Sequences',
    ],
    results: [
      'Organic social traffic conversion tripled in 90 days',
      'Email dispatch open rate maintained at 54.8%',
      'National luxury stockist inquiries increased by 400%',
    ],
    image: peninsulaImg,
    year: '2025',
    testimonial: {
      quote:
        'Aura captured the soul of our windswept cliffs and native botanicals with poetic precision. Our community feels understood and genuinely inspired.',
      author: 'Clara Delamere',
      role: 'Founder & Master Herbalist, Fleurieu Botanicals',
    },
  },
  {
    id: 'east-end-atelier',
    title: 'Slow Fashion Omnichannel Scalability',
    client: 'The Rundle Atelier',
    location: 'East End, Adelaide, SA',
    category: 'Digital Strategy',
    heroMetric: '$1.4M',
    heroMetricLabel: 'Direct-to-Consumer Growth',
    summary:
      'An omnichannel digital strategy uniting Adelaide salon private appointments with a frictionless national e-commerce presence for high-end bespoke garments.',
    challenge:
      'The atelier was celebrated locally along Rundle Street, but had no structured digital strategy to scale interstate or capture Melbourne and Sydney luxury clientele.',
    solution:
      'We architected an integrated digital strategy: high-intent acquisition campaigns, VIP virtual salon consultations, localized digital storytelling, and a unified retention ecosystem.',
    deliverables: [
      'Omnichannel Digital Roadmap & Growth Blueprints',
      'Audience Segmentation & High-Net-Worth Targeting',
      'Paid Acquisition & Organic Social Synergy Plan',
      'Virtual Fitting & Private Salon Booking System',
    ],
    results: [
      'Interstate orders grew to represent 58% of total gross sales',
      'Return on ad spend (ROAS) reached a sustainable 4.6x',
      'Average order value elevated from $380 to $820',
    ],
    image: eastEndImg,
    year: '2026',
    testimonial: {
      quote:
        'Aura Studio brought intellectual clarity to our growth. They understood that luxury is about restraint and nuance, never aggressive discounting.',
      author: 'Julianne Chen',
      role: 'Creative Director, The Rundle Atelier',
    },
  },
  {
    id: 'north-terrace-gallery',
    title: 'Cultural Institution Search Visibility',
    client: 'North Terrace Contemporary',
    location: 'North Terrace, Adelaide, SA',
    category: 'SEO',
    heroMetric: '#1',
    heroMetricLabel: 'Rankings for 38 Key Search Themes',
    summary:
      'Dominating high-intent cultural searches, local tourism queries, and private collector keywords through semantic SEO architecture and programmatic schema.',
    challenge:
      'Despite hosting South Australia’s premier independent exhibitions, the gallery was buried beneath outdated municipal portals on Google search results.',
    solution:
      'We rebuilt their topical search hierarchy, implemented rich museum and exhibition schema markup, optimized local Adelaide cultural keywords, and secured authoritative arts backlinks.',
    deliverables: [
      'Semantic Search Architecture & Topic Clustering',
      'Schema.org Exhibition & Artist Graph Markup',
      'Local Adelaide Cultural SEO Infrastructure',
      'Authority Acquisition & Editorial Digital PR',
    ],
    results: [
      '+188% increase in organic search ticket sales',
      'Achieved #1 Google rankings for 38 key contemporary art searches',
      'Organic foot traffic attribution doubled during Festival Season',
    ],
    image: northTerraceImg,
    year: '2025',
    testimonial: {
      quote:
        'Our exhibitions now achieve organic national attention before opening night. Aura Studio’s SEO approach is rigorous, thoughtful, and culturally attuned.',
      author: 'Dr. Alistair Ross',
      role: 'Chief Curator, North Terrace Contemporary',
    },
  },
  {
    id: 'flinders-architects',
    title: 'Architectural Practice Digital Repositioning',
    client: 'Flinders & Co. Architects',
    location: 'West End, Adelaide, SA',
    category: 'Digital Strategy',
    heroMetric: '4.2x',
    heroMetricLabel: 'Tender Win Pipeline Value',
    summary:
      'Positioning a sustainable South Australian architecture studio for multi-million dollar civic and luxury residential commissions via high-authority digital presence.',
    challenge:
      'The firm’s exquisite physical portfolio was trapped in slow, image-heavy PDF brochures with virtually zero digital inbound momentum.',
    solution:
      'Designed an architectural digital positioning strategy: monograph-style project case studies, thought leadership essays, and targeted corporate executive touchpoints.',
    deliverables: [
      'Bespoke Digital Brand Strategy',
      'Editorial Project Case Study Architecture',
      'Executive Search Visibility Framework',
      'Digital Monograph Presentation Suite',
    ],
    results: [
      'Secured 3 major civic masterplan tender invitations in 6 months',
      'Inbound private residential inquiries grew by 160%',
      'Average project engagement scope expanded by 85%',
    ],
    image: flindersImg,
    year: '2026',
    testimonial: {
      quote:
        'Aura understands spatial intelligence and the language of architecture. Their strategy directly influenced our largest commercial win this year.',
      author: 'Soren Vance-Menzies',
      role: 'Principal Architect, Flinders & Co.',
    },
  },
  {
    id: 'leigh-street-cellars',
    title: 'Laneway Hospitality Local Search Dominance',
    client: 'Leigh Street Cellars',
    location: 'Adelaide CBD, SA',
    category: 'SEO',
    heroMetric: '+310%',
    heroMetricLabel: 'High-Intent "Near Me" Searches',
    summary:
      'Capturing Adelaide CBD after-work crowds, weekend wine connoisseurs, and international culinary travelers through forensic local search engine optimization.',
    challenge:
      'In a vibrant Adelaide laneway with intense hospitality competition, the bar struggled to capture travelers looking for authentic Adelaide wine tasting venues.',
    solution:
      'Executed a hyper-localized Google Business and organic search campaign, targeted long-tail varietal queries ("natural wine Adelaide CBD", "Adelaide Hills flights"), and curated reviews.',
    deliverables: [
      'Hyper-Local Adelaide Google Ecosystem Optimization',
      'Local Citation Network & Reputational Schema',
      'Curated Beverage Menu SEO Taxonomy',
      'Location-Based Content Marketing',
    ],
    results: [
      '+310% monthly growth in Google Maps discovery searches',
      'Consistent top 3 placement in local Adelaide wine map pack',
      'Friday and Saturday table reservations booked out 3 weeks ahead',
    ],
    image: leighStreetImg,
    year: '2025',
    testimonial: {
      quote:
        'We now welcome travelers from Sydney, Tokyo, and London every week who tell us they found us instantly on Google. Aura Studio delivered beyond our hopes.',
      author: 'Matteo Moretti',
      role: 'Proprietor, Leigh Street Cellars',
    },
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'website-audits',
    title: 'Website Audits',
    shortTag: 'Forensic Diagnostics',
    headline: 'Uncover the silent leaks costing your brand revenue and prestige.',
    description:
      'A deep, non-destructive forensic examination of your website architecture. We dissect Core Web Vitals, mobile user journeys, technical crawler access, and conversion bottlenecks to build an executable technical roadmap.',
    deliverables: [
      'Full 50+ Point Technical Infrastructure & Server Health Check',
      'Core Web Vitals (LCP, INP, CLS) Real-World Speed Diagnostic',
      'Mobile UX & Conversion Funnel Drop-off Friction Analysis',
      'Prioritized Developer-Ready Engineering Action Matrix',
      'Competitor Benchmark & Technology Gap Report',
    ],
    process: [
      { step: '01', title: 'Deep Crawl', desc: 'Comprehensive crawler scan across every page, script, and asset.' },
      { step: '02', title: 'Behavioral Audit', desc: 'Heatmap review and journey friction mapping on mobile & desktop.' },
      { step: '03', title: 'Synthesis', desc: 'Clear prioritization of quick wins versus high-impact architectural fixes.' },
      { step: '04', title: 'Delivery & Briefing', desc: 'Interactive debriefing call with your team and technical partners.' },
    ],
    idealFor: 'Brands experiencing stagnant conversions or preparing for a major commercial scale phase.',
    turnaround: '7 to 10 Business Days',
    deliverableIcon: 'Activity',
  },
  {
    id: 'content-creation',
    title: 'Content Creation',
    shortTag: 'Artisanal Storytelling',
    headline: 'Narratives crafted with restraint, cultural nuance, and quiet authority.',
    description:
      'In a landscape drowned in synthetic noise, human resonance is the ultimate luxury. We craft thoughtful editorial journals, art-directed photography suites, evocative brand copy, and newsletters that audiences genuinely look forward to opening.',
    deliverables: [
      'Editorial Brand Voice & Lexicon Guidelines',
      'Art Direction & Photography Production Briefs',
      'High-Conversion Website Copywriting & Case Studies',
      'Subscriber Newsletters & Private Dispatch Series',
      'Signature Editorial Brand Books & Digital Monographs',
    ],
    process: [
      { step: '01', title: 'Immersion', desc: 'Unearthing the core philosophy, origin stories, and materials behind your craft.' },
      { step: '02', title: 'Creative Direction', desc: 'Developing moodboards, narrative hooks, and typographic balance.' },
      { step: '03', title: 'Crafting', desc: 'Penning prose and visual essays that elevate perceived brand value.' },
      { step: '04', title: 'Cadence', desc: 'Establishing sustainable editorial rhythms that build long-term affinity.' },
    ],
    idealFor: 'Lifestyle, wine, design, fashion, and culture brands seeking distinction above generic competitors.',
    turnaround: 'Retainer or 2–4 Week Production Sprints',
    deliverableIcon: 'Feather',
  },
  {
    id: 'digital-strategy',
    title: 'Digital Strategy',
    shortTag: 'Commercial Clarity',
    headline: 'Eliminating guesswork with mathematically grounded growth architecture.',
    description:
      'We engineer cohesive digital roadmaps that connect customer acquisition, retention, brand equity, and commercial performance. No vanity metrics or superficial tactics—only sustainable market positioning.',
    deliverables: [
      'Comprehensive 12-Month Omnichannel Growth Blueprint',
      'Customer Journey & High-Value Segment Mapping',
      'Multi-Touch Attribution & Channel Efficiency Modeling',
      'E-commerce & Direct-to-Consumer Scalability Architecture',
      'Quarterly Strategic Rebalancing & Executive Advisory',
    ],
    process: [
      { step: '01', title: 'Data Audit', desc: 'Dissecting historical traffic, unit economics, and customer lifetime value.' },
      { step: '02', title: 'Market Positioning', desc: 'Identifying uncontested market niches and messaging vulnerabilities.' },
      { step: '03', title: 'Playbook Design', desc: 'Drafting precise channel, content, and budget allocations.' },
      { step: '04', title: 'Execution Support', desc: 'Hands-on stewardship to ensure strategy translates into operational reality.' },
    ],
    idealFor: 'Founders and managing directors who desire a rigorous, unified strategic direction.',
    turnaround: '3 to 5 Week Strategic Engagements',
    deliverableIcon: 'Compass',
  },
  {
    id: 'seo',
    title: 'Search Engine Optimization',
    shortTag: 'Organic Supremacy',
    headline: 'Command the search queries that high-intent buyers actually type.',
    description:
      'Modern SEO is not keyword stuffing; it is topical authority, technical speed, and semantic alignment with human intent. We position your brand at the exact moment serious clients seek your expertise across Adelaide and Australia.',
    deliverables: [
      'Semantic Topical Authority & Keyword Mapping',
      'Technical SEO Optimization (Crawlability, Indexing, Schema Graph)',
      'Adelaide & Regional Local Search Dominance (Google Map Pack)',
      'High-Authority Digital PR & Curated Backlink Strategy',
      'Continuous Monthly Rank Tracking & Performance Reporting',
    ],
    process: [
      { step: '01', title: 'Entity Research', desc: 'Mapping the knowledge graph entities relevant to your niche.' },
      { step: '02', title: 'Technical Cleanup', desc: 'Eliminating crawl traps, canonical conflicts, and schema gaps.' },
      { step: '03', title: 'Authority Engine', desc: 'Deploying high-intent landing pages and authoritative resources.' },
      { step: '04', title: 'Compounding Growth', desc: 'Refining rankings and expanding your organic search footprint month over month.' },
    ],
    idealFor: 'High-trust service providers, heritage brands, and e-commerce companies seeking recurring organic revenue.',
    turnaround: 'Ongoing Monthly Growth Engagements (6+ Month Horizon)',
    deliverableIcon: 'Search',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote:
      'Aura Studio brought a level of intellectual discipline and aesthetic restraint that is extraordinarily rare in marketing agencies. They understand the nuances of high-end wine culture.',
    author: 'Marcus Lindner',
    role: 'Estate Director',
    company: 'Barossa Reserve Vintners',
    location: 'Barossa Valley, SA',
    metric: '+215%',
    metricLabel: 'DTC Revenue',
  },
  {
    id: '2',
    quote:
      'Working with Aura feels like partnering with a premier design studio and a quantitative data laboratory at the same time. Their SEO and content transformed our national profile.',
    author: 'Clara Delamere',
    role: 'Founder & Herbalist',
    company: 'Fleurieu Botanicals',
    location: 'Fleurieu Peninsula, SA',
    metric: '+320%',
    metricLabel: 'Organic Reach',
  },
  {
    id: '3',
    quote:
      'Their website audit cut straight through our developer disputes. We implemented their 10 priority recommendations and our mobile checkout revenue skyrocketed in four weeks.',
    author: 'Julianne Chen',
    role: 'Creative Director',
    company: 'The Rundle Atelier',
    location: 'East End, Adelaide, SA',
    metric: '$1.4M',
    metricLabel: 'Annual Growth',
  },
  {
    id: '4',
    quote:
      'In a world where every marketing pitch feels cheap and automated, Aura Studio stands apart. They are deeply thoughtful, radically honest, and impeccably skilled.',
    author: 'Dr. Alistair Ross',
    role: 'Chief Curator',
    company: 'North Terrace Contemporary',
    location: 'North Terrace, Adelaide, SA',
    metric: '#1',
    metricLabel: 'Google Rankings',
  },
];
