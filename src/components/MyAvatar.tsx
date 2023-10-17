"use client";

import { useLanyard } from "@/hooks/useLanyard";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function MyAvatar() {
    const { data } = useLanyard();

    return (
        <Avatar className="aspect-square h-full w-36 rounded-lg">
            {data && (
                <AvatarImage
                    src={`https://cdn.discordapp.com/avatars/${data?.data.discord_user.id}/${data?.data.discord_user.avatar}.png?size=512`}
                    alt="@noxzym"
                />
            )}
            <AvatarFallback />
        </Avatar>
    );
}
