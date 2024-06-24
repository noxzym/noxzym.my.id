"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface props {
    title: "Articles" | "Projects";
    description: string;
    href: string;
    items: JSX.Element[];
}

export default function APLayout({ title, description, href, items }: props) {
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
                        <Link href={href} className="hidden md:block">
                            <Button size="sm" variant="link">
                                View all
                                <FaArrowRight size="20px" className="ml-2" />
                            </Button>
                        </Link>
                    )}
                </div>
                <p className="font-medium text-foreground/85">{description}</p>
            </div>
            {isCurrentPath() && <Input placeholder={`Search ${title}...`} />}
            <div className="grid gap-3 md:grid-cols-2 md:gap-5 lg:grid-cols-3">{items}</div>
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
