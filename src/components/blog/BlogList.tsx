"use client";

import { IArticle } from "@/types";
import Link from "next/link";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export const BlogList = ({ pages }: { pages: IArticle[] }) => {
    const [state, setState] = useState<string>("");

    return (
        <div className="flex flex-col gap-8">
            <Input
                value={state}
                onChange={e => setState(e.target.value)}
                placeholder="Search Articles"
                className=""
            />
            {pages
                .filter(page =>
                    page.title
                        .toLowerCase()
                        .concat(" ", page.tags.join(", "))
                        .includes(state.toLowerCase())
                )
                .map((page, i) => (
                    <div key={i} className="grid w-full gap-3 md:grid-cols-3">
                        <Link href={`/blog/${page.slug}`}>
                            <Avatar className="aspect-video h-auto w-full rounded-lg">
                                <AvatarImage src={page.image} className="object-cover" />
                                <AvatarFallback />
                            </Avatar>
                        </Link>
                        <div className="flex w-full flex-col gap-3 self-center md:col-span-2">
                            <div className="flex w-full flex-col gap-1">
                                <Link
                                    href={`/blog/${page.slug}`}
                                    className="text-inherit no-underline"
                                >
                                    <p className="font-sans text-xl font-bold dark:text-white/80">
                                        {page.title}
                                    </p>
                                </Link>
                                <p className="font-sans text-xs font-semibold text-[#909090] dark:text-white/50">
                                    {page.publishedTime}
                                </p>
                                <p className="font-sans text-sm font-medium dark:text-white/50">
                                    {page.description}
                                </p>
                            </div>
                            <div className="flex w-full flex-wrap gap-2">
                                {page.tags.map((tag, i) => (
                                    <Button
                                        key={i}
                                        color="inherit"
                                        className="bg-[#C9C9C9] px-3 py-1 font-sans text-xs font-semibold normal-case"
                                    >
                                        {tag}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    );
};
