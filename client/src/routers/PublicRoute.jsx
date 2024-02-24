import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../lib/hooks/useAuth";

const PublicRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation()

    if (loading) {
        return <div className="text-5xl mt-4 w-full text-center">
            <span className="loading my-[20%] loading-dots loading-lg"></span>
        </div>
    }
    if (user) {
        return <Navigate to="/" state={{ from: location }} replace></Navigate>
    }
    return children
};

export default PublicRoute;