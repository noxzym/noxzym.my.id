import { LatestRelease } from "@/components/LatestRelease";
import { NoxzymIcon } from "@/components/NoxzymIcon";
import { getArticles } from "@/src/Notion";
import { Container, Divider, Typography } from "@mui/material";
import { InferGetStaticPropsType } from "next";
import { NextSeo } from "next-seo";

export const getStaticProps = async () => {
    const notion = await getArticles();

    return {
        props: {
            notion
        },
        revalidate: 60
    };
};

export default function HomePage({
    notion
}: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>
            <NextSeo
                title="Home | Noxzym"
                canonical="https://noxzym.my.id/"
                openGraph={{
                    url: "https://noxzym.my.id/",
                    title: "Home | Noxzym"
                }}
            />
            <Container
                fixed
                className="h-[calc(100vh-300px)] px-5 md:h-[calc(100vh-200px)] md:px-40"
            >
                <div className="flex h-full w-full flex-col items-center justify-center gap-5">
                    <NoxzymIcon className="h-48 w-48 rounded-xl" />
                    <div className="flex w-full flex-col items-center gap-3">
                        <Typography className="font-sans text-3xl font-bold">
                            noxzym
                        </Typography>
                        <Typography
                            align="center"
                            className="font-sans text-lg font-medium"
                        >
                            18 years old student who is interested in
                            technology-related things
                        </Typography>
                    </div>
                </div>
            </Container>
            <LatestRelease notion={notion} />
            <Divider className="w-0 py-10" />
        </>
    );
}
