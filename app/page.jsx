import Image from "next/image";
import Header from "../sections/Header";
import Hero from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import Tape from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <ProjectsSection />
      <Tape />
      <TestimonialsSection />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
