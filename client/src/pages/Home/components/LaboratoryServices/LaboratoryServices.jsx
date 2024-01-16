import React from 'react';
import { Card, CardBody, CardFooter, Typography } from "@material-tailwind/react";
import CustomTitle from '../../../../components/CustomTitle/CustomTitle';
import Slide from './slide/slide';

const LaboratoryServices = () => {
    return (
        <section className='bg-testimonial-bg font-barlow bg-fixed w-full h-screen bg-cover bg-no-repeat bg-inherit bg-center relative'>
            <div className='w-full bg-gradient-to-r from-white to-transparent min-h-screen bg-fixed'>
                <div className='container mx-auto flex items-center min-h-screen'>
                    <Card className="mt-6 w-full p-10 max-w-[670px]">
                        <CardBody>
                            <CustomTitle title={'TESTIMONIALS'}></CustomTitle>
                            <Typography variant="h2" className="mb-12 font-bold text-primary-black leading-none">
                                What Our Patient Say?
                            </Typography>
                            {/* Slider here */}
                            <Slide></Slide>
                        </CardBody>
                        <CardFooter className='bg-secondary-blue'>

                        </CardFooter>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default LaboratoryServices;