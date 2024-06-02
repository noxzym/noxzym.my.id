"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function ArticlesProjectsLayout({
    title,
    description,
    href,
    items
}: {
    title: string;
    description: string;
    href: string;
    items: IBaseLayoutItem[];
}) {
    const pathname = usePathname();

    function isCurrentPath() {
        return pathname === href;
    }

    return (
        <section className="flex flex-col gap-5 py-12 md:gap-4">
            <div className="flex flex-col">
                <div className="flex items-center justify-between">
                    <p
                        className={cn(
                            "font-bold",
                            isCurrentPath() ? "text-4xl md:text-6xl" : "text-3xl"
                        )}
                    >
                        {title}
                    </p>
                    {!isCurrentPath() && (
                        <Link href={href} className="hidden text-foreground/85 md:block">
                            <Button size="sm" variant="ghost">
                                View all
                                <FaArrowRight size="20px" className="ml-2" />
                            </Button>
                        </Link>
                    )}
                </div>
                <p className="font-medium text-foreground/85">{description}</p>
            </div>
            {isCurrentPath() && <Input placeholder={`Search ${title}...`} />}
            <div className="grid gap-3 md:grid-cols-3 md:gap-5">
                {items.map((item, i) => (
                    <div key={i} className="flex flex-col">
                        <div className="flex h-auto w-full rounded-xl bg-foreground px-8 py-5">
                            <span className="aspect-video h-auto w-full rounded-md bg-background/5 shadow-inner" />
                        </div>
                        <div className="flex flex-col justify-center gap-4 py-4">
                            <div className="flex flex-col justify-center gap-1">
                                <p className="text-2xl font-bold">{item.title}</p>
                                <p className="font-medium text-foreground/85">{item.subTitle}</p>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {item.tags.map((tag, i) => (
                                    <Button
                                        key={i}
                                        asChild
                                        size="sm"
                                        variant="secondary"
                                        className="text-xs font-medium"
                                    >
                                        <Link href="#">{tag}</Link>
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {!isCurrentPath() && (
                <Link href={href} className="text-foreground/85 md:hidden">
                    <Button variant="secondary" className="w-full">
                        View all
                        <FaArrowRight size="20px" className="ml-2" />
                    </Button>
                </Link>
            )}
        </section>
    );
}

interface IBaseLayoutItem {
    title: string;
    subTitle: string;
    tags: string[];
}
