import MyHead from "@/components/MyHead";
import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import dynamic from "next/dynamic";
import "../styles/index.scss";

const ProgressBar = dynamic(
    () => {
        return import("@/components/ProgressBar");
    },
    { ssr: false }
);
export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <MyHead />
            <ThemeProvider enableSystem attribute="class">
                <ProgressBar />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}
