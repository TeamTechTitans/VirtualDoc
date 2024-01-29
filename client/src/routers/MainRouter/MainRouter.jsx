import { createBrowserRouter } from "react-router-dom";

import DashboardLayout from "../../layouts/DashboardLayout/DashboardLayout";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Contact from "../../pages/Contact/Contact";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/component/Login";
import DoctorRegistration from "../../pages/Registration/components/DoctorRegistration";
import Registration from "../../pages/Registration/components/Registration";
import Services from "../../pages/Services/Services";
import UserAppoinment from "../../pages/dashboard/UserAppoinment/UserAppoinment";
import Doctors from "../../pages/doctors/Doctors";
import Tip from "../../pages/Tips/Tip/Tip";
import TipDetails from "../../pages/Tips/Tipdetails/Tipdetails";
import Team from "../../pages/Team/Team";
import AboutUs from "../../pages/aboutUs/AboutUs";
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
        path: "/doctors",
        element: <Doctors />,
      },
      {
        path: "tips",
        element: <Tip></Tip>,
      },
      {
        path: "tips/:id",
        element: <TipDetails></TipDetails>,
        //loader: ({params}) => fetch(`blogs.json/${params.id}`)
      },
      {
        path: "/register",
        element: <Registration />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/doctorRegister",
        element: <DoctorRegistration />,
      },
      {
        path: "/register",
        element: <Registration />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/aboutUs",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/dashboard/userappoinment",
        element: <UserAppoinment></UserAppoinment>,
      },
    ],
  },
]);

export default MainRouter;
