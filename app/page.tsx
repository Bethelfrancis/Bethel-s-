import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { PageShell } from "@/components/PageShell";
import { PageTransition } from "@/components/PageTransition";
import Projects from "@/components/Projects";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import Sponsor from "@/components/Sponsor";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <PageShell>
      <Navbar />
      <PageTransition>
        <Hero />
        <Sponsor />
        <AboutMe />
        <Services />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </PageTransition>
    </PageShell>
  );
}
