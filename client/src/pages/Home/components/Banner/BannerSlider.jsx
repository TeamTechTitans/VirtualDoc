import { Button } from '@material-tailwind/react';
import React from 'react';

const BannerSlider = ({ slide }) => {
    return (
        <div className="bg-transparent flex flex-col px-2 md:px-5 items-center justify-between lg:flex-row">
            <div className="w-full text-center lg:pl-10 lg:text-left">
                <div className="p-8">
                    <h1 className="text-4xl font-bold text-white">{slide?.heading}</h1>
                    <p className="text-white mt-4">
                        {slide?.paragraph}
                    </p>
                    <div className="mt-6 flex justify-center lg:justify-normal gap-3">
                        <Button className="rounded-full" color="cyan">
                            Register
                        </Button>
                        <Button className="rounded-full" color="cyan">
                            Login
                        </Button>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center">
                <img src={slide?.imageLink} alt="Banner Image" className="w-[50%] rounded-xl h-auto" />
            </div>
        </div>
    );
};

export default BannerSlider;
