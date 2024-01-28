import { Button } from "@/components/ui/button";
import { Icons } from "@/components/utils/Icons";
import { IconList } from "@/lib/constants";

export const ExperienceCard = ({ skill }: { skill: keyof typeof IconList }) => {
    return (
        <Button
            variant="outline"
            className="group relative flex aspect-square h-auto w-full cursor-default items-center gap-5 rounded-md px-3 py-2"
        >
            <div className="absolute bottom-0 left-0 flex w-full items-end justify-between p-2">
                <p className="text-xs font-medium capitalize">{IconList[skill][0]}</p>
            </div>
            <Icons icon={skill} className="h-10 w-10 rounded-md fill-black/80 dark:fill-white/80" />
        </Button>
    );
};
