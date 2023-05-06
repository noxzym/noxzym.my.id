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
            <meta name="theme-color" content="#DDDDDD" />
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
