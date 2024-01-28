import { ExperienceCard } from "@/components/card/ExperienceCard";
import { ExperienceList } from "@/lib/constants";

export function Experience() {
    return (
        <div className="flex flex-col gap-8 py-8 md:py-16">
            <p className="text-center text-2xl font-bold">Experience</p>
            <div className="grid w-full grid-cols-3 gap-5 self-center md:max-w-2xl md:grid-cols-4">
                {ExperienceList.map(x => x.icon)
                    .reduce((a, b) => [...a, ...b])
                    .map((skill, i) => (
                        <ExperienceCard key={i} skill={skill} />
                    ))}
            </div>
        </div>
    );
}
