import MDXRemote from "@/components/MDXRemote";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { baseURL } from "@/lib/constants";
import { getBlobs } from "@/lib/getBlobs";
import { generateDateFormat } from "@/lib/utils";
import { IArticle } from "@/types";
import { Metadata } from "next";
import { notFound } from "next/navigation";

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
                            <Badge key={i.toString()} variant="secondary">
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

export async function generateMetadata({ params }: props): Promise<Metadata> {
    const articles = await getBlobs<IArticle[]>({ prefix: "articles" });
    const article = articles.find(
        article => article.metadata.title.toLowerCase().split(" ").join("-") === params.slug
    );

    if (!article) return notFound();

    const metadata: Metadata = {
        title: {
            absolute: article.metadata.title
        },
        description: article.metadata.description,
        authors: { name: "noxzym", url: baseURL },
        openGraph: {
            type: "article",
            title: {
                absolute: article.metadata.title
            },
            description: article.metadata.description,
            siteName: "Noxzym",
            url: `${baseURL}/blog/${params.slug}`,
            tags: article.metadata.tags,
            authors: "noxzym",
            publishedTime: article.metadata.date
        }
    };

    if (article.metadata.image) {
        metadata.openGraph!.images = {
            url: article.metadata.image,
            alt: article.metadata.title,
            type: "image/png"
        };
    }

    return metadata;
}
