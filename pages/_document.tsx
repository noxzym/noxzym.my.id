import { Head, Html, Main, NextScript } from "next/document";

export default function MyDocument() {
    return (
        <Html className="relative overflow-x-hidden overflow-y-scroll scroll-smooth">
            <Head>
                <link
                    href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
                    rel="stylesheet"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
