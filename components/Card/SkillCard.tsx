import { Typography } from "@mui/material";
import {
    SiCss3 as CssIcon,
    SiGit as GitIcon,
    SiGithub as GithubIcon,
    SiHtml5 as HtmlIcon,
    SiJavascript as JavascriptIcon,
    SiMongodb as MongoIcon,
    SiNextdotjs as NextIcon,
    SiNodedotjs as NodeIcon,
    SiPython as PythonIcon,
    SiReact as ReactIcon,
    SiTailwindcss as TailwindIcon,
    SiTypescript as TypescriptIcon
} from "react-icons/si";

const icon = {
    javascript: <JavascriptIcon className="rounded-md text-5xl" />,
    typescript: <TypescriptIcon className="rounded-md text-5xl" />,
    python: <PythonIcon className="rounded-md text-5xl" />,
    html: <HtmlIcon className="rounded-md text-5xl" />,
    css: <CssIcon className="rounded-md text-5xl" />,
    react: <ReactIcon className="rounded-md text-5xl" />,
    next: <NextIcon className="rounded-md text-5xl" />,
    tailwind: <TailwindIcon className="rounded-md text-5xl" />,
    node: <NodeIcon className="rounded-md text-5xl" />,
    mongo: <MongoIcon className="rounded-md text-5xl" />,
    git: <GitIcon className="rounded-md text-5xl" />,
    github: <GithubIcon className="rounded-md text-5xl" />
};

export const SkillCard = ({
    name,
    iconName
}: {
    name: string;
    iconName: string[];
}) => {
    return (
        <div className="flex w-full flex-col gap-2">
            <Typography className="font-sans text-xl font-semibold">
                {name}
            </Typography>
            <div className="flex gap-5">
                {iconName.map(iconName => icon[iconName] ?? null)}
            </div>
        </div>
    );
};
