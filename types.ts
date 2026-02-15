
export interface NavItem {
  label: string;
  path: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Package {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  isFeatured?: boolean;
}

export interface WorkItem {
  id: string;
  title: string;
  category: 'Wedding' | 'Corporate' | 'Product' | 'Event' | 'Graduation';
  imageUrl: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  cover: string;
  tags: string[];
  content: string;
  readingTime: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  content: string;
  rating: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface SiteConfig {
  name: string;
  slogan: string;
  email: string;
  phone: string;
  address: string;
  socials: {
    instagram: string;
    twitter: string;
    linkedin: string;
  };
}
