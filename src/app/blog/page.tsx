import { BlogHeader } from "@/components/blog/BlogHeader";
import { BlogList } from "@/components/blog/BlogList";
import { getNotionPages } from "@/lib/notion";

export default async function Blog() {
    const pages = await getNotionPages();
    return (
        <>
            <BlogHeader />
            <BlogList pages={pages} />
        </>
    );
}
