import { AboutMe } from "./AboutMe";
import { Contact } from "./Contact";
import { Experience } from "./Experience";
import { Jumbotron } from "./Jumbotron";

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
