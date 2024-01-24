import { Typography } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import CustomTitle from "../../components/CustomTitle/CustomTitle";
import Freebook from "./../../components/FreeBook/Freebook";
import SiteHeader from "./../../components/siteHeader/SiteHeader";

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
      <div className="flex flex-col items-center text-center justify-center mt-24">
        <CustomTitle title={"TEAM MEMBER"} double></CustomTitle>
        <div className="mb-14">
          <h2 className="text-3xl md:text-4xl text-center font-barlow font-bold dark-blue">
            Focusing Your Mind, with The <br />Best Expert.
          </h2>
        </div>
      </div>
      <div className="grid justify-center items-center grid-cols-1 p-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
        {data?.map((doctor) => (
          <div key={doctor?.id}>
            <div className="flex relative mb-20 p-2 justify-center items-center">
              <div
                className="max-w-[300px] flex max-h-[320px] hover-before before:w-full before:h-full before:opacity-30 before:cursor-pointer
                before:duration-500 before:rounded-2xl  aspect-square "
              >
                <img
                  src={doctor?.img}
                  className="aspect-square max-w-[300px] rounded-2xl max-h-[300px]"
                  alt=""
                  loading="lazy"
                />

                <div className="absolute bg-secondary-teal z-10 w-56 p-4 rounded-3xl shadow-md -bottom-20 h-32 ml-12">
                  <Typography variant="h6" className="text-center">
                    {doctor?.name}
                  </Typography>
                  <Typography
                    variant="paragraph"
                    className="text-center text-gray-700"
                  >
                    {doctor?.position}
                  </Typography>

                  <div className="flex gap-5 text-center justify-center items-center py-2">
                    <div className="w-8 h-8 bg-white rounded-full flex justify-center items-center hover:bg-primary-teal transition-all duration-300 hover:text-white">
                      <FaFacebookF className=" " />
                    </div>
                    <div className="w-8 h-8 bg-white rounded-full flex justify-center items-center hover:bg-primary-teal transition-all duration-300 hover:text-white">
                      <FaXTwitter className=" " />
                    </div>
                    <div className="w-8 h-8 bg-white rounded-full flex justify-center items-center hover:bg-primary-teal transition-all duration-300 hover:text-white">
                      <FaInstagram className=" " />
                    </div>
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
