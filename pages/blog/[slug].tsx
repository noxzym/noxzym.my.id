import { getArticles } from "@/src/Notion";
import { Container, Divider, Typography } from "@mui/material";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { NextSeo } from "next-seo";
import Image from "next/image";
import { NotionRenderer } from "react-notion-x";

export const getStaticPaths = async () => {
    const notion = await getArticles();
    const paths = notion.map(article => ({
        params: { slug: article.slug }
    }));

    return {
        paths,
        fallback: false
    };
};

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
    const notion = await getArticles();
    const slug = ctx.params.slug as string;
    const article = notion.find(article => article.slug === slug);

    return {
        props: {
            article
        },
        revalidate: 60
    };
};

export default function ArticlePage({
    article
}: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>
            <NextSeo
                title={`${article.title} | Noxzym`}
                canonical={`https://noxzym.my.id/blog/${article.slug}`}
                openGraph={{
                    url: `https://noxzym.my.id/blog/${article.slug}`,
                    title: `${article.title} | Noxzym`,
                    article: {
                        authors: ["Orchitiadi Ismaulana Putra", "Noxzym"],
                        publishedTime: article.date,
                        modifiedTime: article.date,
                        tags: article.tags
                    }
                }}
            />
            <Container
                fixed
                className="flex flex-col gap-5 px-5 pt-10 md:px-40"
            >
                <div className="relative aspect-[2/1] h-auto w-full md:aspect-[6/2]">
                    <Image
                        src={article.cover}
                        fill
                        alt="exampleImage"
                        className="rounded-xl object-cover"
                    />
                </div>
                <Typography className="font-sans text-3xl font-bold">
                    {article.title}
                </Typography>
                <Typography className="font-sans font-medium">
                    {article.description}
                </Typography>
                <div className="flex w-full flex-col">
                    <Divider />
                    <NotionRenderer
                        recordMap={article.recordMap}
                        className="m-0 w-full p-0 font-sans"
                    />
                </div>
            </Container>
            <Divider className="w-0 py-10" />
        </>
    );
}
