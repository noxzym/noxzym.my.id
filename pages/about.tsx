import { SkillCard } from "@/components/Card/SkillCard";
import { MyLayout } from "@/components/Layout";
import { SIMPLE_ICONS } from "@/components/SimpleIcons";
import { Typography } from "@mui/material";

const skills: { name: string; icon: (keyof typeof SIMPLE_ICONS)[] }[] = [
    {
        name: "Programming Language",
        icon: ["javascript", "typescript", "python"]
    },
    {
        name: "Frontend",
        icon: ["html", "css", "react", "nextjs", "tailwindcss"]
    },
    {
        name: "Backend",
        icon: ["nodejs"]
    },
    {
        name: "Database",
        icon: ["mongodb"]
    },
    {
        name: "DevOps",
        icon: ["git", "github"]
    }
];

export default function AboutPage() {
    return (
        <MyLayout>
            <Typography className="text-center font-sans text-3xl font-bold dark:text-white/90">
                About Me
            </Typography>
            <div className="flex flex-col gap-3">
                <Typography className="font-sans text-xl font-semibold dark:text-white/80">
                    Hi, my name is
                </Typography>
                <Typography className="font-poppins text-3xl font-bold dark:text-white/90">
                    Orchitiadi Ismaulana Putra
                </Typography>
                <div className="flex flex-col gap-3">
                    <Typography className="text-justify font-sans text-sm font-semibold dark:text-white/80">
                        I am an informatics student at Gunadarma University. I
                        am continuously learning in programming. I have some
                        experience in both back-end and front-end development.
                    </Typography>
                    <Typography className="text-justify font-sans text-sm font-semibold dark:text-white/80">
                        Apart from that, I am also involved in assisting with
                        various tasks at &quot;Gemilang Hasta Kreasi&quot; which
                        is a garment manufacturing business owned by my family.
                    </Typography>
                    <Typography className="text-justify font-sans text-sm font-semibold dark:text-white/80">
                        In programming, I usually use Typescript because its
                        typing system is very helpful when developing
                        applications. For web development, I also use Typescript
                        React using the Next.js and TailwindCSS frameworks.
                    </Typography>
                </div>
            </div>
            <Typography className="text-center font-sans text-3xl font-bold dark:text-white/90">
                Skills & Tools
            </Typography>
            <div className="flex flex-col gap-5">
                {skills.map((skill, i) => (
                    <SkillCard
                        key={i}
                        name={skill.name}
                        iconName={skill.icon}
                    />
                ))}
            </div>
        </MyLayout>
    );
}
