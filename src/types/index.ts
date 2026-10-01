export interface Product {
  id: number;
  name: string;
  price: string;
  numericPrice: number;
  image: string;
  tag?: string;
  category: string;
  description?: string;
  fabric?: string;
  sizes?: string[];
  isNew?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize: string;
}

export interface HeroSlide {
  id: number;
  subtitle: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  image: string;
  ctaText: string;
  ctaLink: string;
  tag: string;
}

export interface CollectionCategory {
  title: string;
  image: string;
  count: string;
  link: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  stars: number;
  image: string;
}

export type NavbarTheme = 'velvet' | 'obsidian' | 'emerald' | 'navy';
