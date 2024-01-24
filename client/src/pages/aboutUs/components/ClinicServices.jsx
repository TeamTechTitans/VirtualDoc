import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import CustomTitle from '../../../components/CustomTitle/CustomTitle';
const ClinicServices = () => {
    return (<>
            <div className='flex justify-center mt-10'>
                <CustomTitle title="Clinical Services" double></CustomTitle>
            </div>  
            <div className='text-center'>
                <Typography variant="h2">Explore Our Main Services</Typography>
            </div>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10'>
            <Card className="md:w-96 w-full shadow-2xl group mx-auto my-6 ">
                <CardHeader className="relative md:h-56 h-full">
                    <img
                    src="https://i.ibb.co/3rdB5LL/service-1.jpg"
                    alt="card-image" className="md:w-96 w-full transition ease-in-out group-hover:scale-110 delay-150"
                    />
                </CardHeader>
                <CardBody className='relative'>
                    <div className='absolute border-0 w-20 h-20 p-3 delay-150 -top-12 left-36 rounded-full border-black group-hover:border-white group-hover:bg-blue-100 bg-white'>
                    <img color='white'
                    src="https://i.ibb.co/Jzw6DwF/laboratory.png"
                    alt="card-image" className=""
                    />
                    </div>
                    <Typography variant="h5" color="blue-gray" className="mb-2 mt-4 delay-150 text-center font-barlow group-hover:text-primary-teal">
                    Clinical Microbiology Tests
                    </Typography>
                    <Typography className="text-center font-barlow">
                    The place is close to Barceloneta Beach and bus stop just 2 min by
                    walk and near to &quot;Naviglio&quot; where you can enjoy the main
                    night life in Barcelona.
                    </Typography>
                </CardBody>
                <CardFooter className="flex justify-center">
                    <Button>Read More</Button>
                </CardFooter>
            </Card>
            <Card className="md:w-96 w-full shadow-2xl group mx-auto my-6 ">
                <CardHeader className="relative md:h-56 h-full ">
                    <img
                    src="https://i.ibb.co/1ZdDtFP/service-3.jpg"
                    alt="card-image" className="w-96 transition ease-in-out group-hover:scale-110 delay-150"
                    />
                </CardHeader>
                <CardBody className='relative'>
                    <div className='absolute border-0 w-20 h-20 p-3 delay-150 -top-12 left-36 rounded-full border-black group-hover:border-white group-hover:bg-blue-100 bg-white'>
                    <img color='white'
                    src="https://i.ibb.co/rdyLMKb/test-tube.png"
                    alt="card-image" className=""
                    />
                    </div>
                    <Typography variant="h5" color="blue-gray" className="mb-2 mt-4 delay-150 text-center font-barlow group-hover:text-primary-teal">
                    Testing for Traces & Impurities
                    </Typography>
                    <Typography className="text-center font-barlow">
                    The place is close to Barceloneta Beach and bus stop just 2 min by
                    walk and near to &quot;Naviglio&quot; where you can enjoy the main
                    night life in Barcelona.
                    </Typography>
                </CardBody>
                <CardFooter className="flex justify-center">
                    <Button>Read More</Button>
                </CardFooter>
            </Card>
            <Card className="md:w-96 w-full shadow-2xl group my-6 mx-auto">
                <CardHeader className="relative md:h-56 h-full ">
                    <img
                    src="https://i.ibb.co/c2Wwt6M/service-2.jpg"
                    alt="card-image" className="w-96 transition ease-in-out group-hover:scale-110 delay-150"
                    />
                </CardHeader>
                <CardBody className='relative'>
                    <div className='absolute border-0 w-20 h-20 p-3 delay-150 -top-12 left-36 rounded-full border-black group-hover:border-white group-hover:bg-blue-100 bg-white'>
                    <img color='white'
                    src="https://i.ibb.co/544hTgy/microscope.png"
                    alt="card-image" className=""
                    />
                    </div>
                    <Typography variant="h5" color="blue-gray" className="mb-2 mt-4 delay-150 text-center font-barlow group-hover:text-primary-teal">
                    Clinical Biochemistry Tests
                    </Typography>
                    <Typography className="text-center font-barlow">
                    The place is close to Barceloneta Beach and bus stop just 2 min by
                    walk and near to &quot;Naviglio&quot; where you can enjoy the main
                    night life in Barcelona.
                    </Typography>
                </CardBody>
                <CardFooter className="flex justify-center">
                    <Button>Read More</Button>
                </CardFooter>
            </Card>
        </div>
        </>);
};

export default ClinicServices;