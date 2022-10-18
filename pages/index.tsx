import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Jumbotron } from "@/components/Jumbotron";

export default function Homepage() {
    return (
        <>
            <Jumbotron />
            <About />
            <Contact />
        </>
    );
}
