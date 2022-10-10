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
                "alfa-slab-one": ["alfa-slab-one"],
                segoe: ["segoe"],
                "segoe-bold": ["segoe-bold"]
            }
        }
    },
    plugins: [
        require("@headlessui/tailwindcss"),
        require("@tailwindcss/typography"),
        require("@tailwindcss/forms")({ strategy: "class" })
    ]
};
