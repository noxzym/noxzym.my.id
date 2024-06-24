import { Metadata } from "next";
import { IArticle } from "@/types";
import { DefaultMetadata } from "@/lib/constants";
import { getBlobs } from "@/lib/getBlobs";
import ArticlesSection from "@/components/ArticlesSection";

export const revalidate = 60;

export default async function ArticlesPage() {
    const articles = await getBlobs<IArticle[]>({ prefix: "articles" });

    return <ArticlesSection articles={articles} />;
}

export const metadata: Metadata = {
    title: "Blog",
    openGraph: {
        ...DefaultMetadata.openGraph,
        title: "Blog",
        url: `${DefaultMetadata.openGraph.url}/blog`
    },
    twitter: {
        ...DefaultMetadata.twitter,
        title: "Blog"
    }
};
