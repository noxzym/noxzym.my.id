import Head from "next/head";
import { useRouter } from "next/router";
import Picture from "@/public/assets/images/noxzym-without-text.png";

export default function MyHead() {
    const router = useRouter();

    function GetTitle() {
        let title = "Noxzym - ";
        const splittedPath = router.asPath.split(/(?=\/)/);
        switch (splittedPath[0]) {
            case "/":
                return title.concat("Home");
            case "/blog":
                if (splittedPath.length > 1) {
                    return title.concat(
                        decodeURIComponent(
                            splittedPath.slice(2).join(" ").replace(/\//g, "")
                        )
                    );
                }
                return title.concat("Blog");
            case "/about":
                return title.concat("About");
            case "/contact":
                return title.concat("Contact");
        }
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
            <meta property="og:title" content={GetTitle()} />
            <meta property="og:description" content={GetDescription()} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://noxzym.my.id" />
            <meta property="og:image" content={Picture.src} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@/noxzym" />
            <meta name="twitter:creator" content="@/noxzym" />
            <meta name="twitter:title" content={GetTitle()} />
            <meta name="twitter:description" content={GetDescription()} />
            <meta name="twitter:image" content={Picture.src} />
        </Head>
    );
}
