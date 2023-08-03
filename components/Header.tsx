import { NextSeo, NextSeoProps } from "next-seo";
import { NavigationBar } from "./NavigationBar";

const PATHNAME = {
    "/": "Home",
    "/about": "About Me",
    "/contact": "Contact",
    "/blog": "Blog"
};

export const MyHeader = ({
    pathname,
    SEO
}: {
    pathname: string;
    SEO?: NextSeoProps;
}) => {
    return (
        <>
            <NextSeo
                {...{
                    title: `Noxzym - ${PATHNAME[pathname]}`,
                    canonical: `https://noxzym.my.id${pathname}`,
                    openGraph: {
                        url: `https://noxzym.my.id${pathname}`,
                        title: `Noxzym - ${PATHNAME[pathname]}`
                    },
                    ...SEO
                }}
            />
            <NavigationBar />
        </>
    );
};
