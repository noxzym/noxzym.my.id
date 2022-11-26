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
                segoe: ["segoe", "sans-serif"],
                "segoe-bold": ["segoe-bold", "sans-serif"],
                garet: ["garet"],
                "garet-bold": ["garet-bold"]
            },
            spacing: {
                "9/16": "56.25%",
                0.75: "0.1875rem",
                "content-sm": "calc(100vh - 4.5rem)",
                content: "calc(100vh - 4rem)"
            },
            lineHeight: {
                11: "2.75rem",
                12: "3rem",
                13: "3.25rem",
                14: "3.5rem"
            },
            letterSpacing: {
                tightest: "-.075em"
            },
            fontSize: {
                "8.5xl": "7rem"
            },
            typography: theme => ({
                DEFAULT: {
                    css: {
                        color: theme("colors.gray.700"),
                        a: {
                            color: theme("colors.gray.700"),
                            "&:hover": {
                                color: theme("colors.gray.700")
                            },
                            code: { color: theme("colors.primary.400") }
                        },
                        h1: {
                            fontWeight: "700",
                            letterSpacing: theme("letterSpacing.tight"),
                            color: theme("colors.gray.900")
                        },
                        h2: {
                            fontWeight: "700",
                            letterSpacing: theme("letterSpacing.tight"),
                            color: theme("colors.gray.900")
                        },
                        h3: {
                            fontWeight: "600",
                            color: theme("colors.gray.900")
                        },
                        "h4,h5,h6": {
                            color: theme("colors.gray.900")
                        },
                        code: {
                            color: theme("colors.green.500"),
                            backgroundColor: theme("colors.gray.100"),
                            paddingLeft: "4px",
                            paddingRight: "4px",
                            paddingTop: "2px",
                            paddingBottom: "2px",
                            borderRadius: "0.25rem"
                        },
                        "code:before": {
                            content: "none"
                        },
                        "code:after": {
                            content: "none"
                        },
                        hr: { borderColor: theme("colors.gray.200") },
                        "ol li:before": {
                            fontWeight: "600",
                            color: theme("colors.gray.500")
                        },
                        "ul li:before": {
                            backgroundColor: theme("colors.gray.500")
                        },
                        "ul li > :last-child": {
                            margin: 0
                        },
                        "ul li > :first-child": {
                            margin: 0
                        },
                        strong: { color: theme("colors.gray.600") },
                        blockquote: {
                            color: theme("colors.gray.900"),
                            borderLeftColor: theme("colors.gray.200")
                        }
                    }
                },
                dark: {
                    css: {
                        color: theme("colors.gray.300"),
                        a: {
                            color: theme("colors.gray.300"),
                            "&:hover": {
                                color: theme("colors.gray.300")
                            },
                            code: { color: theme("colors.primary.400") }
                        },
                        h1: {
                            fontWeight: "700",
                            letterSpacing: theme("letterSpacing.tight"),
                            color: theme("colors.gray.100")
                        },
                        h2: {
                            fontWeight: "700",
                            letterSpacing: theme("letterSpacing.tight"),
                            color: theme("colors.gray.100")
                        },
                        h3: {
                            fontWeight: "600",
                            color: theme("colors.gray.100")
                        },
                        "h4,h5,h6": {
                            color: theme("colors.gray.100")
                        },
                        code: {
                            backgroundColor: theme("colors.gray.800")
                        },
                        hr: { borderColor: theme("colors.gray.700") },
                        "ol li:before": {
                            fontWeight: "600",
                            color: theme("colors.gray.400")
                        },
                        "ul li:before": {
                            backgroundColor: theme("colors.gray.400")
                        },
                        "ul li > :last-child": {
                            margin: 0
                        },
                        "ul li > :first-child": {
                            margin: 0
                        },
                        strong: { color: theme("colors.gray.100") },
                        thead: {
                            color: theme("colors.gray.100")
                        },
                        tbody: {
                            tr: {
                                borderBottomColor: theme("colors.gray.700")
                            }
                        },
                        blockquote: {
                            color: theme("colors.gray.100"),
                            borderLeftColor: theme("colors.gray.700")
                        }
                    }
                }
            })
        }
    },
    plugins: [
        require("@headlessui/tailwindcss"),
        require("@tailwindcss/forms"),
        require("@tailwindcss/typography")
    ]
};
