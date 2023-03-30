import { ArrowRightAlt } from "@mui/icons-material";
import { Button, Container, Typography } from "@mui/material";
import { InferGetStaticPropsType } from "next";
import Link from "next/link";
import { getStaticProps } from "pages";
import { ArticleCard } from "./Card/ArticleCard";

export const LatestRelease = ({
    notion
}: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <Container fixed className="flex flex-col gap-5 px-5 pt-10 md:px-40">
            <div className="flex w-full items-center justify-between">
                <Typography className="font-sans text-3xl font-semibold">
                    Latest Release
                </Typography>
                <Link
                    href="/blog"
                    className="flex items-center text-inherit no-underline"
                >
                    <Button
                        color="inherit"
                        endIcon={<ArrowRightAlt />}
                        className="justify-start px-3 py-2 normal-case"
                    >
                        <Typography className="font-sans text-lg font-semibold">
                            See All
                        </Typography>
                    </Button>
                </Link>
            </div>
            {notion.map((article, i) => (
                <ArticleCard key={i} article={article} />
            ))}
        </Container>
    );
};
