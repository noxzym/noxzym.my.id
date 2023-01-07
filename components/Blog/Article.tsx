import { InferGetStaticPropsType } from "next";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { NextSeo } from "next-seo";
import { getStaticProps } from "pages/blog/[...slug]";
import { useEffect, useState } from "react";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
import { LazyLoading } from "../LazyLoading";

const parseDate = function (datestring: string) {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    const date = new Date(datestring);
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${month} ${day}, ${year} ${hours}:${minutes}`;
};

export const Article = function ({
    post
}: InferGetStaticPropsType<typeof getStaticProps>) {
    const [content, setContent] = useState(
        <LazyLoading
            key={0}
            className="m-auto h-12 w-12 stroke-[#222831] stroke-[4] dark:stroke-[#DDDDDD]"
        />
    );

    useEffect(() => {
        load();
        async function load() {
            const serializeMarkdown = await serialize(post.markdown, {
                mdxOptions: {
                    rehypePlugins: [
                        rehypeSlug,
                        rehypeAutolinkHeadings,
                        [rehypePrism, { ignoreMissing: true }]
                    ]
                }
            });
            setContent(
                <>
                    <div className="flex w-full flex-col items-center justify-center gap-1">
                        <div className="text-center font-poppins text-4xl font-bold text-[#222831] dark:text-[#DDDDDD] ">
                            {post.title}
                        </div>
                        <div className="text-center text-sm font-bold text-[#222831] dark:text-[#DDDDDD] ">
                            {parseDate(post.date)} &bull; {post.readingTime}
                        </div>
                    </div>
                    <hr className="mt-5 rounded-md border-[#222831] dark:border-[#DDDDDD]" />
                    <div className="prose max-w-full dark:prose-dark">
                        <MDXRemote {...serializeMarkdown} lazy />
                    </div>
                </>
            );
        }
    }, [post.date, post]);

    return (
        <>
            <NextSeo
                title={post.title}
                description={post.description}
                canonical={`https://noxzym.my.id/blog/${post.slug}`}
                openGraph={{
                    type: "website",
                    url: `https://noxzym.my.id/blog/${post.slug}`,
                    title: post.title,
                    siteName: "noxzym.my.id",
                    description: post.description,
                    article: {
                        publishedTime: post.date,
                        tags: post.tags
                    }
                }}
            />
            {content}
        </>
    );
};
