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
import Services from "../../pages/Services/Services";
<<<<<<< HEAD
import AllUsers from "../../pages/dashboard/AllUsers/AllUsers";
import UserProfile from "../../pages/dashboard/UserProfile/UserProfile";
=======
import Team from "../../pages/Team/Team";
import AboutUs from "../../pages/aboutUs/AboutUs";
import Dashboard from "../../pages/dashboard/Dashboard";
import Doctors from './../../pages/doctors/Doctors';
import AddDoctor from "../../pages/dashboard/AddDoctor/AddDoctor";

>>>>>>> d5a026e01c5df9c0b5551094d815f4d9ec718311


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
                path: '/services',
                element: <Services />,
            },
            {
                path: "/doctorRegister",
                element: <DoctorRegistration />
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
        children: [
            {
                path: "/dashboard",
                element: <Dashboard></Dashboard>
            },
            {
                path:"allUser",
                element:<AllUsers/>
            },
            {
                path:"userProfile",
                element:<UserProfile/>
            },
        ]
    }
]);

export default MainRouter;
