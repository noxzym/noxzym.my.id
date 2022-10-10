import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { IArticleComponent } from "@/types";
import { parseDateArticle } from "@/utils/parseDateArticle";

interface MDXArticle {
    article: {
        source: MDXRemoteSerializeResult<
            Record<string, unknown>,
            Record<string, string>
        >;
        meta: IArticleComponent["meta"];
    };
}

export const Article = function ({ article }: MDXArticle) {
    return (
        <>
            <section className="transition-on-theme-change w-full px-[5%] text-[#222831] dark:text-[#DDDDDD] lg:px-[15%]">
                <div className="relative flex w-full flex-col">
                    <div className="flex w-full flex-col">
                        <div className="font-segoe-bold text-xl lg:text-2xl xl:text-4xl">
                            {article.meta.title}
                        </div>
                        <div className="font-segoe">
                            Published on{" "}
                            {`${parseDateArticle(article.meta)} · ${
                                article.meta.readingTime
                            }`}
                        </div>
                    </div>
                    <picture className="self-center pt-3">
                        <img
                            src={article.meta.thumbnail}
                            alt={article.meta.slug}
                            className="max-w-[300px] rounded-md"
                        />
                    </picture>
                </div>
            </section>
            <section className="transition-on-theme-change w-full py-3 px-[3%] lg:px-[15%]">
                <div className="prose max-w-none prose-pre:p-0 dark:prose-invert">
                    <MDXRemote {...article.source} lazy />
                </div>
            </section>
        </>
    );
};
