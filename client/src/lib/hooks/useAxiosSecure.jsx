
import axios from 'axios'
import useApiLink from './useApiLink'


const apiLink = useApiLink()
const  token = localStorage.getItem('token')
const axiosSecure = axios.create({
  baseURL: apiLink,
  withCredentials: true,
  headers: {common:{token: token} }
})


export default function useAxiosSecure() {
  return axiosSecure
}
