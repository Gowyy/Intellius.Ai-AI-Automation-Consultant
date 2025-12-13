import React from 'react';
import { NavItem, Testimonial } from './types';
import { ShieldCheck, Cloud, Code } from 'lucide-react';

// Helper to create slug from label
const toSlug = (label: string) => label.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'Hire developer',
    href: '/hire',
    // We will handle the "Hire" specific structure in the Header component using HIRE_MENU
    // But keeping it here ensures it renders in the main loop
    subItems: [] 
  },
  {
    label: 'Services',
    href: '/services',
    subItems: [
      'AI Development Company',
      'AI Agents Development',
      'AI Chatbot Development Services',
      'AI Assistant Development Services',
      'Computer Vision AI Solutions',
      'AI Consulting Services',
      'AI Voice Assistant Development',
      'AI Recommendation System',
      'AI Automation Service',
      'AIoT Solutions',
      'Medical Voice AI Assistant',
      'Sales Voice AI Assistant',
      'Legal Voice AI Assistant',
      'AI Voice Assistants for HR',
      'AI Security Solutions',
      'FinTech Voice AI Assistant',
      'MVP Development',
      'ChatGPT',
      'Mobile Development',
      'Web Development',
      'Cloud Software Development',
      'Banking Software Development Services',
      'Custom Software Development Solutions',
      'Machine Learning Development Services'
    ].map(label => ({ label, href: `/services/${toSlug(label)}` }))
  },
  {
    label: 'Solutions',
    href: '/solutions',
    subItems: [
      'EdTech',
      'EdTech for E-government',
      'E-Commerce',
      'Blockchain',
      'FinTech',
      'E-government',
      'Healthcare in E-government',
      'Software Development Consulting',
      'Digital Transformation Consulting',
      'Demand Forecasting Software Development',
      'CRM Development Services',
      'Cybersecurity & Penetration Testing'
    ].map(label => ({ label, href: `/solutions/${toSlug(label)}` }))
  },
  {
    label: 'Industries',
    href: '/industries',
    subItems: [
      'Real Estate & PropTech',
      'Healthcare & MedTech',
      'Sports',
      'Media & Entertainment',
      'AgTech & Agriculture',
      'Startups & Scaleups',
      'LegalTech & eDiscovery',
      'Insurance & InsurTech',
      'HR Tech & Recruitment',
      'Logistics & Supply Chain',
      'Game & Esports Tech',
      'Cybersecurity',
      'Telecom',
      'AI Software Development',
      'Industrial & Manufacturing',
      'Fintech',
      'Learning Management System',
      'Retail & eCommerce',
      'Travel & Hospitality'
    ].map(label => ({ label, href: `/industries/${toSlug(label)}` }))
  },
  {
    label: 'Cases',
    href: '/cases'
  },
  {
    label: 'Company',
    href: '/company',
    subItems: [
      'About US',
      'Blog',
      'Contacts',
      'Careers',
      'Partnership'
    ].map(label => ({ label, href: `/company/${toSlug(label)}` }))
  }
];

// Keep this for the specific column layout of the Hire menu if needed, 
// or map it dynamically in the header.
export const HIRE_MENU = {
  frontend: ['React Developers', 'Angular Developers', 'Vue Developers', 'Next.js Developers'],
  backend: ['Node.js Developers', 'Python Developers', 'Java Developers', '.NET Developers', 'PHP Developers'],
  mobile: ['iOS Developers', 'Android Developers', 'Flutter Developers', 'React Native Developers'],
  other: ['DevOps Engineers', 'QA Engineers', 'UI/UX Designers', 'Data Scientists']
};

export const COMPANY_MENU = [
  { label: 'About Us', href: '/company' },
  { label: 'Blog', href: '/blog' },
  { label: 'Careers', href: '/company/careers' },
  { label: 'Partnership', href: '/company/partnership' },
  { label: 'Contact', href: '/contacts' },
];

export const AGENTS = [
  {
    title: "AI Lead Generation",
    description: "Autonomous agents that scrape, enrich, and qualify prospects from multiple sources to fill your pipeline with high-intent leads 24/7.",
    tags: ["↑ leads by 300%", "↓ CAC by 40%", "Auto-outreach"],
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=800" // Abstract 3D Network
  },
  {
    title: "AI Lead Nurturing",
    description: "Intelligent drip campaigns that deliver hyper-personalized content sequences based on prospect behavior, warming up leads until they're ready to convert.",
    tags: ["Personalized content", "Behavioral Scoring", "↑ retention"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800" // Abstract Fluid Blue
  },
  {
    title: "AI Voice Assistant",
    description: "Human-parity voice AI that handles inbound customer service calls, books appointments, and routes complex queries with zero latency.",
    tags: ["< 500ms latency", "Natural NLP", "24/7 Availability"],
    image: "https://images.unsplash.com/photo-1614064641938-3bcee529cfc4?auto=format&fit=crop&q=80&w=800" // Abstract Sound Waves
  },
  {
    title: "AI Appointment Manager",
    description: "Seamlessly integrates with your calendar to propose times, handle rescheduling, and send reminders via SMS or Email, eliminating scheduling friction.",
    tags: ["Calendar Sync", "No-show Reduction", "Auto-Reminders"],
    image: "https://images.unsplash.com/photo-1633526543814-9718c8922b7a?auto=format&fit=crop&q=80&w=800" // Abstract Blocks/Structure
  },
  {
    title: "AI Sales Agent",
    description: "A tireless sales rep that engages web visitors, answers product questions, handles objections, and guides users to checkout or demo booking.",
    tags: ["Objection Handling", "Pipeline velocity", "Revenue focus"],
    image: "https://images.unsplash.com/photo-1642132652859-3ef5a9290aa8?auto=format&fit=crop&q=80&w=800" // Abstract Gold/Upward
  },
  {
    title: "AI Customer Support",
    description: "Resolve 80% of support tickets instantly with generative AI that understands context, history, and brand tone—escalating only when necessary.",
    tags: ["Ticket Deflection", "Multi-lingual", "CSAT Boost"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" // Abstract Tech/Cyber
  },
  {
    title: "AI CRM Automation",
    description: "Keep your CRM spotless. AI monitors communications and automatically updates deal stages, contact details, and notes without manual entry.",
    tags: ["Data Hygiene", "Auto-Logging", "Pipeline Visibility"],
    image: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?auto=format&fit=crop&q=80&w=800" // Abstract Server/Data
  },
  {
    title: "AI Finance Agent",
    description: "Automate invoice processing, expense categorization, and financial reporting. Detect anomalies and generate forecasts with precision.",
    tags: ["AP/AR Automation", "Expense Tracking", "Financial Forecasting"],
    image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&q=80&w=800" // Abstract Coin/Shape
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Elena V.",
    role: "CTO",
    company: "FinStream",
    quote: "Intellius.Ai transformed our legacy backend into a microservices architecture that handles 10x the load. Their AI integration for fraud detection is top-tier.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: 2,
    name: "Marcus J.",
    role: "Product Director",
    company: "Healthify",
    quote: "The dedication to compliance and code quality is unmatched. We launched our telemedicine app 3 weeks ahead of schedule.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: 3,
    name: "Sarah L.",
    role: "Founder",
    company: "RetailFlow",
    quote: "A true partner in innovation. The predictive inventory system they built saved us 15% in overhead in Q1 alone.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150"
  }
];

export const AWARDS = [
  { name: "Clutch Top Dev 2024", icon: <ShieldCheck className="w-8 h-8 text-brand-500" /> },
  { name: "AWS Partner", icon: <Cloud className="w-8 h-8 text-brand-500" /> },
  { name: "ISO 27001", icon: <Code className="w-8 h-8 text-brand-500" /> },
];