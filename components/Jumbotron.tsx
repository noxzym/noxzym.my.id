import { SiDiscord, SiGithub, SiInstagram, SiSpotify, SiTwitter } from "react-icons/si";

const GetIcon = function () {
    const icons = [
        [
            "discord",
            () => <SiDiscord
                key={0}
                className="h-10 w-10 fill-[#222831] dark:fill-[#DDDDDD]"
            />
        ],
        [
            "github",
            () => <SiGithub
                key={1}
                className="h-10 w-10 fill-[#222831] dark:fill-[#DDDDDD]"
            />
        ],
        [
            "spotify",
            () => <SiSpotify
                key={2}
                className="h-10 w-10 fill-[#222831] dark:fill-[#DDDDDD]"
            />
        ],
        [
            "instagram",
            () => <SiInstagram
                key={3}
                className="h-10 w-10 fill-[#222831] dark:fill-[#DDDDDD]"
            />
        ],
        [
            "twitter",
            () => <SiTwitter
                key={4}
                className="h-10 w-10 fill-[#222831] dark:fill-[#DDDDDD]"
            />
        ]
    ];
    return <>
        {icons.sort((a, b) => a[0].toString().localeCompare(b[0].toString())).map(([href, Svg]: [string, () => JSX.Element], i) => (
            <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Visit My ${href.toUpperCase()} Account`}
            >
                <Svg />
            </a>
        ))}
    </>
}

export const Jumbotron = function () {
    return (
        <>
            <svg
                viewBox="0 0 810 810"
                xmlns="http://www.w3.org/2000/svg"
                className="h-52 w-52 rounded-md lg:mb-1"
            >
                <path
                    className="fill-[#222831] dark:fill-[#DDDDDD]"
                    fillOpacity={1}
                    d="M0 0h810v810H0z"
                />
                <path
                    className="fill-[#DDDDDD] dark:fill-[#111111]"
                    fillOpacity={1}
                    fillRule="nonzero"
                    d="M83.25 712.5h135v-375l70.5 70.5 36.75 36v.75c-8.605 6.063-15.813 15.063-23.25 22.5l-60 60c-2.184 2.195-5.484 4.844-5.484 8.25 0 3.7 3.87 6.633 6.234 9l17.25 17.25c5.172 5.172 16.234 21.066 24 20.875 8.098-.2 18.605-15.48 24-20.875l44.25-44.25c7.438-7.438 16.438-14.645 22.5-23.25h.75c12.445 17.668 31.957 32.703 47.25 48h-54.75c-6.023 0-17.082-2.121-22.418.883-3.496 1.969-3.082 6.176-3.082 9.617-.004 8-.043 16 0 24 .02 3.32.168 7.125 3.781 8.547 7.117 2.8 19.332.453 26.969.453h63.75c7.723 0 23.387-2.973 30 1.203 11.375 7.18 21.234 20.781 30.75 30.297L561.75 681c9.145 9.145 19.926 24.828 31.5 30.617 3.406 1.7 8.3.883 12 .883h123v-441h-133.5v234l-76.5-76.5-39-38.25V390c8.328-5.867 15.3-14.55 22.5-21.75L543 327c6.828-6.828 20.844-16.305 24.066-25.5 1.914-5.457-5.007-10.191-8.316-13.5l-27-27c-3.023-3.023-7.191-9.02-12-8.809-3.434.153-6.02 3.582-8.25 5.809l-59.25 59.25c-7.438 7.438-16.438 14.645-22.5 23.25H429c-12.254-17.395-31.441-32.191-46.5-47.25h56.25c6.398 0 17.473 2.113 23.168-1.094C465.621 290.07 465 285.636 465 282c0-7.156 3.73-29.73-4.512-32.398-8.414-2.723-20.425-.602-29.238-.602H369c-8.047 0-24.621 3.14-31.5-1.203-13.57-8.567-25.39-24.938-36.75-36.297L196.5 107.25c-3.273-3.273-7.496-9.344-12.75-8.855-3.465.32-5.957 3.566-8.25 5.855L102.75 177c-5.262 5.262-19.254 14.832-20.11 22.5-1.812 16.203.61 34.555.61 51Zm0 0"
                />
            </svg>
            <div className="jusitfy-center my-3 flex flex-col items-center gap-5 text-center text-[#222831] dark:text-[#DDDDDD] lg:mb-0">
                <div className="font-segoe text-3xl font-extrabold lg:text-5xl">
                    noxzym
                </div>
                <div className="font-segoe text-xl font-bold lg:text-3xl">
                    Build anything for improve my skills
                </div>
            </div>
            <div className="bottom-8 left-0 flex w-full flex-row items-center justify-center gap-x-5 lg:absolute lg:px-[15%]">
                <GetIcon />
            </div>
        </>
    );
};
