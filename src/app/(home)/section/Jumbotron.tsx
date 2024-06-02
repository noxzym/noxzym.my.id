"use client";

import Link from "next/link";
import { SiGithub, SiGoogledocs, SiLinkedin } from "react-icons/si";
import { Button } from "@/components/ui/button";

export default function Jumbotron() {
    return (
        <section className="flex flex-col items-center justify-between py-12 md:flex-row">
            <div className="flex flex-col gap-4">
                <div>
                    <p className="text-xl font-semibold md:text-4xl">Hello, I am</p>
                    <p className="text-4xl font-bold md:text-6xl">Orchitiadi Ismaulana Putra</p>
                    <p className="text-sm font-medium text-foreground/90 md:text-xl">
                        A Full Stack Developer who is familiar with using React and NodeJS.
                    </p>
                </div>
                <div className="flex flex-wrap gap-4">
                    <Button
                        asChild
                        variant="secondary"
                        className="flex-grow bg-foreground/5 text-base font-semibold md:flex-grow-0"
                    >
                        <Link href="/about">Learn about me</Link>
                    </Button>
                    <Button
                        asChild
                        variant="secondary"
                        className="flex-grow bg-foreground/5 text-base font-semibold md:flex-grow-0"
                    >
                        <Link href="/articles">Read my article</Link>
                    </Button>
                    <Button
                        asChild
                        variant="secondary"
                        className="flex-grow bg-foreground/5 text-base font-semibold md:flex-grow-0"
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
            <span className="order-first mb-20 h-56 w-56 rounded-2xl bg-secondary md:order-last md:mb-0" />
        </section>
    );
}
