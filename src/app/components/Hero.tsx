// src/components/Hero.tsx
import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center text-center"
    >
      <div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Halo, saya [Nama Anda]
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 mb-8">
          Saya seorang Web Developer yang bersemangat membuat aplikasi web yang
          cepat dan menarik.
        </p>
        <a
          href="#contact"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300"
        >
          Hubungi Saya
        </a>
      </div>
    </section>
  );
};

export default Hero;
