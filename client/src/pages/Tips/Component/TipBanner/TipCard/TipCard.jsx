import { Button } from "@material-tailwind/react";
import { Link, useNavigate } from 'react-router-dom'
const TipCard = ({ tip }) => {
  const navigate = useNavigate()
  const {
    _id,
    cover,
    title,
    description,
    date,
    month,
    author,
    hashtags,
  } = tip;

  const handleViewTip = id => {
    navigate(`/tips/${id}`, { state: { tip } });
  }


  return (
    <div className="space-y-3 my-10 ">
      <div className="relative">
        <div className="group">
          <img loading="lazy" src={cover} alt="img" className="w-full  rounded-2xl" />
          <div className="overlay rounded-2xl absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-50  transition-opacity duration-500"></div>
        </div>
      </div>

      <div className="flex gap-4">
        <div className=" text-center rounded-full border-white w-[95px] h-[95px] border-[5px] bg-light-teal shadow-lg p-6 ">
          <p className="font-bold text-primary-teal  text-3xl leading-none">
            {date}
          </p>
          <p className="font-semibold">{month}</p>
        </div>
        <div className="space-y-2">
          <h1 className="text-[20px] md:text-[30px] font-bold">{title}</h1>
          <p className="text-sm font-normal text-gray-400">
            by {author}
          </p>
          <p className="font-normal text-gray-700">
            {description.length < 40
              ? description
              : `${description.slice(0, 150)}..`}
          </p>
          {/* <Link to={`/tip/${_id}`}> */}
          <Button onClick={() => handleViewTip(_id)} className="rounded-full" color="cyan">
            Read More
          </Button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default TipCard;
