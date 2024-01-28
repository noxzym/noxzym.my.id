import { allBlogs } from "contentlayer/generated";
import { ArticleList } from "./ArticleList";

export default async function Blog() {
    return (
        <>
            <h1 className="pb-8 text-center text-3xl font-bold md:pb-16">My Blog</h1>
            <ArticleList pages={allBlogs} />
        </>
    );
}
