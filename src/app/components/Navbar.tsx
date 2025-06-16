import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-80 backdrop-blur-sm z-50 border-b border-gray-700">
      <div className="container mx-auto flex justify-between items-center p-4 text-white">
        <Link
          href="#hero"
          className="text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          Tenshi-X
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link
            href="#skills"
            className="hover:text-cyan-400 transition-colors"
          >
            Keahlian
          </Link>
          <Link
            href="#projects"
            className="hover:text-cyan-400 transition-colors"
          >
            Proyek
          </Link>
          <Link
            href="#contact"
            className="hover:text-cyan-400 transition-colors"
          >
            Kontak
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
