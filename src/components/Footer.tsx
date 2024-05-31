import Link from "next/link";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export default function Footer() {
    return (
        <footer className="flex flex-col">
            <Separator />
            <div className="grid grid-cols-2">
                <div className="customVerticalSeparator flex aspect-[3/1] h-auto flex-col items-center justify-center gap-2">
                    <p className="text-4xl font-bold">Orchit.</p>
                    <p className="text-sm font-bold text-foreground/85">
                        Depok, West Java, Indonesia.
                    </p>
                </div>
                <div className="flex aspect-[3/1] h-auto flex-col items-center justify-center gap-2">
                    <p className="text-4xl font-bold">Lets Connect!</p>
                    <Button asChild variant="ghost" className="rounded-full bg-foreground/5">
                        <Link href="mailto:me@noxzym.my.id" className="text-foreground/85">
                            me@noxzym.my.id
                        </Link>
                    </Button>
                    <div className="flex gap-2">
                        <Button
                            asChild
                            variant="ghost"
                            className="aspect-square h-auto w-10 rounded-full bg-foreground/5"
                        >
                            <Link href="#"></Link>
                        </Button>
                        <Button
                            asChild
                            variant="ghost"
                            className="aspect-square h-auto w-10 rounded-full bg-foreground/5"
                        >
                            <Link href="#"></Link>
                        </Button>
                        <Button
                            asChild
                            variant="ghost"
                            className="aspect-square h-auto w-10 rounded-full bg-foreground/5"
                        >
                            <Link href="#"></Link>
                        </Button>
                        <Button
                            asChild
                            variant="ghost"
                            className="aspect-square h-auto w-10 rounded-full bg-foreground/5"
                        >
                            <Link href="#"></Link>
                        </Button>
                        <Button
                            asChild
                            variant="ghost"
                            className="aspect-square h-auto w-10 rounded-full bg-foreground/5"
                        >
                            <Link href="#"></Link>
                        </Button>
                        <Button
                            asChild
                            variant="ghost"
                            className="aspect-square h-auto w-10 rounded-full bg-foreground/5"
                        >
                            <Link href="#"></Link>
                        </Button>
                    </div>
                </div>
            </div>
            <Separator />
            <div className="mx-auto py-6">
                <p className="text-sm font-bold text-foreground/85">
                    Copyright &copy; 2024 Noxzym.
                </p>
            </div>
        </footer>
    );
}
