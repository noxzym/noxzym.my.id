import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Separator } from "@/components/ui/separator";
import { ThemeProvider } from "@/components/utils/ThemeProvider";
import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Metadata } from "next";

// Global CSS
import "@/styles/globals.css";

// Notion CSS
import "react-notion-x/src/styles.css";

const icons = [
    {
        url: "/icons/icon-72x72.png",
        width: 72,
        height: 72
    },
    {
        url: "/icons/icon-96x96.png",
        width: 96,
        height: 96
    },
    {
        url: "/icons/icon-128x128.png",
        width: 129,
        height: 129
    },
    {
        url: "/icons/icon-144x144.png",
        width: 144,
        height: 144
    },
    {
        url: "/icons/icon-152x152.png",
        width: 152,
        height: 152
    },
    {
        url: "/icons/icon-192x192.png",
        width: 192,
        height: 192
    },
    {
        url: "/icons/icon-384x384.png",
        width: 384,
        height: 384
    },
    {
        url: "/icons/icon-512x512.png",
        width: 512,
        height: 512
    }
].reverse();

export const metadata: Metadata = {
    title: {
        template: "Noxzym - %s",
        default: "Noxzym - Home"
    },
    description: "Noxzym's Personal Website",
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "black" }
    ],
    colorScheme: "dark light",
    manifest: "/manifest.webmanifest",
    icons,
    keywords:
        "noxzym, orchit, orchitiadi, orchitiadi ismaulana putra, orchit07, mahasiswa gunadarma",
    viewport: {
        width: "device-width",
        initialScale: 1,
        minimumScale: 1,
        maximumScale: 3
    },
    openGraph: {
        type: "website",
        title: {
            template: "Noxzym - %s",
            default: "Noxzym - Home"
        },
        description: "Noxzym's Personal Website",
        siteName: "Noxzym",
        url: "https://noxzym.my.id",
        images: icons
    },
    robots: {
        index: true,
        follow: true
    }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="scroll-smooth">
            <body
                className={cn(
                    "bg-light font-sans text-black transition-colors duration-300 ease-in-out dark:bg-dark dark:text-white",
                    fontSans.variable
                )}
            >
                <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
                    <Navbar />
                    <main className="mx-auto flex min-h-screen max-w-4xl flex-col gap-16 px-7 py-16">
                        {children}
                    </main>
                    <Separator className="mx-auto mt-16 max-w-4xl" />
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
