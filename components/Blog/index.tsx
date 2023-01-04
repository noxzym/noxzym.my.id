import { InferGetStaticPropsType } from "next";
import { getStaticProps } from "pages/blog";
import { useState } from "react";
import { ArticleList } from "./ArticleList";

const removeSearchState = (setSearchState: any) => {
    setSearchState("");
};
export const Blog = function ({
    posts,
    initialDisplayPosts,
    pagination
}: InferGetStaticPropsType<typeof getStaticProps>) {
    const [searchState, setSearchState] = useState("");
    return (
        <section className="relative flex w-full py-24 landscape:h-auto landscape:py-32 landscape:lg:py-32">
            <div className="flex w-full flex-col gap-5">
                <div className="font-poppins text-5xl font-extrabold">
                    Blog.
                </div>
                <div className="relative w-full">
                    <input
                        aria-label="Search articles"
                        type="text"
                        placeholder="Search articles"
                        value={searchState}
                        className="w-full rounded-md border-0 bg-[#C4C4C4] py-3 px-4 font-sans font-semibold text-[#222831] placeholder:text-[#222831] focus:outline-none focus:ring-2 focus:ring-[#222831] dark:bg-[#2B2B2B] dark:text-[#DDDDDD]  dark:placeholder:text-[#DDDDDD] dark:focus:ring-[#DDDDDD]"
                        onChange={e => setSearchState(e.target.value)}
                    />
                    <div className="absolute right-3 top-3">
                        {searchState.length ? (
                            <svg
                                className="h-6 w-6 cursor-pointer fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                onClick={() =>
                                    removeSearchState(setSearchState)
                                }
                            >
                                <path d="M4.227 4.227a.774.774 0 0 1 1.095 0L12 10.905l6.678-6.678a.774.774 0 1 1 1.095 1.095L13.095 12l6.678 6.678a.774.774 0 1 1-1.095 1.095L12 13.095l-6.678 6.678a.774.774 0 1 1-1.095-1.095L10.905 12 4.227 5.322a.774.774 0 0 1 0-1.095Z" />
                            </svg>
                        ) : (
                            <svg
                                className="h-6 w-6 fill-none stroke-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        )}
                    </div>
                </div>
                <ArticleList
                    posts={posts}
                    initialDisplayPosts={initialDisplayPosts}
                    pagination={pagination}
                    searchState={searchState}
                    setSearchState={setSearchState}
                />
            </div>
        </section>
    );
};
