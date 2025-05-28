import React from "react";
import { Highlight } from "./ui/Highlight";
import { projects } from "@/data";
import { ProjectCard } from "./ui/ProjectCard";

const Projects = () => {
  return (
    <section
      id="work"
      className="
        min-h-screen
        w-full
        py-8
        px-8
        sm:px-38
        text-white
        bg-black
      "
    >
      {/* title */}
      <p className="text-5xl font-semibold pb-12 ml-8">
        <Highlight>projects</Highlight>
      </p>

      {/* projects grid */}
      <div className="w-full flex justify-center">
        <div className="w-full px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
