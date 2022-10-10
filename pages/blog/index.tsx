import { ArticleCard } from "@/components/article";
import { LazyLoading } from "@/components/LazyLoading";
import { IArticleComponent } from "@/types";
import { getAllArticles } from "@/utils/api";
import { GetStaticProps } from "next";
import { Session } from "next-auth";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface IArticles {
    articles: IArticleComponent["meta"][];
}

function OpenNewWindow() {
    const dualScreenLeft = window.screenLeft;
    const dualScreenTop = window.screenTop;
    const width = window.innerWidth;
    const height = window.innerHeight;

    const systemZoom = width / window.screen.availWidth;
    const left = (width - 600) / 2 / systemZoom + dualScreenLeft;
    const top = (height - 800) / 2 / systemZoom + dualScreenTop;
    window.open(
        "/sign-in",
        "_blank",
        `popup,width=600,height=800,top=${top},left=${left}`
    );
}

function GetAccount(
    session: Session,
    status: "loading" | "authenticated" | "unauthenticated",
    router: NextRouter,
    setAccount: Dispatch<SetStateAction<(boolean | any[])[]>>
) {
    if (status === "loading") return;
    setAccount([
        true,
        [
            <div key={0} className="flex flex-row items-center gap-2">
                {status === "unauthenticated" ? (
                    <svg
                        className="h-12 w-12 fill-[#222831] dark:fill-[#DDDDDD]"
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48Zm-50.22 116.82C218.45 151.39 236.28 144 256 144s37.39 7.44 50.11 20.94c12.89 13.68 19.16 32.06 17.68 51.82C320.83 256 290.43 288 256 288s-64.89-32-67.79-71.25c-1.47-19.92 4.79-38.36 17.57-51.93ZM256 432a175.49 175.49 0 0 1-126-53.22 122.91 122.91 0 0 1 35.14-33.44C190.63 329 222.89 320 256 320s65.37 9 90.83 25.34A122.87 122.87 0 0 1 382 378.78 175.45 175.45 0 0 1 256 432Z" />
                    </svg>
                ) : (
                    <div className="relative h-12 w-12 rounded-full">
                        <Image
                            src={session.user.image}
                            alt={session.user.name}
                            layout="fill"
                            loading="lazy"
                            className="rounded-full"
                        />
                    </div>
                )}
                <div className="font-segoe-bold text-lg text-[#222831] dark:text-[#DDDDDD]">
                    {status === "unauthenticated"
                        ? "Guest"
                        : `Hi ${session.user.name}`}
                </div>
            </div>,
            <div
                key={1}
                className="flex flex-row items-center justify-center gap-1"
            >
                <button
                    {...(status === "authenticated" &&
                    session.user.id === process.env.NEXT_PUBLIC_DISCORD_USER_ID
                        ? {
                              className:
                                  "transition-on-theme-change rounded-md bg-[#C7C7C7] px-3 py-1 shadow transition-all duration-500 ease-in-out hover:shadow-none hover:ring-2 hover:ring-[#252525] disabled:bg-[#A1A1A1] disabled:hover:ring-0 dark:bg-[#444444] dark:hover:ring-[#DADADA] disabled:dark:bg-[#222222] disabled:dark:hover:ring-0",
                              onClick: () => router.push("/blog/editor")
                          }
                        : {
                              className: "hidden"
                          })}
                >
                    <div className="font-segoe-bold text-lg text-[#222831] dark:text-[#DDDDDD]">
                        Editor
                    </div>
                </button>
                <button
                    {...(status === "unauthenticated"
                        ? { onClick: () => OpenNewWindow() }
                        : { onClick: () => signOut({ redirect: false }) })}
                    className="transition-on-theme-change rounded-md bg-[#C7C7C7] px-3 py-1 shadow transition-all duration-500 ease-in-out hover:shadow-none hover:ring-2 hover:ring-[#252525] dark:bg-[#444444] dark:hover:ring-[#DADADA]"
                >
                    <div className="font-segoe-bold text-lg text-[#222831] dark:text-[#DDDDDD]">
                        {status === "unauthenticated" ? "Login" : "Logout"}
                    </div>
                </button>
            </div>
        ]
    ]);
}

export default function MyBlog({ articles }: IArticles) {
    const router = useRouter();
    const { data: session, status } = useSession();
    const [blogs, setBlogs] = useState([
        false,
        <LazyLoading
            key={0}
            className="mx-auto h-40 w-40 stroke-[#222831] stroke-[3] dark:stroke-[#DDDDDD]"
        />
    ]);
    const [account, setAccount] = useState([
        false,
        [...Array(2).keys()].map(i => (
            <LazyLoading
                key={i}
                className="h-12 w-12 stroke-[#222831] stroke-[4] dark:stroke-[#DDDDDD]"
            />
        ))
    ]);

    useEffect(() => {
        if (!account[0]) {
            GetAccount(session, status, router, setAccount);
        }
    }, [account, session, status, router]);

    useEffect(() => {
        GetAccount(session, status, router, setAccount);
    }, [session, status, router]);

    useEffect(() => {
        if (!blogs[0]) {
            setBlogs([
                true,
                <div
                    key={0}
                    className="flex w-full flex-row items-center justify-between text-[#222831] drop-shadow-md dark:text-[#dddddd] lg:px-10"
                >
                    <div className="font-segoe-bold text-xl lg:text-2xl xl:text-4xl">
                        Published
                    </div>
                    <div className="font-segoe text-xl font-bold xl:text-2xl">
                        {articles.length} Posts
                    </div>
                </div>,
                <div
                    key={1}
                    className="flex w-full grid-cols-2 flex-col gap-3 lg:grid lg:gap-5"
                >
                    {articles.map((article, i) => (
                        <Link key={i} href={`/blog/p/${article.slug}`}>
                            <ArticleCard meta={article} />
                        </Link>
                    ))}
                </div>
            ]);
        }
    }, [blogs, articles]);

    // useEffect(() => {
    //     if (!blogs[0]) {
    //         setBlogs([
    //             true,
    //             <div
    //                 key={0}
    //                 className="flex w-full grid-cols-3 flex-col gap-3 lg:grid"
    //             >
    //                 {posts.map((post, i) => (
    //                     <Link
    //                         key={i}
    //                         className="h-52 w-full"
    //                         href={`/blog/p/${post.slug}`}
    //                     >
    //                         <div className="group relative flex h-full w-full cursor-pointer items-center justify-center rounded-xl">
    //                             <div className="transition-on-theme-change flex h-full w-full flex-col rounded-xl bg-[#C7C7C7] text-[#222831] shadow transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:shadow-none group-hover:ring-2 group-hover:ring-[#252525] dark:bg-[#171717] dark:text-[#DDDDDD] dark:group-hover:ring-[#DADADA]">
    //                                 <div className="relative">
    //                                     <picture>
    //                                         <img
    //                                             src={post.thumbnail}
    //                                             alt={post.title}
    //                                             className="max-h-[100px] w-full rounded-t-xl"
    //                                         />
    //                                     </picture>
    //                                     <picture>
    //                                         <img
    //                                             src={post.authorImage}
    //                                             alt={post.author}
    //                                             className="absolute -bottom-12 left-3 h-16 w-16 rounded-full border-2"
    //                                         />
    //                                     </picture>
    //                                     <div className="absolute bottom-1 right-1 rounded-xl bg-[#C7C7C7] px-2 font-segoe-bold text-[10px] text-[#222831] dark:bg-[#171717] dark:text-[#DDDDDD]">
    //                                         {`${parseDatePost(post.date)} · ${
    //                                             post.readingTime
    //                                         }`}
    //                                     </div>
    //                                     <div className="absolute -bottom-12 left-[80px] flex flex-col">
    //                                         <div className="font-segoe-bold text-xl capitalize">
    //                                             {post.author}
    //                                         </div>
    //                                         <div className="font-segoe-bold text-xs text-slate-700 dark:text-slate-300">
    //                                             Author
    //                                         </div>
    //                                     </div>
    //                                 </div>
    //                                 <hr className="mx-2 mt-14 border-b-[1px] border-b-slate-600 dark:border-b-slate-400" />
    //                                 <div className="mx-4 my-auto py-2 font-segoe-bold text-sm">
    //                                     {post.title}
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </Link>
    //                 ))}
    //             </div>
    //         ]);
    //     }
    // }, [blogs, posts]);

    return (
        <section className="px-[5%] pt-20 lg:px-[15%] lg:pt-24">
            <div className="transition-on-theme-change flex w-full flex-col gap-3">
                <div className="transition-on-theme-change flex w-full flex-wrap items-center justify-between gap-3 rounded-xl bg-[#C7C7C7] p-3 dark:bg-[#222222]">
                    {account[1]}
                </div>
                {blogs.slice(1)}
            </div>
        </section>
    );
}

export const getStaticProps: GetStaticProps = () => {
    const articles = getAllArticles().map(post => post.meta);
    return {
        props: {
            articles
        }
    };
};
