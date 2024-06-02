import Link from "next/link";
import { FaLeaf, FaRocket, FaUser } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { Button } from "./ui/button";

export function TopStickyNavigation() {
    return (
        <nav className="sticky top-0 z-50 bg-background/70 py-5 backdrop-blur-xl">
            <div className="container flex max-w-screen-xl items-center justify-between">
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
            </div>
        </nav>
    );
}

export function BottomStickyNavigation() {
    return (
        <nav className="sticky bottom-5 z-50 mx-8 mt-5 rounded-xl bg-secondary/70 backdrop-blur-xl md:hidden">
            <div className="flex items-center justify-center text-foreground/85">
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
