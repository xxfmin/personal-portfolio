import Link from "next/link";
import { BackgroundBeams } from "./ui/BackgroundBeams";

const Footer = () => {
  return (
    <div
      className="flex flex-col justify-center antialiased relative border border-white/10 rounded-xl mb-5 sm:mx-30 mt-10"
      id="contact"
    >
      <div className="px-10 py-20 border-white/10 flex flex-col md:flex-row justify-between gap-10 md:gap-0">
        <div className="space-y-2.5">
          <h3 className="text-xl font-bold relative z-10">Felipe Min</h3>
          <p className="text-stone-200/70 relative z-10">
            &copy; 2025 | All rights reserved.
          </p>
        </div>

        <div className="flex justify-between gap-0 sm:gap-16">
          <ul className="space-y-2.5 relative z-10 text-sm sm:text-base">
            <li className="text-base sm:text-lg font-semibold">Navigate</li>
            <li className="text-white/50 hover:text-white">
              <Link href="/">Home</Link>
            </li>
            <li className="text-white/50 hover:text-white">
              <Link href="#work">Work</Link>
            </li>
            <li className="text-white/50 hover:text-white">
              <Link href="#experience">Experience</Link>
            </li>
            <li className="text-white/50 hover:text-white">
              <Link href="#about">About</Link>
            </li>
          </ul>

          <ul className="space-y-2.5 relative z-10 text-sm sm:text-base">
            <li className="text-lg font-semibold">Socials</li>
            <li className="text-white/50 hover:text-white">
              <Link
                href="https://www.linkedin.com/in/felipe-min/"
                target="_blank"
              >
                LinkedIn
              </Link>
            </li>
            <li className="text-white/50 hover:text-white">
              <Link href="https://github.com/xxfmin" target="_blank">
                Github
              </Link>
            </li>
            <li className="text-white/50 hover:text-white">
              <Link href="mailto:felipemin03@gmail.com" target="_blank">
                Email
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <BackgroundBeams className="hidden sm:flex" />
    </div>
  );
};

export default Footer;
