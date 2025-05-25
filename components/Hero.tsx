"use client";

import { cn } from "@/lib/utils";
import React from "react";
import ShinyButton from "@/components/ui/ShinyButton";
import Link from "next/link";
import { ChevronRight, Download } from "lucide-react";

const Hero = () => {
  return (
    <section id="home">
      <div className="relative flex h-screen w-full items-center justify-center bg-black">
        {/* Grid */}
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:35px_35px]",
            "[background-image:linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)]"
          )}
        />

        {/* Radial fade */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        {/* Content */}
        <div className="flex flex-col justify-center items-center relative z-10 text-center">
          <p className="text-white text-sm font-semibold">
            BASED IN ORLANDO, FLORIDA
          </p>
          <p className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text pt-8 pb-4 text-7xl font-bold text-white sm:text-8xl">
            Hi, I’m <span className="text-blue-500">Felipe</span>
          </p>
          <p className="text-xl font-bold text-white/85 sm:text-2xl">
            &#91; full-stack developer &#93;
          </p>
          <div className="flex flex-row justify-center items-center pt-14 gap-10">
            <ShinyButton icon={<ChevronRight />}>
              <Link href="#work">See My Work</Link>
            </ShinyButton>
            <a href="" className="flex items-center gap-2.5 group">
              <Download className="text-blue-500 w-6 h-6" />
              <span className="text-white/90 group-hover:text-white/70 transition-colors duration-200 font-semibold">
                Download CV
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
