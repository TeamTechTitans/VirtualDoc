import { Typography } from "@material-tailwind/react";
import DoctorsCard from "./DoctorsCard";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

const BestExpert = () => {
  const expertDoctors = [
    {
      id: 1,
      img: "https://i.ibb.co/mGnKbds/images-4.jpg",
      name: "Md: Habibur Rahman",
      position: "Team Manager",
    },
    {
      id: 2,
      img: "https://i.ibb.co/3vphW0T/images-2.jpg",
      name: "Md: Habibur Rahman",
      position: "Team Manager",
    },
    {
      id: 3,
      img: "https://i.ibb.co/pnGR3tF/download-8.jpg",
      name: "Md: Habibur Rahman",
      position: "Team Manager",
    },
  ];
  return (
    <div className="container mx-auto">
      <div className="flex-1 text-center justify-center items-center py-20">
        <div className="flex justify-center items-center mb-5">
          <img
            loading="lazy"
            src="https://i.ibb.co/mtX2Kfq/unnamed-1.png"
            className="pr-3"
            alt=""
          />
          <Typography variant="h6" className="text-primary-teal">
            TEAM MEMBER
          </Typography>
          <img
            loading="lazy"
            src="https://i.ibb.co/mtX2Kfq/unnamed-1.png"
            className="pr-3"
            alt=""
          />
        </div>
        <h1 className="text-5xl font-bold text-[#142441]">
          Focusing Your Mind, with The <br></br> Best Expert.
        </h1>
      </div>
      <div className="grid justify-center items-center grid-cols-1 p-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 gap-5">
        {expertDoctors?.map((doctor) => (
          <DoctorsCard doctor={doctor}></DoctorsCard>
        ))}
      </div>
    </div>
  );
};

export default BestExpert;
