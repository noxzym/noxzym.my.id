import { Contact } from "@/components/Contact";
import { Divider } from "@mui/material";
import { NextSeo } from "next-seo";

export default function MyContact() {
    return (
        <>
            <NextSeo
                title="Contact | Noxzym"
                canonical="https://noxzym.my.id/contact"
                openGraph={{
                    url: "https://noxzym.my.id/contact",
                    title: "Contact | Noxzym"
                }}
            />
            <Contact />
            <Divider className="w-0 py-10" />
        </>
    );
}
