import { IconDescriptor, TemplateString } from "next/dist/lib/metadata/types/metadata-types";
import { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";
import { Twitter } from "next/dist/lib/metadata/types/twitter-types";
import { BiHomeAlt2, BiPaperclip, BiSolidCalendar, BiSolidTime, BiUser } from "react-icons/bi";
import { HiExternalLink, HiOutlineMail } from "react-icons/hi";
import { IoBrush, IoClose } from "react-icons/io5";
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

export const IconList = {
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

export const NavigationList: { name: string; link: string; icon: keyof typeof IconList }[] = [
    {
        name: "Home",
        link: "/",
        icon: "home"
    },
    {
        name: "About Me",
        link: "/#about",
        icon: "user"
    },
    {
        name: "Contact",
        link: "/#contact",
        icon: "paperclip"
    },
    {
        name: "Blog",
        link: "/blog",
        icon: "newspaper"
    }
];

export const ExperienceList: { name: string; icon: (keyof typeof IconList)[] }[] = [
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

type OGImageDescriptor = {
    url: string | URL;
    secureUrl?: string | URL;
    alt?: string;
    type?: string;
    width?: string | number;
    height?: string | number;
};

export const WebIcons: (IconDescriptor & OGImageDescriptor)[] = [
    {
        url: "/icons/icon-72x72.png",
        sizes: "72x72",
        width: "72",
        height: "72",
        type: "image/png"
    },
    {
        url: "/icons/icon-96x96.png",
        sizes: "96x96",
        width: "96",
        height: "96",
        type: "image/png"
    },
    {
        url: "/icons/icon-128x128.png",
        sizes: "128x128",
        width: "128",
        height: "128",
        type: "image/png"
    },
    {
        url: "/icons/icon-144x144.png",
        sizes: "144x144",
        width: "144",
        height: "144",
        type: "image/png"
    },
    {
        url: "/icons/icon-152x152.png",
        sizes: "152x152",
        width: "152",
        height: "152",
        type: "image/png"
    },
    {
        url: "/icons/icon-192x192.png",
        sizes: "192x192",
        width: "192",
        height: "192",
        type: "image/png"
    },
    {
        url: "/icons/icon-384x384.png",
        sizes: "384x384",
        width: "384",
        height: "384",
        type: "image/png"
    },
    {
        url: "/icons/icon-512x512.png",
        sizes: "512x512",
        width: "512",
        height: "512",
        type: "image/png"
    }
];

export const TitleTemplate: TemplateString = {
    template: "Noxzym - %s",
    default: "Noxzym - Home"
};

export const DescriptionTemplate = `${new Date().getFullYear() - 2004} years old student who is interested in technology-related things`;

const ImageTemplate = WebIcons.filter(icon => Number(icon.width!) >= 200);

export const OpenGraphMetadata: OpenGraph = {
    type: "website",
    title: TitleTemplate,
    description: DescriptionTemplate,
    siteName: "noxzym.my.id",
    url: "https://noxzym.my.id",
    images: ImageTemplate
};

export const TwitterMetadata: Twitter = {
    site: "@noxzym",
    card: "summary",
    title: TitleTemplate,
    description: DescriptionTemplate,
    images: ImageTemplate
};
