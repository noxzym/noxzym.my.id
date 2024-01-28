"use client";

import { ContactCard } from "@/components/card/ContactCard";
import { DynamicLoader } from "@/components/utils/DynamicLoader";
import { useLanyard } from "@/hooks/useLanyard";
import { IconList } from "@/lib/constants";

export function Contact() {
    const { data, isLoading } = useLanyard();

    return (
        <div id="contact" className="flex flex-col gap-8 py-8 md:py-16">
            <p className="text-center text-2xl font-bold">Contact</p>
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
                            ] as (keyof typeof IconList)[]
                        ).map((item, i) => (
                            <ContactCard key={i} index={i} item={item} />
                        ))}
                    </>
                )}
            </div>
        </div>
    );
}
