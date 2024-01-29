import { useEffect, useState } from "react";
import BottomNav from "./BottomNav";
import Headroom from "react-headroom";
import { FaArrowUp } from 'react-icons/fa';

const StickyNav = () => {
    const [showNav, setShowNav] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 300) {
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
            className={`fixed z-50 top-0 left-0 right-0 transition-all ${showNav ? "" : "hidden"
                }`}
        >
            <div className="z-50">
                <Headroom disableInlineStyles>
                    <BottomNav />
                </Headroom>
            </div>
            <button
                className="bg-primary-teal animate-bounce hover:animate-none text-white fixed bottom-4 right-4 p-3 rounded-full shadow-lg transition duration-300 hover:bg-teal-300"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                <FaArrowUp className="text-xl" />
            </button>
        </nav>
    );
};

export default StickyNav;
