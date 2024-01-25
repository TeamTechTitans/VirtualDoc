import { Button } from '@material-tailwind/react';
import React from 'react';

const BannerSlider = ({ slide }) => {
    return (
        <div className="bg-transparent flex flex-col px-2 md:px-5 items-center justify-between lg:flex-row">
            <div className="w-full text-center lg:pl-10 lg:text-left">
                <div className="">
                    <h1 className="text-3xl md:text-5xl font-bold text-white">{slide?.heading}</h1>
                    <p className="text-white my-5 md:my-10 text-lg">
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
            <div className="w-full p-8 flex relative justify-center">
                <div style={{ position: 'relative', width: '50%' }}>
                    <div className="absolute bottom-0 right-0 w-[100%] h-[100%] -z-10 bg-primary-teal transform translate-x-3 translate-y-3 rounded-xl"></div>
                    <img loading="lazy" src={slide?.imageLink} alt="Banner Image" className="z-20 w-full rounded-xl h-auto" />
                </div>
            </div>

        </div>
    );
};

export default BannerSlider;
