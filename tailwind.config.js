/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            fontFamily: {
                "alfa-slab-one": ["alfa-slab-one", "sans-serif"],
                segoe: ["segoe", "sans-serif"],
                "segoe-bold": ["segoe-bold", "sans-serif"],
                garet: ["garet", "sans-serif"],
                "garet-bold": ["garet-bold", "sans-serif"]
            }
        }
    },
    plugins: [require("@headlessui/tailwindcss")]
};
