import { Transition } from "@headlessui/react";
import { NaviagationBar } from "./NavigationBar";

export const Container = function ({
    children,
    className
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <Transition
            appear
            show
            enter="transition-opacity duration-700"
            enterFrom="opacity-0"
        >
            <div className={`w-full px-[5%] lg:px-[15%] ${className}`}>
                <NaviagationBar />
                {children}
            </div>
        </Transition>
    );
};
