import { Container } from "@/components/Container";
import { Jumbotron } from "@/components/Jumbotron";

export default function HomePage() {
    return (
        <Container className="relative flex h-screen w-full flex-col items-center justify-center gap-3 landscape:h-auto landscape:py-40 lg:landscape:py-0 lg:landscape:h-screen">
            <Jumbotron />
        </Container>
    );
}
