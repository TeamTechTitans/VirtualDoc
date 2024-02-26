import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./../../../provider/AuthProvider/AuthProvider";
import DashboardHeading from "../../../components/DashboardHeading/DashboardHeading";
import useAxiosSecure from "../../../lib/hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import {Link} from 'react-router-dom'

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

  // console.log(users);

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
        <div className="text-[#142441] text-xl font-semibold  ">
          <div>
            <h1 className="">
              Name: <span className="text-[#1D5CCD]">{users?.name}</span>
            </h1>
            <p>
              Email: <span className="text-[#1D5CCD]">{users?.email}</span>
            </p>
            <p>
              Blood Group:
              <span className="text-[#1D5CCD]">{users?.blood_group}</span>
            </p>
            <p>
              Location: <span className="text-[#1D5CCD]">{users?.loc}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
