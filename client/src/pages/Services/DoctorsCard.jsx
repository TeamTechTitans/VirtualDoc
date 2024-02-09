import { Typography } from "@material-tailwind/react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const DoctorsCard = ({ doctor }) => {
  return (
    <div className="flex relative mb-20 p-2 justify-center items-center">
      <div className="max-w-[400px] flex max-h-[420px] hover-before before:rounded-t-full before:rounded-bl-full before:rounded-br-[1000px] before:w-full before:h-full before:opacity-30 before:cursor-pointer before:scale-0 hover:before:scale-100 before:duration-500 before:rounded-2xl before:bg-black  aspect-square">
        <img
          src={doctor?.img}
          className="aspect-square max-w-[400px] rounded-t-full rounded-bl-full max-h-[400px]"
          alt=""
          loading="lazy"
        />
        <div className="absolute bg-secondary-teal z-10 p-4  rounded-2xl shadow-md -bottom-20 translate-x-1/2">
          <Typography variant="h6" className="text-center">
            {doctor?.name}
          </Typography>
          <Typography variant="paragraph" className="text-center">
            {doctor?.position}
          </Typography>
          <Typography
            variant="paragraph"
            className="flex justify-around items-center py-2"
          >
            <FaFacebook></FaFacebook> <FaTwitter></FaTwitter>
            <FaInstagram></FaInstagram>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default DoctorsCard;
