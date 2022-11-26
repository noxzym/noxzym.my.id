import { About } from "@/components/About";
import { Container } from "@/components/Container";
import { Contact } from "@/components/Contaxt";
import { Jumbotron } from "@/components/Jumbotron";

export default function HomePage() {
    return (
        <Container>
            <Jumbotron />
            <About />
            <Contact />
        </Container>
    );
}
