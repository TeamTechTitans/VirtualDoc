import { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
const Laboratory = () => {
  const [services, setServices] = useState();
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  
  return (
    <div >
      <div className=" container mx-auto py-10">
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

        <div className="container mx-auto grid md:grid-cols-2 xl:grid-cols-4 grid-cols-1">
          {services?.map((item, idx) => (
            <div key={idx}>
              <Card className="mt-6 w-60 mx-auto shadow-xl transition duration-500 hover:text-white font-barlow relative hover-before cursor-pointer before:bg-secondary-blue before:h-full before:-translate-y-full hover:before:translate-y-0 before:transition before:duration-500 overflow-hidden">
                <CardBody className="z-10">
                  <img
                    loading="lazy"
                    src={item?.imageLink}
                    className="mb-3"
                    alt="lab-picture"
                  />
                  <Typography variant="h5" className="mb-2 z-10 font-barlow">
                    {item.heading}
                  </Typography>
                  <Typography className="font-barlow">
                    Because it&apos;s about motivating the doers. Because
                    I&apos;m here to follow my dreams and inspire others.
                  </Typography>
                </CardBody>
                <CardFooter className="pt-0 z-10">
                  <a href="#" className="inline-block">
                    <Button
                      size="sm"
                      variant="text"
                      className="flex hover:bg-white bg-white rounded-full shadow-md items-center gap-2"
                    >
                      Read More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Laboratory;
