import { IArticle, IProject } from "@/types";
import { getBlobs } from "@/lib/getBlobs";
import ArticlesSection from "@/components/ArticlesSection";
import ProjectsSection from "@/components/ProjectsSection";
import Jumbotron from "./section/Jumbotron";

export const revalidate = 60;

export default async function HomePage() {
    const articles = await getBlobs<IArticle[]>({ prefix: "articles", max: 3 });
    const projects = await getBlobs<IProject[]>({ prefix: "projects", max: 3 });

    return (
        <>
            <Jumbotron />
            <ArticlesSection articles={articles} />
            <ProjectsSection projects={projects} />
        </>
    );
}
