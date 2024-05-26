import Link from "next/link";
import { Button } from "./ui/button";

export default function Navigation() {
    return (
        <nav className="sticky top-0 z-50 flex items-center justify-between bg-background py-5">
            <Button asChild variant="ghost" className="text-2xl font-bold">
                <Link href="/">Orchit.</Link>
            </Button>
            <div className="flex gap-4">
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
