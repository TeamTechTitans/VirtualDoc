import { Typography } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import { FaGithub, FaPassport } from "react-icons/fa6";
import CustomTitle from "../../components/CustomTitle/CustomTitle";
import Freebook from "./../../components/FreeBook/Freebook";
import SiteHeader from "./../../components/siteHeader/SiteHeader";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";

const Team = () => {
  const { data } = useQuery({
    queryKey: ["team"],
    queryFn: async () => {
      const teamList = await fetch("team.json");
      return teamList.json();
    },
  });

  return (
    <div>
      <SiteHeader
        children={"Team Member"}
        title={"Home - Team Member"}
      ></SiteHeader>
      <div className="flex flex-col items-center text-center justify-center mt-24 ">
        <CustomTitle title={"TEAM MEMBER"} double></CustomTitle>
        <div className="mb-14">
          <h2 className="text-3xl md:text-4xl text-center font-barlow font-bold dark-blue">
            Focusing Your Mind, with The <br />
            Best Expert.
          </h2>
        </div>
      </div>
      <div className="grid justify-center items-center grid-cols-1 p-5 md:grid-cols-2 lg:grid-cols-3  gap-5 container mx-auto">
        {data?.map((team) => (
          <div key={team?.id} className="">
            <div className="flex relative mb-20 p-2 justify-center items-center">
              <div className="max-w-[350px] flex max-h-[420px] hover-before  hover-before   before:w-full before:h-full before:opacity-30 before:cursor-pointer before:scale-0 hover:before:scale-100 before:duration-500 before:rounded-full before:bg-white  aspect-square">
                <img className=" rounded-full aspect-square max-w-[350px]  max-h-[400px]"
                  style={{ backgroundImage: "url(https://laborex.smartdemowp.com/wp-content/uploads/2021/05/shape-61.png)" }}
                />
                <img
                  src={team?.img}
                  className="-mt-5"
                  alt=""
                  loading="lazy" />
              </div>

              <div className=" ">
                <div className="absolute bg-secondary-teal z-10 w-56 p-4 rounded-3xl shadow-md left-10 -bottom-6 h-32 hover-before    before:opacity-30 before:cursor-pointer before:scale-0 hover:before:scale-100 before:duration-500 before:rounded-2xl before:bg-black  aspect-square -ml-80 mt-64">
                  <Typography variant="h6" className="text-center">
                    {team?.name}
                  </Typography>
                  <Typography
                    variant="paragraph"
                    className="text-center text-gray-700"
                  >
                    {team?.position}
                  </Typography>

                  <div className="flex gap-5 text-center justify-center items-center py-2">
                    <Link
                      to={team?.linkedin}
                      className="w-8 h-8 bg-white rounded-full flex justify-center items-center hover:bg-primary-teal transition-all duration-300 hover:text-white"
                    >
                      <FaLinkedin className=" " />
                    </Link>
                    <Link
                      to={team?.github}
                      className="w-8 h-8 bg-white rounded-full flex justify-center items-center hover:bg-primary-teal transition-all duration-300 hover:text-white"
                    >
                      <FaGithub className=" " />
                    </Link>
                    <Link
                      to={team?.portfolio}
                      className="w-8 h-8 bg-white rounded-full flex justify-center items-center hover:bg-primary-teal transition-all duration-300 hover:text-white"
                    >
                      <FaPassport className=" " />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Freebook></Freebook>
    </div>
  );
};

export default Team;
