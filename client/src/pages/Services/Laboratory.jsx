import { Typography } from "@material-tailwind/react";

const Laboratory = () => {
  return (
    <div className="container py-10">
      <div className="flex-1 text-center justify-center items-center py-20">
        <div className="flex justify-center items-center mb-5">
          <img
            loading="lazy"
            src="https://i.ibb.co/mtX2Kfq/unnamed-1.png"
            className="pr-3"
            alt=""
          />
          <Typography variant="h6" className="text-primary-teal">
            LABORATORY SERVICES
          </Typography>
          <img
            loading="lazy"
            src="https://i.ibb.co/mtX2Kfq/unnamed-1.png"
            className="pr-3"
            alt=""
          />
        </div>
        <h1 className="text-5xl font-bold text-[#142441]">
          Reliable & High-Quality <br></br> Laboratory Service
        </h1>
      </div>
    </div>
  );
};

export default Laboratory;
