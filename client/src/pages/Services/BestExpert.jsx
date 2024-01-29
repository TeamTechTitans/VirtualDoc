import { Typography } from "@material-tailwind/react";
import DoctorsCard from "./DoctorsCard";

const BestExpert = () => {
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
        <DoctorsCard></DoctorsCard>
        <DoctorsCard></DoctorsCard>
        <DoctorsCard></DoctorsCard>
      </div>
    </div>
  );
};

export default BestExpert;
