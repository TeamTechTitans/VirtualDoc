import { IoSearch } from "react-icons/io5";
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaSquareXTwitter,
    FaBars,
    FaX,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Drawer } from "@material-tailwind/react";
import logo from "../../../assets/logo.png";

const BottomNav = () => {
    const [openNav, setOpenNav] = useState(false);

    const socials = [
        { id: 1, icon: FaFacebook, link: "https://www.facebook.com/" },
        { id: 2, icon: FaInstagram, link: "https://www.instagram.com/" },
        { id: 3, icon: FaLinkedin, link: "https://www.linkedin.com/" },
        { id: 4, icon: FaSquareXTwitter, link: "https://twitter.com/home" },
    ];

    const navLinks = [
        { id: 1, label: "Home", link: "/" },
        { id: 2, label: "About", link: "/about" },
        { id: 3, label: "Services", link: "/services" },
        { id: 4, label: "Blog", link: "/blog" },
        { id: 5, label: "Forum", link: "/forum" },
        { id: 6, label: "Doctors", link: "/doctors" },
        { id: 7, label: "Registration", link: "/register" },
        { id: 8, label: "Login", link: "/login" },
    ];

    return (
        <nav className=" bg-white mx-auto flex z-50 justify-between items-center">
            <ul className="hidden lg:flex font-bold gap-8 font-open-sans">
                {navLinks.map((link) => (
                    <Link className="text-secondary-blue" key={link.id} to={link.link}>
                        {link.label}
                    </Link>
                ))}
            </ul>

            <FaBars
                onClick={() => setOpenNav(true)}
                className="block lg:hidden text-lg"
            />

            <div className="flex items-center">
                <div className="border-r border-r-[rgba(0,0,0,0.1)] py-4 pr-6 mr-6">
                    <IoSearch className="text-body hover:text-primary-teal transition text-xl" />
                </div>

                <div className="flex gap-4">
                    {socials.map((social) => (
                        <a href={social.link} key={social.id}>
                            <social.icon className="text-body text-lg hover:text-primary-teal transition" />
                        </a>
                    ))}
                </div>
            </div>

            <Drawer
                placement="right"
                open={openNav}
                onClose={() => setOpenNav(false)}
                className="p-4"
            >
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <img className="w-16" src={logo} alt="VirtualDoc logo" />
                        <h2 className="text-3xl font-bold text-secondary-blue">
                            VirtualDoc
                        </h2>
                    </div>
                    <FaX onClick={() => setOpenNav(false)} className="text-lg" />
                </div>

                <ul className="flex flex-col gap-2 font-bold text-secondary-blue font-open-sans py-3">
                    {navLinks.map((link) => (
                        <Link key={link.id} to={link.link}>
                            {link.label}
                        </Link>
                    ))}
                </ul>
            </Drawer>
        </nav>
    );
};

export default BottomNav;
