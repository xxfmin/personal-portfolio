import About from "@/components/About";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main>
      <FloatingNav navItems={navItems} />
      <Hero />
      <About />
      <Projects />
      <Experience />
    </main>
  );
}
