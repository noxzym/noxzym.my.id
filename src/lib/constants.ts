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
            to: "Articles",
            url: "/articles",
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
