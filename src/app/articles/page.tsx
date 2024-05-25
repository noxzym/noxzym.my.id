import { Input } from "@/components/ui/input";
import Card from "@/components/Card";

export default function ArticlesPage() {
    return (
        <section className="flex flex-col gap-4">
            <div className="flex flex-col">
                <p className="text-5xl font-bold">Articles</p>
                <p className="text-xl font-medium">
                    The following are some of the articles I have written on.
                </p>
            </div>
            <Input placeholder="Search Article..." />
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
