import { EducationLevel } from "@/types";
import { sql } from "@vercel/postgres";
import SectionLayout from "../_components/SectionLayout";

export default async function MyEducation() {
    const { rows } = await sql<EducationLevel>`SELECT * FROM education`;

    return (
        <SectionLayout
            title="Education"
            description="Here are some of the education I've received."
            items={rows}
        />
    );
}
