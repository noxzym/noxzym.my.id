import { SiBootstrap, SiExpress, SiJava, SiJavascript, SiKotlin, SiMongodb, SiNextdotjs, SiPython, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";
import { AboutComponent } from "./AboutComponent";
import { ExperienceCard } from "./Card/ExperienceCard";

const experiences = [
    {
        title: "Zuikaku Discord Bot",
        position: "Founder & Developer",
        icons: [
            <SiTypescript
                key={0}
                className="h-5 w-5 rounded fill-[#222831] dark:fill-[#DDDDDD]"
                title="Typescript"
            />,
            <SiMongodb
                key={1}
                className="h-5 w-5 rounded fill-[#222831] dark:fill-[#DDDDDD]"
                title="MongoDB"
            />,
        ]
    },
    {
        title: "AzuraL'S Discord Bot",
        position: "Second Developer",
        icons: [
            <SiJavascript
                key={0}
                className="h-5 w-5 rounded fill-[#222831] dark:fill-[#DDDDDD]"
                title="Javascript"
            />,
        ]
    },
    {
        title: "Clytage Whatsapp Bot",
        position: "Second Developer",
        icons: [
            <SiTypescript
                key={0}
                className="h-5 w-5 rounded fill-[#222831] dark:fill-[#DDDDDD]"
                title="Typescript"
            />,
        ]
    },
    {
        title: "Zuikaku Website",
        position: "Front-end Developer",
        icons: [
            <SiTypescript
                key={0}
                className="h-5 w-5 rounded fill-[#222831] dark:fill-[#DDDDDD]"
                title="Typescript"
            />,
            <SiReact
                key={1}
                className="h-5 w-5 rounded fill-[#222831] dark:fill-[#DDDDDD]"
                title="React"
            />,
            <SiNextdotjs
                key={2}
                className="h-5 w-5 rounded fill-[#222831] dark:fill-[#DDDDDD]"
                title="Next.js"
            />,
            <SiTailwindcss
                key={3}
                className="h-5 w-5 rounded fill-[#222831] dark:fill-[#DDDDDD]"
                title="Tailwind CSS"
            />
        ]
    },
    {
        title: "Noxzym Website",
        position: "Front-end Developer",
        icons: [
            <SiTypescript
                key={0}
                className="h-5 w-5 rounded fill-[#222831] dark:fill-[#DDDDDD]"
                title="Typescript"
            />,
            <SiReact
                key={1}
                className="h-5 w-5 rounded fill-[#222831] dark:fill-[#DDDDDD]"
                title="React"
            />,
            <SiNextdotjs
                key={2}
                className="h-5 w-5 rounded fill-[#222831] dark:fill-[#DDDDDD]"
                title="Next.js"
            />,
            <SiTailwindcss
                key={3}
                className="h-5 w-5 rounded fill-[#222831] dark:fill-[#DDDDDD]"
                title="Tailwind CSS"
            />
        ]
    }
];

const languages = [
    <SiJavascript
        key={0}
        className="h-12 w-12 rounded-md fill-[#222831] dark:fill-[#DDDDDD]"
        title="Javascript" />,
    <SiTypescript
        key={1}
        className="h-12 w-12 rounded-md fill-[#222831] dark:fill-[#DDDDDD]"
        title="Typescript" />,
    <SiJava
        key={2}
        className="h-12 w-12 rounded-md fill-[#222831] dark:fill-[#DDDDDD]"
        title="Java"
    />,
    <SiKotlin
        key={3}
        className="h-12 w-12 rounded-md fill-[#222831] dark:fill-[#DDDDDD]"
        title="Kotlin"
    />,
    <SiPython
        key={4}
        className="h-12 w-12 rounded-md fill-[#222831] dark:fill-[#DDDDDD]"
        title="Python"
    />
];

const frameworks = [
    <SiExpress
        key={0}
        className="h-12 w-12 rounded-md fill-[#222831] dark:fill-[#DDDDDD]"
        title="Express.js"
    />,
    <SiReact
        key={1}
        className="h-12 w-12 rounded-md fill-[#222831] dark:fill-[#DDDDDD]"
        title="React"
    />,
    <SiNextdotjs
        key={2}
        className="h-12 w-12 rounded-md fill-[#222831] dark:fill-[#DDDDDD]"
        title="Next.js"
    />,
    <SiTailwindcss
        key={3}
        className="h-12 w-12 rounded-md fill-[#222831] dark:fill-[#DDDDDD]"
        title="Tailwindcss"
    />,
    <SiBootstrap
        key={4}
        className="h-12 w-12 rounded-md fill-[#222831] dark:fill-[#DDDDDD]"
        title="Bootstrap"
    />
];

const databases = [
    <SiMongodb
        key={0}
        className="h-12 w-12 rounded-md fill-[#222831] dark:fill-[#DDDDDD]"
        title="Mongodb"
    />
];

export const About = function () {
    return (
        <>
            <div className="font-poppins font-bold text-3xl xl:text-5xl">about</div>
            <div className="flex w-full flex-col">
                <AboutComponent>
                    <div className="mb-1 font-segoe text-xl font-bold xl:text-2xl">
                        Biography
                    </div>
                    <div className="text-justify indent-8 font-segoe">
                        My name is Orchitiadi Ismaulana Putra, 18 years old
                        student of{" "}
                        <a
                            className="font-bold text-[#810417] dark:text-[#EEB76B]"
                            href="https://gunadarma.ac.id/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Gunadarma University
                        </a>{" "}
                        at the{" "}
                        <a
                            className="font-bold text-[#810417] dark:text-[#EEB76B]"
                            href="http://fti.gunadarma.ac.id/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Faculty of Industrial Engineering
                        </a>
                        . I am a person who is very interested in the field of
                        technology, especially in the field of programming. I
                        have small experience in a few programming languages,
                        such as{" "}
                        <a
                            className="font-bold text-[#810417] dark:text-[#EEB76B]"
                            href="https://www.javascript.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Javascript
                        </a>
                        ,{" "}
                        <a
                            className="font-bold text-[#810417] dark:text-[#EEB76B]"
                            href="https://www.typescriptlang.org/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Typescript
                        </a>
                        ,{" "}
                        <a
                            className="font-bold text-[#810417] dark:text-[#EEB76B]"
                            href="https://www.java.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Java
                        </a>
                        ,{" "}
                        <a
                            className="font-bold text-[#810417] dark:text-[#EEB76B]"
                            href="https://kotlinlang.org/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Kotlin
                        </a>
                        , and{" "}
                        <a
                            className="font-bold text-[#810417] dark:text-[#EEB76B]"
                            href="https://www.python.org/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Python
                        </a>
                        . I am also have experience in web development. I use
                        framework of{" "}
                        <a
                            className="font-bold text-[#810417] dark:text-[#EEB76B]"
                            href="https://reactjs.org/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            React
                        </a>{" "}
                        for my web development called{" "}
                        <a
                            className="font-bold text-[#810417] dark:text-[#EEB76B]"
                            href="https://nextjs.org/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Next.js
                        </a>{" "}
                        and use styling framework called{" "}
                        <a
                            className="font-bold text-[#810417] dark:text-[#EEB76B]"
                            href="https://tailwindcss.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Tailwindcss
                        </a>
                        .
                    </div>
                </AboutComponent>
                <AboutComponent>
                    <div className="mb-1 font-segoe text-xl font-bold xl:text-2xl">
                        Experiences
                    </div>
                    <div className="flex grid-cols-3 flex-col gap-2 lg:grid">
                        {experiences
                            .sort((a, b) => a.title.localeCompare(b.title))
                            .map((exp, index) => (
                                <ExperienceCard
                                    key={index}
                                    title={exp.title}
                                    position={exp.position}
                                >
                                    {exp.icons}
                                </ExperienceCard>
                            ))}
                    </div>
                </AboutComponent>
                <AboutComponent className="lg:flex-row lg:items-center lg:justify-between">
                    <div className="mb-1 font-segoe text-xl font-bold xl:text-2xl">
                        Programming Languages
                    </div>
                    <div className="flex flex-wrap gap-3">{languages}</div>
                </AboutComponent>
                <AboutComponent className="lg:flex-row lg:items-center lg:justify-between">
                    <div className="mb-1 font-segoe text-xl font-bold xl:text-2xl">
                        Frameworks
                    </div>
                    <div className="flex flex-wrap gap-3">{frameworks}</div>
                </AboutComponent>
                <AboutComponent className="lg:flex-row lg:items-center lg:justify-between">
                    <div className="mb-1 font-segoe text-xl font-bold xl:text-2xl">
                        Databases
                    </div>
                    <div className="flex flex-wrap gap-3">{databases}</div>
                </AboutComponent>
            </div>
        </>
    );
};
