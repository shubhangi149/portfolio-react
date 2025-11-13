import { useEffect, useState } from "react";

export function useTheme() {
    const storedTheme = localStorage.getItem("theme");
    const [dark, setDark] = useState(() => {
        if (storedTheme === "light") return false;
        if (storedTheme === "dark") return true;

        const hour = new Date().getHours();
        return hour < 6 || hour >= 18;
    });

    const [userOverride, setUserOverride] = useState(!!storedTheme);

    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }

        if (userOverride) {
            localStorage.setItem("theme", dark ? "dark" : "light");
        }
    }, [dark, userOverride]);

    function toggle() {
        setDark(!dark);
        setUserOverride(true);
    }

    return { dark, toggle };
}
