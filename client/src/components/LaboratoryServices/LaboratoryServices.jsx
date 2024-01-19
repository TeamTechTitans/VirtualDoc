import React from 'react';
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import CustomTitle from '../CustomTitle/CustomTitle';

const LaboratoryServices = () => {
    return (
        <div className='py-32 bg-light-teal'>
            <div className='flex justify-center'>
                <CustomTitle title={'Laboratory Services'} double></CustomTitle>
            </div>
            <div className='mb-20'>
                <h2 className='text-4xl text-center font-barlow font-bold text-black'>Reliable & High-Quality </h2>
                <h2 className='text-4xl text-center font-barlow text-black font-bold'>Laboratory Service</h2>
            </div>

            <div className='container mx-auto grid md:grid-cols-2 xl:grid-cols-4 grid-cols-1'>
                {/* Card-One */}
                <Card className="mt-6 w-60 mx-auto shadow-xl font-barlow">
                    <CardBody>
                        <img src="https://i.ibb.co/FqDJq37/result.png" className='mb-3' alt="lab-picture" />
                        <Typography variant="h5" color="blue-gray" className="mb-2 font-barlow">
                            Clinical Micro-Biology Test
                        </Typography>
                        <Typography className='font-barlow'>
                            Because it&apos;s about motivating the doers. Because I&apos;m here to
                            follow my dreams and inspire others.
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <a href="#" className="inline-block">
                            <Button size="sm" variant="text" className="flex items-center gap-2">
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
                {/* Card-Two */}
                <Card className="mt-6 w-60 mx-auto shadow-xl">
                    <CardBody>
                        <img src="https://i.ibb.co/rdyLMKb/test-tube.png" className='mb-3' alt="lab-picture" />
                        <Typography variant="h5" color="blue-gray" className="font-barlow after:mb-2">
                            Testing for traces and impurities
                        </Typography>
                        <Typography className='font-barlow'>
                            Because it&apos;s about motivating the doers. Because I&apos;m here to
                            follow my dreams and inspire others.
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <a href="#" className="inline-block">
                            <Button size="sm" variant="text" className="flex items-center gap-2">
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
                {/* Card-Three */}
                <Card className="mt-6 w-60 mx-auto shadow-xl">
                    <CardBody>
                        <img src="https://i.ibb.co/544hTgy/microscope.png" className='mb-3' alt="lab-picture" />
                        <Typography variant="h5" color="blue-gray" className="mb-2 font-barlow">
                            Clinical Gynecology Test
                        </Typography>
                        <Typography className='font-barlow'>
                            Because it&apos;s about motivating the doers. Because I&apos;m here to
                            follow my dreams and inspire others.
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <a href="#" className="inline-block">
                            <Button size="sm" variant="text" className="flex items-center gap-2">
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
                {/* Card-four */}
                <Card className="mt-6 w-60 mx-auto shadow-xl">
                    <CardBody>
                        <img src="https://i.ibb.co/Jzw6DwF/laboratory.png" className='mb-3' alt="lab-picture" />
                        <Typography variant="h5" color="blue-gray" className="font-barlow mb-2">
                            Clinical hispatology test
                        </Typography>
                        <Typography className='font-barlow'>
                            Because it&apos;s about motivating the doers. Because I&apos;m here to
                            follow my dreams and inspire others.
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <a href="#" className="inline-block">
                            <Button size="sm" variant="text" className="flex items-center gap-2">
                                Learn More
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
        </div>
    );
};

export default LaboratoryServices;