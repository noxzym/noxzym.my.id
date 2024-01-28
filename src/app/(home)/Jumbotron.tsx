"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useLanyard } from "@/hooks/useLanyard";

export function Jumbotron() {
    const { data } = useLanyard();

    return (
        <section className="flex flex-col items-center justify-center gap-5 py-8 md:gap-10">
            <Avatar className="aspect-square h-full w-36 rounded-lg">
                {data && (
                    <AvatarImage
                        src={`https://cdn.discordapp.com/avatars/${data?.data.discord_user.id}/${data?.data.discord_user.avatar}.png?size=512`}
                        alt="@noxzym"
                    />
                )}
                <AvatarFallback />
            </Avatar>
            <div className="flex flex-col gap-1 text-center font-semibold">
                <h1 className="text-3xl font-bold">Orchitiadi Ismaulana Putra</h1>
                <p className="text-sm text-black/60 dark:text-white/60">
                    {new Date().getFullYear() - 2004} years old student who is interested in
                    technology-related things
                </p>
                <p className="text-xl">Student | Back-end Developer</p>
            </div>
        </section>
    );
}
