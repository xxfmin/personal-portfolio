import { StaticImageData } from "next/image";

import jsLogo from "@/public/img/logos/js.svg";
import tsLogo from "@/public/img/logos/ts.svg";
import reactLogo from "@/public/img/logos/react.svg";
import nextjsLogo from "@/public/img/logos/nextjs.svg";
import nodejsLogo from "@/public/img/logos/nodejs.svg";
import tailwindLogo from "@/public/img/logos/tailwindcss.svg";
import mongodbLogo from "@/public/img/logos/mongodb.svg";
import mysqlLogo from "@/public/img/logos/mysql.svg";
import phpLogo from "@/public/img/logos/php.svg";
import gitLogo from "@/public/img/logos/git.svg";
import pythonLogo from "@/public/img/logos/python.svg";
import javaLogo from "@/public/img/logos/java.svg";
import cLogo from "@/public/img/logos/c.svg";
import cppLogo from "@/public/img/logos/cpp.svg";

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
      "AI-enhanced travel-itinerary builder that lets you map out, explore, and track your expenses",
    imageSrc: "/img/projects/odyssey.png",
    tags: [
      "Next.js",
      "React",
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
    title: "Personal Portfolio",
    description:
      "This portfolio serves as a showcase of my most impactful projects, professional experiences, and personal interests",
    imageSrc: "/img/projects/personal-portfolio.png",
    tags: ["Next.js", "React", "Typescript", "Tailwind CSS", "Framer Motion"],
    website: "/",
    github: "https://github.com/xxfmin/personal-portfolio",
  },
  {
    title: "Color Your Commute",
    description:
      "A colorblind-focused accessibility tool that generates clearer, more inclusive color palettes for transit maps by leveraging the perceptual uniformity of Oklab and distance-maximization",
    imageSrc: "/img/projects/coloryourcommute.png",
    tags: [
      "HTML",
      "CSS",
      "Javascript",
      "Python",
      "Oklab",
      "numpy",
      "colorspacious",
    ],
    website: "https://fsu-urop-2023.github.io/Coloring-Transit-Maps/",
    github: "https://github.com/xxfmin/Coloring-Transit-Maps",
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
