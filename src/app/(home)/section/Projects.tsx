import APLayout from "@/components/APLayout";

export default function Projects() {
    return (
        <APLayout
            title="Projects"
            description="Here's a glimpse into my project experience."
            href="/projects"
            items={new Array(3).fill({
                title: "Project Title",
                subTitle: "Apr. 20, 2024 - Role",
                tags: ["Some Tags", "Some Tags", "Some Tags"]
            })}
        ></APLayout>
    );
}
