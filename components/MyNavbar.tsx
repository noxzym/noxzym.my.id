import { Popover, Transition } from "@headlessui/react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";
import { Dispatch, Fragment, SetStateAction, useEffect, useState } from "react";
import { LazyLoading } from "./LazyLoading";

function GetNavigationPath(): Record<string, string>[] {
    return [
        {
            name: "home",
            path: "/"
        },
        {
            name: "blog",
            path: "/blog"
        },
        {
            name: "about",
            path: "/about"
        },
        {
            name: "contact",
            path: "/contact"
        }
    ];
}

function GetNavigationElement(pathname: string) {
    return GetNavigationPath().map((item, i) => (
        <div
            key={i}
            className="flex w-full text-center capitalize text-[#222831] dark:text-[#DDDDDD] lg:block lg:w-auto lg:text-left"
        >
            <Link href={item.path} className="cursor-pointer" rel="noreferrer">
                <a
                    className={`transition-on-theme-change w-full rounded py-2 hover:bg-[#B1B1B1] dark:hover:bg-[#171717] lg:w-auto lg:rounded-none lg:border-b-2 lg:px-4 hover:lg:border-[#222831] hover:lg:bg-transparent dark:hover:lg:border-[#DDDDDD] dark:hover:lg:bg-transparent ${
                        pathname === item.path
                            ? "bg-[#B1B1B1] dark:bg-[#171717] lg:border-[#222831] lg:bg-transparent dark:lg:border-[#DDDDDD] dark:lg:bg-transparent"
                            : "lg:border-transparent"
                    }`}
                >
                    {item.name}
                </a>
            </Link>
        </div>
    ));
}

// prettier-ignore
function MobileNavbar({ pathname, themeIcon }: { pathname: string; themeIcon: (boolean | JSX.Element)[] }) {
    return (
        <>
            <nav className="absolute z-10 my-[5%] flex w-full flex-row items-center justify-between px-[5%] lg:hidden">
                <div className="flex flex-row items-center justify-center gap-x-2">
                    <div>
                        <Popover>
                            {() => (
                                <>
                                    <Popover.Button>
                                        <svg
                                            className="h-10 w-10 stroke-[#222831] stroke-[6] dark:stroke-[#DDDDDD]"
                                            viewBox="0 0 48 48"
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-labelledby="hamburgerIconTitle"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M7.95 11.95h32m-32 12h32m-32 12h32" />
                                        </svg>
                                    </Popover.Button>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="opacity-0 translate-y-0"
                                        enterTo="opacity-100 translate-y-1"
                                        leave="transition ease-in duration-150"
                                        leaveFrom="opacity-100 translate-y-1"
                                        leaveTo="opacity-0 translate-y-0"
                                    >
                                        <Popover.Panel
                                            unmount
                                            className="absolute left-0 right-0 z-10 w-screen"
                                        >
                                            <div className="mx-[3%] rounded-xl border-2 border-[#222831] bg-[#C7C7C7] shadow dark:border-[#171717] dark:bg-[#111111]">
                                                <div className="flex flex-col items-center justify-center py-2">
                                                    {GetNavigationElement(pathname)}
                                                </div>
                                            </div>
                                        </Popover.Panel>
                                    </Transition>
                                </>
                            )}
                        </Popover>
                    </div>
                    <Link href="/">
                        <svg
                            viewBox="0 0 810 810"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-9 w-9 cursor-pointer"
                        >
                            <path
                                className="transition-on-theme-change fill-[#222831] dark:fill-[#DDDDDD]"
                                fillOpacity={1}
                                d="M0 0h810v810H0z"
                            />
                            <path
                                className="transition-on-theme-change fill-[#DDDDDD] dark:fill-[#111111]"
                                fillOpacity={1}
                                fillRule="nonzero"
                                d="M83.25 712.5h135v-375l70.5 70.5 36.75 36v.75c-8.605 6.063-15.813 15.063-23.25 22.5l-60 60c-2.184 2.195-5.484 4.844-5.484 8.25 0 3.7 3.87 6.633 6.234 9l17.25 17.25c5.172 5.172 16.234 21.066 24 20.875 8.098-.2 18.605-15.48 24-20.875l44.25-44.25c7.438-7.438 16.438-14.645 22.5-23.25h.75c12.445 17.668 31.957 32.703 47.25 48h-54.75c-6.023 0-17.082-2.121-22.418.883-3.496 1.969-3.082 6.176-3.082 9.617-.004 8-.043 16 0 24 .02 3.32.168 7.125 3.781 8.547 7.117 2.8 19.332.453 26.969.453h63.75c7.723 0 23.387-2.973 30 1.203 11.375 7.18 21.234 20.781 30.75 30.297L561.75 681c9.145 9.145 19.926 24.828 31.5 30.617 3.406 1.7 8.3.883 12 .883h123v-441h-133.5v234l-76.5-76.5-39-38.25V390c8.328-5.867 15.3-14.55 22.5-21.75L543 327c6.828-6.828 20.844-16.305 24.066-25.5 1.914-5.457-5.007-10.191-8.316-13.5l-27-27c-3.023-3.023-7.191-9.02-12-8.809-3.434.153-6.02 3.582-8.25 5.809l-59.25 59.25c-7.438 7.438-16.438 14.645-22.5 23.25H429c-12.254-17.395-31.441-32.191-46.5-47.25h56.25c6.398 0 17.473 2.113 23.168-1.094C465.621 290.07 465 285.636 465 282c0-7.156 3.73-29.73-4.512-32.398-8.414-2.723-20.425-.602-29.238-.602H369c-8.047 0-24.621 3.14-31.5-1.203-13.57-8.567-25.39-24.938-36.75-36.297L196.5 107.25c-3.273-3.273-7.496-9.344-12.75-8.855-3.465.32-5.957 3.566-8.25 5.855L102.75 177c-5.262 5.262-19.254 14.832-20.11 22.5-1.812 16.203.61 34.555.61 51Zm0 0"
                            />
                        </svg>
                    </Link>
                </div>
                {themeIcon[1]}
            </nav>
        </>
    );
}

// prettier-ignore
function DesktopNavbar({ pathname, themeIcon }: { pathname: string; themeIcon: (boolean | JSX.Element)[] }) {
    return (
        <nav className="absolute top-7 z-10 hidden w-full flex-row items-center justify-between px-[15%] lg:flex">
            <div className="flex flex-row items-center justify-center gap-x-3">
                {themeIcon[1]}
                <Link href="/">
                    <svg
                        viewBox="0 0 810 810"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 cursor-pointer rounded-md"
                    >
                        <path
                            className="transition-on-theme-change fill-[#222831] dark:fill-[#DDDDDD]"
                            fillOpacity={1}
                            d="M0 0h810v810H0z"
                        />
                        <path
                            className="transition-on-theme-change fill-[#DDDDDD] dark:fill-[#111111]"
                            fillOpacity={1}
                            fillRule="nonzero"
                            d="M83.25 712.5h135v-375l70.5 70.5 36.75 36v.75c-8.605 6.063-15.813 15.063-23.25 22.5l-60 60c-2.184 2.195-5.484 4.844-5.484 8.25 0 3.7 3.87 6.633 6.234 9l17.25 17.25c5.172 5.172 16.234 21.066 24 20.875 8.098-.2 18.605-15.48 24-20.875l44.25-44.25c7.438-7.438 16.438-14.645 22.5-23.25h.75c12.445 17.668 31.957 32.703 47.25 48h-54.75c-6.023 0-17.082-2.121-22.418.883-3.496 1.969-3.082 6.176-3.082 9.617-.004 8-.043 16 0 24 .02 3.32.168 7.125 3.781 8.547 7.117 2.8 19.332.453 26.969.453h63.75c7.723 0 23.387-2.973 30 1.203 11.375 7.18 21.234 20.781 30.75 30.297L561.75 681c9.145 9.145 19.926 24.828 31.5 30.617 3.406 1.7 8.3.883 12 .883h123v-441h-133.5v234l-76.5-76.5-39-38.25V390c8.328-5.867 15.3-14.55 22.5-21.75L543 327c6.828-6.828 20.844-16.305 24.066-25.5 1.914-5.457-5.007-10.191-8.316-13.5l-27-27c-3.023-3.023-7.191-9.02-12-8.809-3.434.153-6.02 3.582-8.25 5.809l-59.25 59.25c-7.438 7.438-16.438 14.645-22.5 23.25H429c-12.254-17.395-31.441-32.191-46.5-47.25h56.25c6.398 0 17.473 2.113 23.168-1.094C465.621 290.07 465 285.636 465 282c0-7.156 3.73-29.73-4.512-32.398-8.414-2.723-20.425-.602-29.238-.602H369c-8.047 0-24.621 3.14-31.5-1.203-13.57-8.567-25.39-24.938-36.75-36.297L196.5 107.25c-3.273-3.273-7.496-9.344-12.75-8.855-3.465.32-5.957 3.566-8.25 5.855L102.75 177c-5.262 5.262-19.254 14.832-20.11 22.5-1.812 16.203.61 34.555.61 51Zm0 0"
                        />
                    </svg>
                </Link>
            </div>
            <div className="relative flex flex-row items-center justify-center gap-x-2 font-segoe text-xl font-semibold">
                {GetNavigationElement(pathname)}
            </div>
        </nav>
    );
}

function SVGIcon(
    toTheme: "dark" | "light",
    setTheme: (theme: string) => void,
    setThemeIcon: Dispatch<SetStateAction<(boolean | JSX.Element)[]>>
) {
    return toTheme === "dark" ? (
        <button
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

export default function MyNavbar() {
    const router = useRouter();
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
            <MobileNavbar
                pathname={router.asPath.split(/(?=\/)/)[0]}
                themeIcon={themeIcon}
            />
            <DesktopNavbar
                pathname={router.asPath.split(/(?=\/)/)[0]}
                themeIcon={themeIcon}
            />
        </>
    );
}
