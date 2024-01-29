import { Typography } from "@material-tailwind/react";
import { FaHandshake, FaRegStar } from "react-icons/fa";

const BestResult = () => {
    return (
        <div className="container mx-auto">
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row ">
                    <img
                        src="https://i.ibb.co/tKZ2YTF/about-7.jpg"
                        className="w-full lg:w-1/2 h-[600px] rounded-lg shadow-2xl"
                    />
                    <div className="ml-5">
                        <div className="flex-1 text-center justify-center items-center ">
                            <div className="flex justify-center items-center mb-5">
                                <img
                                    loading="lazy"
                                    src="https://i.ibb.co/mtX2Kfq/unnamed-1.png"
                                    className="pr-3"
                                    alt=""
                                />
                                <Typography variant="h6" className="text-primary-teal">
                                    WHY CHOOSE
                                </Typography>
                                <img
                                    loading="lazy"
                                    src="https://i.ibb.co/mtX2Kfq/unnamed-1.png"
                                    className="pr-3"
                                    alt=""
                                />
                            </div>
                            <h1 className="text-5xl font-bold text-[#142441]">
                                Well Ensure You Always <br></br> Get The Best Results.
                            </h1>
                        </div>

                        <div className="grid items-center  gap-5 py-10">
                            <div className="flex justify-center items-center mx-auto gap-10 py-10">
                                <img src="https://i.ibb.co/3rv5zkj/microscope.png" alt="" />
                                <div>
                                    <h1 className="font-bold">Medical Research</h1>
                                    <p>Excepteur sint ocecat pro dent sunt in culpa qui.</p>
                                </div>
                            </div>

                            <div className="flex justify-center items-center mx-auto gap-5 ">
                                <img src="https://i.ibb.co/WcFfvqN/test-tube.png" alt="" />
                                <div>
                                    <h1 className="font-bold">Blood Resources Program</h1>
                                    <p>Excepteur sint ocecat pro dent sunt in culpa qui.</p>
                                </div>
                            </div>
                            <div className="flex justify-center items-center mx-auto gap-5 py-10">
                                <img src="https://i.ibb.co/R3HLvp3/result.png" alt="" />
                                <div>
                                    <h1 className="font-bold">Extramural Funding</h1>
                                    <p>Excepteur sint ocecat pro dent sunt in culpa qui.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestResult;