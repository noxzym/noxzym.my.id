import { ExternalLinks } from "@/lib/constants";
import Link from "next/link";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export default function Footer() {
    return (
        <footer className="container flex max-w-screen-xl flex-col">
            <Separator />
            <div className="grid md:grid-cols-2">
                <div className="separator flex aspect-video h-auto flex-col items-center justify-center gap-2">
                    <p className="font-bold text-4xl">Orchit.</p>
                    <p className="font-bold text-foreground/85 text-sm">
                        Depok, West Java, Indonesia.
                    </p>
                </div>
                <Separator className="md:hidden" />
                <div className="flex aspect-video h-auto flex-col items-center justify-center gap-2">
                    <p className="font-bold text-4xl">Lets Connect!</p>
                    <Button asChild variant="secondary" className="rounded-full">
                        <Link href="mailto:me@noxzym.my.id">me@noxzym.my.id</Link>
                    </Button>
                    <div className="flex gap-2">
                        {ExternalLinks(
                            "Github",
                            "Linkedin",
                            "Discord",
                            "Instagram",
                            "Spotify",
                            "Twitter"
                        ).map((link, i) => (
                            <Button
                                key={i.toString()}
                                asChild
                                size="icon"
                                variant="secondary"
                                className="rounded-full"
                            >
                                <Link
                                    href={link.url}
                                    prefetch={false}
                                    target="_blank"
                                    rel="nofollow noopener noreferrer"
                                    aria-label={link.to}
                                >
                                    <link.icon size="20px" />
                                </Link>
                            </Button>
                        ))}
                    </div>
                </div>
            </div>
            <Separator />
            <p className="py-6 text-center font-bold text-foreground/85 text-sm">
                Copyright &copy; 2024 Noxzym.
            </p>
        </footer>
    );
}
