import { createBrowserRouter } from "react-router-dom";

import DashboardLayout from "../../layouts/DashboardLayout/DashboardLayout";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Contact from "../../pages/Contact/Contact";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/component/Login";
import DoctorRegistration from "../../pages/Registration/components/DoctorRegistration";
import Registration from "../../pages/Registration/components/Registration";
import Services from "../../pages/Services/Services";
import Team from "../../pages/Team/Team";
import Tips from "../../pages/Tips/Tip/Tip";
import TipDetails from "../../pages/Tips/Tipdetails/Tipdetails";
import AboutUs from "../../pages/aboutUs/AboutUs";
import AddDoctor from "../../pages/dashboard/AddDoctor/AddDoctor";
import AllUsers from "../../pages/dashboard/AllUsers/AllUsers";
import Appoinment from "../../pages/dashboard/Appoinment/Appoinment";
import Dashboard from "../../pages/dashboard/Dashboard";
import UserProfile from "../../pages/dashboard/UserProfile/UserProfile";
import VideoCall from "../../pages/dashboard/VideoCall/VideoCall";
import Doctors from './../../pages/doctors/Doctors';
import DoctorApproval from "../../pages/dashboard/DoctorApproval/DoctorApproval";
import DoctorApprovalDetails from "../../pages/dashboard/DoctorApproval/DoctorApprovalDetails";
import Cart from "../../pages/dashboard/Cart/Cart";
import PaymentSuccess from "../../pages/dashboard/PaymentSuccess/PaymentSuccess";
import PaymentHistory from "../../pages/dashboard/paymentHistory/PaymentHistory";
import DoctorApproval from "../../pages/dashboard/DoctorApproval/DoctorApproval";
import DoctorApprovalDetails from "../../pages/dashboard/DoctorApproval/DoctorApprovalDetails";




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
                path: "/tips",
                element: <Tips />
            },
            {
                path: "/tips/:id",
                element: <TipDetails />,
                // loader: ({ params }) => fetch(`tips.json/${params.id}`)
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
                path: "allUser",
                element: <AllUsers />
            },
            {
                path: "addDoctor",
                element: <AddDoctor />
            },
            {
                path: "userProfile",
                element: <UserProfile />
            },
            {
                path: "appoinment",
                element: <Appoinment />
            },
            {

                path: "doctorApproval",
                element: <DoctorApproval/>
            },
            {
                path: "doctorDetail/:id",
                element: <DoctorApprovalDetails/>,
                loader: ({params}) => fetch(`http://localhost:5000/doctorRequestDetail/${params.id}`)
            },
            {

                path: "videocall",
                element: <VideoCall />
            },
            {
                path: "cart",
                element: <Cart />
            },
            {

                path:'paymentHistory',
                element:<PaymentHistory />
            },
            {
                path:'payment/success/:tranId',
                element:<PaymentSuccess />
            },
            {

                path: "doctorApproval",
                element: <DoctorApproval/>
            },
            {
                path: "doctorDetail/:id",
                element: <DoctorApprovalDetails/>,
                loader: ({params}) => fetch(`http://localhost:5000/doctorRequestDetail/${params.id}`)
            },
        ]
    }
]);

export default MainRouter;
