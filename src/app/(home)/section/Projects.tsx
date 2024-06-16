import { IProject } from "@/types";
import { getBlobs } from "@/lib/getBlobs";
import ProjectCard from "@/components/ProjectCard";

export default async function Projects() {
    const projects = await getBlobs<IProject[]>("projects");

    return (
        <section className="flex flex-col gap-5 py-12 md:gap-4">
            <div className="flex flex-col">
                <p className="text-3xl font-bold">Projects</p>
                <p className="font-medium text-foreground/85">
                    Here&apos;s a glimpse into my project experience.
                </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {projects
                    .sort((a, b) => {
                        const dateA = new Date(a.metadata.date);
                        const dateB = new Date(b.metadata.date);

                        return dateB.getTime() - dateA.getTime();
                    })
                    .slice(0, 3)
                    .map((item, i) => (
                        <ProjectCard key={i} project={item} />
                    ))}
            </div>
        </section>
    );
}
