import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../../Layouts/MainLayout/MainLayout";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import Registration from "../../pages/Registration/Registration";
import Blog from "../../pages/Blogs/Blog/Blog";


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
              path: "/blog",
              element: <Blog/>
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
