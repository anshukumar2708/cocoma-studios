"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSInit() {
    const pathname = usePathname();

    useEffect(() => {
        // init AOS once
        AOS.init({
            duration: 800,
            once: true,
            offset: 100,
            easing: "ease-in-out",
        });

        // ensure scroll position reset on route change
        window.scrollTo(0, 0);

        // refresh on route change so newly mounted elements animate
        AOS.refresh();
    }, [pathname]);

    return null; // no DOM output — only side effects
}
