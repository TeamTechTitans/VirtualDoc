import React from 'react';
import CustomTitle from '../../../components/CustomTitle/CustomTitle';
import { Typography } from "@material-tailwind/react";
import { FaFacebookF,FaTwitter,FaInstagram } from "react-icons/fa";

const TeamMember = () => {
    return (
        <div className='container mx-auto mt-10'>
            <div className='flex justify-center'>
                <CustomTitle title="Team Member" double></CustomTitle>
            </div>    
            <div className='text-center'>
                <Typography variant="h2">Focusing Your Mind, with The </Typography>
                <Typography variant="h2">Best Expert. </Typography>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
                   
                    <div className='mx-auto'>
                        <figure className="relative mb-28 mt-10">
                            <div className='relative transition ease-in-out hover:-translate-y-1 hover:scale-110 delay-150 '>
                            <img
                                className="h-full w-96 rounded-xl object-cover object-center"
                                src="https://i.ibb.co/cLMP6BX/team-9.jpg"
                                alt="doctor image"
                            />
                            </div>
                            <figcaption className="absolute -bottom-36 md:-bottom-20 left-4 md:left-16 rounded-3xl shadow-xl border border-white bg-white py-8 px-0 md:py-8 md:px-5">
                                <div className='px-10 text-center'>
                                <Typography variant="h5" color="blue-gray font-barlow">
                                Dr. Margot Robbie 
                                </Typography>
                                <Typography color="gray" className="mt-2 font-barlow">
                                    Pediatrics Department
                                </Typography>
                                </div>
                                <div className='flex gap-3 justify-center my-5'>
                                    <div className='border-2 p-2 rounded-full border-black hover:bg-primary-teal hover:border-white duration-300 hover:bg-primary-teal hover:border-white duration-300'>
                                    <span className='hover:text-white'><FaFacebookF /></span>
                                    </div>
                                    <div className='border-2 p-2 rounded-full border-black hover:bg-primary-teal hover:border-white duration-300 hover:bg-primary-teal hover:border-white duration-300'>
                                    <span className='hover:text-white'><FaTwitter /></span>
                                    </div>
                                    <div className='border-2 p-2 rounded-full border-black hover:bg-primary-teal hover:border-white duration-300 hover:bg-primary-teal hover:border-white duration-300'>
                                    <span className='hover:text-white'><FaInstagram /></span>
                                    </div>
                                </div>
                            </figcaption>
                        </figure>
                    </div>

                    <div className='mx-auto'>
                        <figure className="relative mb-28 mt-10">
                        <div className='relative transition ease-in-out hover:-translate-y-1 hover:scale-110 delay-150 '>
                            <img
                                className="h-full w-96 rounded-xl object-cover object-center"
                                src="https://i.ibb.co/VBP0Knm/team-10.jpg"
                                alt="doctor image"
                            />
                            </div>
                            <figcaption className="absolute -bottom-36 md:-bottom-20 left-4 md:left-16 rounded-3xl shadow-xl border border-white bg-white py-8 px-0 md:py-8 md:px-5">
                                <div className='px-10 text-center'>
                                <Typography variant="h5" color="blue-gray font-barlow">
                                Dr. Gerard Butler 
                                </Typography>
                                <Typography color="gray" className="mt-2 font-barlow">
                                    Pediatrics Department
                                </Typography>
                                </div>
                                <div className='flex gap-3 justify-center my-5'>
                                    <div className='border-2 p-2 rounded-full border-black hover:bg-primary-teal hover:border-white duration-300 hover:bg-primary-teal hover:border-white duration-300'>
                                    <span className='hover:text-white'><FaFacebookF /></span>
                                    </div>
                                    <div className='border-2 p-2 rounded-full border-black hover:bg-primary-teal hover:border-white duration-300 hover:bg-primary-teal hover:border-white duration-300'>
                                    <span className='hover:text-white'><FaTwitter /></span>
                                    </div>
                                    <div className='border-2 p-2 rounded-full border-black hover:bg-primary-teal hover:border-white duration-300 hover:bg-primary-teal hover:border-white duration-300'>
                                    <span className='hover:text-white'><FaInstagram /></span>
                                    </div>
                                </div>
                            </figcaption>
                        </figure>
                    </div>

                    <div className='mx-auto'>
                        <figure className="relative mb-28 mt-10">
                        <div className='relative transition ease-in-out hover:-translate-y-1 hover:scale-110 delay-150 '>
                            <img
                                className="h-full w-96 rounded-xl object-cover object-center"
                                src="https://i.ibb.co/Y3Xx5JC/team-11.jpg"
                                alt="doctor image"
                            />
                            </div>
                            <figcaption className="absolute -bottom-36 md:-bottom-20 left-4 md:left-16 rounded-3xl shadow-xl border border-white bg-white py-8 px-0 md:py-8 md:px-5">
                                <div className='px-10 text-center'>
                                <Typography variant="h5" color="blue-gray font-barlow">
                                Dr. Brie Larson 
                                </Typography>
                                <Typography color="gray" className="mt-2 font-barlow">
                                    Pediatrics Department
                                </Typography>
                                </div>
                                <div className='flex gap-3 justify-center my-5'>
                                    <div className='border-2 p-2 rounded-full border-black hover:bg-primary-teal hover:border-white duration-300 hover:bg-primary-teal hover:border-white duration-300'>
                                    <span className='hover:text-white'><FaFacebookF /></span>
                                    </div>
                                    <div className='border-2 p-2 rounded-full border-black hover:bg-primary-teal hover:border-white duration-300 hover:bg-primary-teal hover:border-white duration-300'>
                                    <span className='hover:text-white'><FaTwitter /></span>
                                    </div>
                                    <div className='border-2 p-2 rounded-full border-black hover:bg-primary-teal hover:border-white duration-300 hover:bg-primary-teal hover:border-white duration-300'>
                                    <span className='hover:text-white'><FaInstagram /></span>
                                    </div>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
            
            </div>
        </div>
    );
};

export default TeamMember;