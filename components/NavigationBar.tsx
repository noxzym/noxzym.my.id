import {
    AccountBox,
    Article,
    ContactPage,
    Home,
    Menu
} from "@mui/icons-material";
import { Button, Container, IconButton, Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { DrawerCard } from "./Card/DrawerCard";
import { NoxzymIcon } from "./NoxzymIcon";

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
        name: "Contacts",
        link: "/contacts",
        icon: <ContactPage className="text-2xl" />
    },
    {
        name: "Blog",
        link: "/blog",
        icon: <Article className="text-2xl" />
    }
];

export const NavigationBar = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <Container
                fixed
                className="sticky top-0 z-50 flex items-center justify-between bg-[#DDDDDD] px-5 py-5 shadow md:px-20 md:shadow-none"
            >
                <IconButton
                    onClick={() => setOpen(true)}
                    className="p-0 md:hidden"
                >
                    <Menu fontSize="large" />
                </IconButton>
                <Typography className="font-sans text-xl font-bold md:hidden">
                    noxzym
                </Typography>
                <Link href="/" className="md:order-first">
                    <NoxzymIcon fontSize="large" className="rounded-md" />
                </Link>
                <div className="hidden w-full justify-end gap-3 md:flex">
                    {Navigation.map((item, i) => (
                        <Link
                            key={i}
                            href={item.link}
                            className="text-inherit no-underline"
                        >
                            <Button
                                color="inherit"
                                className="justify-start px-3 py-2 normal-case"
                            >
                                <Typography className="font-sans font-semibold">
                                    {item.name}
                                </Typography>
                            </Button>
                        </Link>
                    ))}
                </div>
            </Container>
            <DrawerCard {...{ isOpen, setOpen, Navigation }} />
        </>
    );
};
