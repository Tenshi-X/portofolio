import React from "react";
import { FaReact, FaHtml5, FaPhp, FaPython, FaJava } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiFlutter,
  SiKotlin,
  SiExpress,
  SiMysql,
  SiCplusplus,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="h-12 w-12 text-sky-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="h-12 w-12 text-white" /> },
  {
    name: "Express.js",
    icon: <SiExpress className="h-12 w-12 text-gray-300" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="h-12 w-12 text-teal-400" />,
  },
  { name: "Flutter", icon: <SiFlutter className="h-12 w-12 text-blue-500" /> },
  { name: "Kotlin", icon: <SiKotlin className="h-12 w-12 text-purple-600" /> },
  { name: "Python", icon: <FaPython className="h-12 w-12 text-yellow-400" /> },
  { name: "PHP", icon: <FaPhp className="h-12 w-12 text-indigo-400" /> },
  { name: "Java", icon: <FaJava className="h-12 w-12 text-red-500" /> },
  { name: "C++", icon: <SiCplusplus className="h-12 w-12 text-blue-600" /> },
  { name: "HTML5", icon: <FaHtml5 className="h-12 w-12 text-orange-500" /> },
  { name: "MySQL", icon: <SiMysql className="h-12 w-12 text-blue-500" /> },
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
