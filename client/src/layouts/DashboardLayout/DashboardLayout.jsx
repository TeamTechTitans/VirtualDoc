import { Drawer } from "@material-tailwind/react";
import { useState } from "react";
import {
    FaBars,
    FaX
} from "react-icons/fa6";
import { Outlet } from "react-router-dom";
import DashboardNav from "../../components/dashboardNav/DashboardNav";

export default function DashboardLayout() {
    const [openNav, setOpenNav] = useState(false);


    return (
        <>
            <nav className=" bg-white mx-auto z-50 items-center">
                <div className="mx-auto xl:flex grid gap-3">
                    <div className="font-bold hidden xl:flex font-open-sans">
                        <DashboardNav />
                    </div>

                    <div className="bg-white block xl:hidden w-full shadow-md p-2">
                        <div className="p-2 inline-block rounded-lg hover:bg-primary-teal">
                            <FaBars
                                onClick={() => setOpenNav(true)}
                                className="text-lg"
                            />
                        </div>
                    </div>
                    <div className="hidden xl:block w-full items-center">
                        <Outlet></Outlet>
                    </div>

                </div>

                <Drawer
                    placement="left"
                    open={openNav}
                    onClose={() => setOpenNav(false)}
                    className="fixed"
                >
                    <div className="xl:hidden text-right p-2">
                        <span className="p-2">
                            <FaX onClick={() => setOpenNav(false)} className="inline text-lg mr-0" />
                        </span>
                    </div>
                    <DashboardNav />
                </Drawer>
                <div className="block  xl:hidden ">
                    <Outlet></Outlet>
                    
                </div>
            </nav>
        </>
    );
}
