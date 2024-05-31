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
        <section className="flex flex-col gap-4 py-12">
            <div className="flex flex-col">
                <div className="flex items-center justify-between">
                    <p className="text-5xl font-bold">{title}</p>
                    <Link href={href} className="text-foreground/85">
                        <Button size="sm" variant="ghost">
                            View all
                            <FaArrowRight size="20px" className="ml-2" />
                        </Button>
                    </Link>
                </div>
                <p className="text-xl font-medium text-foreground/85">{description}</p>
            </div>
            <div className="grid grid-cols-3 gap-5">
                {items.map((item, i) => (
                    <Card key={i} {...item} />
                ))}
            </div>
        </section>
    );
}

interface IBaseLayoutItem {
    title: string;
    subTitle: string;
    tags: string[];
}
