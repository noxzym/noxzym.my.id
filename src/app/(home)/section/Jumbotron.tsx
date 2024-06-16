import Link from "next/link";
import { ExternalLinks, NavigationLinks } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export default function Jumbotron() {
    return (
        <section className="flex flex-col items-center justify-between py-12 md:mt-12 md:flex-row">
            <div className="flex flex-col gap-4">
                <div>
                    <p className="text-xl font-semibold md:text-4xl">Hello, I am</p>
                    <p className="text-4xl font-bold md:text-6xl">Orchitiadi Ismaulana Putra</p>
                    <p className="text-sm font-medium text-foreground/90 md:text-xl">
                        A Full Stack Developer who is familiar with using React and NodeJS.
                    </p>
                </div>
                <div className="flex flex-wrap gap-4">
                    {NavigationLinks("About", "Articles", "Projects").map((link, index) => (
                        <Button
                            key={index}
                            asChild
                            className="flex-grow text-base font-semibold md:flex-grow-0"
                        >
                            <Link href={link.url}>{link.text}</Link>
                        </Button>
                    ))}
                </div>
                <div className="flex gap-2">
                    {ExternalLinks("Resume", "Linkedin", "Github").map((link, index) => (
                        <Button key={index} asChild size="sm" variant="link">
                            <Link href={link.url} target="_blank" className="text-foreground/85">
                                <link.icon size="20px" className="mr-2" />
                                {link.to}
                            </Link>
                        </Button>
                    ))}
                </div>
            </div>
            <span className="order-first mb-20 h-56 w-56 rounded-2xl bg-secondary md:order-last md:mb-0" />
        </section>
    );
}
