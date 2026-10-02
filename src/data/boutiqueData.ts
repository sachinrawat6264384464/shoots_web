import { Product, HeroSlide, CollectionCategory, Testimonial } from "@/types";

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    subtitle: "Wedding Collection 2026",
    titleLine1: "Royal Groom",
    titleLine2: "Designer Sherwanis",
    description: "Hand-embellished zardosi & velvet sherwanis crafted for the grand wedding day.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1600",
    ctaText: "Explore Sherwanis",
    ctaLink: "#collections",
    tag: "Bridal Groom Edition"
  },
  {
    id: 2,
    subtitle: "New Collection Dabra",
    titleLine1: "Italian Cut",
    titleLine2: "3-Piece Suits",
    description: "Sharp tuxedos & executive suits tailored for weddings, receptions & galas.",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=1600",
    ctaText: "View Suits",
    ctaLink: "#catalog",
    tag: "Trending Suits"
  },
  {
    id: 3,
    subtitle: "Festive Splendor",
    titleLine1: "Handcrafted",
    titleLine2: "Indo-Western Sets",
    description: "Modern asymmetrical cuts merged with traditional mirror & threadwork.",
    image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&q=80&w=1600",
    ctaText: "Discover Indo-Western",
    ctaLink: "#collections",
    tag: "Festive Exclusive"
  }
];

export const COLLECTION_CATEGORIES: CollectionCategory[] = [
  {
    title: "Suits & Blazers",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=1000",
    count: "95+ Styles",
    link: "#catalog"
  },
  {
    title: "Royal Sherwanis",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1000",
    count: "60+ Styles",
    link: "#catalog"
  },
  {
    title: "Indo-Western",
    image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&q=80&w=1000",
    count: "45+ Styles",
    link: "#catalog"
  },
  {
    title: "Kurta Pyjama",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1000",
    count: "70+ Styles",
    link: "#catalog"
  },
  {
    title: "Groom Special",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=1000",
    count: "Exclusive",
    link: "#catalog"
  },
  {
    title: "Royal Bandhgalas",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=1000",
    count: "50+ Styles",
    link: "#catalog"
  }
];

export const CATALOG_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Royal Velvet Groom Sherwani",
    price: "₹34,999",
    numericPrice: 34999,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800",
    tag: "TRENDING",
    category: "Royal Sherwanis",
    description: "Heavy maroon velvet groom sherwani embellished with intricate zardosi & gold metallic thread embroidery. Includes matching safa & churidar.",
    fabric: "Royal Micro Velvet & Raw Silk",
    sizes: ["38", "40", "42", "44", "Custom Fitting"]
  },
  {
    id: 2,
    name: "Italian Cut 3-Piece Tuxedo",
    price: "₹18,500",
    numericPrice: 18500,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=800",
    tag: "NEW",
    category: "Suits & Blazers",
    description: "Premium midnight blue tux featuring a satin lapel collar, tailored waistcoat, and slim-fit trousers. Perfect for receptions.",
    fabric: "Italian Wool Blend",
    sizes: ["36", "38", "40", "42", "44"]
  },
  {
    id: 3,
    name: "Silk Indo-Western Fusion Set",
    price: "₹14,499",
    numericPrice: 14499,
    image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&q=80&w=800",
    tag: "EXCLUSIVE",
    category: "Indo-Western",
    description: "Asymmetrical silk jacket with handcrafted button accents and draped inner cowl kurta.",
    fabric: "Art Silk & Georgette",
    sizes: ["38", "40", "42", "44"]
  },
  {
    id: 4,
    name: "Embroidered Kurta Pyjama Set",
    price: "₹7,999",
    numericPrice: 7999,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800",
    tag: "TRENDING",
    category: "Kurta Pyjama",
    description: "Designer chanderi silk kurta featuring thread embroidery on collar and chest, paired with silk trousers.",
    fabric: "Chanderi Silk",
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 5,
    name: "Tuxedo Dinner Jacket",
    price: "₹22,500",
    numericPrice: 22500,
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800",
    tag: "EXCLUSIVE",
    category: "Suits & Blazers",
    description: "Jacquard textured velvet tux jacket with shawl lapel. Tailored for galas & high-profile evening events.",
    fabric: "Textured Velvet Jacquard",
    sizes: ["38", "40", "42", "44"]
  },
  {
    id: 6,
    name: "Heavily Embroidered Groom Set",
    price: "₹45,000",
    numericPrice: 45000,
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&q=80&w=800",
    tag: "NEW",
    category: "Groom Special",
    description: "Complete royal groom package: Gold embroidered sherwani, stole dupatta, turban safa, and custom footwear.",
    fabric: "Heritage Raw Silk",
    sizes: ["38", "40", "42", "Custom Fit"]
  },
  {
    id: 7,
    name: "Nehru Jacket & Kurta Combo",
    price: "₹9,999",
    numericPrice: 9999,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
    tag: "EXCLUSIVE",
    category: "Kurta Pyjama",
    description: "Hand-loomed silk Modi jacket with brass metal buttons paired with a linen kurta pyjama set.",
    fabric: "Pure Linen & Silk Jacquard",
    sizes: ["38", "40", "42", "44"]
  },
  {
    id: 8,
    name: "Designer Party Blazer",
    price: "₹11,999",
    numericPrice: 11999,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=800",
    tag: "TRENDING",
    category: "Suits & Blazers",
    description: "Slim-fit party blazer with subtle metallic sheen and custom structured shoulder pads.",
    fabric: "Poly-Rayon Premium Blend",
    sizes: ["38", "40", "42", "44"]
  },
  {
    id: 9,
    name: "Embroidered Velvet Bandhgala",
    price: "₹28,999",
    numericPrice: 28999,
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800",
    tag: "EXCLUSIVE",
    category: "Groom Special",
    description: "Hand-crafted royal velvet bandhgala jacket with vintage gold buttons and customized monogram embroidery.",
    fabric: "Micro Velvet & Silk Lining",
    sizes: ["38", "40", "42", "44"]
  },
  {
    id: 10,
    name: "Royal Emerald Tuxedo Set",
    price: "₹24,500",
    numericPrice: 24500,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=800",
    tag: "NEW",
    category: "Suits & Blazers",
    description: "Imperial emerald green tux with satin peak lapels and slim tapered trousers for red-carpet events.",
    fabric: "Italian Silk Blend",
    sizes: ["38", "40", "42", "44"]
  },
  {
    id: 11,
    name: "Bespoke Silk Sherwani & Safa",
    price: "₹38,999",
    numericPrice: 38999,
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&q=80&w=800",
    tag: "EXCLUSIVE",
    category: "Royal Sherwanis",
    description: "Hand-woven raw silk sherwani featuring intricate threadwork, royal turban safa, and matching stole.",
    fabric: "Pure Raw Silk",
    sizes: ["38", "40", "42", "Custom Fitting"]
  },
  {
    id: 12,
    name: "Asymmetric Indo-Western Kurta",
    price: "₹16,999",
    numericPrice: 16999,
    image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&q=80&w=800",
    tag: "TRENDING",
    category: "Indo-Western",
    description: "Modern overlap cut jacket paired with draped cowl kurta and fitted stretch trousers.",
    fabric: "Art Silk & Georgette",
    sizes: ["38", "40", "42", "44"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Amit Sharma",
    role: "Groom (Dabra)",
    text: "Lucky Mens Wear made my wedding day unforgettable! The royal velvet sherwani fit like a glove and everyone praised the zardosi design.",
    stars: 5,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80"
  },
  {
    name: "Vikram Rawat",
    role: "Business Executive (Gwalior)",
    text: "The Italian cut 3-piece suit from New Collection Dabra is top class. Great fabric quality, perfect fit, and very stylish.",
    stars: 5,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80"
  },
  {
    name: "Deepak Kushwaha",
    role: "Regular Customer",
    text: "Best men's shop in Dabra! Their Indo-Western kurtas and suits are always ahead of trends.",
    stars: 5,
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80"
  }
];

export const NAVBAR_THEMES = {
  navy: {
    name: "Royal Midnight",
    bgScrolled: "bg-[#081225]/90 border-b border-[#D4AF37]/20 backdrop-blur-md",
    bgTop: "bg-gradient-to-b from-[#081225]/80 to-transparent",
    mobileBg: "bg-[#081225]",
    accent: "text-gold-accent"
  },
  obsidian: {
    name: "Obsidian Black",
    bgScrolled: "bg-[#0a0a0c]/90 border-b border-[#D4AF37]/20 backdrop-blur-md",
    bgTop: "bg-gradient-to-b from-black/80 to-transparent",
    mobileBg: "bg-[#0a0a0c]",
    accent: "text-gold-accent"
  },
  velvet: {
    name: "Luxury Maroon",
    bgScrolled: "bg-[#4a0e17]/90 border-b border-[#D4AF37]/20 backdrop-blur-md",
    bgTop: "bg-gradient-to-b from-[#4a0e17]/90 to-transparent",
    mobileBg: "bg-[#4a0e17]",
    accent: "text-gold-accent"
  },
  emerald: {
    name: "Imperial Emerald",
    bgScrolled: "bg-[#042419]/90 border-b border-[#D4AF37]/20 backdrop-blur-md",
    bgTop: "bg-gradient-to-b from-[#042419]/80 to-transparent",
    mobileBg: "bg-[#042419]",
    accent: "text-gold-accent"
  }
};
