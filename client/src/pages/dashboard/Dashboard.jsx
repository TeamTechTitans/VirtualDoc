import { Progress } from "@material-tailwind/react";
import { FaUserDoctor } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";
import { MdPeopleAlt } from "react-icons/md";


const Dashboard = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-11/12 mx-auto col-span-9">
            <div className="bg-white h-32 p-3 w-full shadow-2xl rounded-lg my-5">
                <div className="flex text-4xl gap-3 my-3">
                    <FaUserDoctor className="text-pink-500"></FaUserDoctor>
                    <h1 className="text-4xl font-bold text-gray-700">100</h1>
                </div>
                <Progress className="h-1 w-52 rounded-md my-1" value={70} color="pink"/>
                <h1 className="font-semibold" >Doctor</h1>
            </div>
            <div className="bg-white h-32 p-3 w-full shadow-2xl rounded-lg my-5">
                <div className="flex text-4xl gap-3 my-3">
                    <MdPeopleAlt className="text-green-500"></MdPeopleAlt>
                    <h1 className="text-4xl font-bold text-gray-700">100</h1>
                </div>
                <Progress className="h-1 w-52 rounded-md my-1" value={70} color="green"/>
                <h1 className="font-semibold">Patients</h1>
            </div>
            <div className="bg-white h-32 p-3 w-full shadow-2xl rounded-lg my-5">
                <div className="flex text-4xl gap-3 my-3">
                    <IoDocumentText className="text-yellow-800"></IoDocumentText>
                    <h1 className="text-4xl font-bold text-gray-700">100</h1>
                </div>
                <Progress className="h-1 w-52 rounded-md my-1" value={70} color="yellow"/>
                <h1 className="font-semibold">Appointment</h1>
            </div>                   
        </div>  

        </>     
    );
};

export default Dashboard;