"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "boxicons/css/boxicons.min.css";

export function Provider({ children }) {

    useEffect(() => {

        AOS.init({
            once: true,
        });

    })

    return (
        <div>
            {children}
        </div>
    )
}