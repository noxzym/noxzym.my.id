import { ProgressBar } from "@/components/ProgressBar";
import "@/styles/index.scss";
import {
    CssBaseline,
    ThemeProvider as MUIThemeProvider,
    createTheme
} from "@mui/material";
import { Analytics } from "@vercel/analytics/react";
import { DefaultSeo } from "next-seo";
import { ThemeProvider, useTheme } from "next-themes";
import { AppProps } from "next/app";
import { Open_Sans, Poppins } from "next/font/google";

const openSans = Open_Sans({
    weight: ["300", "400", "600", "700", "800"],
    subsets: ["latin"]
});
const poppins = Poppins({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"]
});

export default function MyApp({ Component, pageProps }: AppProps) {
    const { theme } = useTheme();

    const MUITheme = createTheme({
        palette: {
            mode: theme === "dark" ? "dark" : "light",
            background: {
                default: theme === "dark" ? "#0A0C0C" : "#E8E9E9"
            }
        }
    });

    return (
        <>
            <style jsx global>
                {`
                    :root {
                        --font-open-sans: ${openSans.style.fontFamily};
                        --font-poppins: ${poppins.style.fontFamily};
                        overflow-x: hidden;
                        overflow-y: scroll;
                        scroll-behavior: smooth;
                    }
                    body {
                        transition: background-color 0.3s ease-in-out;
                    }
                `}
            </style>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="application-name" content="Noxzym" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta
                name="apple-mobile-web-app-status-bar-style"
                content="default"
            />
            <meta name="apple-mobile-web-app-title" content="Noxzym" />
            <meta name="format-detection" content="telephone=no" />
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="theme-color" content="#E8E9E9" />
            <meta
                name="viewport"
                content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
            />
            <DefaultSeo
                description="noxzym's personal website"
                additionalLinkTags={[
                    {
                        rel: "icon",
                        type: "image/png",
                        href: "/icons/icon-512x512.png",
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
                            url: "https://noxzym.my.id/icons/icon-512x512.png",
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
            <ThemeProvider attribute="class">
                <MUIThemeProvider theme={MUITheme}>
                    <CssBaseline />
                    <ProgressBar />
                    <main className="flex min-h-screen flex-col">
                        <Component {...pageProps} />
                    </main>
                </MUIThemeProvider>
            </ThemeProvider>
            <Analytics />
        </>
    );
}
