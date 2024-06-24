import { Metadata } from "next";
import { IProject } from "@/types";
import { DefaultMetadata } from "@/lib/constants";
import { getBlobs } from "@/lib/getBlobs";
import ProjectsSection from "@/components/ProjectsSection";

export const revalidate = 60;

export default async function ProjectsPage() {
    const projects = await getBlobs<IProject[]>({ prefix: "projects" });

    return <ProjectsSection projects={projects} />;
}

export const metadata: Metadata = {
    title: "Projects",
    openGraph: {
        ...DefaultMetadata.openGraph,
        title: "Projects",
        url: `${DefaultMetadata.openGraph.url}/projects`
    },
    twitter: {
        ...DefaultMetadata.twitter,
        title: "Projects"
    }
};
