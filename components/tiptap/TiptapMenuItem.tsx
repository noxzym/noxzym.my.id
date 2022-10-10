import React from "react";

export const TiptapMenuItem = function ({
    icon,
    title,
    action,
    isActive = () => false
}: {
    icon?: string;
    title?: string;
    action?: () => void;
    isActive?: () => boolean;
}) {
    return (
        <button className={`rounded`} onClick={action} title={title}>
            <div
                className={`h-full w-full rounded p-1 text-lg hover:bg-[#EEEEEE] dark:hover:bg-[#555555] ${
                    isActive()
                        ? "bg-[#EEEEEE] dark:bg-[#555555]"
                        : "bg-transparent"
                }`}
            >
                <i className={`ri-${icon}`} />
            </div>
        </button>
    );
};
