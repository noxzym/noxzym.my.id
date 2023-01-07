import { ProgressBar } from "@/components/ProgressBar";
import { Analytics } from "@vercel/analytics/react";
import { AnimatePresence } from "framer-motion";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import "../styles/index.scss";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <DefaultSeo
                title="Home | Noxzym"
                description="noxzym's personal website"
                canonical="https://noxzym.my.id"
                additionalLinkTags={[
                    {
                        rel: "icon",
                        type: "image/png",
                        href: "/assets/images/noxzym-without-text.png",
                        sizes: "16x16"
                    }
                ]}
                openGraph={{
                    type: "website",
                    url: "https://noxzym.my.id",
                    title: "Home | Noxzym",
                    siteName: "noxzym.my.id",
                    description: "noxzym's personal website",
                    images: [
                        {
                            url: "https://noxzym.my.id/assets/images/noxzym-without-text.png",
                            width: 512,
                            height: 512,
                            alt: "Noxzym"
                        }
                    ]
                }}
                twitter={{
                    handle: "@/noxzym",
                    site: "@/noxzym",
                    cardType: "summary_large_image"
                }}
                additionalMetaTags={[
                    {
                        name: "keywords",
                        content:
                            "orchitiadi ismaulana putra, orchitiadi, orchit, orchit07, noxzym, mahasiswa gunadarma"
                    },
                    {
                        name: "robots",
                        content: "index, follow"
                    }
                ]}
            />
            <ThemeProvider enableSystem attribute="class">
                <AnimatePresence initial={false}>
                    <ProgressBar />
                    <Component {...pageProps} />
                    <Analytics />
                </AnimatePresence>
            </ThemeProvider>
        </>
    );
}
