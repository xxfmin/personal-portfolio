// components/About.tsx
"use client";

import React from "react";
import Image from "next/image";

import linkedin from "@/public/img/about/linkedin.png";
import github from "@/public/img/about/github.png";
import spotify from "@/public/img/about/spotify.png";
import instagram from "@/public/img/about/instagram.png";

import { Highlight } from "./ui/Highlight";
import { BackgroundGradient } from "./ui/BackgroundGradient";
import { TechStackCards } from "./ui/TechStackCards";
import { techStack } from "@/data";

const About = () => {
  return (
    <section id="about">
      <div className="h-screen w-full py-16 px-8 sm:px-38">
        <p className="text-5xl text-black font-semibold pb-12">
          <Highlight>about me</Highlight>
        </p>
        <div className="flex flex-row justify-center items-center px-8">
          {/* Headshot */}
          <div className="h-full w-[35%]">
            <Image
              src="/img/about/headshot.jpg"
              alt="Felipe Min Headshot"
              width={400}
              height={400}
              quality={90}
              style={{ width: "80%", height: "auto" }}
              className="rounded-lg"
            />
          </div>

          {/* Info Side */}
          <div className="h-full w-[65%]">
            <BackgroundGradient
              containerClassName="h-full w-full sm:text-lg text-s"
              className="px-6 text-white bg-black rounded-3xl"
              animate={true}
            >
              <div className="relative p-6 space-y-3 h-full">
                {/* Social Icons in top-right */}
                <div className="absolute top-4 right-4 flex space-x-2">
                  <a
                    href="https://www.linkedin.com/in/felipe-min/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={linkedin}
                      alt="LinkedIn"
                      width={32}
                      height={32}
                    />
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

                {/* Your text content */}
                <p>hey there! i'm felipe min👋</p>
                <p>
                  i was born in são paulo, brazil to south korean parents, and
                  moved to america at the age of 11. my favorite things to do
                  include traveling around the world, trying new food spots with
                  my girlfriend, and playing soccer with friends
                </p>
                <p>
                  currently, i’m a senior at the university of central florida,
                  set to graduate in spring 2026 with a bachelor’s degree in
                  computer science. i enjoy building things that make a
                  meaningful impact on people’s lives
                </p>
              </div>
            </BackgroundGradient>

            <TechStackCards
              items={techStack}
              direction="left"
              speed="fast"
              pauseOnHover
              className="px-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
