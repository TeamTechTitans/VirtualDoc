import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../lib/hooks/useAxiosPublic";
import { Avatar } from "@material-tailwind/react";

const DoctorDetails = () => {
    const {id} = useParams()
    //console.log(id)
    const axiosPublic = useAxiosPublic();
  const { data: doctor = [] } = useQuery({
    queryKey: ["doctor", id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/doctorDetails/${id}`);
      return res.data;
    },
  });
  
    return (
        <div className="w-full sm:p-8  ">
          <div className="flex flex-col mx-auto md:flex-row justify-center items-center gap-8">
        <div className="">
          <Avatar
            variant="circular"
            alt="image"
            className="w-56 h-56 border-teal-400 border-2 my-2"
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
                <span className="text-[#1D5CCD]">{doctor?.registration?.slice(0,5)}*****</span>
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
        </div>
    );
};

export default DoctorDetails;