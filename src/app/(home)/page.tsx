import Articles from "./section/Articles";
import Jumbotron from "./section/Jumbotron";
import Projects from "./section/Projects";

export default function HomePage() {
    return (
        <>
            <Jumbotron />
            <Articles />
            <Projects />
        </>
    );
}
