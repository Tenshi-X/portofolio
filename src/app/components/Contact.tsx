import React from "react";
import { FaDiscord, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 text-center">
      <h2 className="text-4xl font-bold text-white mb-8">Hubungi Saya</h2>
      <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
        Tertarik untuk berkolaborasi atau punya pertanyaan? Jangan ragu untuk
        menghubungi saya melalui platform di bawah ini.
      </p>
      <div className="flex justify-center space-x-8">
        <a
          href="https://github.com/Tenshi-X" // Ganti dengan URL GitHub Anda
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-cyan-400 transition-colors"
        >
          <FaGithub className="h-12 w-12" />
          <span className="mt-2 block">Tenshi-X</span>
        </a>
        <a
          href="#" // Ganti dengan link invite Discord jika ada, atau biarkan #
          className="text-gray-300 hover:text-cyan-400 transition-colors"
          title="Discord: tenshi_x" // Ganti dengan username Discord Anda
        >
          <FaDiscord className="h-12 w-12" />
          <span className="mt-2 block">tenshi_x</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
