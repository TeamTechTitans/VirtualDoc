import React from 'react';
import { Card, CardBody, Typography } from "@material-tailwind/react";

import shapeImg from '../../../../assets/icons/shape.png'
import CustomTitle from '../../../../components/CustomTitle/CustomTitle';
import Slide from './slide/Slide';

const Testimonial = () => {
    return (
        <section className='bg-testimonial-bg font-barlow bg-fixed w-full min-h-[720px] max-h-[1280px] bg-cover bg-no-repeat bg-inherit bg-center relative'>
            <div className='w-full bg-gradient-to-r from-white to-transparent py-10 min-h-[720px] max-h-[1280px]  bg-fixed'>
                <div className='container mx-auto flex items-center px-2 min-h-[720px] max-h-[1280px]'>
                    <Card className="mt-6 w-full p-6 md:p-16 box-border relative max-w-[670px]">
                        <img loading="lazy" src={shapeImg} alt="" draggable={false} className='absolute animation-spin opacity-65 right-10 top-10' />
                        <CardBody className='p-0'>
                            <CustomTitle title={'TESTIMONIALS'}></CustomTitle>
                            <Typography variant="h2" className="mb-12 font-bold text-primary-black leading-none">
                                What Our Patient Say?
                            </Typography>
                            {/* Slider here */}
                            <Slide></Slide>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;