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
import Appointment from "../../pages/dashboard/Appointment/Appointment";

import Dashboard from "../../pages/dashboard/Dashboard";
import DoctorApproval from "../../pages/dashboard/DoctorApproval/DoctorApproval";
import DoctorApprovalDetails from "../../pages/dashboard/DoctorApproval/DoctorApprovalDetails";
import UserAppointment from "../../pages/dashboard/UserAppointment/UserAppointment";
import UserProfile from "../../pages/dashboard/UserProfile/UserProfile";
import VideoCall from "../../pages/dashboard/VideoCall/VideoCall";
import PaymentHistory from "../../pages/dashboard/paymentHistory/PaymentHistory";
import PostNewTip from "../../pages/dashboard/postNewTip/PostNewTip";
import Doctors from "./../../pages/doctors/Doctors";
import useApiLink from "../../lib/hooks/useApiLink";
import Cart from "../../pages/Cart/Cart";
import PaymentSuccess from "../../pages/PaymentSuccess/PaymentSuccess";
import AdminRoute from "../AdminRoute";
import DoctorRoute from "../DoctorRoute";
import PrivetRoute from "../PrivetRoute";
import AllDoctor from "../../pages/dashboard/AllDoctor/AllDoctor";
import AllDoctors from "../../pages/dashboard/allDoctors/AllDoctors";
import DoctorAppointment from "../../pages/dashboard/doctorAppointment/DoctorAppointment";
import Prescription from "../../pages/dashboard/Appointment/Prescription/Prescription";
import DoctorAppointmentPescription from "../../pages/dashboard/Appointment/DoctorAppointmentPescription";
import ErrorPage from "../../pages/error/ErrorPage";
// import Connect from "../../pages/ChatApp/Chat/Connect";
import PublicRoute from "../PublicRoute";
import Profile from "../../pages/dashboard/Profile/Profile";
import EditDoctorProfile from "../../pages/dashboard/editDoctorProfile/EditDoctorProfile";
import DoctorDashboard from "../../pages/dashboard/doctorDashboard/DoctorDashboard";

const apiLink = useApiLink();

const MainRouter = createBrowserRouter([


    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />,
                errorElement: <ErrorPage />,
            },
            {
                path: '/appointment',
                element: <PrivetRoute><UserAppointment /></PrivetRoute>
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
                element: <PublicRoute><Registration /></PublicRoute>
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
                path: "cart",
                element: <PrivetRoute><Cart /></PrivetRoute>
            },
            {
                path: 'payment/success/:tranId',
                element: <PrivetRoute><PaymentSuccess /></PrivetRoute>
            },
            {
                path: "/doctorRegister",
                element: <DoctorRegistration />
            },
            {
                path: "/login",
                element: <PublicRoute><Login /></PublicRoute>
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
        element: <PrivetRoute><DashboardLayout /></PrivetRoute>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/dashboard",
                element: <AdminRoute><Dashboard /></AdminRoute>,
                errorElement: <ErrorPage />,
            },
            {
                path: "allUser",
                element: <AdminRoute><AllUsers /></AdminRoute>
            },
            {
                path: "addDoctor",
                element: <AdminRoute><AddDoctor /></AdminRoute>
            },
            {
                path: "userProfile",
                element: <PrivetRoute><UserProfile /></PrivetRoute>
            },
            {
                path: "doctorDashboard",
                element: <DoctorRoute><DoctorDashboard /></DoctorRoute>
            },
            {
                path: "editDoctorProfile",
                element: <DoctorRoute><EditDoctorProfile /></DoctorRoute>
            },
            {
                path: "appoinment",
                element: <PrivetRoute><Appointment /></PrivetRoute>
            },
            {
                path: "doctorApproval",
                element: <AdminRoute><DoctorApproval /></AdminRoute>
            },
            {
                path: "postNewTip",
                element: <DoctorRoute><PostNewTip /></DoctorRoute>
            },
            {
                path: "allDoctors",
                element: <AdminRoute><AllDoctors /></AdminRoute>
            },
            {
                path: "doctorDetail/:id",
                element: <AdminRoute><DoctorApprovalDetails /></AdminRoute>,
                loader: ({ params }) => fetch(`${apiLink}/doctorRequestDetail/${params.id}`)
            },
            {

                path: "videocall/:id",
                element: <VideoCall />,
                loader: ({params}) => fetch(`${apiLink}/appointments/${params.id}`)
            },

            {

                path: 'paymentHistory',
                element: <PrivetRoute><PaymentHistory /></PrivetRoute>
            },
            {
                path: "prescription",
                element: <Prescription />
            },
            {
                path: "allDoctor",
                element: <AdminRoute><AllDoctor /></AdminRoute>
            },
            {
                path: 'user',
                element: <PrivetRoute><Profile /></PrivetRoute>
            },
            {
                path: "doctorAppointment",
                element: <DoctorRoute><DoctorAppointmentPescription /></DoctorRoute>
            },
            {
                path: "doctorAppointments",
                element: <DoctorAppointment />
            },

            {
                path: "paymentHistory",
                element: (
                    <PrivetRoute>
                        <PaymentHistory />
                    </PrivetRoute>
                ),
            },
            {
                path: "prescription",
                element: <Prescription />,
            },
        ],
    },
]);

export default MainRouter;
