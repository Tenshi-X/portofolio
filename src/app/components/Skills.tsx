import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiFlutter,
  SiDart,
  SiFirebase,
  SiKotlin,
} from "react-icons/si";

// Daftar keahlian
const skills = [
  { name: "React", icon: <FaReact className="h-12 w-12 text-blue-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="h-12 w-12 text-white" /> },
  {
    name: "TypeScript",
    icon: <SiTypescript className="h-12 w-12 text-blue-500" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="h-12 w-12 text-teal-400" />,
  },
  { name: "Node.js", icon: <FaNodeJs className="h-12 w-12 text-green-500" /> },
  { name: "Flutter", icon: <SiFlutter className="h-12 w-12 text-blue-400" /> },
  { name: "Kotlin", icon: <SiKotlin className="h-12 w-12 text-purple-500" /> },
  {
    name: "Firebase",
    icon: <SiFirebase className="h-12 w-12 text-yellow-500" />,
  },
  { name: "Git", icon: <FaGitAlt className="h-12 w-12 text-red-500" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        Keahlian Teknologi
      </h2>
      <div className="flex flex-wrap justify-center gap-8 md:gap-12">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center p-4 bg-gray-800 rounded-lg w-32 h-32 justify-center transition-transform hover:scale-110 hover:bg-gray-700"
          >
            {skill.icon}
            <p className="mt-3 text-white font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
