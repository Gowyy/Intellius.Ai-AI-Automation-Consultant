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
    title: "Financial AI Agent",
    description: "AI that answers finance ops in seconds – checks invoice status, collects payment intents, guides approvals, and explains forecast/variance with RAG playbooks.",
    tags: ["↓ manual workload by ~60%", "↑ on-time collections", "↑ forecast accuracy"],
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=800" // 3D crypto abstract
  },
  {
    title: "Sales AI Agent",
    description: "Voice and chat agents that respond in seconds, qualify leads (BANT/MEDDICC), book meetings, write recaps, and update CRM with RAG-powered playbooks.",
    tags: ["↓ 90% speed-to-lead", "↑ 20-35% meeting rate", "↑ 35-55% CRM hygiene"],
    image: "https://images.unsplash.com/photo-1633526543814-9718c8922b7a?auto=format&fit=crop&q=80&w=800" // 3D abstract shapes
  },
  {
    title: "Medical Voice AI Assistant",
    description: "HIPAA-ready voice agents for patient scheduling, triage, FAQs, consent collection, and automated note drafting with EHR/telephony integration.",
    tags: ["↓ no-shows", "↑ scheduling efficiency", "↑ clinician time freed"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800" // Abstract molecular/bio
  },
  {
    title: "Legal Voice AI Assistant",
    description: "Confidential, compliant voice assistants for deposition capture, live transcripts, exhibit management, and certified records—using RAG-boosted legal terminology and jurisdiction guardrails.",
    tags: ["rough in <2 hrs", "certified in 24-48 hrs", "↓ 20-40% cost per proceeding"],
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=800" // Abstract geometry/structure
  },
  {
    title: "AI Voice Assistants for HR",
    description: "Agentic voice assistants that handle candidate calls, conduct pre-screening with your scorecards, schedule interviews, and summarize conversations.",
    tags: ["↓ admin load", "↑ hiring speed", "↑ candidate experience"],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" // Abstract mesh/network
  },
  {
    title: "Security Tech (AI Voice Incident Agent)",
    description: "Agentic voice assistants that verify alarms, triage incidents, dispatch via SOPs, and generate audit-ready reports—so operators handle threats, not toggles.",
    tags: ["↓ false dispatches", "↓ time-to-dispatch", "↑ operator capacity"],
    image: "https://images.unsplash.com/photo-1614064641938-3bcee529cfc4?auto=format&fit=crop&q=80&w=800" // Abstract shield/security
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