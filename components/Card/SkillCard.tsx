import { Typography } from "@mui/material";
import { SIMPLE_ICONS, SimpleIcons } from "../SimpleIcons";

export const SkillCard = ({
    name,
    iconName
}: {
    name: string;
    iconName: (keyof typeof SIMPLE_ICONS)[];
}) => {
    return (
        <div className="grid flex-col justify-between gap-5 md:grid-cols-2 md:items-center">
            <Typography className="font-sans text-xl font-semibold dark:text-white/80 md:order-2">
                {name}
            </Typography>
            <div className="flex gap-3 md:justify-end">
                {iconName.map((iconName, i) => (
                    <SimpleIcons
                        key={i}
                        iconName={iconName}
                        className="rounded-md text-5xl dark:fill-white/80"
                    />
                ))}
            </div>
        </div>
    );
};
