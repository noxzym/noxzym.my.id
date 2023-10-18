import { Button } from "./ui/button";
import { ICONS, Icons } from "./utils/Icons";

const EXPERIENCES: { name: string; icon: (keyof typeof ICONS)[] }[] = [
    {
        name: "Programming Language",
        icon: ["javascript", "typescript", "python"]
    },
    {
        name: "Frontend",
        icon: ["html", "css", "react", "nextjs", "tailwindcss"]
    },
    {
        name: "Backend",
        icon: ["nodejs"]
    },
    {
        name: "Database",
        icon: ["mongodb"]
    },
    {
        name: "DevOps",
        icon: ["git", "github"]
    }
];

export function Experience() {
    return (
        <div className="flex flex-col gap-8 pt-16">
            <p className="text-center font-sans text-2xl font-bold text-black/80 dark:text-white/80">
                Experience
            </p>
            <div className="grid w-full grid-cols-3 gap-5 self-center md:max-w-2xl md:grid-cols-4">
                {EXPERIENCES.map(x => x.icon)
                    .reduce((a, b) => [...a, ...b])
                    .map((skill, i) => (
                        <Button
                            key={i}
                            variant="outline"
                            className="group relative flex aspect-square h-auto w-full cursor-default items-center gap-5 rounded-md px-3 py-2"
                        >
                            <div className="absolute bottom-0 left-0 flex w-full items-end justify-between p-2">
                                <p className="text-xs font-medium capitalize text-black/80 dark:text-white/80">
                                    {ICONS[skill][0]}
                                </p>
                            </div>
                            <Icons
                                key={i}
                                icon={skill}
                                className="h-10 w-10 rounded-md fill-black/80 dark:fill-white/80"
                            />
                        </Button>
                    ))}
            </div>
        </div>
    );
}
