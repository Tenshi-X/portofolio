import React from "react";

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-700 py-6 text-center">
      <p className="text-gray-400">
        © {new Date().getFullYear()} Tenshi-X. Dibuat dengan{" "}
        <span className="text-cyan-400">Next.js</span> &{" "}
        <span className="text-cyan-400">Tailwind CSS</span>.
      </p>
    </footer>
  );
};

export default Footer;
