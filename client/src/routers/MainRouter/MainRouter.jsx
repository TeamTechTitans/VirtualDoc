import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../../Layouts/MainLayout/MainLayout";
import Home from "../../pages/Home/Home/Home";
import Registration from "../../pages/Registration/components/Registration";
import Login from "../../pages/Login/component/Login";
import DoctorRegistration from "../../pages/Registration/components/DoctorRegistration";



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
              path: "/register",
              element: <Registration/>
            },
            {
              path: "/doctorRegister",
              element: <DoctorRegistration/>
            },
            {
               path: "/login",
               element:<Login/>
            },
        ],
    },
]);

export default MainRouter;
