import DashboardHeading from "../../../components/DashboardHeading/DashboardHeading";
import useAxiosSecure from "../../../lib/hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import {Link} from 'react-router-dom'
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { Avatar, Progress } from "@material-tailwind/react";
import { IoDocumentText } from "react-icons/io5";
import useAuth from "../../../lib/hooks/useAuth";

const Profile = () => {
  const { user } = useAuth();

  const axiosSecure = useAxiosSecure()

  const { data: users, isLoading } = useQuery({
    queryKey: ['specificUser'],
    queryFn: async () => {
      const userData = await axiosSecure.get(`/users/${user?.email}`)
      return userData.data
    }
  })

  const { data: stats = [], refetch } = useQuery({
    queryKey: ['stats', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/stats/${user.email}`)
      return res.data;
    }
  })
  //console.log(stats)
  const { totalAppointment, totalPaid, appointmentPercent, paymentPercent} = stats
  refetch()
  if (isLoading) return <div className="w-full h-screen flex justify-center items-center"> <span className="loading loading-dots loading-lg"></span></div>

  return (
    <div className="mx-auto">
      <DashboardHeading title="Welcome">
        {user?.displayName}
      </DashboardHeading>

      <div className="flex flex-col md:flex-row mx-8 gap-8 items-center">
        {/* profile image */}
        <div className="">
        <Avatar
            variant="circular"
            alt="image"
            className="w-44 h-44 border-teal-400 border-2 my-2"
            src={`${users?.image}`}
          />
        </div>

        {/* details */}
        <div className="text-[#142441]">
          <div>
            <h1 className="">
              <span className="font-semibold">Name: </span><span className="">{users?.name}</span>
            </h1>
            <p>
              <span className="font-semibold">Email: </span><span className="text-[#1D5CCD]">{users?.email}</span>
            </p>
            <p>
            <span className="font-semibold">Blood Group: </span>
              <span className="">{users?.blood_group}</span>
            </p>
            <p>
            <span className="font-semibold">Location: </span><span className="">{users?.loc}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
          
          <div className="bg-white h-32 p-3 w-full shadow-md rounded-lg ">
            <div className="flex text-4xl gap-3 my-3">
              <FaRegMoneyBillAlt className="text-green-500"></FaRegMoneyBillAlt>
              <h1 className="text-4xl font-bold text-gray-700">{totalPaid} Tk</h1>
            </div>
            <Progress
              className="h-1 lg:w-52 md:w-44 rounded-md my-1 bg-green-50"
              value={paymentPercent}
              color="green"
            />
            <h1 className="font-semibold">Total Paid</h1>
          </div>
          <div className="bg-white h-32 p-3 w-full shadow-md rounded-lg">
            <div className="flex text-4xl gap-3 my-3">
              <IoDocumentText className="text-yellow-800"></IoDocumentText>
              <h1 className="text-4xl font-bold text-gray-700">{totalAppointment}</h1>
            </div>
            <Progress
              className="h-1 lg:w-52 md:w-44 rounded-md my-1 bg-yellow-50"
              value={appointmentPercent}
              color="yellow"
            />
            <h1 className="font-semibold">Appointment Taken</h1>
          </div>
        </div>
    </div>
  );
};

export default Profile;
