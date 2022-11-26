import Picture from "@/public/assets/images/noxzym-without-text.png";
import Head from "next/head";

export default function MyHead() {
    function GetTitle() {
        return "Noxzym";
    }

    function GetDescription() {
        return "noxzym's personal website";
    }

    return (
        <Head>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <meta charSet="UTF-8" />
            <title>{GetTitle()}</title>
            <meta name="description" content={GetDescription()} />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href={Picture.src}
            />
            <meta
                name="keywords"
                content="orchit, noxzym, maakoo, orchit07, orchitiadi, gunadarma"
            />
            <meta name="robots" content="index, follow" />
            {/* Open Graph */}
            <meta property="og:title" content={GetTitle()} />
            <meta property="og:description" content={GetDescription()} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://noxzym.my.id" />
            <meta property="og:image" content={Picture.src} />
            {/* Twitter  */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@/noxzym" />
            <meta name="twitter:creator" content="@/noxzym" />
            <meta name="twitter:title" content={GetTitle()} />
            <meta name="twitter:description" content={GetDescription()} />
            <meta name="twitter:image" content={Picture.src} />
        </Head>
    );
}
