"use client";

import React from "react";
import Image from "next/image";

import linkedin from "@/public/img/about/linkedin.png";
import github from "@/public/img/about/github.png";
import spotify from "@/public/img/about/spotify.png";
import instagram from "@/public/img/about/instagram.png";

import { Highlight } from "./ui/Highlight";
import { TechStackCards } from "./ui/TechStackCards";
import { techStack } from "@/data";

const About = () => {
  return (
    <section id="about">
      <div className="h-screen w-full py-16 px-8 sm:px-38">
        {/* Section title */}
        <p className="text-5xl font-semibold pb-12">
          <Highlight>about me</Highlight>
        </p>

        <div className="flex flex-row items-center justify-center gap-8 px-8">
          {/* headshot */}
          <div className="w-[35%] flex justify-center">
            <Image
              src="/img/about/headshot.jpg"
              alt="Felipe Min headshot"
              width={400}
              height={400}
              quality={90}
              style={{ width: "80%", height: "auto" }}
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* glass-morphic info card */}
          <div className="w-[65%]">
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
              {/* social icons */}
              <div className="absolute top-4 right-4 flex space-x-3">
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
                  href="https://www.instagram.com/felipe.min/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={instagram}
                    alt="Instagram"
                    width={32}
                    height={32}
                  />
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
                <p>hey there! i'm felipe min 👋</p>
                <p>
                  i was born in são paulo, brazil to south korean parents, and
                  moved to america at the age of 11. my favorite things to do
                  include traveling around the world, trying new food spots with
                  my girlfriend, and playing soccer with friends.
                </p>
                <p>
                  currently, i’m a senior at the university of central florida,
                  set to graduate in spring 2026 with a bachelor’s degree in
                  computer science. i enjoy building things that make a
                  meaningful impact on people’s lives.
                </p>
              </div>
            </div>

            {/* tech stack carousel */}
            <div className="mt-8 px-4">
              <TechStackCards
                items={techStack}
                direction="left"
                speed="fast"
                pauseOnHover
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
