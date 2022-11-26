import { NaviagationBar } from "./NavigationBar";

export const Container = function ({
    children,
    className
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div className={`w-full px-[5%] lg:px-[15%] ${className}`}>
            <NaviagationBar />
            {children}
        </div>
    );
};
