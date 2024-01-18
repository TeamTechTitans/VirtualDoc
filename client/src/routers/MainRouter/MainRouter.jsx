import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../../Layouts/MainLayout/MainLayout";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import Registration from "../../pages/Registration/Registration";


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
               path: "/login",
               element:<Login/>
            },
        ],
    },
]);

export default MainRouter;
