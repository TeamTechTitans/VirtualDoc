import { Button, Drawer } from "@material-tailwind/react";
import { useContext, useState } from "react";
import {
    FaBars,
    FaX
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import Logo from "../../logo/Logo";
import useAuth from "../../../lib/hooks/useAuth";


const BottomNav = () => {
    const [openNav, setOpenNav] = useState(false);
    const { user, logOut } = useAuth();
    const handleLogout = () => {
        logOut()
    }

    const navLinks = <>
        <Link to='/' className="text-secondary-blue">Home</Link>
        <Link to='/appointment' className="text-secondary-blue">Appointment</Link>
        <Link to='/services' className="text-secondary-blue">Services</Link>
        <Link to='/doctors' className="text-secondary-blue">Doctors</Link>
        <Link to='/tips' className="text-secondary-blue">Tips</Link>
        <Link to='/aboutUs' className="text-secondary-blue">About</Link>
        {user && <Link to='/dashboard' className="text-secondary-blue">Dashboard</Link>}
        <Link to='/team' className="text-secondary-blue">Team</Link>
        <Link to='/contact' className="text-secondary-blue">Contact US</Link>
    </>

    const authLinks = <>
        <div className="flex flex-wrap gap-5">
            <Link to='/register' >
                <Button className="bg-secondary-blue text-sm normal-case">Registration</Button>
            </Link>
            <Link to='/login' className="text-secondary-blue">
                <Button className="border-secondary-blue text-sm border py-[10px] bg-transparent text-secondary-blue" >Login</Button>
            </Link>
        </div>
    </>

    const userLinks = <>
        <div className="flex items-center justify-center">
            <div className='relative group flex-col'>
                <p className='mx-2 right-16 absolute group-hover:visible invisible text-black'>{user?.displayName}</p>
                <div>
                    <img className="w-10 h-10 rounded-full border-2 border-white hidden md:block mx-2" src={user?.photoURL} />
                </div>
            </div>
            <button className='btn' onClick={handleLogout}>Logout</button>
        </div>
    </>



    return (
        <nav className=" bg-white shadow-md py-2 mx-auto z-50 items-center">
            <div className="max-w-[1536px] px-4 mx-auto flex justify-between items-center">
                <ul className="font-bold hidden xl:flex gap-8 font-open-sans">
                    {navLinks}
                </ul>

                <FaBars
                    onClick={() => setOpenNav(true)}
                    className="block xl:hidden text-lg"
                />
                {/* logout added */}
                <div className="flex items-center">
                    <div className="float-right">
                        {
                            user ? userLinks : authLinks
                        }
                    </div>
                </div>
            </div>

            <Drawer
                placement="right"
                open={openNav}
                onClose={() => setOpenNav(false)}
                className="p-4 fixed"
            >
                <div className=" bg-white h-screen mx-auto z-50 items-center">
                    <div className="flex bg-white justify-between items-center">
                        <div className="flex items-center">
                            <Logo></Logo>
                        </div>
                        <FaX onClick={() => setOpenNav(false)} className="text-lg" />
                    </div>

                    <ul className="flex  flex-col gap-2 font-bold text-secondary-blue font-open-sans py-3">
                        {navLinks}
                    </ul>
                </div>
            </Drawer>
        </nav>
    );
};

export default BottomNav;
