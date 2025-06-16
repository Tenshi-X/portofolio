import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left pt-20"
    >
      <div className="md:w-1/2 md:pr-10">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Hello!! My name is <span className="text-cyan-400">Tenshi-X</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Seorang Full-Stack Developer dengan hasrat untuk merancang dan
          membangun aplikasi Web & Mobile yang fungsional dan indah. Selamat
          datang di dunia digital saya!
        </p>
        <a
          href="#projects"
          className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full transition duration-300"
        >
          Lihat Proyek Saya
        </a>
      </div>
      <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
        <div className="w-64 h-64 md:w-80 md:h-80 relative rounded-full overflow-hidden border-4 border-cyan-400 shadow-lg shadow-cyan-500/50">
          <Image
            src="/profile.jpg" // Pastikan ada file profile.jpg di folder /public
            alt="Foto Profil Tenshi-X"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
