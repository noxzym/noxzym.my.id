import { ArticleCard } from "@/components/Card/ArticleCard";
import { getArticles } from "@/src/Notion";
import { Clear, Search } from "@mui/icons-material";
import { Button, Container, Divider, Input, Typography } from "@mui/material";
import { NextSeo } from "next-seo";
import { InferGetStaticPropsType } from "next/types";
import { useState } from "react";

export const getStaticProps = async () => {
    const articles = await getArticles();

    return {
        props: {
            articles
        },
        revalidate: 60
    };
};

export default function BlogPage({
    articles
}: InferGetStaticPropsType<typeof getStaticProps>) {
    const [searchState, setSearchState] = useState("");
    const removeSearchState = () => setSearchState("");

    return (
        <>
            <NextSeo
                title="Blog | Noxzym"
                canonical="https://noxzym.my.id/blog"
                openGraph={{
                    url: "https://noxzym.my.id/blog",
                    title: "Blog | Noxzym"
                }}
            />
            <Container
                fixed
                className="flex flex-col gap-5 px-5 pt-10 md:px-40"
            >
                <Typography className="font-sans text-3xl font-semibold">
                    Blog.
                </Typography>
                <Input
                    disableUnderline
                    fullWidth
                    onChange={e => setSearchState(e.target.value)}
                    placeholder="Search Articles"
                    startAdornment={<Search />}
                    endAdornment={
                        searchState.length ? (
                            <Button
                                startIcon={<Clear />}
                                color="inherit"
                                sx={{
                                    "& > span": { margin: 0 }
                                }}
                                className="min-w-0 p-0"
                                onClick={removeSearchState}
                            />
                        ) : null
                    }
                    value={searchState}
                    className="gap-3 rounded-lg bg-[#C4C4C4] py-2 px-3 font-semibold"
                />
                {articles
                    .filter(article =>
                        `${article.title}${article.tags.join("")}`
                            .toLowerCase()
                            .includes(searchState.toLowerCase())
                    )
                    .map((article, i) => (
                        <ArticleCard key={i} article={article} />
                    ))}
            </Container>
            <Divider className="w-0 py-10" />
        </>
    );
}
