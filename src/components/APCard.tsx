import Image from "next/image";
import { IArticle, IProject } from "@/types";
import { FaArrowRight } from "react-icons/fa";
import { isProject } from "@/lib/utils";

interface props {
    data: IArticle | IProject;
}

enum ROLE {
    FullStack = 0,
    FrontEnd = 1,
    BackEnd = 2
}

export default function APCard({ data }: props) {
    return (
        <div className="group flex cursor-pointer flex-col overflow-hidden rounded-xl border-1 transition-all duration-300 hover:scale-105">
            <span className="relative aspect-video bg-secondary">
                {data.metadata.image && (
                    <Image
                        src={data.metadata.image}
                        alt={data.metadata.title}
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
                {isProject(data) &&
                    (data as unknown as IProject).metadata.discontinued === "true" && (
                        <span className="absolute left-0 rounded-br-xl bg-destructive px-2 py-1">
                            <p className="text-xs font-medium uppercase text-white">Discontinued</p>
                        </span>
                    )}
            </span>
            <div className="flex flex-col gap-4 px-4 py-5 text-start">
                <p className="font-bold">
                    {data.metadata.title}{" "}
                    {isProject(data) &&
                        `(${ROLE[Number((data as unknown as IProject).metadata.role)]})`}
                </p>
                <p className="line-clamp-2 text-foreground/80">{data.metadata.description}</p>
                <div className="flex flex-wrap gap-2">
                    {data.metadata.tags.map((item, i) => (
                        <p key={i} className="text-xs text-foreground/80">
                            #{item}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
}
