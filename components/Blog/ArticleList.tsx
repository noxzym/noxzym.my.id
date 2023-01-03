import { InferGetStaticPropsType } from "next";
import Link from "next/link";
import { getStaticProps } from "pages/blog";
import React, { Dispatch, SetStateAction } from "react";

export const ArticleList = function ({
    posts,
    initialDisplayPosts,
    pagination,
    searchState,
    setSearchState
}: InferGetStaticPropsType<typeof getStaticProps> & {
    searchState: string;
    setSearchState: Dispatch<SetStateAction<string>>;
}) {
    const filteredArticles = posts.filter(article =>
        `${article.title}${article.tags.join(" ")}`
            .toLowerCase()
            .includes(searchState.toLowerCase())
    );

    const displayArticles =
        initialDisplayPosts.length && !searchState
            ? initialDisplayPosts
            : filteredArticles;

    function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.stopPropagation();
        e.preventDefault();
        setSearchState((e.target as HTMLButtonElement).id);
    }

    return (
        <div className="flex w-full flex-col gap-7">
            {displayArticles.map((post, index) => (
                <Link href={`blog/${post.slug}`} key={index}>
                    <div className="flex w-full flex-col gap-2">
                        <div className="font-segoe text-2xl font-bold">
                            {post.title}
                        </div>
                        <div className="flex w-full flex-wrap gap-3">
                            {post.tags
                                .sort((a, b) => a.length - b.length)
                                .map((tag, indexTag) => (
                                    <button
                                        key={indexTag}
                                        onClick={e => handleClick(e)}
                                    >
                                        <div
                                            id={tag}
                                            className="rounded-md bg-[#C4C4C4] py-1 px-2 font-segoe text-xs font-semibold hover:bg-[#ABABAB] dark:bg-[#2B2B2B] hover:dark:bg-[#454545]"
                                        >
                                            {tag}
                                        </div>
                                    </button>
                                ))}
                        </div>
                        <div className="font-segoe text-sm">{post.description}</div>
                    </div>
                </Link>
            ))}
        </div>
    );
};
