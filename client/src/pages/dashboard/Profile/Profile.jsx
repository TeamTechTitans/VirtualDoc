import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./../../../provider/AuthProvider/AuthProvider";
import DashboardHeading from "../../../components/DashboardHeading/DashboardHeading";
import useAxiosSecure from "../../../lib/hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import {Link} from 'react-router-dom'
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { Progress } from "@material-tailwind/react";
import { IoDocumentText } from "react-icons/io5";

const Profile = () => {
  // const apiLink = useApiLink();
  const { user } = useContext(AuthContext);

  const axiosSecure = useAxiosSecure()

  const { data: users, isLoading } = useQuery({
    queryKey: ['specificUser'],
    queryFn: async () => {
      const userData = await axiosSecure.get(`/users/${user?.email}`)
      return userData.data
    }
  })

  const { data: appointments = [], refetch } = useQuery({
    queryKey: ['appointments', user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/appointment/${user?.email}`)
      return res.data;
    }
  })
  refetch()
  const totalAppointment = appointments.length
  // console.log(totalAppointment, appointments)
  const totalPaid = appointments.reduce((total, item) => total + item.payment, 0)
  // console.log(totalPaid)
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
          <img className="h-48 w-48 rounded-lg" src={users?.image} alt="" />
        </div>

        {/* details */}
        <div className="text-[#142441] ">
          <div>
            <h1 className="">
              <span className="font-semibold">Name: </span><span className="text-[#1D5CCD]">{users?.name}</span>
            </h1>
            <p>
              <span className="font-semibold">Email: </span><span className="text-[#1D5CCD]">{users?.email}</span>
            </p>
            <p>
            <span className="font-semibold">Blood Group: </span>
              <span className="text-[#1D5CCD]">{users?.blood_group}</span>
            </p>
            <p>
            <span className="font-semibold">Location: </span><span className="text-[#1D5CCD]">{users?.loc}</span>
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
              value={totalPaid}
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
              value={totalAppointment}
              color="yellow"
            />
            <h1 className="font-semibold">Appointment Taken</h1>
          </div>
        </div>
    </div>
  );
};

export default Profile;
