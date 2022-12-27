import { Container } from "@/components/Container";
import { Contact } from "@/components/Contact";

export default function ContactPage() {
    return (
        <Container className="relative flex w-full flex-col items-center justify-center gap-3 pt-24 pb-10 landscape:pb-8 landscape:pt-16 lg:landscape:pt-32 text-[#222831] dark:text-[#DDDDDD]">
            <Contact />
        </Container>
    );
}
