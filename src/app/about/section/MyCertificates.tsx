import { Certificate } from "@/types";
import { sql } from "@vercel/postgres";
import SectionLayout from "../_components/SectionLayout";

export default async function MyCertificates() {
    const { rows } = await sql<Certificate>`SELECT * FROM certificates`;

    return (
        <SectionLayout
            title="Certificates"
            description="Here are some of the certificates I've received."
            items={rows}
        />
    );
}
