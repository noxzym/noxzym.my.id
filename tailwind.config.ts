import { Config } from "tailwindcss/types";

const config: Config = {
    darkMode: ["class"],
    content: ["./src/**/*.{ts,tsx}"],
    important: true,
    theme: {
        extend: {
            fontFamily: {
                sans: "var(--font-sans)"
            },
            colors: {
                light: "#E8E9E9",
                dark: "#0A0C0C"
            }
        }
    },
    plugins: []
};

export default config;
