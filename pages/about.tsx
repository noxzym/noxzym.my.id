import { About } from "@/components/About";
import { Container } from "@/components/Container";
import { NextSeo } from "next-seo";

export default function AboutPage() {
    return (
        <>
            <NextSeo
                title="About | Noxzym"
                canonical="https://noxzym.my.id/about"
                openGraph={{
                    url: "https://noxzym.my.id/about",
                    title: "About | Noxzym"
                }}
            />
            <Container className="relative flex w-full flex-col items-center justify-center gap-3 pt-24 pb-10 text-[#222831] dark:text-[#DDDDDD] landscape:pb-8 landscape:pt-16 lg:landscape:pt-32">
                <About />
            </Container>
        </>
    );
}
