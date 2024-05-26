import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Card from "@/components/Card";

export default function Articles() {
    return (
        <section className="flex flex-col gap-4 py-12">
            <div className="flex flex-col">
                <div className="flex items-center justify-between">
                    <p className="text-5xl font-bold">Articles</p>
                    <Link href="/articles" className="text-foreground/85">
                        <Button size="sm" variant="ghost">
                            View all
                            <FaArrowRight size="20px" className="ml-2" />
                        </Button>
                    </Link>
                </div>
                <p className="text-xl font-medium text-foreground/85">
                    The following are some of the articles I have written on.
                </p>
            </div>
            <div className="grid grid-cols-3 gap-5">
                {new Array(3).fill(0).map((_, i) => (
                    <Card
                        key={i}
                        title="Article Title"
                        subTitle="Apr. 20, 2024 - 3 min read"
                        tags={["Some Tags", "Some Tags", "Some Tags"]}
                    />
                ))}
            </div>
        </section>
    );
}
