import { IArticle } from "@/types";
import { getBlobs } from "@/lib/getBlobs";
import ArticlesSection from "@/components/ArticlesSection";

export const revalidate = 60;

export default async function ArticlesPage() {
    const articles = await getBlobs<IArticle[]>({ prefix: "articles" });

    return <ArticlesSection articles={articles} />;
}
