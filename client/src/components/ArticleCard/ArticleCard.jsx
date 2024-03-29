import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  const { title, description, month, comments, date, author, image } = article;
  return (
    <div>
      <Card className="m-2 h-[550px] overflow-hidden">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none relative"
        >
          <div className="relative hover-before cursor-pointer before:bg-black before:h-full before:-translate-y-full hover:before:translate-y-0 before:transition before:duration-500 before:opacity-45">
            <img loading="lazy" src={image} alt="img" className="w-full " />
            <div className="w-full border-solid  border-b-white border-b-[40px] border-r-0 border-l-transparent border-r-transparent border-l-[400px] absolute right-0 bottom-0 overflow-hidden inline-block"></div>
            <div className="absolute text-center rounded-full border-white w-[95px] h-[95px] border-[5px] bg-light-teal shadow-lg p-6 bottom-2 right-8">
              <p className="font-bold text-primary-teal  text-3xl leading-none">{date}</p>
              <p className="font-semibold">{month}</p>
            </div>
          </div>

        </CardHeader>
        <CardBody>
          <Typography variant="h4" color="blue-gray">
            {title}
          </Typography>
          <Typography color="gray" className="text-sm font-normal">
            by {author}, {comments} Comments
          </Typography>
          <Typography color="gray" className="mt-2 font-normal">
            {description.length < 20 ? description : `${description.slice(0, 90)}...`}
          </Typography>
        </CardBody>

        <CardFooter className="pt-0">
          <Link to='/tips'>
          <Button className="rounded-full" color="cyan">
            Read More
          </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ArticleCard;
