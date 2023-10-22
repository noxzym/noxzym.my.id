"use client";

import { useSpotifyNowplaying } from "@/hooks/useSpotifyNowPlaying";
import { Icons } from "./utils/Icons";

export function Footer() {
    const { data } = useSpotifyNowplaying();

    return (
        <div className="mx-auto flex max-w-4xl flex-col justify-between gap-5 px-7 py-10 md:flex-row">
            <div className="flex flex-col gap-5">
                <div className="flex items-center gap-2">
                    <Icons icon="spotify" className="h-5 w-5 fill-[#1DB954]" />
                    {data?.isPlaying ? (
                        <p className="text-sm font-medium text-black/80 dark:text-white/80">
                            Listening to {data.title} by {data.artist}
                        </p>
                    ) : (
                        <p className="text-sm font-medium text-black/80 dark:text-white/80">
                            Not Listening
                        </p>
                    )}
                </div>
                <div className="flex flex-col gap-2">
                    <div>
                        <p className="text-xl font-bold text-black/80 dark:text-white/80">
                            Noxzym();
                        </p>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-black/80 dark:text-white/80">
                            Depok, West Java, Indonesia
                        </p>
                    </div>
                </div>
            </div>
            <div className="md:self-end">
                <p className="text-sm font-medium text-black/80 dark:text-white/80">
                    &copy; {new Date().getFullYear()} - Noxzym
                </p>
            </div>
        </div>
    );
}
