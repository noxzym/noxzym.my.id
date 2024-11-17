"use client";

import type { ThemeProviderProps } from "next-themes/dist/types";
import dynamic from "next/dynamic";
import * as React from "react";

const NextThemesProvider = dynamic(async () => (await import("next-themes")).ThemeProvider, {
    ssr: false
});

export default function ThemeProvider({ children, ...props }: ThemeProviderProps) {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
