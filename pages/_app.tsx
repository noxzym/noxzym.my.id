import MyHead from "@/components/MyHead";
import MyNavbar from "@/components/MyNavbar";
import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import "../src/styles/index.scss";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";
export default function MyApp({ Component, pageProps }: AppProps) {
    const ref = useRef(null);

    const options = {
        smooth: true,
        smartphone: {
            smooth: true
        }
    };
    return (
        <>
            <MyHead />
            <ThemeProvider enableSystem attribute="class">
                <LocomotiveScrollProvider options={options} containerRef={ref}>
                    <main data-scroll-container ref={ref}>
                        <MyNavbar />
                        <NextNProgress />
                        <Component {...pageProps} />
                    </main>
                </LocomotiveScrollProvider>
            </ThemeProvider>
        </>
    );
}
