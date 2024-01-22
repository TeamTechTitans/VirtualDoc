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
import { useContext, useState } from "react";
import { Drawer } from "@material-tailwind/react";
import logo from "../../../assets/logo.png";
import { AuthContext } from "../../../provider/AuthProvider/AuthProvider";

const BottomNav = () => {
    const [openNav, setOpenNav] = useState(false);
    const {user,logOut}=useContext(AuthContext);
    const handleLogout=()=>{
      logOut()
      .then(() => {
        // Sign-out successful.
      }).catch(() => {
        // An error mssge
      });
    }
  
    // const socials = [
    //     { id: 1, icon: FaFacebook, link: "https://www.facebook.com/" },
    //     { id: 2, icon: FaInstagram, link: "https://www.instagram.com/" },
    //     { id: 3, icon: FaLinkedin, link: "https://www.linkedin.com/" },
    //     { id: 4, icon: FaSquareXTwitter, link: "https://twitter.com/home" },
    // ];

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
        <nav className=" bg-white shadow-md mx-auto z-50 items-center">
            <div className="max-w-[1536px] px-4 mx-auto flex justify-between items-center">
                <ul className="font-bold hidden xl:flex gap-8 font-open-sans">
                    {navLinks.map((link) => (
                        <Link className="text-secondary-blue" key={link.id} to={link.link}>
                            {link.label}
                        </Link>
                    ))}
                </ul>

                <FaBars
                    onClick={() => setOpenNav(true)}
                    className="block xl:hidden text-lg"
                />
                {/* logout added */}
                <div className="flex items-center">
                    <div className="py-4 pr-6 mr-6">
                    <div className="float-right">
                            {
                                user ?<div className="flex items-center justify-center">
                                    <div className='relative group flex-col'>
                                    <p className='mx-2 right-16 absolute group-hover:visible invisible text-black'>{user.displayName}</p>
                                        <div>
                                            <img className="w-10 h-10 rounded-full border-2 border-white hidden md:block mx-2"  src={user.photoURL} />
                                        </div>
                                    </div>
                                <button className='btn' onClick={handleLogout}>Logout</button>
                                </div>:
                                <Link to="/login">Login</Link>
                            }
     
                     </div>
                </div>

                    {/* <div className="flex gap-4">
                        {socials.map((social) => (
                            <a href={social.link} key={social.id}>
                                <social.icon className="text-body text-lg hover:text-primary-teal transition" />
                            </a>
                        ))}
                    </div> */}
                </div>
            </div>

            <Drawer
                placement="right"
                open={openNav}
                onClose={() => setOpenNav(false)}
                className="p-4 fixed"
            >
                <div className="flex bg-white z-50 justify-between items-center">
                    <div className="flex items-center">
                        <img loading="lazy" className="w-16" src={logo} alt="VirtualDoc logo" />
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
