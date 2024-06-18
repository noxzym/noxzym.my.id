import Link from "next/link";
import { IProject } from "@/types";
import { FaArrowRight } from "react-icons/fa";
import { getBlobs } from "@/lib/getBlobs";
import { Button } from "@/components/ui/button";
import MDXRemote from "@/components/MDXRemote";
import ProjectCard from "@/components/ProjectCard";
import ResponsiveDialog from "@/components/ResponsiveDialog";

export default async function Projects() {
    const projects = await getBlobs<IProject[]>("projects");

    return (
        <section className="flex flex-col gap-5 py-12 md:gap-4">
            <div className="flex flex-col">
                <div className="flex items-center justify-between">
                    <p className="text-3xl font-bold">Projects</p>
                    <Link href="/projects" className="hidden md:block">
                        <Button size="sm" variant="link">
                            View all
                            <FaArrowRight size="20px" className="ml-2" />
                        </Button>
                    </Link>
                </div>
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
                        <ResponsiveDialog<IProject>
                            key={i}
                            obj={item}
                            trigger={<ProjectCard project={item} />}
                        >
                            <MDXRemote project={item} />
                        </ResponsiveDialog>
                    ))}
            </div>
            <Link href="/projects" className="text-foreground/85 md:hidden">
                <Button variant="secondary" className="w-full">
                    View all
                    <FaArrowRight size="20px" className="ml-2" />
                </Button>
            </Link>
        </section>
    );
}
