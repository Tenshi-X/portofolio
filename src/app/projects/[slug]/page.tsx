import { projectsData } from "@/data/projects";
import { notFound } from "next/navigation";
import ProjectDetailClient from "./ProjectDetailClient";
import type { Metadata } from "next";

interface ProjectPageProps {
  params: {
    slug: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = projectsData.find((p) => p.slug === params.slug);
  return {
    title: project?.title || "Project Detail",
    description: project?.description || "Detail proyek",
  };
}

const ProjectDetailPage = async ({ params }: ProjectPageProps) => {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;
};

export default ProjectDetailPage;
