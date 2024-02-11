
import axios from 'axios'
import useApiLink from './useApiLink'

const apiLink = useApiLink()
const axiosSecure = axios.create({
  baseURL: apiLink,
  withCredentials: true
  
})

export default function useAxiosSecure() {
  return axiosSecure
}
