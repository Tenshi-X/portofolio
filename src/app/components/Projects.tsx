import React from "react";
import Link from "next/link";
import Image from "next/image";
import { projectsData } from "@/data/projects"; // Import data

const ProjectCard = ({ project }: { project: (typeof projectsData)[0] }) => {
  return (
    <Link href={`/projects/${project.slug}`}>
      <div className="block group rounded-lg overflow-hidden bg-gray-800 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300">
        <div className="relative w-full h-56">
          <Image
            src={project.image}
            alt={`Gambar Proyek ${project.title}`}
            layout="fill"
            objectFit="cover"
            className="group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
          <span className="text-sm bg-cyan-800 text-cyan-200 px-2 py-1 rounded-full capitalize">
            {project.category}
          </span>
        </div>
      </div>
    </Link>
  );
};

const Projects = () => {
  const webProjects = projectsData.filter((p) => p.category === "web");
  const mobileProjects = projectsData.filter((p) => p.category === "mobile");

  return (
    <section id="projects" className="py-20">
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        Showcase Proyek
      </h2>

      {/* Web Projects */}
      <div className="mb-16">
        <h3 className="text-3xl font-semibold text-cyan-400 mb-8">
          Proyek Web
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {webProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>

      {/* Mobile Projects */}
      <div>
        <h3 className="text-3xl font-semibold text-cyan-400 mb-8">
          Proyek Mobile
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mobileProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
