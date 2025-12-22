export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string[];
  imageUrl: string;
  icon?: string;
  slug: string;
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface SiteContent {
  hero: {
    title: string;
    subtitle: string;
    quote: string;
  };
  about: {
    title: string;
    paragraphs: string[];
    specialties: string[];
  };
  contact: {
    title: string;
    subtitle: string;
    phone: string; // Placeholder
    email: string; // Placeholder
  };
}

export interface RetreatContent {
  hero: {
    title: string;
    subtitle: string;
    dateDescription: string;
  };
  intro: {
    title: string;
    description: string[];
  };
  audience: {
    title: string;
    points: string[];
  };
  methods: {
    title: string;
    description: string;
    id: string;
  }[];
  schedule: {
    time: string;
    activity: string;
  }[];
  objections: {
    belief: string;
    reality: string;
    conclusion: string;
  }[];
  details: {
    location: string;
    price: string;
  };
}