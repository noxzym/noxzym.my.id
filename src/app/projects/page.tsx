import { IProject } from "@/types";
import { getBlobs } from "@/lib/getBlobs";
import { Input } from "@/components/ui/input";
import MDXRemote from "@/components/MDXRemote";
import ProjectCard from "@/components/ProjectCard";
import ResponsiveDialog from "@/components/ResponsiveDialog";

export default async function ProjectsPage() {
    const projects = await getBlobs<IProject[]>("projects");

    return (
        <section className="flex flex-col gap-5 py-12 md:gap-4">
            <div className="flex flex-col">
                <p className="text-4xl font-bold md:text-6xl">Projects</p>
                <p className="font-medium text-foreground/85">
                    Here&apos;s a glimpse into my project experience.
                </p>
            </div>
            <Input placeholder={`Search Projects...`} />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {projects
                    .sort((a, b) => {
                        const dateA = new Date(a.metadata.date!);
                        const dateB = new Date(b.metadata.date!);

                        return dateB.getTime() - dateA.getTime();
                    })
                    .map((item, i) => (
                        <ResponsiveDialog<IProject>
                            key={i}
                            obj={item}
                            trigger={<ProjectCard project={item} />}
                        >
                            <MDXRemote project={item} />
                        </ResponsiveDialog>
                    ))}
            </div>
        </section>
    );
}
