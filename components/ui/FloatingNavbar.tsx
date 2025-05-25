"use client";

import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: { name: string; link: string; icon?: React.ReactNode }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    const prev = scrollYProgress.getPrevious() ?? 0;
    if (current <= 0) {
      setVisible(true);
    } else {
      setVisible(current < prev);
    }
  });

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="fixed top-10 inset-x-0 z-50 flex justify-center"
      >
        <nav
          className={cn(
            "flex items-center space-x-6",
            "border border-dark-300 rounded-md px-6 py-2",
            "bg-[linear-gradient(110deg,#1A1A1A,45%,#262626,55%,#1A1A1A)] bg-[length:200%_100%]",
            "text-white",
            className
          )}
        >
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              className="px-3 py-1 rounded-md transition-colors hover:text-slate-400"
            >
              {item.name}
            </a>
          ))}
        </nav>
      </motion.div>
    </AnimatePresence>
  );
};
