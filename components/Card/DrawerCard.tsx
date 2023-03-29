import { ArrowRightAlt } from "@mui/icons-material";
import { Drawer, Container, Button, Typography, Divider } from "@mui/material";
import Link from "next/link";
import { SetStateAction } from "react";

export const DrawerCard = ({
    isOpen,
    setOpen,
    Navigation
}: {
    isOpen: boolean;
    setOpen: (value: SetStateAction<boolean>) => void;
    Navigation: { name: string; link: string; icon: JSX.Element }[];
}) => {
    return (
        <Drawer
            id="__next"
            anchor="left"
            open={isOpen}
            onClose={() => setOpen(false)}
            PaperProps={{
                sx: {
                    width: "calc(100%*(3/4))",
                    backgroundColor: "#DDDDDD"
                }
            }}
        >
            <Container
                fixed
                className="flex w-full flex-col items-center justify-center p-0"
            >
                <Button
                    color="inherit"
                    onClick={() => setOpen(false)}
                    startIcon={
                        <ArrowRightAlt className="rotate-180 text-2xl font-semibold" />
                    }
                    sx={{
                        "& > span": { margin: 0 }
                    }}
                    className="flex w-full items-center justify-start gap-6 p-4 normal-case"
                >
                    <Typography className="font-sans text-lg font-semibold">
                        Navigation
                    </Typography>
                </Button>
                <Divider className="w-full" />
                <div className="flex w-full flex-col items-center">
                    {Navigation.map((item, i) => (
                        <Link
                            key={i}
                            href={item.link}
                            className="w-full text-inherit no-underline"
                        >
                            <Button
                                startIcon={item.icon}
                                color="inherit"
                                onClick={() => setOpen(false)}
                                sx={{
                                    "& > span": { margin: 0 }
                                }}
                                className="w-full justify-start gap-6 p-4 normal-case"
                            >
                                <Typography className="font-sans text-lg font-semibold">
                                    {item.name}
                                </Typography>
                            </Button>
                        </Link>
                    ))}
                </div>
            </Container>
        </Drawer>
    );
};
