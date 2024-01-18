import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../../Layouts/MainLayout/MainLayout";
import Home from "../../pages/Home/Home/Home";


const MainRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
        ],
    },
]);

export default MainRouter;
