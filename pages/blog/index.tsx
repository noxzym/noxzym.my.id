import { Blog } from "@/components/Blog";
import { Container } from "@/components/Container";
import { InferGetStaticPropsType } from "next";
import { getPublishedArticles } from "src/notion";

export const getStaticProps = async () => {
    const articles = await getPublishedArticles();
    const initialDisplayPosts = articles.slice(0, 10);
    const pagination = {
        currentPage: 1,
        totalPages: Math.ceil(articles.length / 10)
    };

    return {
        props: {
            initialDisplayPosts,
            posts: articles,
            pagination
        },
        revalidate: 60
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