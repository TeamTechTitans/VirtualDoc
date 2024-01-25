import { Progress } from "@material-tailwind/react";
import { FaUserDoctor } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";
import { MdPeopleAlt } from "react-icons/md";
import AreaCharts from "./AreaCharts";
import PieCharts from "./PieCharts";

const Dashboard = () => {
    return (
        <div className="col-span-9 w-11/12 mx-auto mt-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
                <div className="bg-white hover:bg-light-teal transition h-32 p-3 w-full shadow-md rounded-lg">
                    <div className="flex text-4xl gap-3 my-3">
                        <FaUserDoctor className="text-pink-500"></FaUserDoctor>
                        <h1 className="text-4xl font-bold text-gray-700">100</h1>
                    </div>
                    <Progress
                        className="h-1 lg:w-52 md:w-44 rounded-md my-1 bg-pink-50"
                        value={70}
                        color="pink"
                    />
                    <h1 className="font-semibold">Doctor</h1>
                </div>
                <div className="bg-white hover:bg-light-teal transition h-32 p-3 w-full shadow-md rounded-lg ">
                    <div className="flex text-4xl gap-3 my-3">
                        <MdPeopleAlt className="text-green-500"></MdPeopleAlt>
                        <h1 className="text-4xl font-bold text-gray-700">100</h1>
                    </div>
                    <Progress
                        className="h-1 lg:w-52 md:w-44 rounded-md my-1 bg-green-50"
                        value={70}
                        color="green"
                    />
                    <h1 className="font-semibold">Patients</h1>
                </div>
                <div className="bg-white hover:bg-light-teal h-32 p-3 w-full shadow-md rounded-lg">
                    <div className="flex text-4xl gap-3 my-3">
                        <IoDocumentText className="text-yellow-800"></IoDocumentText>
                        <h1 className="text-4xl font-bold text-gray-700">100</h1>
                    </div>
                    <Progress
                        className="h-1 lg:w-52 md:w-44 rounded-md my-1 bg-yellow-50"
                        value={70}
                        color="yellow"
                    />
                    <h1 className="font-semibold">Appointment</h1>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-8">
                <AreaCharts></AreaCharts>
                <PieCharts></PieCharts>
            </div>
        </div>
    );
};

export default Dashboard;
