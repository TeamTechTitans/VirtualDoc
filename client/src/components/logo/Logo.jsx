import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Logo = () => {
    return (
        <Link to='/'>
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <img loading="lazy" className="w-16" src={logo} alt="VirtualDoc logo" />
                    <h2 className="text-3xl font-bold text-secondary-blue">
                        VirtualDoc
                    </h2>
                </div>
            </div>
        </Link>
    );
};

export default Logo;