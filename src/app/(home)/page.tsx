import Articles from "./section/Articles-Projects/Articles";
import Projects from "./section/Articles-Projects/Projects";
import Jumbotron from "./section/Jumbotron";

export default function HomePage() {
    return (
        <>
            <Jumbotron />
            <Articles />
            <Projects />
        </>
    );
}
