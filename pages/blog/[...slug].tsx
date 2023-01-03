import { Article } from "@/components/Blog/Article";
import { Container } from "@/components/Container";
import { InferGetStaticPropsType } from "next";
import { getPublishedArticles } from "src/notion";

export const getStaticPaths = async () => {
    const articles = await getPublishedArticles();
    const paths = articles.map(post => ({
        params: { slug: post.slug.split("/") }
    }));

    return {
        paths,
        fallback: "blocking"
    };
};

export const getStaticProps = async ({ params }) => {
    const slug = (params.slug as string[]).join("/");
    const articles = await getPublishedArticles();
    const post = articles.find(x => x.slug === slug);

    return {
        props: {
            post
        },
        revalidate: 60
    };
};

export default function Blog({
    post
}: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <Container className="flex w-full flex-col py-24 landscape:h-auto landscape:py-32 landscape:lg:py-32">
            <Article post={post} />
        </Container>
    );
}
