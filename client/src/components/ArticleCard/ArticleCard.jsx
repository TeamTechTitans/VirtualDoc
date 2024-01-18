import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
  Button,
} from "@material-tailwind/react";

const ArticleCard = ({ article }) => {
  const { title, description, month, comments, date, author, image } = article;
  return (
    <div>
      <Card className="m-2 overflow-hidden">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none relative"
        >
          <img src={image} alt="img" className="w-full" />
          <div className="absolute text-center rounded-full w-[100px] border-2 bg-blue-gray-100 p-6 bottom-8 right-8">
            <p className="font-bold text-[#22b6af] text-lg">{date}</p>
            <p className="font-semibold">{month}</p>
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
          <Button className="rounded-full" color="cyan">
            Read More
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ArticleCard;


// <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// {
//     articles.map(article => <ArticleCard article={article}></ArticleCard>)
// }
// </div>