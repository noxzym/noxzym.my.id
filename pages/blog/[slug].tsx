import { MyLayout } from "@/components/Layout";
import { getArticles } from "@/src/Notion";
import { Divider, Typography } from "@mui/material";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
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
        <MyLayout
            SEO={{
                title: article.title,
                canonical: `https://noxzym.my.id/blog/${article.slug}`,
                openGraph: {
                    url: `https://noxzym.my.id/blog/${article.slug}`,
                    title: `${article.title} | Noxzym`,
                    article: {
                        authors: ["Orchitiadi Ismaulana Putra", "Noxzym"],
                        publishedTime: article.date,
                        modifiedTime: article.date,
                        tags: article.tags
                    }
                }
            }}
        >
            <div className="relative aspect-[2/1] h-auto w-full md:aspect-[6/2]">
                <Image
                    src={article.cover}
                    fill
                    alt="exampleImage"
                    className="rounded-xl object-cover"
                />
            </div>
            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-3">
                    <Typography className="font-poppins text-3xl font-bold dark:text-white/90">
                        {article.title}
                    </Typography>
                    <Typography className="font-sans font-medium dark:text-white/50">
                        {article.description}
                    </Typography>
                </div>
                <Divider className="border-black dark:border-white/30" />
                <div className="flex flex-col">
                    <NotionRenderer
                        recordMap={article.recordMap}
                        className="m-0 w-full p-0 font-sans dark:text-white/80"
                    />
                </div>
            </div>
        </MyLayout>
    );
}
