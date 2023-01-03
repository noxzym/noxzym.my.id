import { Article } from "@/components/Blog/Article";
import { Container } from "@/components/Container";
import { InferGetStaticPropsType } from "next";
import { getAllArticles } from "src/notion";

export const getStaticPaths = async () => {
    const articles = await getAllArticles();
    const publishedArticles = articles.filter(x => x.published);
    const sortedArticles = publishedArticles.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    const posts = sortedArticles.filter(x => x.published);
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
    const articles = await getAllArticles();
    const publishedArticles = articles.filter(x => x.published);
    const sortedArticles = publishedArticles.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    const post = sortedArticles.find(x => x.slug === slug);

    return {
        props: {
            post
        }
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
