import { isProject } from "@/lib/utils";
import { IArticle, IProject } from "@/types";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

interface props {
    data: IArticle | IProject;
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
                            <p className="font-medium text-white text-xs uppercase">Discontinued</p>
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
                        <p key={i.toString()} className="text-foreground/80 text-xs">
                            #{item}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
}

enum ROLE {
    FullStack = 0,
    FrontEnd = 1,
    BackEnd = 2
}
