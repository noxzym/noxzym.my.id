export default function NotFound() {
    return (
        <div className="flex h-full flex-col items-center justify-center gap-5 md:flex-row">
            <p className="text-4xl font-bold md:border-r-1 md:pr-6 md:text-6xl">404</p>
            <p className="text-center font-medium md:text-left">This page could not be found.</p>
        </div>
    );
}
