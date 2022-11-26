import { useMDXComponent } from "next-contentlayer/hooks";
import { allBlogs } from "contentlayer/generated";
import { InferGetStaticPropsType } from "next";
import { Container } from "@/components/Container";

export const getStaticPaths = async () => {
    const activePosts = allBlogs.filter(p => p.draft === false);
    const posts = activePosts
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .filter(x => x.draft == false);
    const paths = posts.map(post => ({
        params: { slug: post.slug.split("/") }
    }));
    return {
        paths,
        fallback: false
    };
};

export const getStaticProps = async ({ params }) => {
    const slug = (params.slug as string[]).join("/");
    const post = allBlogs
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .find(p => p.slug === slug);

    return {
        props: {
            post
        }
    };
};

export default function Blog({
    post
}: InferGetStaticPropsType<typeof getStaticProps>) {
    const MDXComponent = useMDXComponent(post.body.code);
    return (
        <Container className="w-full py-24 landscape:h-auto landscape:py-32 landscape:lg:py-32">
            <div className="prose max-w-full dark:prose-dark">
                <MDXComponent />
            </div>
        </Container>
    );
}
