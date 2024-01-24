
import ImageSection from "../Home/FaQueSection/ImageSection";

import { FaRegCheckCircle } from "react-icons/fa";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import CustomTitle from "../../components/CustomTitle/CustomTitle";

const Research = () => {
  return (
    <div className="container mx-auto py-20">
      <div className="font-Barlow py-32 mx-10 md:mx-0">
        <Card
          shadow={false}
          className="container mx-auto flex justify-between flex-col lg:flex-row-reverse"
        >
         
          <CardBody className="font-Barlow pl-3 text-justify pr-3 lg:pr-10">
            <CustomTitle title={"About Research"}></CustomTitle>
            <Typography
              variant="h2"
              className="mb-4 font-bold text-left max-w-lg text-black font-Barlow"
            >
              Reliable Journal of Medical Health Research.
            </Typography>
            <Typography
              color="blue-gray"
              className="font-Barlow font-medium mb-8 text-xl"
            >
              Exploring Breakthroughs in Medical Health Research: Unraveling
              innovative treatments, advancements in diagnostics, and pivotal
              studies shaping the future of healthcare and well-being for all.
            </Typography>
            <Typography color="gray" className="mb-4 font-Barlow font-normal">
              our research delves into the complexities of diseases, paving the
              way for improved therapies and a healthier, more resilient global
              community
            </Typography>
            <Typography color="gray" className="mb-4 font-normal font-Barlow">
              <span className="flex align-center items-center gap-3">
                <FaRegCheckCircle style={{ color: "#22B6AF" }} /> The
                Mycobacteriology Section
              </span>
            </Typography>
            <Typography color="gray" className="mb-8 font-normal font-Barlow">
              <span className="flex align-center items-center gap-3">
                <FaRegCheckCircle style={{ color: "#22B6AF" }} /> The Aerobic
                Bacteriology Section
              </span>
            </Typography>
            <Typography color="gray" className="mb-8 font-normal font-Barlow">
              <span className="flex align-center items-center gap-3">
                <FaRegCheckCircle style={{ color: "#22B6AF" }} /> The Aerobic
                Bacteriology Section
              </span>
            </Typography>
          </CardBody>
          <ImageSection></ImageSection>
        </Card>
      </div>
    </div>
  );
};

export default Research;
