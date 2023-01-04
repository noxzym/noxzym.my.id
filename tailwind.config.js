/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    darkMode: "class",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            fontFamily: {
                poppins: ["poppins"],
                segoe: ["segoe"],
                "segoe-bold": ["segoe-bold"],
                garet: ["garet"],
                "garet-bold": ["garet-bold"]
            },
            typography: {
                DEFAULT: {
                    css: {
                        "--tw-prose-body": "#222831",
                        "--tw-prose-headings": "#222831",
                        "--tw-prose-lead": "#222831",
                        "--tw-prose-links": "#222831",
                        "--tw-prose-bold": "#222831",
                        "--tw-prose-counters": "#222831",
                        "--tw-prose-bullets": "#222831",
                        "--tw-prose-hr": "#222831",
                        "--tw-prose-quotes": "#222831",
                        "--tw-prose-quote-borders": "#222831",
                        "--tw-prose-captions": "#222831",
                        "--tw-prose-code": "#222831",
                        "--tw-prose-pre-code": "#222831",
                        "--tw-prose-pre-bg": "#222831",
                        "--tw-prose-th-borders": "#222831",
                        "--tw-prose-td-borders": "#222831",
                        "--tw-prose-invert-body": "#222831",
                        "--tw-prose-invert-headings": "#222831",
                        "--tw-prose-invert-lead": "#222831",
                        "--tw-prose-invert-links": "#222831",
                        "--tw-prose-invert-bold": "#222831",
                        "--tw-prose-invert-counters": "#222831",
                        "--tw-prose-invert-bullets": "#222831",
                        "--tw-prose-invert-hr": "#222831",
                        "--tw-prose-invert-quotes": "#222831",
                        "--tw-prose-invert-quote-borders": "#222831",
                        "--tw-prose-invert-captions": "#222831",
                        "--tw-prose-invert-code": "#222831",
                        "--tw-prose-invert-pre-code": "#222831",
                        "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
                        "--tw-prose-invert-th-borders": "#222831",
                        "--tw-prose-invert-td-borders": "#222831"
                    }
                },
                dark: {
                    css: {
                        "--tw-prose-body": "#DDDDDD",
                        "--tw-prose-headings": "#DDDDDD",
                        "--tw-prose-lead": "#DDDDDD",
                        "--tw-prose-links": "#DDDDDD",
                        "--tw-prose-bold": "#DDDDDD",
                        "--tw-prose-counters": "#DDDDDD",
                        "--tw-prose-bullets": "#DDDDDD",
                        "--tw-prose-hr": "#DDDDDD",
                        "--tw-prose-quotes": "#DDDDDD",
                        "--tw-prose-quote-borders": "#DDDDDD",
                        "--tw-prose-captions": "#DDDDDD",
                        "--tw-prose-code": "#DDDDDD",
                        "--tw-prose-pre-code": "#DDDDDD",
                        "--tw-prose-pre-bg": "#DDDDDD",
                        "--tw-prose-th-borders": "#DDDDDD",
                        "--tw-prose-td-borders": "#DDDDDD",
                        "--tw-prose-invert-body": "#DDDDDD",
                        "--tw-prose-invert-headings": "#DDDDDD",
                        "--tw-prose-invert-lead": "#DDDDDD",
                        "--tw-prose-invert-links": "#DDDDDD",
                        "--tw-prose-invert-bold": "#DDDDDD",
                        "--tw-prose-invert-counters": "#DDDDDD",
                        "--tw-prose-invert-bullets": "#DDDDDD",
                        "--tw-prose-invert-hr": "#DDDDDD",
                        "--tw-prose-invert-quotes": "#DDDDDD",
                        "--tw-prose-invert-quote-borders": "#DDDDDD",
                        "--tw-prose-invert-captions": "#DDDDDD",
                        "--tw-prose-invert-code": "#DDDDDD",
                        "--tw-prose-invert-pre-code": "#DDDDDD",
                        "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
                        "--tw-prose-invert-th-borders": "#DDDDDD",
                        "--tw-prose-invert-td-borders": "#DDDDDD"
                    }
                }
            }
        }
    },
    plugins: [
        require("@headlessui/tailwindcss"),
        require("@tailwindcss/forms"),
        require("@tailwindcss/typography")
    ]
};
