import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-900 text-white">
      <Navbar />
      <div className="container mx-auto px-12 py-4">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
