import { projectsData } from "@/data/projects";
import { notFound } from "next/navigation";
import ProjectDetailClient from "./ProjectDetailClient";

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

const ProjectDetailPage = async ({
  params,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;
};

export default ProjectDetailPage;
