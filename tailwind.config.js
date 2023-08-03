/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    darkMode: "class",
    corePlugins: {
        preflight: false
    },
    important: true,
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: "var(--font-open-sans)",
                poppins: "var(--font-poppins)"
            }
        }
    },
    plugins: [require("@tailwindcss/typography")]
};
