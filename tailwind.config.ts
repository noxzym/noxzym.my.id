import { Config } from "tailwindcss/types";

const config: Config = {
    darkMode: ["class"],
    content: ["./src/**/*.{ts,tsx}"],
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
    plugins: [require("tailwindcss-animate")]
};

export default config;
