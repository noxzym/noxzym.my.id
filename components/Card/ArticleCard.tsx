import { IArticle } from "@/types";
import { Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export const ArticleCard = ({ article }: { article: IArticle }) => {
    return (
        <div className="grid w-full gap-3 md:grid-cols-3">
            <Link
                href={`/blog/${article.slug}`}
                className="relative aspect-video h-auto w-full"
            >
                <Image
                    src={article.cover}
                    fill
                    alt="exampleImage"
                    className="rounded object-cover"
                />
            </Link>
            <div className="flex w-full flex-col gap-3 md:col-span-2">
                <div className="flex w-full flex-col gap-1">
                    <Typography className="font-sans text-xs font-semibold text-[#909090]">
                        {article.date}
                    </Typography>
                    <Link
                        href={`/blog/${article.slug}`}
                        className="text-inherit no-underline"
                    >
                        <Typography className="font-sans text-xl font-bold">
                            {article.title}
                        </Typography>
                    </Link>
                    <Typography className="font-sans text-sm font-medium">
                        {article.description}
                    </Typography>
                </div>
                <div className="flex w-full flex-wrap gap-2">
                    {article.tags.map((tag, i) => (
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
    );
};
