"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { projectsData } from "@/data/projects";

const ProjectCard = ({ project }: { project: (typeof projectsData)[0] }) => {
  return (
    <div className="w-80 flex-shrink-0">
      <Link href={`/projects/${project.slug}`}>
        <div className="block group rounded-lg overflow-hidden bg-gray-800 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 h-full">
          <div className="relative w-full h-48">
            <Image
              src={project.image}
              alt={`Gambar Proyek ${project.title}`}
              layout="fill"
              objectFit="cover"
              className="group-hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                e.currentTarget.src =
                  "https://placehold.co/600x400/0f172a/9ca3af?text=Image";
              }}
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
    </div>
  );
};

const Projects = () => {
  const webProjects = projectsData.filter((p) => p.category === "web");
  const mobileProjects = projectsData.filter((p) => p.category === "mobile");

  return (
    <>
      <section id="projects" className="py-20">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Project Showcase
        </h2>
        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-cyan-400 mb-8">Website</h3>
          {/* Tambahkan class "project-slider" untuk target styling */}
          <div className="project-slider flex overflow-x-auto space-x-8 pb-4">
            {webProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-3xl font-semibold text-cyan-400 mb-8">
            Mobile App
          </h3>
          {/* Tambahkan class "project-slider" untuk target styling */}
          <div className="project-slider flex overflow-x-auto space-x-8 pb-4">
            {mobileProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* BLOK STYLE KUSTOM UNTUK SCROLLBAR */}
      <style jsx global>{`
        .project-slider {
          /* Untuk Firefox */
          scrollbar-width: thin;
          scrollbar-color: #06b6d4 #1f2937;
        }

        /* Untuk Chrome, Safari, and Edge */
        .project-slider::-webkit-scrollbar {
          height: 8px;
        }

        .project-slider::-webkit-scrollbar-track {
          background: #1f2937; /* Warna track (latar belakang scrollbar) */
          border-radius: 10px;
        }

        .project-slider::-webkit-scrollbar-thumb {
          background-color: #06b6d4; /* Warna thumb (gagang scrollbar) */
          border-radius: 10px;
          border: 2px solid #1f2937; /* Memberi efek padding di sekitar thumb */
        }

        .project-slider::-webkit-scrollbar-thumb:hover {
          background-color: #22d3ee; /* Warna thumb saat hover */
        }
      `}</style>
    </>
  );
};

export default Projects;
