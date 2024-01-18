import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
    Button,
  } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
const Registration = () => {
    return (
    <div className="max-w-6xl mx-auto relative flex border-b-0 text-gray-700 flex-col lg:flex-row my-10">
      <CardHeader
        shadow={false}
        floated={false}
        className="flex-1 relative m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0"
      >
        <img
          src="https://i.ibb.co/8mvfykY/Mobile-login-pana.png"
          alt="card-image"
          className="lg:max-w-lg lg:ml-36 mt-20"
        />
      </CardHeader>
      <CardBody className='relative mt-16  lg:mr-24 mx-auto flex flex-col text-gray-700 bg-white rounded-xl bg-clip-border'>
      <Card className="md:w-[400px] lg:w-[350px]">
      <CardHeader
        variant="gradient"
        
        className="mb-4 grid h-16 place-items-center bg-gradient-to-tr from-[#1565c0] to-[#0d47a1]"
      >
        <Typography variant="h3" color="white">
          Registration
        </Typography>
      </CardHeader>
      <CardBody className="flex flex-col gap-4">
      <Input label="Name" size="lg" />
        <Input label="Photo Link" size="lg" />
        <Input label="Email" size="lg" />
        <Input label="Password" size="lg" />
        <div className="-ml-2.5">
          <Checkbox label="Remember Me" />
        </div>
      </CardBody>
      <CardFooter className="pt-0">
        <Button variant="gradient" fullWidth>
          Sign In
        </Button>
        <Typography variant="small" className="mt-6 flex justify-center">
          Already have an account? 
          <Link className='label-text-alt link link-hover text-base text-[#1565c0] pl-2' to="/login">Sign In</Link>

    
        </Typography>
      </CardFooter>
    </Card>
      </CardBody>
    </div>
    
    );
};

export default Registration;