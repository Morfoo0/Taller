import type { LucideIcon } from "lucide-react";

export type Service = {
  slug: string;
  icon: LucideIcon;
  category: string;
  title: string;
  short: string;
  description: string;
  brands: string[];
  time: string;
  items: { label: string; detail: string }[];
  warrantyNote?: string;
  featured?: boolean;
};

export type Step = {
  title: string;
  description: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export type Testimonial = {
  name: string;
  service: string;
  rating: number;
  text: string;
};

export type GalleryItem = {
  src: string;
  alt: string;
  label: string;
  service: string;
};

export type ChatNode = {
  id: string;
  message: string;
  options: ChatOption[];
};

export type ChatOption = {
  label: string;
  next?: string;
  action?: "whatsapp" | "book";
  tags?: string[];
};
