import { NavigationBar } from "@/components/NavigationBar";
import { ProgressBar } from "@/components/ProgressBar";
import "@/styles/index.scss";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Analytics } from "@vercel/analytics/react";
import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"]
});

const theme = createTheme({
    palette: {
        background: {
            default: "#DDDDDD"
        }
    }
});

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <style jsx global>
                {`
                    :root {
                        --font-poppins: ${poppins.style.fontFamily};
                    }
                `}
            </style>
            <DefaultSeo
                description="noxzym's personal website"
                additionalLinkTags={[
                    {
                        rel: "icon",
                        type: "image/png",
                        href: "/assets/noxzym-without-text.png",
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
                            url: "https://noxzym.my.id/assets/noxzym-without-text.png",
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
            <ThemeProvider {...{ theme }}>
                <CssBaseline />
                <ProgressBar />
                <NavigationBar />
                <Component {...pageProps} />
            </ThemeProvider>
            <Analytics />
        </>
    );
}
