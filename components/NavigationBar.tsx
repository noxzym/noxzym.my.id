import { useScrollPosition } from "@/hooks/useScrollPosition";
import {
    AccountBox,
    Article,
    Brush,
    Close,
    ContactPage,
    Home,
    KeyboardCommandKey
} from "@mui/icons-material";
import {
    Box,
    Button,
    Container,
    IconButton,
    Modal,
    Typography
} from "@mui/material";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Navigation = [
    {
        name: "Home",
        link: "/",
        icon: <Home className="text-2xl" />
    },
    {
        name: "About Me",
        link: "/about",
        icon: <AccountBox className="text-2xl" />
    },
    {
        name: "Contact",
        link: "/contact",
        icon: <ContactPage className="text-2xl" />
    },
    {
        name: "Blog",
        link: "/blog",
        icon: <Article className="text-2xl" />
    }
];

export const NavigationBar = () => {
    const { pathname } = useRouter();
    const [open, setOpen] = useState(false);
    const { theme, setTheme } = useTheme();
    const scrollPosition = useScrollPosition();

    const toggleColorMode = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    const toggleModal = () => {
        setOpen(!open);
    };

    return (
        <div
            className={`${
                scrollPosition
                    ? "bg-[#E8E9E9]/30 backdrop-blur-md dark:bg-[#0A0C0C]/30"
                    : ""
            } sticky top-0 z-50 px-7 py-5`}
        >
            <Container fixed maxWidth="md" className="px-0 md:px-7">
                <div className="flex items-center justify-between">
                    <Link href="/" className="no-underline">
                        <Typography className="font-poppins text-sm font-bold text-black/80 dark:text-white/80">
                            Noxzym();
                        </Typography>
                    </Link>
                    <div className="flex flex-row items-center gap-3">
                        {Navigation.map(({ link, name }, i) => (
                            <Link
                                key={i}
                                href={link}
                                className="hidden no-underline md:block"
                            >
                                <Button
                                    color="inherit"
                                    className={`${
                                        pathname === link
                                            ? "bg-black/5 dark:bg-white/5"
                                            : ""
                                    } text-black/30 hover:bg-black/5 dark:text-white/30 hover:dark:bg-white/5`}
                                >
                                    <Typography className="font-poppins text-sm font-bold lowercase text-black/80 dark:text-white/80">
                                        {name}
                                    </Typography>
                                </Button>
                            </Link>
                        ))}
                        <IconButton
                            size="small"
                            onClick={toggleModal}
                            className="text-black/80 hover:bg-black/5 dark:text-white/80 hover:dark:bg-white/5 md:hidden"
                        >
                            <KeyboardCommandKey />
                        </IconButton>
                        <IconButton
                            size="small"
                            onClick={toggleColorMode}
                            className="text-black/80 hover:bg-black/5 dark:text-white/80 hover:dark:bg-white/5"
                        >
                            <Brush />
                        </IconButton>
                    </div>
                </div>
                <Modal
                    keepMounted
                    open={open}
                    onClose={toggleModal}
                    sx={{
                        "& > div": { backdropFilter: "blur(10px)" }
                    }}
                >
                    <Box className="absolute left-1/2 top-1/2 flex w-3/4 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-solid border-white/30 bg-white/10 p-5">
                        <div className="flex h-full w-full flex-col gap-4">
                            <div className="flex items-center justify-between">
                                <Typography className="font-poppins font-bold capitalize text-white/50">
                                    Navigation Panel
                                </Typography>
                                <IconButton
                                    onClick={toggleModal}
                                    className="text-black/80 hover:bg-black/5 dark:text-white/80 hover:dark:bg-white/5"
                                >
                                    <Close className="text-white/50" />
                                </IconButton>
                            </div>
                            <div className="flex flex-col gap-2">
                                {Navigation.map(({ icon, link, name }, i) => (
                                    <Link
                                        key={i}
                                        href={link}
                                        className="no-underline"
                                    >
                                        <Button
                                            color="inherit"
                                            startIcon={icon}
                                            className="w-full justify-start text-white/30 hover:bg-transparent"
                                        >
                                            <Typography
                                                className={`${
                                                    pathname === link
                                                        ? "text-white"
                                                        : ""
                                                } font-poppins text-sm font-bold capitalize text-white/50`}
                                            >
                                                {name}
                                            </Typography>
                                        </Button>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </Box>
                </Modal>
            </Container>
        </div>
    );
};
