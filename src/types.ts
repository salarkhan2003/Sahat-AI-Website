export interface Feature {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  iconName: string;
  badge?: string;
}

export interface Metric {
  label: string;
  value: string;
  change: string;
  description: string;
}

export interface Challenge {
  title: string;
  stat: string;
  statDesc: string;
  description: string;
  category: string;
}

export interface Testimonial {
  name: string;
  role: string;
  location: string;
  avatar: string;
  quote: string;
  verifiedBadge?: boolean;
}

export interface Partner {
  name: string;
  logoType: string;
  status: string;
}

export interface Founder {
  name: string;
  role: string;
  bio: string;
  education: string[];
  avatar: string;
  linkedInUrl?: string;
}
