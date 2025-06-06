"use client";

import React from "react";
import Image from "next/image";

import linkedin from "@/public/img/about/linkedin.png";
import github from "@/public/img/about/github.png";
import spotify from "@/public/img/about/spotify.png";
import email from "@/public/img/about/email.webp";

import { Highlight } from "./ui/Highlight";
import { techStack, TechItem } from "@/data";

const About = () => {
  return (
    <section id="about" className="bg-black">
      <div className="min-h-screen w-full py-16 px-8 sm:px-38">
        {/* title */}
        <p className="text-5xl font-semibold pb-12 ml-8">
          <Highlight>about me</Highlight>
        </p>

        <div className="flex flex-col sm:flex-row items-center sm:items-stretch justify-center gap-8 px-8">
          {/* headshot */}
          <div className="w-full sm:w-[30%] flex justify-center">
            <Image
              src="/img/about/headshot.jpeg"
              alt="Felipe Min headshot"
              width={400}
              height={400}
              quality={90}
              style={{ width: "auto", height: "100%" }}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>

          {/* info content */}
          <div className="w-full sm:w-[70%]">
            <div
              className="
                relative
                bg-white/10
                backdrop-blur-lg
                border
                border-white/20
                rounded-3xl
                p-6
                shadow-xl
                text-white
              "
            >
              {/* socials */}
              <div className="flex space-x-3 mb-4 sm:absolute sm:top-4 sm:right-4 sm:mb-0">
                <a
                  href="https://www.linkedin.com/in/felipe-min/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={linkedin} alt="LinkedIn" width={32} height={32} />
                </a>
                <a
                  href="https://github.com/xxfmin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={github} alt="GitHub" width={32} height={32} />
                </a>
                <a
                  href="mailto:felipemin03@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={email} alt="Email" width={32} height={32} />
                </a>
                <a
                  href="https://open.spotify.com/user/felipemin?si=16224d0bc3f14c2e"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={spotify} alt="Spotify" width={32} height={32} />
                </a>
              </div>

              {/* text content */}
              <div className="space-y-4">
                <p>Hey there! I&apos;m Felipe Min 👋</p>
                <p>
                  I was born in São Paulo, Brazil to South Korean parents, and
                  moved to America at the age of 11. My favorite things to do
                  include traveling around the world, trying new food spots with
                  my girlfriend, and playing soccer with friends.
                </p>
                <p>
                  Currently, i’m a senior at the University of Central Florida,
                  set to graduate in Spring 2026 with a Bachelor’s degree in
                  Computer Science. i enjoy building things that make a
                  meaningful impact on people’s lives.
                </p>
              </div>
            </div>

            {/* tech stack grid */}
            <div className="mt-8 flex flex-wrap space-x-3 space-y-1 px-2">
              {techStack.map((tech: TechItem) => (
                <div
                  key={tech.name}
                  className="flex items-center space-x-2 px-4 py-2 rounded-full"
                >
                  <div
                    className="w-5 h-5 bg-white flex-shrink-0"
                    style={{
                      mask: `url(${tech.iconPath}) no-repeat center/contain`,
                      WebkitMask: `url(${tech.iconPath}) no-repeat center/contain`,
                    }}
                  />
                  <span className="text-white text-sm">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
