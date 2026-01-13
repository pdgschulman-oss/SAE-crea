import type { ReactNode } from 'react';

export interface ServiceCard {
  title: string;
  description: string;
  icon: ReactNode;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface AuditResult {
  recommendation: string;
  savingsEstimate: string;
  impactLevel: 'High' | 'Medium' | 'Low';
}