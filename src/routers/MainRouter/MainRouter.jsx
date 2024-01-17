import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home/Home";
import MainLayout from "../../Layouts/MainLayout/MainLayout";

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
