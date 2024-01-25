import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../../Layouts/MainLayout/MainLayout";
import Contact from "../../pages/Contact/Contact";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/component/Login";
import DoctorRegistration from "../../pages/Registration/components/DoctorRegistration";
import Team from "../../pages/Team/Team";
import Doctors from "../../pages/doctors/Doctors";
import AboutUs from "../../pages/aboutUs/AboutUs";
import Registration from "../../pages/Registration/components/Registration";
import Blog from "../../pages/Blogs/Blog/Blog";
import BlogDetails from "../../pages/Blogs/Blogdetails/Blogdetails";
import DashboardLayout from "../../layouts/DashboardLayout/DashboardLayout";
import Dashboard from "../../pages/dashboard/Dashboard";


const MainRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/doctors',
                element: <Doctors />,
            },
            {
                path: "blog",
                element: <Blog />
            },
            {
                path: "blog/:id",
                element: <BlogDetails />,
                //loader: ({params}) => fetch(`blogs.json/${params.id}`)
            },
            {
                path: "/register",
                element: <Registration />
            },
            {
                path: '/team',
                element: <Team />,
            },
            {
                path: "/doctorRegister",
                element: <DoctorRegistration />
            },
            {
                path: "/register",
                element: <Registration />
            },
            {
                path: "/login",
                element: <Login />
            },
            {

                path: "/aboutUs",
                element: <AboutUs />
            },
            {
                path: "/contact",
                element: <Contact />

            },
        ],
    },
    {
        path: '/dashboard',
        element: <DashboardLayout />,

    }
]);

export default MainRouter;
