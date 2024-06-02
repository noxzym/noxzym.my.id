import APLayout from "@/components/APLayout";

export default function ArticlesPage() {
    return (
        <APLayout
            title="Articles"
            description="The following are some of the articles I have written on."
            href="/articles"
            items={new Array(3).fill({
                title: "Article Title",
                subTitle: "Apr. 20, 2024 - 3 min read",
                tags: ["Some Tags", "Some Tags", "Some Tags"]
            })}
        />
    );
}
