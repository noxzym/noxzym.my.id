"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { FaLeaf, FaPaintBrush, FaRocket, FaUser } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { Button } from "./ui/button";

export function TopStickyNavigation() {
    const { resolvedTheme, setTheme } = useTheme();
    return (
        <nav className="bg-background/70 sticky top-0 z-50 py-5 backdrop-blur-xl">
            <div className="container flex max-w-screen-xl items-center justify-between">
                <Button asChild variant="link" className="text-2xl font-bold">
                    <Link href="/">Orchit.</Link>
                </Button>
                <div className="flex gap-4">
                    <div className="hidden gap-4 md:flex">
                        <Button asChild size="sm" variant="link" className="font-semibold">
                            <Link href="/">Home</Link>
                        </Button>
                        <Button asChild size="sm" variant="link" className="font-semibold">
                            <Link href="/about">About</Link>
                        </Button>
                        <Button asChild size="sm" variant="link" className="font-semibold">
                            <Link href="/articles">Articles</Link>
                        </Button>
                        <Button asChild size="sm" variant="link" className="font-semibold">
                            <Link href="/projects">Projects</Link>
                        </Button>
                    </div>
                    <Button
                        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                        size="icon"
                        variant="secondary"
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
        <nav className="bg-secondary/70 sticky bottom-5 z-50 mx-8 mt-5 rounded-xl backdrop-blur-xl md:hidden">
            <div className="text-foreground/85 flex items-center justify-center">
                <Button asChild variant="ghost" className="flex-grow">
                    <Link href="/">
                        <FaHouse size="20px" />
                    </Link>
                </Button>
                <Button asChild variant="ghost" className="flex-grow">
                    <Link href="/articles">
                        <FaLeaf size="20px" />
                    </Link>
                </Button>
                <Button asChild variant="ghost" className="flex-grow">
                    <Link href="/projects">
                        <FaRocket size="20px" />
                    </Link>
                </Button>
                <Button asChild variant="ghost" className="flex-grow">
                    <Link href="/about">
                        <FaUser size="20px" />
                    </Link>
                </Button>
            </div>
        </nav>
    );
}
