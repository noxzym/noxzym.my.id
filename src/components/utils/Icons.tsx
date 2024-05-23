import { cn } from "@/lib/utils";
import { SVGProps, createElement } from "react";
import { IoBrush, IoClose } from "react-icons/io5";
import { BiHomeAlt2, BiPaperclip, BiSolidCalendar, BiSolidTime, BiUser } from "react-icons/bi";
import { HiExternalLink, HiOutlineMail } from "react-icons/hi";
import { PiCommand, PiNewspaperLight } from "react-icons/pi";
import {
    SiCss3,
    SiDiscord,
    SiGit,
    SiGithub,
    SiHtml5,
    SiInstagram,
    SiJavascript,
    SiLinkedin,
    SiMongodb,
    SiNextdotjs,
    SiNodedotjs,
    SiPython,
    SiReact,
    SiSpotify,
    SiTailwindcss,
    SiTwitter,
    SiTypescript
} from "react-icons/si";

export const ICONS = {
    twitter: ["Twitter", SiTwitter],
    discord: ["Discord", SiDiscord],
    spotify: ["Spotify", SiSpotify],
    instagram: ["Instagram", SiInstagram],
    linkedin: ["LinkedIn", SiLinkedin],
    github: ["GitHub", SiGithub],
    git: ["Git", SiGit],
    html: ["HTML", SiHtml5],
    css: ["CSS", SiCss3],
    javascript: ["JavaScript", SiJavascript],
    typescript: ["TypeScript", SiTypescript],
    react: ["React", SiReact],
    nextjs: ["Next.js", SiNextdotjs],
    tailwindcss: ["Tailwind CSS", SiTailwindcss],
    nodejs: ["Node.js", SiNodedotjs],
    mongodb: ["MongoDB", SiMongodb],
    python: ["Python", SiPython],
    email: ["Email", HiOutlineMail],
    brush: ["Brush", IoBrush],
    command: ["Command", PiCommand],
    close: ["Close", IoClose],
    home: ["Home", BiHomeAlt2],
    user: ["User", BiUser],
    paperclip: ["Paperclip", BiPaperclip],
    newspaper: ["Newspaper Clip", PiNewspaperLight],
    external_link: ["External Link", HiExternalLink],
    calendar: ["Calendar", BiSolidCalendar],
    time: ["Time", BiSolidTime]
};

export function Icons(props: SVGProps<SVGSVGElement> & { icon: keyof typeof ICONS }) {
    return createElement(ICONS[props.icon][1], {
        title: String(ICONS[props.icon][0]),
        className: cn("pointer-events-none", props.className)
    });
}
