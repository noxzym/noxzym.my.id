"use client";

import { useLanyard } from "@/hooks/useLanyard";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { SIMPLE_ICONS, SimpleIcons } from "./SimpleIcons";
import { Button } from "./ui/button";
import { Skeleton } from "./ui/skeleton";

export function Contact() {
    const { data, isLoading } = useLanyard();

    return (
        <div id="contact" className="flex flex-col gap-8 pt-16">
            <p className="text-center font-sans text-2xl font-bold text-black/80 dark:text-white/80">
                Contact
            </p>
            <div className="grid w-full grid-cols-3 gap-5 self-center md:max-w-2xl md:grid-cols-4">
                {!data || isLoading ? (
                    Array.from(
                        {
                            length: 6
                        },
                        (_, i) => <Skeleton key={i} className="aspect-square h-auto w-full" />
                    )
                ) : (
                    <>
                        {[...Object.keys(data.data.kv), "discord"].map((item, i) => (
                            <Button
                                key={i}
                                variant="outline"
                                asChild
                                className="group relative flex aspect-square h-auto w-full items-center gap-5 rounded-md px-3 py-2"
                            >
                                <Link href={`/${item}`} target="_blank" rel="noopener">
                                    <div className="absolute bottom-0 left-0 flex w-full items-end justify-between p-2">
                                        <p className="text-xs font-medium capitalize text-black/80 dark:text-white/80">
                                            {
                                                SIMPLE_ICONS[item as keyof typeof SIMPLE_ICONS]
                                                    .props.children[0].props.children
                                            }
                                        </p>
                                        <ExternalLink className="hidden h-3 w-3 stroke-black/80 group-hover:block dark:stroke-white/80" />
                                    </div>
                                    <SimpleIcons
                                        icon={
                                            SIMPLE_ICONS[item as keyof typeof SIMPLE_ICONS]
                                                ? (item as keyof typeof SIMPLE_ICONS)
                                                : "discord"
                                        }
                                        className="h-10 w-10 rounded-md fill-black/80 dark:fill-white/80"
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
