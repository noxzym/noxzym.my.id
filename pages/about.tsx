import { About } from "@/components/About";
import { Container } from "@/components/Container";

export default function AboutPage() {
    return (
        <Container className="relative flex w-full flex-col items-center justify-center gap-3 pt-24 pb-10 text-[#222831] dark:text-[#DDDDDD] landscape:pb-8 landscape:pt-16 lg:landscape:pt-32">
            <About />
        </Container>
    );
}
