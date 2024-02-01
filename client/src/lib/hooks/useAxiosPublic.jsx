import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://virtual-doc-backend.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;