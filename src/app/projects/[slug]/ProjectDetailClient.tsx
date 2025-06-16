"use client";

import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import type { projectsData } from "@/data/projects";

// Definisikan tipe untuk prop 'project'
type Project = (typeof projectsData)[0];

const ProjectDetailClient = ({ project }: { project: Project }) => {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <Link
          href="/#projects"
          className="inline-flex items-center mb-8 text-cyan-400 hover:text-cyan-300"
        >
          <FaArrowLeft className="mr-2" />
          Kembali ke Proyek
        </Link>

        <article>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {project.title}
          </h1>

          <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden my-8 shadow-lg shadow-cyan-500/20">
            <img
              src={project.image}
              alt={`Gambar ${project.title}`}
              onError={(e) => {
                e.currentTarget.src =
                  "https://placehold.co/1200x800/0f172a/9ca3af?text=Image+Not+Found";
              }}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-semibold text-cyan-400 mb-4">
                Deskripsi Proyek
              </h2>
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                {project.description}
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-cyan-400 mb-4">
                Teknologi
              </h2>
              <ul className="space-y-2">
                {project.techStack.map((tech) => (
                  <li
                    key={tech}
                    className="bg-gray-800 px-3 py-1 rounded-md text-gray-200"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
};

export default ProjectDetailClient;
