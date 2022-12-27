import { ILanyard } from "@/types";
import { SiDiscord, SiGithub, SiInstagram, SiSpotify, SiTwitter } from "react-icons/si";
import useSWR from "swr";
import { ContactCard } from "./Card/ContactCard";

export const Contact = function () {
    function useSocialMediaAccount(): {
        account: ILanyard | undefined;
        isLoading: boolean;
        isError: unknown | undefined;
    } {
        const { data, error } = useSWR("/api/lanyard", args =>
            fetch(args).then(res => res.json())
        );
        return {
            account: data,
            isLoading: !error && !data,
            isError: error
        };
    }
    const { account } = useSocialMediaAccount();
    const contacts = [
        {
            name: account?.data
                ? `${account.data.discord_user.username}#${account.data.discord_user.discriminator}`
                : null,
            href: "discord",
            icon: (
                <SiDiscord
                    className="h-10 w-10 fill-[#222831] dark:fill-[#DDDDDD]"
                />
            )
        },
        {
            name: account?.data ? account.data.kv.github : null,
            href: "github",
            icon: (
                <SiGithub
                    className="h-10 w-10 fill-[#222831] dark:fill-[#DDDDDD]"
                />
            )
        },
        {
            name: account?.data ? account.data.kv.spotify : null,
            href: "spotify",
            icon: (
                <SiSpotify
                    className="h-10 w-10 fill-[#222831] dark:fill-[#DDDDDD]"
                />
            )
        },
        {
            name: account?.data ? account.data.kv.instagram : null,
            href: "instagram",
            icon: (
                <SiInstagram
                    className="h-10 w-10 fill-[#222831] dark:fill-[#DDDDDD]"
                />
            )
        },
        {
            name: account?.data ? account.data.kv.twitter : null,
            href: "twitter",
            icon: (
                <SiTwitter
                    className="h-10 w-10 fill-[#222831] dark:fill-[#DDDDDD]"
                />
            )
        }
    ];
    return (
        <>
            <div className="mb-3 font-garet-bold text-3xl xl:text-5xl">
                Contact
            </div>
            <div className="flex w-full grid-cols-3 flex-col items-center gap-2 align-middle lg:grid">
                {contacts
                    .sort((a, b) => a.href.localeCompare(b.href))
                    .map((contact, index) => (
                        <ContactCard
                            key={index}
                            name={contact.name}
                            href={contact.href}
                            data-scroll
                        >
                            {contact.icon}
                        </ContactCard>
                    ))}
            </div>
        </>
    );
};
