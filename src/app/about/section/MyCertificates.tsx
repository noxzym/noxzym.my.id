import SectionLayout from "./SectionLayout";

export default function MyCertificates() {
    return (
        <SectionLayout
            title="Certificates"
            description="Here are some of the certificates I've received."
            items={new Array(5).fill({
                title: "Intermediate Python",
                provider: "Dicoding",
                duration: "Okt 2023 - Okt 2026"
            })}
        />
    );
}
