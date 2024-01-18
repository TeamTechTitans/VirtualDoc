import { useEffect, useState } from "react";
import BottomNav from "./BottomNav";

const StickyNav = () => {
    const [showNav, setShowNav] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 350) {
                setShowNav(true);
            } else {
                setShowNav(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav
            className={`fixed z-50 top-0 left-0 right-0 border-b transition-all border-b-[rgba(0,0,0,0.1) duration-700 ${showNav ? "" : "-m-16"
                }`}
        >
            <BottomNav />
        </nav>
    );
};

export default StickyNav;
