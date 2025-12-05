import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  github: string;
}

export interface Skill {
  name: string;
  icon: LucideIcon;
  level: number; // 0-100
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: LucideIcon;
}
