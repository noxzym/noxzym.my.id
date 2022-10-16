import MyHead from "@/components/MyHead";
import MyNavbar from "@/components/MyNavbar";
import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import "../src/styles/index.scss";

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <MyHead />
            <ThemeProvider enableSystem attribute="class">
                <MyNavbar />
                <NextNProgress />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}
