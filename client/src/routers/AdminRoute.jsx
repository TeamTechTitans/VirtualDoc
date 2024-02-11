import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../lib/hooks/useAdmin";
import useAuth from "../lib/hooks/useAuth";

const AdminRoute = ({children}) => {
    const {user, loading} = useAuth()
    const [isAdmin, isAdminLoading] = useAdmin()
    const location = useLocation()

    if(loading || isAdminLoading){
        return <div className="text-5xl mt-4 w-full text-center">
            <span className="loading my-[20%] loading-dots loading-lg"></span>
        </div>
    }
    if(user && isAdmin){
        return children
    }
    return  <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default AdminRoute;