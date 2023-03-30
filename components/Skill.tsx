import { Container, Typography } from "@mui/material";
import { SkillCard } from "./Card/SkillCard";

const skills = [
    {
        name: "Programming Language",
        icon: ["javascript", "typescript", "python"]
    },
    {
        name: "Frontend",
        icon: ["html", "css", "react", "next", "tailwind"]
    },
    {
        name: "Backend",
        icon: ["node"]
    },
    {
        name: "Database",
        icon: ["mongo"]
    },
    {
        name: "DevOps",
        icon: ["git", "gitHub"]
    }
];

export const Skill = () => {
    return (
        <Container fixed className="flex flex-col gap-5 px-5 pt-10 md:px-40">
            <Typography className="font-sans text-3xl font-semibold">
                Skills
            </Typography>
            <div className="flex w-full flex-col gap-5">
                {skills.map((skill, i) => (
                    <SkillCard
                        key={i}
                        name={skill.name}
                        iconName={skill.icon}
                    />
                ))}
            </div>
        </Container>
    );
};
