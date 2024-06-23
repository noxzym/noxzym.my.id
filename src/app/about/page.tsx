import AboutMe from "./section/AboutMe";
import MyCertificates from "./section/MyCertificates";
import MyEducation from "./section/MyEducation";

export const revalidate = 60;

export default function AboutPage() {
    return (
        <>
            <AboutMe />
            <MyEducation />
            <MyCertificates />
        </>
    );
}
