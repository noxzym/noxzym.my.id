import { Container, Typography } from "@mui/material";
import { ProjectCard } from "./Card/ProjectCard";

const projects = [
    {
        name: "Noxzym Website",
        role: "Frontend Developer"
    },
    {
        name: "Zuikaku Discord Bot",
        role: "Founder & Developer"
    },
    {
        name: "Zuikaku Website",
        role: "Frontend Developer"
    },
    {
        name: "Clytage Whatsapp Bot",
        role: "Second Developer"
    },
    {
        name: "AzuraL'S Discord Bot",
        role: "Second Developer"
    }
];

export const Project = () => {
    return (
        <Container fixed className="flex flex-col gap-5 px-5 pt-10 md:px-40">
            <Typography className="font-sans text-3xl font-semibold">
                Projects
            </Typography>
            <div className="flex w-full flex-col gap-5">
                {projects.map((item, i) => (
                    <ProjectCard
                        key={i}
                        index={i}
                        name={item.name}
                        role={item.role}
                    />
                ))}
            </div>
        </Container>
    );
};
