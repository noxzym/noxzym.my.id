import Link from "next/link";

function GetNavigationPath(): Record<string, string>[] {
    return [
        {
            name: "home",
            path: "/"
        },
        // {
        //     name: "about",
        //     path: "/#about"
        // },
        // {
        //     name: "contact",
        //     path: "/#contact"
        // },
        {
            name: "blog",
            path: "/blog"
        }
    ];
}

export const GetNavigationElement = function (pathname?: string) {
    return GetNavigationPath().map((item, i) => (
        <div
            key={i}
            className="flex w-full text-center capitalize text-[#222831] dark:text-[#DDDDDD] lg:block lg:w-auto lg:text-left"
        >
            <Link
                href={item.path}
                className={`w-full cursor-pointer rounded py-2 lg:w-auto lg:px-4`.concat(
                    item.name === "blog"
                        ? " rounded-full bg-[#222831] text-[#DDDDDD] dark:bg-[#DDDDDD] dark:text-[#111111]"
                        : " hover:bg-[#C7C7C7] dark:hover:bg-[#171717] lg:rounded-none hover:lg:border-b-2 hover:lg:border-[#222831] hover:lg:bg-transparent dark:hover:lg:border-[#DDDDDD] dark:hover:lg:bg-transparent"
                )}
            >
                {item.name}
            </Link>
        </div>
    ));
};
