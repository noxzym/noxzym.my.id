import { Head, Html, Main, NextScript } from "next/document";

export default function MyDocument() {
    return (
        <Html
            className="relative overflow-x-hidden overflow-y-scroll"
            lang="en"
        >
            <Head />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
