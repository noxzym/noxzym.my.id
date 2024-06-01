import Link from "next/link";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export default function Footer() {
    return (
        <footer className="container flex flex-col">
            <Separator />
            <div className="grid md:grid-cols-2">
                <div className="customVerticalSeparator flex aspect-video h-auto flex-col items-center justify-center gap-2">
                    <p className="text-4xl font-bold">Orchit.</p>
                    <p className="text-sm font-bold text-foreground/85">
                        Depok, West Java, Indonesia.
                    </p>
                </div>
                <Separator className="md:hidden" />
                <div className="flex aspect-video h-auto flex-col items-center justify-center gap-2">
                    <p className="text-4xl font-bold">Lets Connect!</p>
                    <Button asChild variant="secondary" className="rounded-full">
                        <Link href="mailto:me@noxzym.my.id">me@noxzym.my.id</Link>
                    </Button>
                    <div className="flex gap-2">
                        <Button
                            asChild
                            variant="secondary"
                            className="aspect-square h-auto w-10 rounded-full"
                        >
                            <Link href="#"></Link>
                        </Button>
                        <Button
                            asChild
                            variant="secondary"
                            className="aspect-square h-auto w-10 rounded-full"
                        >
                            <Link href="#"></Link>
                        </Button>
                        <Button
                            asChild
                            variant="secondary"
                            className="aspect-square h-auto w-10 rounded-full"
                        >
                            <Link href="#"></Link>
                        </Button>
                        <Button
                            asChild
                            variant="secondary"
                            className="aspect-square h-auto w-10 rounded-full"
                        >
                            <Link href="#"></Link>
                        </Button>
                        <Button
                            asChild
                            variant="secondary"
                            className="aspect-square h-auto w-10 rounded-full"
                        >
                            <Link href="#"></Link>
                        </Button>
                        <Button
                            asChild
                            variant="secondary"
                            className="aspect-square h-auto w-10 rounded-full"
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
