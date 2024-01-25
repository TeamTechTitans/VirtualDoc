
import DashboardNav from "../../components/dashboardNav/DashboardNav";
import { Drawer } from "@material-tailwind/react";
import { useState } from "react";
import {
    FaBars,
} from "react-icons/fa6";
import { Outlet } from "react-router-dom";


export default function DashboardLayout() {

    const [openNav, setOpenNav] = useState(false);

    return (
        <>
            <nav className=" bg-white shadow-md mx-auto z-50 items-center">
                <div className=" px-4 mx-auto flex justify-between items-center">
                    <div className="flex">
                        <div className="hidden xl:flex gap-8 overflow-auto">
                            <DashboardNav></DashboardNav>
                        </div>
                        <div className="hidden xl:block">
                            <Outlet></Outlet>
                        </div>
                    </div>

                    <FaBars
                        onClick={() => setOpenNav(true)}
                        className="block my-5 xl:hidden text-lg"
                    />
                </div>

                <Drawer
                    placement="left"
                    open={openNav}
                    onClose={() => setOpenNav(false)}
                    className="p-4 fixed"
                >
                    <DashboardNav></DashboardNav>
                </Drawer>
            </nav>
            <div className="block xl:hidden">
                <Outlet></Outlet>
            </div>
        </>
    );
}