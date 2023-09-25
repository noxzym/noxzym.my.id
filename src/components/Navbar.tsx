"use client";

import { useScrollPosition } from "@/hooks/useScrollPosition";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useState } from "react";
import { ICONS, Icons } from "./Icons";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

const Navigation: { name: string; link: string; icon: keyof typeof ICONS }[] = [
    {
        name: "Home",
        link: "/",
        icon: "home"
    },
    {
        name: "About Me",
        link: "/#about",
        icon: "user"
    },
    {
        name: "Contact",
        link: "/#contact",
        icon: "paperclip"
    },
    {
        name: "Blog",
        link: "/blog",
        icon: "newspaper"
    }
];

export function Navbar() {
    const [open, setOpen] = useState(false);
    const { theme, setTheme } = useTheme();
    const scrollPosition = useScrollPosition();

    const toggleColorMode = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <main
            id="navbar"
            className={cn(
                scrollPosition && "bg-[#E8E9E9]/30 backdrop-blur-md dark:bg-[#0A0C0C]/30",
                "sticky top-0 z-50 mx-auto max-w-4xl px-7 py-3"
            )}
        >
            <Dialog open={open} onOpenChange={setOpen}>
                <div className="flex items-center justify-between">
                    <Button variant="ghost" size="sm" asChild>
                        <Link href="/">
                            <p className="text-sm font-bold text-black/80 dark:text-white/80">
                                Noxzym();
                            </p>
                        </Link>
                    </Button>
                    <div className="flex flex-row items-center gap-3">
                        {Navigation.map(({ link, name }, i) => (
                            <Button
                                aria-label={name}
                                key={i}
                                variant="ghost"
                                size="sm"
                                asChild
                                className="hidden md:flex"
                            >
                                <Link href={link}>
                                    <p className="text-sm font-bold lowercase text-black/80 dark:text-white/80">
                                        {name}
                                    </p>
                                </Link>
                            </Button>
                        ))}
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setOpen(true)}
                            className="md:hidden"
                        >
                            <Icons
                                icon="command"
                                className="h-5 w-5 text-black/80 dark:text-white/80"
                            />
                        </Button>
                        <Button
                            aria-label="theme toggler"
                            variant="ghost"
                            size="icon"
                            onClick={toggleColorMode}
                        >
                            <Icons
                                icon="brush"
                                className="h-5 w-5 text-black/80 dark:text-white/80"
                            />
                        </Button>
                    </div>
                </div>
                <DialogContent className="max-w-md rounded-xl">
                    <DialogHeader>
                        <DialogTitle className="text-black/80 dark:text-white/80">
                            Navigation Panel
                        </DialogTitle>
                    </DialogHeader>
                    <div className="flex flex-col gap-2">
                        {Navigation.map(({ icon, link, name }, i) => (
                            <Button
                                key={i}
                                variant="ghost"
                                size="sm"
                                asChild
                                onClick={() => setOpen(false)}
                                className="flex w-full justify-start gap-2 text-black/80 dark:text-white/80"
                            >
                                <Link href={link}>
                                    <Icons icon={icon} className="text-lg" />
                                    <p className="text-sm font-bold capitalize">{name}</p>
                                </Link>
                            </Button>
                        ))}
                    </div>
                </DialogContent>
            </Dialog>
        </main>
    );
}
