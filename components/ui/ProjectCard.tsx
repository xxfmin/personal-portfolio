"use client";

import Image from "next/image";
import { FaGithub } from "react-icons/fa";

export interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
  website: string;
  github: string;
}

export function ProjectCard({
  title,
  description,
  imageSrc,
  tags,
  website,
  github,
}: ProjectCardProps) {
  return (
    <article
      className="
        flex flex-col
        rounded-lg
        bg-white/10 backdrop-blur-sm
        ring-1 ring-gray-700/30
        shadow-lg
        overflow-visible
      "
    >
      {/* clickable screenshot (no follow-pointer) */}
      <a
        href={website}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative w-full aspect-[2048/1005]"
      >
        <Image
          src={imageSrc}
          alt={`${title} screenshot`}
          fill
          className="object-cover"
        />
      </a>

      {/* content */}
      <div className="p-6 flex flex-col flex-1">
        {/* title */}
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>

        {/* description */}
        <p className="text-gray-400 mb-4 flex-1">{description}</p>

        {/* tech tags */}
        <ul className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <li
              key={tag}
              className="text-xs font-medium bg-transparent border border-gray-500 text-gray-400 rounded-lg px-3 py-1"
            >
              {tag}
            </li>
          ))}
        </ul>

        {/* GitHub link */}
        <div className="mt-auto pt-4 border-t border-gray-700/50">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-200 hover:text-white"
          >
            <FaGithub />
            Source
          </a>
        </div>
      </div>
    </article>
  );
}
