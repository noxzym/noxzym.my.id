import { LazyLoading } from "../LazyLoading";

export const ContactCard = function ({
    name,
    href,
    children
}: {
    name?: string;
    href: string;
    children: JSX.Element;
}) {
    return (
        <a
            href={href}
            target="_blank"
            className="w-full rounded-md border-2 border-[#C7C7C7] bg-transparent py-2 px-3 shadow-md hover:bg-[#C7C7C7] dark:border-[#333333] dark:shadow-none dark:hover:bg-[#333333]"
            rel="noreferrer"
        >
            <div className="flex items-center justify-between">
                <div className="flex flex-row items-center gap-3">
                    {children}
                    <div className="font-segoe font-bold">
                        {name ? (
                            name
                        ) : (
                            <LazyLoading className="h-7 w-7 stroke-[#222831] stroke-[4] dark:stroke-[#DDDDDD]" />
                        )}
                    </div>
                </div>
                <svg
                    className="h-6 w-6 fill-[#222831] dark:fill-[#DDDDDD]"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z" />
                </svg>
            </div>
        </a>
    );
};
