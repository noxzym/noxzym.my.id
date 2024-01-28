import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { ThemeProvider } from "@/components/utils/ThemeProvider";
import {
    DescriptionTemplate,
    OpenGraphMetadata,
    TitleTemplate,
    TwitterMetadata,
    WebIcons
} from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

// Import Global and Notion CSS
// import "react-notion-x/src/styles.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="scroll-smooth">
            <body
                className={cn(
                    "flex min-h-dvh flex-col items-center justify-between bg-light text-black text-black/80 transition-colors duration-300 ease-in-out dark:bg-dark dark:text-white dark:text-white/80",
                    inter.className
                )}
            >
                <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
                    <div>
                        <Navigation />
                        <main className="flex max-w-4xl flex-col px-6 py-8 md:py-16">
                            {children}
                        </main>
                    </div>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}

export const viewport: Viewport = {
    colorScheme: "light",
    themeColor: "#0A0C0C",
    width: "device-width",
    initialScale: 1
};

export const metadata: Metadata = {
    title: TitleTemplate,
    description: DescriptionTemplate,
    manifest: "/manifest.webmanifest",
    metadataBase: new URL(
        process.env.NODE_ENV === "production" ? "https://stegripe.org" : "localhost:3000"
    ),
    icons: WebIcons,
    keywords:
        "noxzym, orchit, orchitiadi, orchitiadi ismaulana putra, orchit07, mahasiswa gunadarma",
    openGraph: OpenGraphMetadata,
    twitter: TwitterMetadata,
    robots: {
        index: true,
        follow: true
    }
};
