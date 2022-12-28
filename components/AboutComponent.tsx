export const AboutComponent = function ({
    children,
    className
}: {
    children: JSX.Element[] | JSX.Element;
    className?: string;
}) {
    return (
        <div className="my-3 w-full border-[#222831] dark:border-[#DDDDDD]">
            <div className={`flex w-full flex-col py-1 ${className}`}>
                {children}
            </div>
        </div>
    );
};
