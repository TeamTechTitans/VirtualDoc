import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../lib/hooks/useAuth";
import useAxiosSecure from "../../../lib/hooks/useAxiosSecure";
import DashboardHeading from "../../../components/DashboardHeading/DashboardHeading";
import { Avatar, Progress } from "@material-tailwind/react";
import { FaRegMoneyBillAlt, FaWallet } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";

const DoctorDashboard = () => {
  const { user } = useAuth();

  const axiosSecure = useAxiosSecure();

  const { data: doctor, isLoading } = useQuery({
    queryKey: ["doctor"],
    queryFn: async () => {
      const doctorData = await axiosSecure.get(`/doctor/${user?.email}`);
      return doctorData.data;
    },
  });

  const { data: stats = [], refetch } = useQuery({
    queryKey: ['stats', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/doctor/stats/${user.email}`)
      return res.data;
    }
  })

  const { totalAppointment, totalIncome, appointmentPercent, paymentPercent} = stats
  if (isLoading)
    return (
      <div className="w-full h-screen flex justify-center items-center">
        {" "}
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );

  return (
    <div className="mx-auto">
      <DashboardHeading title="Welcome Back">
        {user?.displayName}
      </DashboardHeading>

      <div className="flex flex-col md:flex-row mx-8 gap-8 items-center">
        <div className="">
          <Avatar
            variant="circular"
            alt="image"
            className="w-44 h-44 border-teal-400 border-2 my-2"
            src={`${doctor?.image}`}
          />
        </div>
        <div className="flex-1">
          <div className="text-[#142441] grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
            <div>
              <h1 className="">
                <span className="font-semibold">Name: </span>
                <span className="">{doctor?.name}</span>
              </h1>
              <p>
                <span className="font-semibold">Email: </span>
                <span className="text-[#1D5CCD]">{doctor?.email}</span>
              </p>
              <p>
                <span className="font-semibold">Blood Group: </span>
                <span className="">{doctor?.blood_group}</span>
              </p>
              <p>
                <span className="font-semibold">Location: </span>
                <span className="">{doctor?.loc}</span>
              </p>
            </div>
            <div>
              <h1 className="">
                <span className="font-semibold">Education: </span>
                <span className="">{doctor?.education}</span>
              </h1>
              <p>
                <span className="font-semibold">Reg No: </span>
                <span className="text-[#1D5CCD]">{doctor?.registration}</span>
              </p>
              <p>
                <span className="font-semibold">Category: </span>
                <span className="">{doctor?.health_category}</span>
              </p>
            </div>
          </div>
          <p>
            <span className="font-semibold">About: </span>
            <span className="">{doctor?.about}</span>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
          
          <div className="bg-white h-32 p-3 w-full shadow-md rounded-lg ">
            <div className="flex text-4xl gap-3 my-3">
              <FaWallet className="text-green-500"></FaWallet>
              <h1 className="text-4xl font-bold text-gray-700">{totalIncome} Tk</h1>
            </div>
            <Progress
              className="h-1 lg:w-52 md:w-44 rounded-md my-1 bg-green-50"
              value={paymentPercent}
              color="green"
            />
            <h1 className="font-semibold">Total Income</h1>
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
            <h1 className="font-semibold">Appointment got</h1>
          </div>
        </div>
    </div>
  );
};

export default DoctorDashboard;
