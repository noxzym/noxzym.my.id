import Image from "next/image";
import { IProject } from "@/types";
import { FaArrowRight } from "react-icons/fa";

interface props {
    project: IProject;
}

enum ROLE {
    FullStack = 0,
    FrontEnd = 1,
    BackEnd = 2
}

export default function ProjectCard({ project }: props) {
    return (
        <div className="border-1 group flex cursor-pointer flex-col overflow-hidden rounded-xl transition-all duration-300 hover:scale-105">
            <span className="relative aspect-video bg-secondary">
                {project.metadata.image && (
                    <Image
                        src={project.metadata.image}
                        alt={project.metadata.title}
                        fill
                        sizes="400x200"
                        priority
                        className="object-cover"
                    />
                )}
                <p className="absolute flex h-full w-full items-center justify-center gap-2 bg-background font-medium opacity-0 transition-all duration-300 group-hover:opacity-80">
                    View Project
                    <FaArrowRight size="20px" />
                </p>
                {project.metadata.discontinued === "true" && (
                    <span className="absolute left-0 rounded-br-xl bg-destructive px-2 py-1">
                        <p className="text-xs font-medium uppercase text-white">Discontinued</p>
                    </span>
                )}
            </span>
            <div className="flex flex-col gap-4 px-4 py-5 text-start">
                <p className="font-bold">
                    {project.metadata.title} ({ROLE[Number(project.metadata.role)]})
                </p>
                <p className="line-clamp-2 text-foreground/80">{project.metadata.description}</p>
                <div className="flex flex-wrap gap-2">
                    {project.metadata.tags.map((item, i) => (
                        <p key={i} className="text-xs text-foreground/80">
                            #{item}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
}
