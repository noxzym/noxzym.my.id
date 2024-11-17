import { DefaultMetadata } from "@/lib/constants";
import { Metadata } from "next";
import AboutMe from "./section/AboutMe";
import MyCertificates from "./section/MyCertificates";
import MyEducation from "./section/MyEducation";

export const revalidate = 60;

export default function AboutPage() {
    return (
        <>
            <AboutMe />
            <MyEducation />
            <MyCertificates />
        </>
    );
}

export const metadata: Metadata = {
    title: "About",
    openGraph: {
        ...DefaultMetadata.openGraph,
        title: "About",
        url: `${DefaultMetadata.openGraph.url}/about`
    },
    twitter: {
        ...DefaultMetadata.twitter,
        title: "About"
    }
};
