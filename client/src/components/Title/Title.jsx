import { Typography } from "@material-tailwind/react";

const Title = ({ title }) => {
  return (
    <div className="flex  items-center mb-5">
      <img 
        src="https://i.ibb.co/mtX2Kfq/unnamed-1.png"
        className="pr-3"
        alt=""
      />
      <Typography variant="h6" className="text-primary-teal">
        {title}
      </Typography>
    </div>
  );
};

export default Title;
