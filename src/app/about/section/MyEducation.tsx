import { sql } from "@vercel/postgres";
import { generateDateFormat } from "@/lib/utils";
import SectionLayout from "../_components/SectionLayout";

export default async function MyEducation() {
    const { rows } = await sql<IEducation>`SELECT * FROM education`;

    return (
        <SectionLayout
            title="Education"
            description="Here are some of the education I've received."
            items={rows
                .sort((a, b) => {
                    return b.start_date.getTime() - a.start_date.getTime();
                })
                .map(row => ({
                    title: row.school,
                    provider: row.degree,
                    duration: `${generateDateFormat(row.start_date)} - ${row.end_date.getFullYear() < new Date().getFullYear() ? generateDateFormat(row.end_date) : "Present"}`
                }))}
        />
    );
}

interface IEducation {
    school: string;
    degree: string;
    major: string;
    start_date: Date;
    end_date: Date;
}
