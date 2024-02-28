import { Progress } from "@material-tailwind/react";
import { useQuery } from '@tanstack/react-query';
import { FaUserDoctor } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";
import { MdPeopleAlt } from "react-icons/md";
import DashboardHeading from "../../components/DashboardHeading/DashboardHeading";
import useAxiosPublic from './../../lib/hooks/useAxiosPublic';
import AreaCharts from "./AreaCharts";
import PieCharts from "./PieCharts";
import useAdmin from "../../lib/hooks/useAdmin";
import useDoctor from "../../lib/hooks/useDoctor";
import Profile from "./Profile/Profile";
import useAxiosSecure from "../../lib/hooks/useAxiosSecure";

const Dashboard = () => {
  const axiosPublic = useAxiosPublic()
  const [isAdmin] = useAdmin()
  const [isDoctor] = useDoctor()
  const axiosSecure = useAxiosSecure()

  const { data: appointments = [] } = useQuery({
    queryKey: ['appointment'],
    queryFn: async () => {
      const res = await axiosPublic.get(`/appointment`)
      return res.data;
    }
  })

  const { data: doctors = [] } = useQuery({
    queryKey: ['doctors'],
    queryFn: async () => {
      const res = await axiosPublic.get(`/doctors`)
      return res.data;
    },
  });

  const { data: users = [] } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users`)
      return res.data;
    },
  });


  const allDoctor = doctors.length
  const allAppoinment = appointments.length
  const allUsers = users.length

  if (isAdmin) {
    return (
      <div className="col-span-9 w-11/12 mx-auto mt-10">
        <DashboardHeading title="Dashboard">Welcome to dashboard</DashboardHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
          <div className="bg-white h-32 p-3 w-full shadow-md rounded-lg">
            <div className="flex text-4xl gap-3 my-3">
              <FaUserDoctor className="text-pink-500"></FaUserDoctor>
              <h1 className="text-4xl font-bold text-gray-700">{allDoctor}</h1>
            </div>
            <Progress
              className="h-1 lg:w-52 md:w-44 rounded-md my-1 bg-pink-50"
              value={allDoctor}
              color="pink"
            />
            <h1 className="font-semibold">Doctor</h1>
          </div>
          <div className="bg-white h-32 p-3 w-full shadow-md rounded-lg ">
            <div className="flex text-4xl gap-3 my-3">
              <MdPeopleAlt className="text-green-500"></MdPeopleAlt>
              <h1 className="text-4xl font-bold text-gray-700">{allUsers}</h1>
            </div>
            <Progress
              className="h-1 lg:w-52 md:w-44 rounded-md my-1 bg-green-50"
              value={70}
              color="green"
            />
            <h1 className="font-semibold">Patients</h1>
          </div>
          <div className="bg-white h-32 p-3 w-full shadow-md rounded-lg">
            <div className="flex text-4xl gap-3 my-3">
              <IoDocumentText className="text-yellow-800"></IoDocumentText>
              <h1 className="text-4xl font-bold text-gray-700">{allAppoinment}</h1>
            </div>
            <Progress
              className="h-1 lg:w-52 md:w-44 rounded-md my-1 bg-yellow-50"
              value={70}
              color="yellow"
            />
            <h1 className="font-semibold">Appointment</h1>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-8">
          <div className="md:col-span-2">
            <AreaCharts appointments={appointments}></AreaCharts>
          </div>
          <div className="md:col-span-1">
            <PieCharts allDoctor={allDoctor} allUsers={allUsers} allAppoinment={allAppoinment} ></PieCharts>
          </div>
        </div>
      </div>
    );
  }

};

export default Dashboard;
