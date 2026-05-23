import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Certificates from "@/components/Certificates";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full">
        <Hero />
        <About />
        <Experience />
        <Certificates />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <footer className="bg-black text-white py-6 text-center neo-border-t border-t-4 border-black">
        <p className="font-bold uppercase">&copy; {new Date().getFullYear()} Ahmad Sinatria Pamungkas. Built with Next.js & Neo-Brutalism.</p>
      </footer>
    </>
  );
}

