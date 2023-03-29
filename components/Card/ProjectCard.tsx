import { Box, Typography } from "@mui/material";

export const ProjectCard = ({
    index,
    name,
    role
}: {
    index: number;
    name: string;
    role: string;
}) => {
    return (
        <Box className="flex w-full items-center gap-5">
            <Typography
                align="center"
                className="h-10 w-10 font-sans text-3xl font-semibold"
            >
                {index + 1}
            </Typography>
            <div className="flex w-full flex-col">
                <Typography className="font-sans text-lg font-semibold">
                    {name}
                </Typography>
                <Typography className="font-sans text-sm font-medium text-[#909090]">
                    {role}
                </Typography>
            </div>
        </Box>
    );
};
