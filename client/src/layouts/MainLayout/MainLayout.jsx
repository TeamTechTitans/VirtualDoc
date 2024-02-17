import { Outlet } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Scroll from "../../components/scroll/Scroll";

const MainLayout = () => {
    return (
        <div >
            <Header />
            <Scroll></Scroll>
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;
