"use client";

import { useScrollPosition } from "@/hooks/useScrollPosition";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useState } from "react";
import { Icons } from "./utils/Icons";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { NavigationList } from "@/lib/constants";

export function Navigation() {
    const [open, setOpen] = useState(false);
    const { theme, setTheme } = useTheme();
    const scrollPosition = useScrollPosition();

    const toggleColorMode = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <nav
            id="navbar"
            className={cn(
                "sticky top-0 z-50 w-full text-black/80 dark:text-white/80",
                scrollPosition && "bg-light/40 backdrop-blur-md dark:bg-dark/40"
            )}
        >
            <Dialog open={open} onOpenChange={setOpen}>
                <div className="flex max-w-4xl items-center justify-between py-3">
                    <Button variant="ghost" size="sm" asChild>
                        <Link href="/">
                            <p className="text-sm font-bold text-black/80 dark:text-white/80">
                                Noxzym();
                            </p>
                        </Link>
                    </Button>
                    <div className="flex flex-row items-center gap-3">
                        {NavigationList.map(({ link, name }, i) => (
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
                        {NavigationList.map(({ icon, link, name }, i) => (
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
        </nav>
    );
}
