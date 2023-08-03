export default function ShimmerEffect(height: number, width: number) {
    return `
        <svg
            width="${width}"
            height="${height}"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
        >
            <defs>
                <linearGradient id="g">
                    <stop stop-color="#333" offset="20%" />
                    <stop stop-color="#222" offset="50%" />
                    <stop stop-color="#333" offset="70%" />
                </linearGradient>
            </defs>
            <rect width="${width}" height="${height}" fill="#333" />
            <rect id="r" width="${width}" height="${height}" fill="url(#g)" />
            <animate
                xlink:href="#r"
                attributeName="x"
                from="-${width}"
                to="${width}"
                dur="1s"
                repeatCount="indefinite"
            />
        </svg>`;
}
