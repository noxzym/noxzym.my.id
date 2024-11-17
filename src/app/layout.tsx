import Footer from "@/components/Footer";
import { BottomStickyNavigation, TopStickyNavigation } from "@/components/Navigation";
import ThemeProvider from "@/components/ThemeProvider";
import { DefaultMetadata, baseURL } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={cn(
                    inter.className,
                    "mx-auto grid min-h-dvh grid-rows-[auto,1fr,auto] bg-background text-foreground"
                )}
            >
                <ThemeProvider attribute="class" defaultTheme="dark">
                    <TopStickyNavigation />
                    <main className="container mb-12 flex max-w-screen-xl flex-1 flex-col">
                        {children}
                    </main>
                    <Footer />
                    <BottomStickyNavigation />
                </ThemeProvider>
            </body>
        </html>
    );
}

export const viewport: Viewport = {
    colorScheme: "dark light",
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "black" }
    ],
    width: "device-width",
    initialScale: 1
};

export const metadata: Metadata = {
    title: DefaultMetadata.title,
    description: DefaultMetadata.description,
    manifest: "/manifest.webmanifest",
    metadataBase: new URL(baseURL),
    icons: DefaultMetadata.icons,
    keywords: DefaultMetadata.keyboards,
    openGraph: DefaultMetadata.openGraph,
    twitter: DefaultMetadata.twitter,
    robots: DefaultMetadata.robots
};
