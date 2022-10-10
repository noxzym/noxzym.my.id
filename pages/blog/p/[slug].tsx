import { Article } from "@/components/article";
import { LazyLoading } from "@/components/LazyLoading";
import { IArticleComponent } from "@/types";
import { getArticleFromSlug, getSlugs } from "@/utils/api";
import "highlight.js/styles/atom-one-dark.css";
import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { useEffect, useState } from "react";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import remarkGFM from "remark-gfm";

interface MDXArticle {
    article: {
        source: MDXRemoteSerializeResult<
            Record<string, unknown>,
            Record<string, string>
        >;
        meta: IArticleComponent["meta"];
    };
}

export default function MyPost({ article }: MDXArticle) {
    const [content, setContent] = useState([
        false,
        <section key={0} className="transition-on-theme-change w-full">
            <LazyLoading className="mx-auto h-40 w-40 stroke-[#222831] stroke-[3] dark:stroke-[#DDDDDD]" />
        </section>
    ]);

    useEffect(() => {
        if (!content[0]) {
            setContent([true, <Article key={0} article={article} />]);
        }
    }, [content, article]);

    return (
        <>
            <div className="pt-20 lg:pt-28" />
            {content[1]}
        </>
    );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { slug } = params as { slug: string };
    const { content, meta } = getArticleFromSlug(slug);
    const mdxSource = await serialize(content, {
        parseFrontmatter: true,
        mdxOptions: {
            rehypePlugins: [
                rehypeSlug,
                [rehypeHighlight, { ignoreMissing: true }]
            ],
            remarkPlugins: [remarkGFM]
        }
    });
    return {
        props: {
            article: {
                meta,
                source: mdxSource
            }
        }
    };
};

export const getStaticPaths: GetStaticPaths = async ctx => {
    const paths = getSlugs().map(slug => ({ params: { slug } }));
    return {
        paths,
        fallback: false
    };
};
