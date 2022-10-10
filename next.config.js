/**
 * @type {import('next').NextConfig}
 **/
module.exports = {
    reactStrictMode: true,
    images: { domains: ["cdn.discordapp.com"] },
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.fallback.fs = false;
            config.resolve.fallback.child_process = false;
            config.resolve.fallback.request = false;
            config.resolve.fallback.net = false;
            config.resolve.fallback.worker_threads = false;
            config.resolve.fallback.tls = false;
        }
        return config;
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
                source: "/spotify",
                destination:
                    "https://open.spotify.com/user/21kwa7qnjne3q3w3l3x2jnahi",
                permanent: true
            },
            {
                source: "/instagram",
                destination: "https://www.instagram.com/orchit07",
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
