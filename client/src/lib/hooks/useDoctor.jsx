import { useQuery } from "@tanstack/react-query";
import useAuth from './useAuth';
import useAxiosPublic from './useAxiosPublic';

const useDoctor = () => {
    const {user, loading} = useAuth()
    const axiosPublic = useAxiosPublic()
    const {data: isDoctor, isPending: isDoctorLoading} = useQuery({
        queryKey: [user?.email, "isDoctor"],
        enabled: !loading,
        queryFn: async()=>{
            const res = await axiosPublic.get(`/doctors/${user.email}`)
            // console.log(res.data)
            return res.data?.doctor
        }
    })
    return [isDoctor, isDoctorLoading]
};

export default useDoctor;