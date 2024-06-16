import Image from "next/image";
import { IProject } from "@/types";
import { FaArrowRight } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "./ui/dialog";

export default async function ProjectCard({ project }: { project: IProject }) {
    const metadata = project.metadata;
    const content = project.content;

    return (
        <Dialog>
            <DialogTrigger>
                <div
                    className={cn(
                        "group flex flex-col overflow-hidden rounded-xl border-[1px] transition-all duration-300 hover:scale-105",
                        metadata.discontinue ? "cursor-not-allowed" : "cursor-pointer"
                    )}
                >
                    <span className="relative aspect-video bg-secondary">
                        {metadata.image && (
                            <Image
                                src={metadata.image}
                                alt={metadata.title}
                                fill
                                sizes="400x200"
                                className="object-cover"
                            />
                        )}
                        <p className="absolute flex h-full w-full items-center justify-center gap-2 bg-background font-medium opacity-0 transition-all duration-300 group-hover:opacity-80">
                            View Project
                            <FaArrowRight size="20px" />
                        </p>
                    </span>
                    <div className="flex flex-col gap-4 px-4 py-5 text-start">
                        <p className="font-bold">
                            {metadata.title} ({ROLE[Number(metadata.role)]})
                        </p>
                        <p className="line-clamp-2 text-foreground/80">{metadata.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {metadata.tags.map((item, i) => (
                                <p key={i} className="text-xs text-foreground/80">
                                    #{item}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when you&apos;re done.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

enum ROLE {
    FullStack = 0,
    FrontEnd = 1,
    BackEnd = 2
}
