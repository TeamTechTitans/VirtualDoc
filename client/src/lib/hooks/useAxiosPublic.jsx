import axios from "axios";
import useApiLink from "./useApiLink";

const apiLink = useApiLink()

const axiosPublic = axios.create({
    baseURL: apiLink
})
const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;