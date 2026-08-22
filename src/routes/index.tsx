import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Education } from "@/components/portfolio/Education";
import { Skills } from "@/components/portfolio/Skills";
import { CodingProfiles } from "@/components/portfolio/CodingProfiles";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Certifications } from "@/components/portfolio/Certifications";
import { Learning } from "@/components/portfolio/Learning";
import { Contact, Footer } from "@/components/portfolio/Contact";

import { BackgroundParticles } from "@/components/portfolio/BackgroundParticles";

const title = "Kanala Geetha Pranathi — AI Engineer & Full Stack Developer";
const description =
  "Portfolio of Kanala Geetha Pranathi — B.Tech CSE (AI & Data Science) student building LLM-powered applications, full-stack products and REST APIs. CGPA 9.27.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen">
      <BackgroundParticles />
      <Nav />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <CodingProfiles />
        <Projects />
        <Experience />
        <Certifications />
        <Learning />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
