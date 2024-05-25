"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Jumbotron() {
    const [offsetHeight, setOffsetHeight] = useState<number>(0);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (ref.current) {
            setOffsetHeight(ref.current.offsetHeight);
        }
    }, []);

    return (
        <section className="flex items-center justify-between py-12">
            <div ref={ref} className="flex flex-col gap-4">
                <div>
                    <p className="text-4xl font-semibold">Hello, I am</p>
                    <p className="text-6xl font-bold">Orchitiadi Ismaulana Putra</p>
                    <p className="text-xl font-medium text-foreground/90">
                        A Full Stack Developer who is familiar with using React and NodeJS.
                    </p>
                </div>
                <div className="flex gap-4">
                    <Button
                        asChild
                        variant="ghost"
                        className="bg-foreground/5 text-base font-semibold"
                    >
                        <Link href="/about">Learn about me</Link>
                    </Button>
                    <Button
                        asChild
                        variant="ghost"
                        className="bg-foreground/5 text-base font-semibold"
                    >
                        <Link href="/articles">Read my article</Link>
                    </Button>
                    <Button
                        asChild
                        variant="ghost"
                        className="bg-foreground/5 text-base font-semibold"
                    >
                        <Link href="/projects">Explore my project</Link>
                    </Button>
                </div>
                <div className="flex gap-2">
                    <Button asChild size="sm" variant="ghost">
                        <Link href="#" className="text-foreground/85">
                            <span className="mr-2 h-5 w-5 rounded-md bg-foreground/10" />
                            Resume
                        </Link>
                    </Button>
                    <Button asChild size="sm" variant="ghost">
                        <Link href="#" className="text-foreground/85">
                            <span className="mr-2 h-5 w-5 rounded-md bg-foreground/10" />
                            LinkedIn
                        </Link>
                    </Button>
                    <Button asChild size="sm" variant="ghost">
                        <Link href="#" className="text-foreground/85">
                            <span className="mr-2 h-5 w-5 rounded-md bg-foreground/10" />
                            Github
                        </Link>
                    </Button>
                </div>
            </div>
            {ref.current && (
                <span
                    className="rounded-2xl bg-foreground/5"
                    style={{
                        height: `${offsetHeight}px`,
                        width: `${offsetHeight}px`
                    }}
                />
            )}
        </section>
    );
}
