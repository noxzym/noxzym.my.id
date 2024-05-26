"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import type { ThemeProviderProps } from "next-themes/dist/types";

const NextThemesProvider = dynamic(async () => (await import("next-themes")).ThemeProvider, {
    ssr: false
});

export default function ThemeProvider({ children, ...props }: ThemeProviderProps) {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
