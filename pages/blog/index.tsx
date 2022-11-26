import { Blog } from "@/components/Blog";
import { Container } from "@/components/Container";
import { allBlogs } from "contentlayer/generated";
import { InferGetStaticPropsType } from "next";

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

export const getStaticProps = async () => {
    const activePosts = allBlogs.filter(p => p.draft === false);
    const posts = activePosts
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .filter(x => x.draft == false);
    const initialDisplayPosts = posts.slice(0, 10);
    const pagination = {
        currentPage: 1,
        totalPages: Math.ceil(posts.length / 10)
    };

    return {
        props: {
            initialDisplayPosts,
            posts,
            pagination
        }
    };
};
