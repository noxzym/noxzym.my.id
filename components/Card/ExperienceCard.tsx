export const ExperienceCard = function ({
    children,
    title,
    position
}: {
    children: JSX.Element[] | JSX.Element;
    title: string;
    position: string;
}) {
    return (
        <div className="w-full rounded-md border-2 border-[#C7C7C7] bg-transparent py-2 px-3 shadow-md hover:bg-[#C7C7C7] dark:border-[#333333] dark:shadow-none dark:hover:bg-[#333333]">
            <div className="flex flex-row items-center justify-between gap-2">
                <div className="flex flex-col">
                    <div className="font-segoe font-bold">{title}</div>
                    <div className="font-garet text-sm lg:text-xs">
                        {position}
                    </div>
                </div>
                <div className="flex flex-row gap-1">{children}</div>
            </div>
        </div>
    );
};
