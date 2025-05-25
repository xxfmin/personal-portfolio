import { StaticImageData } from "next/image";

import jsLogo from "@/public/img/logos/js.png";
import reactLogo from "@/public/img/logos/react.png";
import nextjsLogo from "@/public/img/logos/nextjs.png";
import nodejsLogo from "@/public/img/logos/nodejs.png";
import mongodbLogo from "@/public/img/logos/mongodb.webp";
import gitLogo from "@/public/img/logos/git.png";
import pythonLogo from "@/public/img/logos/python.png";
import javaLogo from "@/public/img/logos/java.png";
import cLogo from "@/public/img/logos/c.png";

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
  iconSrc: StaticImageData;
  iconBg: string;
}

export const techStack: TechItem[] = [
  { name: "JavaScript", iconSrc: jsLogo, iconBg: "bg-yellow-500/60" },
  { name: "React", iconSrc: reactLogo, iconBg: "bg-cyan-800/75" },
  { name: "Next.js", iconSrc: nextjsLogo, iconBg: "bg-gray-300" },
  { name: "Node.js", iconSrc: nodejsLogo, iconBg: "bg-green-800/60" },
  { name: "MongoDB", iconSrc: mongodbLogo, iconBg: "bg-green-800" },
  { name: "Git", iconSrc: gitLogo, iconBg: "bg-orange-800/60" },
  { name: "Python", iconSrc: pythonLogo, iconBg: "bg-white" },
  { name: "Java", iconSrc: javaLogo, iconBg: "bg-white" },
  { name: "C", iconSrc: cLogo, iconBg: "bg-blue-800/60" },
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
