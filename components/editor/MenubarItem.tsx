export default function MenubarItem({
    icon,
    title,
    action,
    checkActive = () => false
}: {
    icon?: string;
    title?: string;
    action?: () => void;
    checkActive?: () => boolean;
}) {
    return (
        <button className="rounded" onClick={action} {...{ title }}>
            <div
                className={`h-full w-full rounded p-1 text-lg hover:bg-[#EEEEEE] dark:hover:bg-[#555555] ${
                    checkActive && checkActive()
                        ? "bg-[#EEEEEE] dark:bg-[#555555]"
                        : "bg-transparent"
                }`}
            >
                <i className={`ri-${icon}`} />
            </div>
        </button>
    );
}
