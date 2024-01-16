import React from 'react';
import { Card, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";
import CustomTitle from '../../../../components/CustomTitle/CustomTitle';
import Slide from './slide/slide';

const LaboratoryServices = () => {
    return (
        <section className='bg-testimonial-bg font-barlow bg-fixed w-full min-h-screen bg-no-repeat bg-center relative'>
            <div className='w-full bg-gradient-to-r from-white to-transparent min-h-screen bg-fixed'>
                <div className='container mx-auto flex items-center min-h-screen'>
                    <Card className="mt-6 w-full p-10 max-w-[670px]">
                        <CardBody>
                            <CustomTitle title={'TESTIMONIALS'}></CustomTitle>
                            <Typography variant="h2" className="mb-12 font-bold text-primary-black leading-none">
                                What Our Patient Say?
                            </Typography>
                            <Slide></Slide>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default LaboratoryServices;