import { Project } from "@/components/Project";
import { Skill } from "@/components/Skill";
import { Container, Divider, Typography } from "@mui/material";
import { NextSeo } from "next-seo";

export default function AboutPage() {
    return (
        <>
            <NextSeo
                title="About Me | Noxzym"
                canonical="https://noxzym.my.id/about"
                openGraph={{
                    url: "https://noxzym.my.id/about",
                    title: "About Me | Noxzym"
                }}
            />
            <Container
                fixed
                className="flex flex-col gap-3 px-5 pt-10 md:px-40"
            >
                <Typography className="font-sans text-xl font-semibold">
                    Hi, my name is
                </Typography>
                <Typography className="font-sans text-5xl font-bold">
                    Orchitiadi Ismaulana Putra
                </Typography>
                <Typography className="font-sans font-medium">
                    I&apos;m an Informatics student in Gunadarma University. Who
                    is interested in technology-related fields, especially in
                    the field of programming.
                </Typography>
            </Container>
            <Skill />
            <Project />
            <Divider className="w-0 py-10" />
        </>
    );
}
