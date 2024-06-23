import { IProject } from "@/types";
import { getBlobs } from "@/lib/getBlobs";
import ProjectsSection from "@/components/ProjectsSection";

export const revalidate = 60;

export default async function ProjectsPage() {
    const projects = await getBlobs<IProject[]>({ prefix: "projects" });

    return <ProjectsSection projects={projects} />;
}
