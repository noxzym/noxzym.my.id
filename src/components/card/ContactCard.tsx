import { Button } from "@/components/ui/button";
import { Icons } from "@/components/utils/Icons";
import { IconList } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";

export const ContactCard = ({ index, item }: { index: number; item: keyof typeof IconList }) => {
    return (
        <motion.div
            key={index}
            initial={{
                opacity: 0
            }}
            animate={{
                opacity: 1,
                transition: {
                    delay: index * 0.09
                }
            }}
        >
            <Button
                variant="outline"
                asChild
                className="group relative flex aspect-square h-auto w-full items-center gap-5 rounded-md px-3 py-2"
            >
                <Link
                    href={item === "email" ? "mailto:me@noxzym.my.id" : `/${item}`}
                    target="_blank"
                    rel="external noreferrer noopener"
                    prefetch={false}
                >
                    <div className="absolute bottom-0 left-0 flex w-full items-center justify-between p-2">
                        <p className="text-xs font-medium capitalize">{IconList[item][0]}</p>
                        <Icons icon="external_link" className="hidden h-3 w-3 group-hover:block" />
                    </div>
                    <Icons
                        icon={IconList[item] ? item : item === "discord" ? "discord" : "email"}
                        className={cn(
                            "h-10 w-10 rounded-md",
                            item === "email"
                                ? "stroke-black/80 dark:stroke-white/80"
                                : "fill-black/80 dark:fill-white/80"
                        )}
                    />
                </Link>
            </Button>
        </motion.div>
    );
};
