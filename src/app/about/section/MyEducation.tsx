import SectionLayout from "./SectionLayout";

export default function MyEducation() {
    return (
        <SectionLayout
            title="Education"
            description="Here are some of the education I've received."
            items={new Array(3).fill({
                title: "Bachelor of Informatics Engineering",
                provider: "University of Gunadarma",
                duration: "Okt 2022 - Present"
            })}
        />
    );
}
