import { ArticleCard } from "@/components/Card/ArticleCard";
import { MyLayout } from "@/components/Layout";
import { getArticles } from "@/src/Notion";
import { Clear, Search } from "@mui/icons-material";
import { Button, Input, Typography } from "@mui/material";
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
        <MyLayout>
            <Typography className="text-center font-sans text-3xl font-bold dark:text-white/90">
                My Blog
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
                className="gap-3 rounded-lg border-2 border-solid border-black/10 bg-black/5 px-3 py-1 font-semibold text-black/50 dark:border-white/10 dark:bg-white/5 dark:text-white/80"
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
        </MyLayout>
    );
}
