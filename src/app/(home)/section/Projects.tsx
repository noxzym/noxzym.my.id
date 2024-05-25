import Link from "next/link";
import { Button } from "@/components/ui/button";
import Card from "@/components/Card";

export default function Projects() {
    return (
        <section className="flex flex-col gap-4 py-12">
            <div className="flex flex-col">
                <div className="flex items-center justify-between">
                    <p className="text-5xl font-bold">Projects</p>
                    <Link href="/projects" className="text-foreground/85">
                        <Button variant="ghost">
                            View all
                            <span className="ml-2 h-5 w-5 rounded-md bg-foreground/10" />
                        </Button>
                    </Link>
                </div>
                <p className="text-xl font-medium text-foreground/85">
                    Here&apos;s a glimpse into my project experience, including both private and
                    open-source contributions.
                </p>
            </div>
            <div className="grid grid-cols-3 gap-5">
                {new Array(3).fill(0).map((_, i) => (
                    <Card
                        key={i}
                        title="Project Title"
                        subTitle="Apr. 20, 2024 - Role"
                        tags={["Some Tags", "Some Tags", "Some Tags"]}
                    />
                ))}
            </div>
        </section>
    );
}
