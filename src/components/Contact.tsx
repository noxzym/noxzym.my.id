"use client";

import { useLanyard } from "@/hooks/useLanyard";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { DynamicLoader } from "./utils/DynamicLoader";
import { ICONS, Icons } from "./utils/Icons";
import { Button } from "./ui/button";

export function Contact() {
    const { data, isLoading } = useLanyard();

    return (
        <div id="contact" className="flex flex-col gap-8 pt-16">
            <p className="text-center font-sans text-2xl font-bold text-black/80 dark:text-white/80">
                Contact
            </p>
            <div className="grid w-full grid-cols-3 gap-5 self-center md:max-w-2xl md:grid-cols-4">
                {!data || isLoading ? (
                    <DynamicLoader count={8} />
                ) : (
                    <>
                        {(
                            [
                                ...Object.keys(data.data.kv),
                                "discord",
                                "email"
                            ] as (keyof typeof ICONS)[]
                        ).map((item, i) => (
                            <Button
                                key={i}
                                variant="outline"
                                asChild
                                className="group relative flex aspect-square h-auto w-full items-center gap-5 rounded-md px-3 py-2"
                            >
                                <Link
                                    href={item === "email" ? "mailto:me@noxzym.my.id" : `/${item}`}
                                    target="_blank"
                                    rel="external noreferrer noopener"
                                >
                                    <div className="absolute bottom-0 left-0 flex w-full items-center justify-between p-2 text-black/80 dark:text-white/80">
                                        <p className="text-xs font-medium capitalize">
                                            {ICONS[item][0]}
                                        </p>
                                        <Icons
                                            icon="external_link"
                                            className="hidden h-3 w-3 group-hover:block"
                                        />
                                    </div>
                                    <Icons
                                        icon={
                                            ICONS[item]
                                                ? item
                                                : item === "discord"
                                                ? "discord"
                                                : "email"
                                        }
                                        className={cn(
                                            "h-10 w-10 rounded-md",
                                            item === "email"
                                                ? "stroke-black/80 dark:stroke-white/80"
                                                : "fill-black/80 dark:fill-white/80"
                                        )}
                                    />
                                </Link>
                            </Button>
                        ))}
                    </>
                )}
            </div>
        </div>
    );
}
