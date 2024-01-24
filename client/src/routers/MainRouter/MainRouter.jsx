import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../../Layouts/MainLayout/MainLayout";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import Registration from "../../pages/Registration/Registration";
import Doctors from "../../pages/doctors/Doctors";
import Services from "../../pages/Services/Services";

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
        path: "/register",
        element: <Registration />,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default MainRouter;
