// NAV BAR ITEMS
export const navItems = [
  { name: "Home", link: "#home" },
  { name: "Work", link: "#work" },
  { name: "Experience", link: "#experience" },
  { name: "About", link: "#about" },
];

// TECH STACK ITEMS
export interface TechItem {
  name: string;
  iconPath: string;
}

export const techStack: TechItem[] = [
  { name: "JavaScript", iconPath: "/img/logos/js.svg" },
  { name: "Typescript", iconPath: "/img/logos/ts.svg" },
  { name: "React", iconPath: "/img/logos/react.svg" },
  { name: "Next.js", iconPath: "/img/logos/nextjs.svg" },
  { name: "Node.js", iconPath: "/img/logos/nodejs.svg" },
  { name: "Tailwind CSS", iconPath: "/img/logos/tailwindcss.svg" },
  { name: "MongoDB", iconPath: "/img/logos/mongodb.svg" },
  { name: "MySQL", iconPath: "/img/logos/mysql.svg" },
  { name: "PHP", iconPath: "/img/logos/php.svg" },
  { name: "Git", iconPath: "/img/logos/git.svg" },
  { name: "Python", iconPath: "/img/logos/python.svg" },
  { name: "Java", iconPath: "/img/logos/java.svg" },
  { name: "C", iconPath: "/img/logos/c.svg" },
  { name: "C++", iconPath: "/img/logos/cpp.svg" },
];

// PROJECT ITEMS
export interface Project {
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
  website: string;
  github: string;
}

export const projects: Project[] = [
  {
    title: "oddysey",
    description:
      "A full-stack, AI-enhanced travel itinerary builder that allows users to map out their trips, explore destinations, and track expenses.",
    imageSrc: "/img/projects/odyssey.png",
    tags: [
      "Next.js",
      "React",
      "Node.js",
      "Typescript",
      "Tailwind CSS",
      "MongoDB",
      "JWT Auth",
      "Google Maps API",
      "Gemini API",
    ],
    website: "https://odyssey-seven-chi.vercel.app/",
    github: "https://github.com/xxfmin/odyssey",
  },
  {
    title: "Delta Palette",
    description:
      "A colorblind-focused accessibility tool that generates clearer, more inclusive color palettes by leveraging the perceptual uniformity of Oklab and distance-maximization.",
    imageSrc: "/img/projects/delta-palette.png",
    tags: [
      "Next.js",
      "React",
      "Typescript",
      "Tailwind CSS",
      "Oklab",
      "color-blind simulation",
      "Culori",
    ],
    website: "https://delta-palette.vercel.app/",
    github: "https://github.com/xxfmin/delta-palette",
  },
  {
    title: "Personal Portfolio",
    description:
      "This portfolio serves as a showcase of my most impactful projects, professional experiences, and personal interests.",
    imageSrc: "/img/projects/personal-portfolio.png",
    tags: ["Next.js", "React", "Typescript", "Tailwind CSS", "Framer Motion"],
    website: "/",
    github: "https://github.com/xxfmin/personal-portfolio",
  },
];

// EXPERIENCE ITEMS
export interface Experience {
  imageSrc: string;
  company: string;
  date: string;
  role: string;
}

export const experiences: Experience[] = [
  {
    imageSrc: "/img/experience/intel.png",
    company: "Intel",
    date: "May 2024 - Aug 2024",
    role: "Offensive Security Research Intern",
  },
  {
    imageSrc: "/img/experience/intel.png",
    company: "Intel",
    date: "May 2023 - Jul 2023",
    role: "Hardware Security Research Intern",
  },
  {
    imageSrc: "/img/experience/fsu.png",
    company: "Florida State University",
    date: "Sep 2022 - Apr 2023",
    role: "Research Assistant",
  },
  {
    imageSrc: "/img/experience/accenture.png",
    company: "Accenture",
    date: "Aug 2022 - Dec 2022",
    role: "Solutions Architect Intern",
  },
];
