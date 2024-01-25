
import { Drawer } from "@material-tailwind/react";
import { useState } from "react";
import { FaBars, } from "react-icons/fa6";
import DashboardNav from "../../components/dashboardNav/DashboardNav";


export default function DashboardLayout() {

    const [openNav, setOpenNav] = useState(false);

    return (
        <>
            <nav className=" bg-white shadow-md mx-auto z-50 items-center">
                <div className=" px-4 mx-auto flex justify-between items-center">
                    <div className="font-bold hidden xl:flex gap-8 font-open-sans">
                        <DashboardNav></DashboardNav>

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

            <div>
            </div>
        </>
    );
}