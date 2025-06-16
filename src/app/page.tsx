// import About from "@/app/components/About";
// import Contact from "@/app/components/Contact";
// import Footer from "@/app/components/Footer";
import Hero from "@/app/components/Hero";
import Navbar from "@/app/components/Navbar";
// import Projects from "@/app/components/Projects";

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
