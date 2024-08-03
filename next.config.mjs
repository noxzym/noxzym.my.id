import withSerwistInit from "@serwist/next";

const withSerwist = withSerwistInit({
    // Note: This is only an example. If you use Pages Router,
    // use something else that works, such as "service-worker/index.ts".
    swSrc: "src/app/sw.ts",
    swDest: "public/sw.js"
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ["next-mdx-remote"],
    images: {
        remotePatterns: [
            {
                hostname: "*"
            }
        ]
    },
    async redirects() {
        return [
            {
                source: "/discord",
                destination: "https://discord.com/users/243728573624614912",
                permanent: true
            },
            {
                source: "/github",
                destination: "https://github.com/noxzym",
                permanent: true
            },
            {
                source: "/instagram",
                destination: "https://instagram.com/orchit07",
                permanent: true
            },
            {
                source: "/linkedin",
                destination: "https://linkedin.com/in/orchit",
                permanent: true
            },
            {
                source: "/resume",
                destination:
                    "https://drive.google.com/file/d/1_rRlvCXkUKSGcZKoeqj_C9_Hy99H2Kvr/view",
                permanent: true
            },
            {
                source: "/spotify",
                destination: "https://open.spotify.com/user/21kwa7qnjne3q3w3l3x2jnahi",
                permanent: true
            },
            {
                source: "/twitter",
                destination: "https://twitter.com/noxzym",
                permanent: true
            }
        ];
    }
};

export default withSerwist(nextConfig);
