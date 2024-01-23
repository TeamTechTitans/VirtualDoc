
import { Avatar, Card, CardBody, CardFooter, Rating, Typography, rating } from "@material-tailwind/react";

const Reviews = ({ review }) => {
    return (
        <div>
            <Rating value={review?.rating} readonly className="mb-4" />

            <Card color="transparent" shadow={false} className="w-full">
                <CardBody className="p-0">
                    <Typography children={review?.review} variant="paragraph" className="text-justify" />
                </CardBody>
                <CardFooter
                    color="transparent"
                    className="mx-0 p-0 flex gap-4 pt-5"
                >
                    <Avatar
                        size="lg"
                        variant="circular"
                        src={review?.picture}
                        alt="tania andrew"
                    />
                    <div className="flex w-full flex-col ">
                        <div className="flex items-center justify-between">
                            <Typography variant="h5" className="text-black">
                                {review?.name}
                            </Typography>
                        </div>
                        <Typography className="text-primary-teal" >{review?.location}</Typography>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
};

export default Reviews;