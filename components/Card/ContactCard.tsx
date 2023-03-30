import { ILanyard } from "@/types";
import { ArrowOutward } from "@mui/icons-material";
import { Button, Link, Typography } from "@mui/material";
import {
    SiDiscord as DiscordIcon,
    SiGithub as GithubIcon,
    SiInstagram as InstagramIcon,
    SiLinkedin as LinkedinIcon,
    SiSpotify as SpotifyIcon,
    SiTwitter as TwitterIcon
} from "react-icons/si";

const icons = {
    github: <GithubIcon className="h-10 w-10" />,
    twitter: <TwitterIcon className="h-10 w-10" />,
    discord: <DiscordIcon className="h-10 w-10" />,
    spotify: <SpotifyIcon className="h-10 w-10" />,
    instagram: <InstagramIcon className="h-10 w-10" />,
    linkedin: <LinkedinIcon className="h-10 w-10" />
};

export const ContactCard = ({
    item,
    SWRLanyard
}: {
    item: string;
    SWRLanyard: ILanyard;
}) => {
    return (
        <Link
            href={`/${item}`}
            variant="button"
            target="_blank"
            rel="noopener"
            underline="none"
            color="inherit"
        >
            <Button
                color="inherit"
                startIcon={icons[item] ? icons[item] : icons.discord}
                sx={{
                    "& > span": { margin: 0 }
                }}
                className="flex w-full items-center gap-5 rounded-md border-none py-2 px-3 normal-case shadow-md"
            >
                <div className="flex w-full items-center justify-between">
                    <Typography className="font-sans text-lg font-semibold">
                        {SWRLanyard.data.kv[item]
                            ? SWRLanyard.data.kv[item]
                            : `${SWRLanyard.data.discord_user.username}#${SWRLanyard.data.discord_user.discriminator}`}
                    </Typography>
                    <ArrowOutward className="text-2xl" />
                </div>
            </Button>
        </Link>
    );
};
