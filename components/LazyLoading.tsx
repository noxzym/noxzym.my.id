export const LazyLoading = function ({ className }: { className?: string }) {
    return (
        <svg
            className={`animate-spin ${className}`}
            viewBox="0 0 48 48"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M36 24c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12v0" />
        </svg>
    );
};
