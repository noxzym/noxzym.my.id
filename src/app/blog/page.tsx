import APLayout from "@/components/APLayout";

export default async function BlogPage() {
    return (
        <APLayout
            title="Articles"
            description="The following are some of the articles I have written on."
            href="/blog"
            items={new Array(3).fill({
                title: "Article Title",
                subTitle: "Apr. 20, 2024 - 3 min read",
                tags: ["Some Tags", "Some Tags", "Some Tags"]
            })}
        />
    );
}
