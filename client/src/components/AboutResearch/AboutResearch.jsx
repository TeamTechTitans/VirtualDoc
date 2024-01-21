import React from 'react';
import { FaRegCheckCircle } from "react-icons/fa";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import CustomTitle from '../CustomTitle/CustomTitle';

const AboutResearch = () => {
  return (<div className='font-Barlow py-32'>
    <Card shadow={false} className="container mx-auto flex justify-between flex-col lg:flex-row-reverse">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 sm:w-full p-0 lg:w-2/5 shrink-0 rounded-r-none"
      >
        <div className="relative md:ml-20 lg:ml-0">
          {/* background image left-top corner */}
          <div className="md:absolute md:bg-left-top md:w-full md:h-full bg-[url('https://i.ibb.co/5swKYxf/shape-5.png')] bg-no-repeat">
          </div>
          {/* background image right-bottom corner */}
          <div className="md:absolute md:bg-right-bottom md:w-full md:h-full bg-[url('https://i.ibb.co/5swKYxf/shape-5.png')] bg-no-repeat">
          </div>
          <div className="font-Barlow absolute  animation-flooding3 top-10 right-0  z-30 rounded-full w-36 h-36 bg-secondary-blue">
            <p className='text-5xl font-bold text-white pt-7 pl-11'> 20 </p>
            <span className='text-lg font-bold text-white pt-7 pl-8'>Years of ex</span>
          </div>
          <img loading="lazy"
            src="https://i.ibb.co/TY5q8v0/about-1.png"
            alt="card-image"
            className="h-full w-full md:relative z-10"
          />
        </div>

      </CardHeader>
      <CardBody className='font-Barlow pl-3 text-justify pr-3 lg:pr-10'>
        <CustomTitle title={'About Research'}></CustomTitle>
        <Typography variant="h2" className="mb-4 font-bold text-left max-w-lg text-black font-Barlow">
          Reliable Journal of Medical Health Research.
        </Typography>
        <Typography color="blue-gray" className="font-Barlow font-medium mb-8 text-xl">
          Exploring Breakthroughs in Medical Health Research: Unraveling innovative treatments, advancements in diagnostics, and pivotal studies shaping the future of healthcare and well-being for all.
        </Typography>
        <Typography color="gray" className="mb-4 font-Barlow font-normal">
          our research delves into the complexities of diseases, paving the way for improved therapies and a healthier, more resilient global community
        </Typography>
        <Typography color="gray" className="mb-4 font-normal font-Barlow">
          <span className='flex align-center items-center gap-3' ><FaRegCheckCircle style={{ color: '#22B6AF' }} /> The Mycobacteriology Section</span>
        </Typography>
        <Typography color="gray" className="mb-8 font-normal font-Barlow">
          <span className='flex align-center items-center gap-3' ><FaRegCheckCircle style={{ color: '#22B6AF' }} /> The Aerobic Bacteriology Section</span>
        </Typography>

      </CardBody>
    </Card>

  </div>
  );
};

export default AboutResearch;