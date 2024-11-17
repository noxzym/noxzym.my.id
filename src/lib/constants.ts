import { OGImageDescriptor } from "@/types";
import {
    IconDescriptor,
    Robots,
    TemplateString
} from "next/dist/lib/metadata/types/metadata-types";
import { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";
import { Twitter } from "next/dist/lib/metadata/types/twitter-types";
import { FaLeaf, FaRocket, FaUser } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import {
    SiDiscord,
    SiGithub,
    SiGoogledocs,
    SiInstagram,
    SiLinkedin,
    SiSpotify,
    SiX
} from "react-icons/si";

export const NavigationLinks = (...get: string[]) => {
    const links = [
        {
            to: "Home",
            url: "/",
            text: "Back to home",
            icon: FaHouse
        },
        {
            to: "About",
            url: "/about",
            text: "Learn about me",
            icon: FaUser
        },
        {
            to: "Blog",
            url: "/blog",
            text: "Read my article",
            icon: FaLeaf
        },
        {
            to: "Projects",
            url: "/projects",
            text: "Explore my project",
            icon: FaRocket
        }
    ];

    return get.map(to => links.find(link => link.to.toLowerCase() === to.toLowerCase())!);
};

export const ExternalLinks = (...get: string[]) => {
    const links = [
        {
            to: "Discord",
            url: "/discord",
            icon: SiDiscord
        },
        {
            to: "Github",
            url: "/github",
            icon: SiGithub
        },
        {
            to: "Instagram",
            url: "/instagram",
            icon: SiInstagram
        },
        {
            to: "Linkedin",
            url: "/linkedin",
            icon: SiLinkedin
        },
        {
            to: "Resume",
            url: "/resume",
            icon: SiGoogledocs
        },
        {
            to: "Spotify",
            url: "/spotify",
            icon: SiSpotify
        },
        {
            to: "Twitter",
            url: "/twitter",
            icon: SiX
        }
    ];

    return get.map(to => links.find(link => link.to.toLowerCase() === to.toLowerCase())!);
};

export const baseURL =
    process.env.NODE_ENV === "production" ? process.env.BASE_URL! : "localhost:3000";

const icons: (IconDescriptor & OGImageDescriptor)[] = [
    {
        url: "/icons/16.png",
        sizes: "16x16",
        width: "16",
        height: "16",
        type: "image/png"
    },
    {
        url: "/icons/20.png",
        sizes: "20x20",
        width: "20",
        height: "20",
        type: "image/png"
    },
    {
        url: "/icons/29.png",
        sizes: "29x29",
        width: "29",
        height: "29",
        type: "image/png"
    },
    {
        url: "/icons/32.png",
        sizes: "32x32",
        width: "32",
        height: "32",
        type: "image/png"
    },
    {
        url: "/icons/40.png",
        sizes: "40x40",
        width: "40",
        height: "40",
        type: "image/png"
    },
    {
        url: "/icons/50.png",
        sizes: "50x50",
        width: "50",
        height: "50",
        type: "image/png"
    },
    {
        url: "/icons/57.png",
        sizes: "57x57",
        width: "57",
        height: "57",
        type: "image/png"
    },
    {
        url: "/icons/58.png",
        sizes: "58x58",
        width: "58",
        height: "58",
        type: "image/png"
    },
    {
        url: "/icons/60.png",
        sizes: "60x60",
        width: "60",
        height: "60",
        type: "image/png"
    },
    {
        url: "/icons/64.png",
        sizes: "64x64",
        width: "64",
        height: "64",
        type: "image/png"
    },
    {
        url: "/icons/72.png",
        sizes: "72x72",
        width: "72",
        height: "72",
        type: "image/png"
    },
    {
        url: "/icons/76.png",
        sizes: "76x76",
        width: "76",
        height: "76",
        type: "image/png"
    },
    {
        url: "/icons/80.png",
        sizes: "80x80",
        width: "80",
        height: "80",
        type: "image/png"
    },
    {
        url: "/icons/87.png",
        sizes: "87x87",
        width: "87",
        height: "87",
        type: "image/png"
    },
    {
        url: "/icons/100.png",
        sizes: "100x100",
        width: "100",
        height: "100",
        type: "image/png"
    },
    {
        url: "/icons/114.png",
        sizes: "114x114",
        width: "114",
        height: "114",
        type: "image/png"
    },
    {
        url: "/icons/120.png",
        sizes: "120x120",
        width: "120",
        height: "120",
        type: "image/png"
    },
    {
        url: "/icons/128.png",
        sizes: "128x128",
        width: "128",
        height: "128",
        type: "image/png"
    },
    {
        url: "/icons/144.png",
        sizes: "144x144",
        width: "144",
        height: "144",
        type: "image/png"
    },
    {
        url: "/icons/152.png",
        sizes: "152x152",
        width: "152",
        height: "152",
        type: "image/png"
    },
    {
        url: "/icons/167.png",
        sizes: "167x167",
        width: "167",
        height: "167",
        type: "image/png"
    },
    {
        url: "/icons/180.png",
        sizes: "180x180",
        width: "180",
        height: "180",
        type: "image/png"
    },
    {
        url: "/icons/192.png",
        sizes: "192x192",
        width: "192",
        height: "192",
        type: "image/png"
    },
    {
        url: "/icons/256.png",
        sizes: "256x256",
        width: "256",
        height: "256",
        type: "image/png"
    },
    {
        url: "/icons/512.png",
        sizes: "512x512",
        width: "512",
        height: "512",
        type: "image/png"
    },
    {
        url: "/icons/1024.png",
        sizes: "1024x1024",
        width: "1024",
        height: "1024",
        type: "image/png"
    }
];

const title: TemplateString = {
    template: "Noxzym - %s",
    default: "Noxzym - Home"
};

const description =
    "A Full Stack Developer who is familiar with using React and NodeJS. Im known as Orchitiadi Ismaulana Putra or Noxzym at the internet";

const openGraph: OpenGraph = {
    type: "website",
    title: title,
    description: description,
    siteName: baseURL,
    url: "https://noxzym.my.id",
    images: icons.filter(icon => Number(icon.width!) === 256)
};

const twitter: Twitter = {
    site: "@noxzym",
    card: "summary",
    title: title,
    description: description,
    images: icons.filter(icon => Number(icon.width!) === 256)
};

const robots: Robots = {
    index: true,
    follow: true
};

const keyboards = "Full Stack Developer, Noxzym, Orchitiadi Ismaulana Putra";

export const DefaultMetadata = { title, description, icons, openGraph, twitter, robots, keyboards };
