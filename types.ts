
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  sector: string;
  content: string;
  avatar: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon: string;
}
