import { Input } from "@/components/ui/input";
import Card from "@/components/Card";

export default function ProjectsPage() {
    return (
        <section className="flex flex-col gap-4">
            <div className="flex flex-col">
                <p className="text-5xl font-bold">Projects</p>
                <p className="text-xl font-medium">
                    Here&apos;s a glimpse into my project experience, including both private and
                    open-source contributions.
                </p>
            </div>
            <Input placeholder="Search Project..." />
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
