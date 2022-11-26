import { useTheme } from "next-themes";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { LazyLoading } from "../LazyLoading";
import { DesktopNavbar } from "./DesktopNavbar";
import { MobileNavbar } from "./MobileNavbar";

function SVGIcon(
    toTheme: "dark" | "light",
    setTheme: (theme: string) => void,
    setThemeIcon: Dispatch<SetStateAction<(boolean | JSX.Element)[]>>
) {
    return toTheme === "dark" ? (
        <button
            aria-label="Switch Theme Button"
            onClick={() => renderThemeChange("light", setTheme, setThemeIcon)}
        >
            <svg
                className="h-10 w-10 rotate-90 fill-[#DDDDDD] stroke-[#DDDDDD] stroke-[1.5] transition-transform duration-500"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm10-6h1M12 2V1m0 22v-1m8-2-1-1m1-15-1 1M4 20l1-1M4 4l1 1m-4 7h1" />
            </svg>
        </button>
    ) : (
        <button
            aria-label="Switch Theme Button"
            onClick={() => renderThemeChange("dark", setTheme, setThemeIcon)}
        >
            <svg
                className="h-10 w-10 rotate-[360deg] fill-[#222831] transition-transform duration-500"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M21 11.949C21 16.886 16.878 21 11.725 21c-3.917 0-7.318-2.16-8.657-5.451-.103-.309-.103-.618.103-.823.206-.206.515-.309.824-.206.516.103 1.03.206 1.443.206 4.122 0 7.42-3.189 7.42-7.2 0-1.235-.206-2.263-.824-3.497-.103-.206-.103-.515.103-.72.206-.206.412-.309.721-.309C17.496 3.514 21 7.423 21 11.949Z" />
            </svg>
        </button>
    );
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
