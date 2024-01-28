import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Icons } from "@/components/utils/Icons";
import { Blog } from "contentlayer/generated";
import { motion } from "framer-motion";
import Link from "next/link";

export const ArticleCard = ({ index, page }: { index: number; page: Blog }) => {
    return (
        <motion.div
            key={index}
            variants={{
                initial: {
                    opacity: 0,
                    y: 50
                },
                animate: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        delay: index * 0.09
                    }
                }
            }}
            animate="animate"
            initial="initial"
        >
            <Link
                href={`/blog/${page.slug}`}
                className="grid w-full gap-3 transition-transform hover:scale-105 md:grid-cols-3"
            >
                {/* <Avatar className="aspect-video h-auto w-full rounded-lg"> */}
                {/* <AvatarImage src={page.image} className="object-cover" /> */}
                {/* <AvatarFallback /> */}
                {/* </Avatar> */}
                <div className="flex w-full flex-col gap-3 dark:text-white/70 md:col-span-2">
                    <div className="flex w-full flex-col gap-2">
                        <p className="text-xl font-bold dark:text-white/80">{page.name!}</p>
                        <div className="flex gap-2 text-xs font-medium">
                            <div className="flex items-center gap-1">
                                <Icons icon="calendar" className="h-4 w-4" />
                                <p>{page.date?.start}</p>
                            </div>
                            •
                            <div className="flex items-center gap-1">
                                <Icons icon="time" className="h-4 w-4" />
                                {/* <p>{page.readTime}</p> */}
                            </div>
                        </div>
                        <p className="text-sm">{page.description}</p>
                    </div>
                    <div className="flex w-full gap-2">
                        {page.tags.map((tag, i) => (
                            <div key={i} className="rounded bg-black/10 px-4 py-2 dark:bg-white/10">
                                <p className="text-xs font-medium">{tag}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};
