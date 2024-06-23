import { notFound } from "next/navigation";
import { IArticle } from "@/types";
import { getBlobs } from "@/lib/getBlobs";
import { generateDateFormat } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import MDXRemote from "@/components/MDXRemote";

export const revalidate = 60;

interface props {
    params: {
        slug: string;
    };
}

export default async function ArticlePage({ params }: props) {
    const articles = await getBlobs<IArticle[]>({ prefix: "articles" });
    const article = articles.find(
        article => article.metadata.title.toLowerCase().split(" ").join("-") === params.slug
    );

    if (!article) return notFound();

    return (
        <article className="mx-auto flex max-w-screen-lg flex-col gap-5 py-12 md:gap-10">
            <div className="flex flex-col gap-5">
                <h1 className="text-3xl font-bold">{article.metadata.title}</h1>
                <p className="text-sm font-medium text-foreground/85">
                    Published on {generateDateFormat(article.metadata.date)}
                </p>
                <div className="flex flex-col gap-5">
                    <div className="flex flex-wrap gap-2">
                        {article.metadata.tags.map((tag, i) => (
                            <Badge key={i} variant="secondary">
                                #{tag}
                            </Badge>
                        ))}
                    </div>
                </div>
            </div>
            <Separator />
            <MDXRemote mdx={article} />
        </article>
    );
}
