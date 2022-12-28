import { Transition } from "@headlessui/react";
import { useTheme } from "next-themes";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { HiMoon, HiSun } from "react-icons/hi";
import { LazyLoading } from "../LazyLoading";
import { DesktopNavbar } from "./DesktopNavbar";
import { MobileNavbar } from "./MobileNavbar";

function SVGIcon(
    toTheme: "dark" | "light",
    setTheme: (theme: string) => void,
    setThemeIcon: Dispatch<SetStateAction<(boolean | JSX.Element)[]>>
) {
    return <>
        <Transition
            show={toTheme === "dark"}
            enter="transition-transform duration-500"
            enterTo="rotate-90"
            leaveTo="hidden"
        >
            <HiSun
                aria-label="Light Theme"
                className="cursor-pointer h-10 w-10 fill-[#DDDDDD]"
                onClick={() => renderThemeChange("light", setTheme, setThemeIcon)}
            />
        </Transition>
        <Transition
            show={toTheme === "light"}
            enter="transition-transform duration-500"
            enterTo="rotate-[360deg]"
            leaveTo="hidden"
        >
            <HiMoon
                aria-label="Dark Theme"
                className="cursor-pointer h-10 w-10 fill-[#222831]"
                onClick={() => renderThemeChange("dark", setTheme, setThemeIcon)}
            />
        </Transition></>
}

function renderThemeChange(
    toTheme: "dark" | "light",
    setTheme: (theme: string) => void,
    setThemeIcon: Dispatch<SetStateAction<(boolean | JSX.Element)[]>>
) {
    setTheme(toTheme);
    setThemeIcon([true, SVGIcon(toTheme, setTheme, setThemeIcon)]);
}

export const NaviagationBar = function () {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme;
    const [themeIcon, setThemeIcon] = useState([
        false,
        <LazyLoading
            key={0}
            className="h-10 w-10 stroke-[#222831] stroke-[4] dark:stroke-[#DDDDDD]"
        />
    ]);

    useEffect(() => {
        if (!themeIcon[0]) {
            setThemeIcon([
                true,
                SVGIcon(
                    currentTheme === "dark" ? "dark" : "light",
                    setTheme,
                    setThemeIcon
                )
            ]);
        }
    }, [currentTheme, themeIcon, setTheme]);

    useEffect(() => {
        setThemeIcon([
            true,
            SVGIcon(
                currentTheme === "dark" ? "dark" : "light",
                setTheme,
                setThemeIcon
            )
        ]);
    }, [currentTheme, setTheme]);

    return (
        <>
            <MobileNavbar themeIcon={themeIcon} />
            <DesktopNavbar themeIcon={themeIcon} />
        </>
    );
};
