import Link from "next/link";
import { Button } from "./ui/button";

export default function Navigation() {
    return (
        <nav className="container sticky top-0 z-50 flex items-center justify-between bg-background/70 py-5 backdrop-blur-xl">
            <Button asChild variant="ghost" className="text-2xl font-bold">
                <Link href="/">Orchit.</Link>
            </Button>
            <div className="hidden gap-4 md:flex">
                <Button asChild size="sm" variant="ghost" className="font-semibold">
                    <Link href="/">Home</Link>
                </Button>
                <Button asChild size="sm" variant="ghost" className="font-semibold">
                    <Link href="/about">About</Link>
                </Button>
                <Button asChild size="sm" variant="ghost" className="font-semibold">
                    <Link href="/articles">Articles</Link>
                </Button>
                <Button asChild size="sm" variant="ghost" className="font-semibold">
                    <Link href="/projects">Projects</Link>
                </Button>
            </div>
        </nav>
    );
}
