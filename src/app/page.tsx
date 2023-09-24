"use client";

import { AboutMe } from "@/components/AboutMe";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Jumbotron } from "@/components/Jumbotron";

export default function Home() {
    return (
        <>
            <Jumbotron />
            <AboutMe />
            <Experience />
            <Contact />
        </>
    );
}
