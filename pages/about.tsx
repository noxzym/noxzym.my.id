import { About } from "@/components/About";
import { Container } from "@/components/Container";

export default function AboutPage() {
    return (
        <Container className="relative flex w-full flex-col items-center justify-center gap-3 pt-24 pb-10 landscape:pb-8 landscape:pt-16 lg:landscape:pt-32 text-[#222831] dark:text-[#DDDDDD]">
            <About />
        </Container>
    );
}
