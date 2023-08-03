import { ILanyard } from "@/types";
import { ArrowOutward } from "@mui/icons-material";
import { Button, Link, Typography } from "@mui/material";
import { SIMPLE_ICONS, SimpleIcons } from "../SimpleIcons";

export const ContactCard = ({
    item,
    SWRLanyard
}: {
    item: string;
    SWRLanyard: ILanyard;
}) => {
    return (
        <Link
            href={`/${item}`}
            variant="button"
            target="_blank"
            rel="noopener"
            underline="none"
            color="inherit"
        >
            <Button
                color="inherit"
                startIcon={
                    SIMPLE_ICONS[item] ? (
                        <SimpleIcons
                            iconName={item as keyof typeof SIMPLE_ICONS}
                            className="h-10 w-10 dark:fill-white/80"
                        />
                    ) : (
                        <SimpleIcons
                            iconName="discord"
                            className="h-10 w-10 dark:fill-white/80"
                        />
                    )
                }
                sx={{
                    "& > span": { margin: 0 }
                }}
                className="flex w-full items-center gap-5 rounded-md bg-black/5 px-3 py-2 normal-case text-black/80 hover:bg-black/10 dark:bg-white/5 dark:text-white/80 hover:dark:bg-white/10"
            >
                <div className="flex w-full items-center justify-between">
                    <Typography className="font-sans text-lg font-semibold dark:text-white/80">
                        {SWRLanyard.data.kv[item]
                            ? SWRLanyard.data.kv[item]
                            : `${SWRLanyard.data.discord_user.username}`}
                    </Typography>
                    <ArrowOutward className="text-2xl dark:fill-white/80" />
                </div>
            </Button>
        </Link>
    );
};
