import React from "react";
import { IArticleComponent } from "@/types";

export const ArticleCard = React.forwardRef<
    HTMLDivElement,
    { meta: IArticleComponent["meta"] }
>(function ArticleCard(props, ref) {
    const meta = (props as { meta: IArticleComponent["meta"] }).meta;
    return (
        <div
            {...props}
            ref={ref}
            className="transition-on-theme-change flex w-full cursor-pointer flex-col gap-3 rounded-md bg-[#C7C7C7] p-5 ring-1 ring-[#333333] duration-300 ease-in-out hover:scale-105 dark:bg-[#222222] dark:ring-[#C7C7C7]"
        >
            <div className="flex w-full flex-col">
                <div className="font-segoe-bold text-[#222831] dark:text-[#DDDDDD] lg:text-lg xl:text-xl">
                    {meta.title}
                </div>
                <hr className="border-t-[1px] border-t-[#333333] dark:border-t-[#C7C7C7]" />
                <div className="font-segoe-bold text-sm text-[#222831] dark:text-[#B7B7B7]">
                    {meta.description}
                </div>
            </div>
            <div className="flex flex-wrap items-center justify-between">
                <div className="flex flex-row gap-1">
                    <picture>
                        <img
                            src={meta.authorImage}
                            alt={meta.author}
                            className="w-6 rounded-full"
                        />
                    </picture>
                    <div className="font-segoe-bold capitalize">
                        {meta.author}
                    </div>
                </div>
                <div className="font-segoe-bold text-[#222831] dark:text-[#DDDDDD]">
                    Read More • {meta.readingTime}
                </div>
            </div>
        </div>
    );
});
