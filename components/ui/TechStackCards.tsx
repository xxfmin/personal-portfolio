"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { TechItem } from "@/data";

interface TechStackCardsProps {
  items: TechItem[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}

export const TechStackCards: React.FC<TechStackCardsProps> = ({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!containerRef.current || !scrollerRef.current) return;

    // Duplicate for infinite loop
    Array.from(scrollerRef.current.children).forEach((child) => {
      scrollerRef.current!.appendChild(child.cloneNode(true));
    });

    // direction variable
    containerRef.current.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    );

    // duration variable
    containerRef.current.style.setProperty(
      "--animation-duration",
      speed === "fast" ? "20s" : speed === "normal" ? "35s" : "80s"
    );

    setStarted(true);
  }, [direction, speed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative overflow-hidden",
        "[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full flex-nowrap gap-4 pt-4",
          started && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <li
            key={item.name}
            className="flex items-center gap-4 shrink-0 rounded-xl bg-gray-900/85 px-4 py-2"
          >
            {/* colored square behind logo */}
            <div className={cn(item.iconBg, "p-2 rounded-md flex-shrink-0")}>
              <Image
                src={item.iconSrc}
                alt={item.name}
                width={28}
                height={28}
              />
            </div>

            {/* tech name */}
            <span className="text-white text-base font-medium">
              {item.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
