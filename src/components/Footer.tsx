"use client";

import { useSpotifyNowplaying } from "@/hooks/useSpotifyNowPlaying";
import { Icons } from "./utils/Icons";
import { Separator } from "./ui/separator";

export function Footer() {
    const { data } = useSpotifyNowplaying();

    return (
        <footer className="mx-auto flex w-full max-w-4xl flex-col pb-8">
            <Separator />
            <div className="flex w-full flex-col justify-between px-7 py-10 md:flex-row">
                <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-2">
                        <Icons icon="spotify" className="h-5 w-5 fill-[#1DB954]" />
                        {data?.isPlaying ? (
                            <p className="text-sm font-medium">
                                Listening to {data.title} by {data.artist}
                            </p>
                        ) : (
                            <p className="text-sm font-medium">Not Listening</p>
                        )}
                    </div>
                    <div className="flex flex-col gap-2">
                        <div>
                            <p className="text-xl font-bold">Noxzym();</p>
                        </div>
                        <div>
                            <p className="text-sm font-medium">Depok, West Java, Indonesia</p>
                        </div>
                    </div>
                </div>
                <div className="md:self-end">
                    <p className="text-sm font-medium">
                        &copy; {new Date().getFullYear()} - Noxzym
                    </p>
                </div>
            </div>
        </footer>
    );
}
