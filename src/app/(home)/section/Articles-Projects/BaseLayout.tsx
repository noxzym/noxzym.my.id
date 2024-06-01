import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Card from "@/components/Card";

export default function BaseLayout({
    title,
    description,
    href,
    items
}: {
    title: string;
    description: string;
    href: string;
    items: IBaseLayoutItem[];
}) {
    return (
        <section className="flex flex-col gap-5 py-12 md:gap-4">
            <div className="flex flex-col">
                <div className="flex items-center justify-between">
                    <p className="text-4xl font-bold md:text-6xl">{title}</p>
                    <Link href={href} className="hidden text-foreground/85 md:block">
                        <Button size="sm" variant="ghost">
                            View all
                            <FaArrowRight size="20px" className="ml-2" />
                        </Button>
                    </Link>
                </div>
                <p className="text-sm font-medium text-foreground/85 md:text-xl">{description}</p>
            </div>
            <div className="grid gap-3 md:grid-cols-3 md:gap-5">
                {items.map((item, i) => (
                    <Card key={i} {...item} />
                ))}
            </div>
            <Link href={href} className="text-foreground/85 md:hidden">
                <Button variant="secondary" className="w-full">
                    View all
                    <FaArrowRight size="20px" className="ml-2" />
                </Button>
            </Link>
        </section>
    );
}

interface IBaseLayoutItem {
    title: string;
    subTitle: string;
    tags: string[];
}
