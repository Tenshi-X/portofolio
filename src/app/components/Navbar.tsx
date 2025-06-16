import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-80 backdrop-blur-sm z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <a href="#hero" className="text-xl font-bold">
          MyPortfolio
        </a>
        <div className="space-x-4">
          <a href="#about" className="hover:text-blue-400">
            About
          </a>
          <a href="#projects" className="hover:text-blue-400">
            Projects
          </a>
          <a href="#contact" className="hover:text-blue-400">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
