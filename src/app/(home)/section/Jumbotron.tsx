"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { SiGithub, SiGoogledocs, SiLinkedin } from "react-icons/si";
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
                        variant="secondary"
                        className="bg-foreground/5 text-base font-semibold"
                    >
                        <Link href="/about">Learn about me</Link>
                    </Button>
                    <Button
                        asChild
                        variant="secondary"
                        className="bg-foreground/5 text-base font-semibold"
                    >
                        <Link href="/articles">Read my article</Link>
                    </Button>
                    <Button
                        asChild
                        variant="secondary"
                        className="bg-foreground/5 text-base font-semibold"
                    >
                        <Link href="/projects">Explore my project</Link>
                    </Button>
                </div>
                <div className="flex gap-2">
                    <Button asChild size="sm" variant="ghost">
                        <Link href="#" className="text-foreground/85">
                            <SiGoogledocs size="20px" className="mr-2" />
                            Resume
                        </Link>
                    </Button>
                    <Button asChild size="sm" variant="ghost">
                        <Link href="#" className="text-foreground/85">
                            <SiLinkedin size="20px" className="mr-2" />
                            LinkedIn
                        </Link>
                    </Button>
                    <Button asChild size="sm" variant="ghost">
                        <Link href="#" className="text-foreground/85">
                            <SiGithub size="20px" className="mr-2" />
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
