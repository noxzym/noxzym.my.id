import Link from "next/link";
import { Button } from "./ui/button";

export default function Card({
    title,
    subTitle,
    tags
}: {
    title: string;
    subTitle: string;
    tags: string[];
}) {
    return (
        <div className="flex flex-col">
            <div className="flex h-auto w-full rounded-xl bg-foreground px-8 py-5">
                <span className="aspect-video h-auto w-full rounded-md bg-background/5 shadow-inner" />
            </div>
            <div className="flex flex-col justify-center gap-4 py-4">
                <div className="flex flex-col justify-center gap-1">
                    <p className="text-4xl font-bold">{title}</p>
                    <p className="text-sm font-medium text-foreground/85">{subTitle}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag, i) => (
                        <Button
                            key={i}
                            asChild
                            size="sm"
                            variant="ghost"
                            className="bg-foreground/5 text-xs font-medium text-foreground/85"
                        >
                            <Link href="#">{tag}</Link>
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    );
}
