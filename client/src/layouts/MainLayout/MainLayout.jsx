import { Outlet } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../components/Footer/Footer";

const MainLayout = () => {
    return (
        <div >
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;
