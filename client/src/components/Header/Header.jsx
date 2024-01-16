import "../../assets/css/header.css";
import logo from "../../assets/logo.png";
import { FaRegEnvelopeOpen } from "react-icons/fa6";
import { MdOutlinePhone } from "react-icons/md";

const Header = () => {
    return (
        <header>
            <nav className="relative bg-[#e9f2f2]">
                <span className="header-shape"></span>
                <div className="max-w-screen-xl mx-auto flex">
                    <div className="flex items-center w-1/3 z-40 logo-box gap-2 py-5">
                        <img className="w-20" src={logo} alt="VirtualDoc Logo" />
                        <h2 className="text-4xl font-bold text-secondary-blue">
                            VirtualDoc
                        </h2>
                    </div>
                    <div className="w-2/3 flex justify-end items-center gap-8">
                        <a
                            href="mailto:mail.techtitans@gmail.com"
                            className="flex justify-center items-center gap-2 hover:text-primary-teal transition"
                        >
                            <FaRegEnvelopeOpen className="text-primary-teal" />
                            <p className="">help@virtualdoc.web.app</p>
                        </a>

                        <a
                            href="mailto:mail.techtitans@gmail.com"
                            className="flex justify-center items-center gap-2 hover:text-primary-teal transition"
                        >
                            <MdOutlinePhone className="text-primary-teal" />
                            <p className="">help@virtualdoc.web.app</p>
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
