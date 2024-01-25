import { createBrowserRouter } from "react-router-dom";

import DashboardLayout from "../../layouts/DashboardLayout/DashboardLayout";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Blog from "../../pages/Blogs/Blog/Blog";
import BlogDetails from "../../pages/Blogs/Blogdetails/Blogdetails";
import Contact from "../../pages/Contact/Contact";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/component/Login";
import DoctorRegistration from "../../pages/Registration/components/DoctorRegistration";
import Registration from "../../pages/Registration/components/Registration";
import Team from "../../pages/Team/Team";
import AboutUs from "../../pages/aboutUs/AboutUs";
import Dashboard from "../../pages/dashboard/Dashboard";
import Doctors from "../../pages/doctors/Doctors";


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
        children:[
            {
                path:'dashboardHome',
                element: <Dashboard></Dashboard>
            }
        ]

    }
]);

export default MainRouter;
