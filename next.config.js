const WithPWA = require("next-pwa");

module.exports = WithPWA({
    dest: "public",
    register: process.env.NODE_ENV === "production" ? true : false
})({
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
                destination: "https://open.spotify.com/user/21kwa7qnjne3q3w3l3x2jnahi",
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
            },
            {
                source: "/linkedin",
                destination: "https://www.linkedin.com/in/orchitiadi",
                permanent: true
            },
            {
                source: "/email",
                destination: "mailto:me@noxzym.my.id",
                permanent: true
            }
        ];
    }
});
