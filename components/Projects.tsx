import React from "react";
import { Highlight } from "./ui/Highlight";

import { projects } from "@/data";
import { ProjectCard } from "./ui/ProjectCard";

const Projects = () => {
  return (
    <section id="work" className="h-screen w-full py-8 sm:px-38 text-white">
      {/* Title */}
      <p className="text-5xl text-black font-semibold pb-12">
        <Highlight>projects</Highlight>
      </p>

      {/* Projects */}
      <div className="w-full flex flex-row justify-center">
        {/* odyssey */}
        <div className="w-full px-8">
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((proj) => (
              <ProjectCard key={proj.title} {...proj} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
