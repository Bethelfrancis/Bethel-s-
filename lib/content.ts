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
  subtitle: string;
  description: string;
  email: string;
}

export const li = "relative cursor-pointer text-foreground after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-foreground after:transition-all after:duration-200 hover:after:w-full hover:text-foreground font-semibold"

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Skill", href: "#skill" }
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
  { icon: "/sass.png", label: "Saas" },
  { label: "Accessibility" },
  { label: "Performance" },
  { icon: '/tailwindcss.png', label: "Tailwind CSS" },
  { icon: '/typescript.png', label: "TypeScript" },
  { icon: '/framer.svg', label: "Framer Motion" },
  { icon: "/next.js.png", label: "Next.js" },
  { icon: "/react.png", label: "React" },
  { icon: "/postman.png", label: "Postman" },
  { icon: "/sass.png", label: "Saas" },
  { label: "Accessibility" },
  { label: "Performance" },
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
  subtitle: "Open for freelance and full-time opportunities",
  description:
    "I’m always excited to explore new projects and meaningful collaborations. Send a note and I’ll reply quickly.",
  email: "hello@bethelfrancis.dev",
};

interface SocialLink {
    label: string;
    href: string;
}

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
  },
  {
    label: "Facebook",
    href: "https://facebook.com/",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/",
  },
  {
    label: "X",
    href: "https://x.com/",
  },
  {
    label: "YouTube",
    href: "https://youtube.com/",
  },
  {
    label: "Email",
    href: "mailto:hello@bethelfrancis.dev",
  },
];

export interface Brand {
  label: string;
}

export const brands: Brand[] = [
  { label: "HNG 13" },
  { label: "Automaton Tech" },
  { label: "Residentia" },
  { label: "BizVantage" },
  { label: "Venduora" },
  { label: "HNG 13" },
  { label: "Automaton Tech" },
  { label: "Residentia" },
  { label: "BizVantage" },
  { label: "Venduora" },
  { label: "HNG 13" },
  { label: "Automaton Tech" },
  { label: "Residentia" },
  { label: "BizVantage" },
  { label: "Venduora" },
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
  company: string;
  role: string;
  details: string;
  period: string;
}

export const experience: ExperienceItem[] = [
  {
    company: "Duwwy Studio",
    role: "Graphic Designer",
    details: "Delivered high-performance product experiences focused on accessibility, usability, and system consistency, contributing to scalable design systems used across core product flows and improving cross-team collaboration between design and engineering.",
    period: "2015 - 2017",
  },
  {
    company: "Odessa Studio",
    role: "UI/UX Designer",
    details: "Designed scalable experience systems for desktop and mobile product launches.",
    period: "2017 - 2019",
  },
  {
    company: "Kora Studio",
    role: "UX Researcher",
    details: "Built evidence-backed product decisions through testing and feedback sessions.",
    period: "2018 - 2021",
  },
  {
    company: "Apple Inc.",
    role: "Product Designer",
    details: "Delivered polished product experiences with a focus on performance and accessibility.",
    period: "2021 - Now",
  },
];

export interface PortfolioItem {
  title: string;
  category: string;
  image: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    title: "Finance App UI",
    category: "Product Design",
    image: "/project.png",
  },
  {
    title: "Dashboard System",
    category: "Analytics",
    image: "/project.png",
  },
  {
    title: "Mobile Workflow",
    category: "Interaction",
    image: "/project.png",
  },
  {
    title: "Marketing Landing",
    category: "Branding",
    image: "/project.png",
  },
  {
    title: "SaaS Experience",
    category: "Web App",
    image: "/project.png",
  },
  {
    title: "Content Platform",
    category: "Visual System",
    image: "/project.png",
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
