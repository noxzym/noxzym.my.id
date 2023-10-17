import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const useDarkMode = () => {
    const { resolvedTheme } = useTheme();
    const [isDarkMode, setIsDarkMode] = useState(false);
    useEffect(() => {
        setIsDarkMode(resolvedTheme === "dark");
    }, [resolvedTheme]);

    return [isDarkMode];
};
