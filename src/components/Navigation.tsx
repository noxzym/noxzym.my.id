"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { FaPaintBrush } from "react-icons/fa";
import { NavigationLinks } from "@/lib/constants";
import { Button } from "./ui/button";

export function TopStickyNavigation() {
    const { resolvedTheme, setTheme } = useTheme();
    return (
        <nav className="sticky top-0 z-50 bg-background/70 py-5 backdrop-blur-xl">
            <div className="container flex max-w-screen-xl items-center justify-between">
                <Button asChild variant="link" className="text-2xl font-bold">
                    <Link href="/">Orchit.</Link>
                </Button>
                <div className="flex gap-4">
                    <div className="hidden gap-4 md:flex">
                        {NavigationLinks("Home", "About", "Articles", "Projects").map(
                            (link, index) => (
                                <Button
                                    key={index}
                                    asChild
                                    size="sm"
                                    variant="link"
                                    className="font-semibold"
                                >
                                    <Link href={link.url}>{link.to}</Link>
                                </Button>
                            )
                        )}
                    </div>
                    <Button
                        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                        size="icon"
                    >
                        <FaPaintBrush size="20px" />
                    </Button>
                </div>
            </div>
        </nav>
    );
}

export function BottomStickyNavigation() {
    return (
        <nav className="sticky bottom-12 z-50 m-6 overflow-hidden rounded-xl bg-secondary/70 backdrop-blur-xl md:hidden">
            <div className="flex items-center justify-center text-foreground/85">
                {NavigationLinks("Home", "Articles", "Projects", "About").map((link, index) => (
                    <Button
                        key={index}
                        asChild
                        variant="ghost"
                        className="aspect-video h-auto flex-grow rounded-xl"
                    >
                        <Link href={link.url}>
                            <link.icon size="20px" />
                        </Link>
                    </Button>
                ))}
            </div>
        </nav>
    );
}
