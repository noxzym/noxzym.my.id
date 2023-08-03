import { MyLayout } from "@/components/Layout";
import { getArticles } from "@/src/Notion";
import ShimmerEffect from "@/src/ShimmerEffect";
import toBase64 from "@/src/toBase64";
import { ILanyard } from "@/types";
import { Button, Typography } from "@mui/material";
import { InferGetStaticPropsType } from "next";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";

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
    const { data, isLoading } = useSWR<ILanyard>("/api/lanyard", x =>
        fetch(x).then(x => x.json())
    );

    return (
        <MyLayout>
            <div className="flex flex-col items-center justify-center gap-16">
                <div className="relative aspect-square w-36">
                    {!isLoading && (
                        <Image
                            src={`https://cdn.discordapp.com/avatars/${data.data.discord_user.id}/${data.data.discord_user.avatar}.png?size=4096`}
                            fill
                            alt="Noxzym's Picture"
                            placeholder="blur"
                            blurDataURL={`data:image/svg+xml;base64,${toBase64(
                                ShimmerEffect(144, 144)
                            )}`}
                            className="rounded-lg"
                        />
                    )}
                </div>
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-col">
                            <Typography className="text-center font-poppins text-2xl font-bold text-black/80 dark:text-white/80">
                                Orchitiadi
                            </Typography>
                            <Typography className="text-center font-poppins text-2xl font-bold text-black/80 dark:text-white/80">
                                Ismaulana Putra
                            </Typography>
                        </div>
                        <Typography className="text-center font-sans text-sm font-semibold text-black/80 dark:text-white/80">
                            Student | Back-end Developer
                        </Typography>
                    </div>
                    <Typography className="text-center font-sans text-sm font-semibold text-black/50 dark:text-white/50">
                        19 years old student who is interested in
                        technology-related things
                    </Typography>
                </div>
            </div>
            <div className="flex flex-col gap-6">
                <Typography className="text-center font-sans text-2xl font-bold text-black/80 dark:text-white/80">
                    About Me
                </Typography>
                <div className="flex flex-col gap-3">
                    <Typography className="text-justify font-sans text-sm font-semibold text-black/50 dark:text-white/50">
                        I am an informatics student at Gunadarma University. I
                        am continuously learning in programming. I have some
                        experience in both back-end and front-end development.
                    </Typography>
                    <Typography className="text-justify font-sans text-sm font-semibold text-black/50 dark:text-white/50">
                        Apart from that, I am also involved in assisting with
                        various tasks at &quot;Gemilang Hasta Kreasi&quot; which
                        is a garment manufacturing business owned by my family.
                    </Typography>
                    <Typography className="text-justify font-sans text-sm font-semibold text-black/50 dark:text-white/50">
                        Feel free to{" "}
                        <Link
                            href="/contact"
                            className="font-bold text-black/90 no-underline dark:text-white/90"
                        >
                            Contact Me
                        </Link>{" "}
                        if you have any questions.
                    </Typography>
                </div>
            </div>
            <div className="flex flex-col gap-6">
                <Typography className="text-center font-sans text-2xl font-bold text-black/80 dark:text-white/80">
                    Blog
                </Typography>
                <div className="flex flex-col gap-8">
                    <div className="grid gap-3 md:grid-cols-3">
                        {notion.map(n => (
                            <div key={n.id} className="flex flex-col gap-3">
                                <div className="relative aspect-video w-full">
                                    <Image
                                        alt={n.id}
                                        className="rounded-lg"
                                        src={n.cover}
                                        fill
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <Typography className="font-poppins text-xs font-semibold text-black/50 dark:text-white/50">
                                        {n.date}
                                    </Typography>
                                    <Link
                                        href={`/blog/${n.slug}`}
                                        className="font-poppins text-sm font-bold text-black/80 no-underline dark:text-white/80"
                                    >
                                        {n.title}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Link href="/blog" className="self-center no-underline">
                        <Button
                            color="inherit"
                            className="w-fit min-w-0 rounded-lg border-2 border-solid border-black/80 px-6 text-black/30 hover:bg-black/5 dark:border-white/80 dark:text-white/30 hover:dark:bg-white/5"
                        >
                            <Typography className="font-poppins text-lg font-bold text-black/80 dark:text-white/80">
                                Find More
                            </Typography>
                        </Button>
                    </Link>
                </div>
            </div>
        </MyLayout>
    );
}
