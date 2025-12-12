import React from 'react';

export interface NavItem {
  label: string;
  href: string;
  subItems?: SubItem[];
  category?: string; // For "Hire" columns
}

export interface SubItem {
  label: string;
  href: string;
  description?: string;
}

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface AgentCardProps {
  title: string;
  description: string;
  outcomes?: string[]; // Keeping for backward compatibility if needed, but we use tags now
  tags: string[];
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  image: string;
}

export interface EstimationState {
  projectType: string;
  industry: string;
  features: string[];
  timeline: string;
  budget: string;
  contact: {
    name: string;
    email: string;
    phone: string;
  };
}