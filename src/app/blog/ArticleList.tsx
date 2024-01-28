"use client";

import { ArticleCard } from "@/components/card/ArticleCard";
import { Input } from "@/components/ui/input";
import { IArticle } from "@/types";
import { Blog } from "contentlayer/generated";
import { useState } from "react";

export const ArticleList = ({ pages }: { pages: Blog[] }) => {
    const [state, setState] = useState<string>("");

    return (
        <section className="flex flex-col gap-8">
            <Input
                value={state}
                onChange={e => setState(e.target.value)}
                placeholder="Search Articles"
                className=""
            />
            {pages
                .filter(page =>
                    page
                        .name!.toLowerCase()
                        .concat(" ", page.tags.join(", "))
                        .includes(state.toLowerCase())
                )
                .map((page, i) => (
                    <ArticleCard key={i} index={i} page={page} />
                ))}
        </section>
    );
};
