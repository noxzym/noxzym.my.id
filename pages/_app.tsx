import MyHead from "@/components/MyHead";
import { ProgressBar } from "@/components/ProgressBar";
import { Analytics } from "@vercel/analytics/react";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import "../styles/index.scss";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <MyHead />
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
