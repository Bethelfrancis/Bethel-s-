export interface NavLink {
  label: string;
  href: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  href: string;
  meta: string;
}

export interface HeroContent {
  role: string;
  label: string;
  description: string;
}

export interface ContactContent {
  title: string;
  description: string;
  email: string;
}

export const li = "relative cursor-pointer text-foreground after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-foreground after:transition-all after:duration-200 hover:after:w-full hover:text-foreground font-semibold"

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Skill", href: "#skill" },
  { label: "Experience", href: "#experience" }
];

export const hero: HeroContent = {
  role: "Frontend Developer",
  label: 'I don\'t just build interfaces. I architect the systems behind them.',
  description:
    "Hi, I'm Bethel, a Frontend Developer with 2+ years of experience. I build scalable frontend systems with React and Next.js, clean architecture, performant data layers, and interfaces ready to ship with confidence."
};

export interface Skill {
  icon?: string | null;
  label: string;
}

export const skills: Skill[] = [
  { icon: '/tailwindcss.png', label: "Tailwind CSS" },
  { icon: '/typescript.png', label: "TypeScript" },
  { icon: '/framer.svg', label: "Framer Motion" },
  { icon: "/next.js.png", label: "Next.js" },
  { icon: "/react.png", label: "React" },
  { icon: "/postman.png", label: "Postman" },
  { icon: "/sass.png", label: "Sass" },
  { label: "Accessibility" },
  { label: "Performance" },
  { label: "Axios" },
  { label: "React Query" },
  { label: "Figma" },
  { label: "Git / GitHub" },
  { label: "JavaScript (ES6+)" },
  { label: "REST APIs" },
  { label: "Component Architecture" },
  { label: "State Management" },
  { label: "Code Splitting" },
  { label: "SEO Optimization" },
  { label: "Responsive Design" },
  { icon: '/tailwindcss.png', label: "Tailwind CSS" },
  { icon: '/typescript.png', label: "TypeScript" },
  { icon: '/framer.svg', label: "Framer Motion" },
  { icon: "/next.js.png", label: "Next.js" },
  { icon: "/react.png", label: "React" },
  { icon: "/postman.png", label: "Postman" },
  { icon: "/sass.png", label: "Sass" },
  { label: "Accessibility" },
  { label: "Performance" },
  { label: "Axios" },
  { label: "React Query" },
  { label: "Figma" },
  { label: "Git / GitHub" },
  { label: "JavaScript (ES6+)" },
  { label: "REST APIs" },
  { label: "Component Architecture" },
  { label: "State Management" },
  { label: "Code Splitting" },
  { label: "SEO Optimization" },
  { label: "Responsive Design" },
];

export const projects: Project[] = [
  {
    title: "Fintech Dashboard",
    description:
      "A clean performance dashboard for financial teams, with responsive charts, accessibility-first UI, and modular components.",
    tags: ["Next.js", "Tailwind", "Data Visualization"],
    href: "#work",
    meta: "Brand identity, interface design",
  },
  {
    title: "Marketing Landing Page",
    description:
      "A conversion-focused landing experience with animation, fast loading states, and mobile-first layout systems.",
    tags: ["Responsive", "A/B Testing", "SEO"],
    href: "#work",
    meta: "Campaign design, growth" ,
  },
  {
    title: "Interactive Product Site",
    description:
      "A modern product showcase with subtle scroll-based motion, strong information hierarchy, and polished microinteractions.",
    tags: ["Animation", "Performance", "Accessibility"],
    href: "#work",
    meta: "Product strategy, motion design",
  },
];

export const contactContent: ContactContent = {
  title: "Let’s build something together.",
  description:
    "Open for freelance and full-time opportunities. I’m always excited to explore new projects and meaningful collaborations. Send a note and I’ll reply quickly.",
  email: "bethelndegonekwu@gmail.com",
};

interface SocialLink {
    label: string;
    href: string;
}

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/Bethelfrancis",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/bethel-francis-5b4346328",
  },
  {
    label: "Facebook",
    href: "https://facebook.com/profile.php?id=61552046277969",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/bethelfrancis07",
  },
  {
    label: "X",
    href: "https://x.com/bethelfrancis07",
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@bethelfrancis07",
  },
  {
    label: "Email",
    href: "mailto:bethelndegonekwu@gmail.com",
  },
];

export interface Brand {
  icon?: string | null;
  label: string;
}

export const brands: Brand[] = [
  { icon: "/hng.png", label: "HNG 13" },
  { icon: "/ats.webp", label: "Automaton Tech" },
  { icon: "/resident.png", label: "Residentia" },
  { label: "BizVantage" },
  { icon: '/vendo.png', label: "Venduora" },
  { icon: "/hng.png", label: "HNG 13" },
  { icon: "/ats.webp", label: "Automaton Tech" },
  { icon: "/resident.png", label: "Residentia" },
  { label: "BizVantage" },
  { icon: '/vendo.png', label: "Venduora" },
  { icon: "/hng.png", label: "HNG 13" },
  { icon: "/ats.webp", label: "Automaton Tech" },
  { icon: "/resident.png", label: "Residentia" },
  { label: "BizVantage" },
  { icon: '/vendo.png', label: "Venduora" },
];

export interface BrandStat {
  desc: string;
  value: number;
}

export const brandStats: BrandStat[] = [
  {
    desc: "Contributed to 10+ scalable, production-level applications across different use cases.", 
    value: 10 
  },
  {
    desc: "Engineered 5+ fully optimized web apps, focused on performance, SEO, and seamless user experience.", 
    value: 5 
  },
];

export interface ServiceFeature {
  title: string;
  description: string;
}

export const featureCards: ServiceFeature[] = [
  {
    title: "Performance Optimization",
    description: "Slow websites lose users. I cut load times by up to 30%, optimize API fetch speeds by 35%, and consistently deliver 90+ Lighthouse scores so your product is always fast, smooth, and production-ready.",
  },
  {
    title: "Figma to Code",
    description: "I turn your designs into pixel-perfect, responsive interfaces with zero compromise. Every spacing, animation, and interaction translated faithfully from Figma into clean, scalable React components.",
  },
  {
    title: "Startup Problem Solving",
    description: "Early stage and moving fast? I help startups build scalable frontend architecture from the ground up, so the decisions made today don't become the technical debt that slows you down tomorrow.",
  },
  {
    title: 'API Integration',
    description: "I connect your frontend to any backend or third-party service seamlessly. Using Axios and React Query, I build efficient, reliable data flows with smart caching strategies that keep your app snappy and your users happy."
  }
];

export interface ExperienceItem {
  logo: string,
  company: string;
  role: string;
  details: string;
  period: string;
}

export const experience: ExperienceItem[] = [
  {
    logo: '/vendo.png',
    company: "Vendoura",
    role: "Frontend Developer",
    details: "Engineered performant, accessible frontend systems for a creative business accelerator platform, translating complex founder workflows into clean, scalable UI architecture that unified design and engineering across core education and execution product flows.",
    period: "Dec 2025 - Present",
  },
  {
    logo: '/ats.webp',
    company: "Automotion Tech",
    role: "Frontend Developer",
    details: "Redesigned 15+ UI components improving user satisfaction by 25%, reduced API fetch time by 35% with Axios and React Query caching, and increased landing page conversions by 20% through high-performance, sub-2-second load times. Strengthened cross-team collaboration through structured code reviews and reusable TypeScript component architecture.",
    period: "Nov 2025 - Feb 2026",
  },
  {
    logo: '/hng.png',
    company: "HNG Tech",
    role: "Frontend Developer Intern",
    details: "Reduced initial load time by 30% through code splitting, lazy loading, and dynamic imports across a React application. Increased development efficiency by 40% by integrating AI-assisted debugging and code review workflows into daily engineering processes. Improved UI consistency and accessibility compliance across the application, earning positive feedback across 15+ peer code reviews.",
    period: "Oct - Nov 2025",
  }
];

export interface PortfolioItem {
  title: string;
  category: string;
  link: string;
  image: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    title: "Bethel's Portfolio",
    category: "career",
    link: 'https://bethels.vercel.app/',
    image: "/portfolio.png",
  },
  {
    title: "Residentia",
    category: "real estate",
    link: 'https://residentia.com.ng/',
    image: "/residenta.png",
  },
  {
    title: "Shop.io",
    category: "Ecommerce",
    link: 'https://shop-io-topaz.vercel.app/',
    image: "/shop.png",
  },
  {
    title: "Lux Ventus",
    category: "News",
    link: 'https://lux-ventus-dun.vercel.app/',
    image: "/lux.png",
  },
  {
    title: "Digital Agency",
    category: "Agency",
    link: 'https://digital-agency-dt6v.vercel.app/',
    image: "/enver.png",
  },
  {
    title: "Superside",
    category: "clone",
    link: 'http://superside-six.vercel.app/',
    image: "/sup.png",
  },
];

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
}

export const testimonial: Testimonial = {
  quote:
    "Without Journey Commerce, we would never have been able to implement this system ourselves. Their team raised the bar on performance and design quality.",
  name: "Dimitree Rispiner",
  title: "Head of Product",
  company: "Journey Commerce",
};

export interface FooterNavLink {
  label: string;
  href: string;
}

export const footerNav: FooterNavLink[] = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
