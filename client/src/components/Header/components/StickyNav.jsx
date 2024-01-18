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
            className={`fixed top-0 left-0 z-10 right-0 border-b transition-all duration-300 border-b-[rgba(0,0,0,0.1) ${
                showNav ? "block" : "hidden"
            }`}
        >
            <BottomNav />
        </nav>
    );
};

export default StickyNav;
