"use client";
import React from "react";
import Image from "next/image";
import { Highlight } from "./ui/Highlight";
import { CardSpotlight } from "./ui/ExperienceSpotlight";
import { experiences } from "@/data";

const Experience = () => (
  <section
    id="experience"
    className="min-h-screen w-full flex flex-col py-8 px-8 sm:px-38 bg-black"
  >
    <p className="text-5xl text-black font-semibold pb-12 text-center">
      <Highlight>experience</Highlight>
    </p>

    <div className="flex flex-col items-center gap-6">
      {experiences.map((exp) => (
        <CardSpotlight
          key={exp.company + exp.date}
          className="
            w-[70%] mx-auto
            p-6
            bg-neutral-900/50
            backdrop-blur-sm
            border-none
            shadow-lg
            hover:shadow-2xl
            transform hover:scale-105
            transition-all duration-300
            border-l-4 border-indigo-500 pl-6
          "
          radius={300}
          color="rgba(255,255,255,0.05)"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 relative flex-shrink-0 overflow-hidden">
                <Image
                  src={exp.imageSrc}
                  alt={`${exp.company} logo`}
                  fill
                  className={
                    exp.company === "Florida State University"
                      ? "object-cover"
                      : exp.company === "Accenture"
                      ? "object-contain scale-75"
                      : "object-contain"
                  }
                  style={{ objectPosition: "center" }}
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg sm:text-2xl font-bold text-white">
                  {exp.company}
                </h3>
                <p className="text-sm font-medium text-gray-400">{exp.role}</p>
              </div>
            </div>

            <div>
              <p className="text-sm uppercase text-gray-400 tracking-wide">
                {exp.date}
              </p>
            </div>
          </div>
        </CardSpotlight>
      ))}
    </div>
  </section>
);

export default Experience;
