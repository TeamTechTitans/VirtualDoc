import "../../assets/css/header.css";
import logo from "../../assets/logo.png";
import { FaRegEnvelopeOpen } from "react-icons/fa6";
import { MdOutlinePhone } from "react-icons/md";
import { Link } from "react-router-dom";
import BottomNav from "./components/BottomNav";
import StickyNav from "./components/StickyNav";

const Header = () => {
    //comment

    return (
        <>
            <header className="">
                <nav className="relative bg-[#e9f2f2] px-4 xl:px-0">
                    <span className="header-shape"></span>
                    <div className="max-w-screen-xl mx-auto flex">
                        <Link
                            to="/"
                            className="flex items-center w-3/5 sm:w-1/3 z-50 logo-box gap-2 py-6"
                        >
                            <img className="w-16" src={logo} alt="VirtualDoc Logo" />
                            <h2 className="text-3xl font-bold text-secondary-blue">
                                VirtualDoc
                            </h2>
                        </Link>
                        <div className="w-2/5 sm:w-2/3 flex justify-end items-center gap-8">
                            <a
                                href="mailto:mail.techtitans@gmail.com"
                                className="hidden sm:flex justify-center items-center gap-2 hover:text-primary-teal transition"
                            >
                                <FaRegEnvelopeOpen className="text-primary-teal" />
                                <p className="">help@virtualdoc.web.app</p>
                            </a>

                            <a
                                href="tel:+8801619152852"
                                className="hidden lg:flex justify-center items-center gap-2 hover:text-primary-teal transition"
                            >
                                <MdOutlinePhone className="text-primary-teal text-lg" />
                                <p className="">+880 1619 152852</p>
                            </a>

                            <button>Get Started</button>
                        </div>
                    </div>
                </nav>

                <BottomNav />
            </header>
            <StickyNav />
        </>
    );
};

export default Header;
