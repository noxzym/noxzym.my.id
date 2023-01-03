import { Blog } from "@/components/Blog";
import { Container } from "@/components/Container";
import { InferGetStaticPropsType } from "next";
import { getAllArticles } from "src/notion";

export const getStaticProps = async () => {
    const articles = await getAllArticles();
    const publishedArticles = articles.filter((x) => x.published);
    const sortedArticles = publishedArticles.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    const initialDisplayPosts = sortedArticles.slice(0, 10);
    const pagination = {
        currentPage: 1,
        totalPages: Math.ceil(sortedArticles.length / 10)
    };

    return {
        props: {
            initialDisplayPosts,
            posts: sortedArticles,
            pagination
        },
        revalidate: 10
    };
};

export default function BlogPage({
    posts,
    initialDisplayPosts,
    pagination
}: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <Container>
            <Blog
                posts={posts}
                initialDisplayPosts={initialDisplayPosts}
                pagination={pagination}
            />
        </Container>
    );
}