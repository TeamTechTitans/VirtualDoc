import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../lib/hooks/useAuth";
import useDoctor from "../lib/hooks/useDoctor";

const DoctorRoute = ({children}) => {
    const {user, loading} = useAuth()
    const [isDoctor, isDoctorLoading] = useDoctor()
    const location = useLocation()
    
    if(loading || isDoctorLoading){
        return <div className="text-5xl mt-4 w-full text-center">
            <span className="loading my-[20%] loading-dots loading-lg"></span>
        </div>
    }
    if(user && isDoctor){
        return children
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default DoctorRoute;