import { sql } from "@vercel/postgres";
import { generateDateFormat } from "@/lib/utils";
import SectionLayout from "./SectionLayout";

export default async function MyCertificates() {
    const { rows } = await sql<ICertificate>`SELECT * FROM certificates`;

    return (
        <SectionLayout
            title="Certificates"
            description="Here are some of the certificates I've received."
            items={rows
                .sort((a, b) => {
                    return a.given_date.getTime() - b.given_date.getTime();
                })
                .map(row => ({
                    title: row.name,
                    provider: row.provider,
                    duration: `${generateDateFormat(row.given_date)} - ${generateDateFormat(row.expiration_date)}`
                }))}
        />
    );
}

interface ICertificate {
    id: string;
    name: string;
    provider: string;
    given_date: Date;
    expiration_date: Date;
}
