// Fix: Import React to resolve the 'Cannot find namespace React' error when using React.ReactNode
import React from 'react';

export interface ServiceCard {
  title: string;
  description: string;
  icon: React.ReactNode;
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