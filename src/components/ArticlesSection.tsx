import { IArticle } from "@/types";
import Link from "next/link";
import APCard from "./APCard";
import APLayout from "./APLayout";

interface props {
    articles: IArticle[];
}

export default async function ArticlesSection({ articles }: props) {
    return (
        <APLayout
            title="Articles"
            description="The following are some of the articles I have written on."
            href="/blog"
            items={articles
                .sort((a, b) => {
                    const dateA = new Date(a.metadata.date);
                    const dateB = new Date(b.metadata.date);

                    return dateB.getTime() - dateA.getTime();
                })
                .map((item, i) => ({
                    metadata: item.metadata,
                    element: (
                        <Link
                            key={i.toString()}
                            href={`/blog/${item.metadata.title.toLowerCase().split(" ").join("-")}`}
                        >
                            <APCard data={item} />
                        </Link>
                    )
                }))}
        />
    );
}
