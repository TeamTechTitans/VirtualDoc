import React from 'react';
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Input,
    CardHeader,
    Avatar,
<<<<<<< HEAD
  } from "@material-tailwind/react";

const UserProfile = () => {
    return (
        <div className='flex justify-center my-16'>
                        <Card className=" w-1/2">
                        <CardHeader className='flex justify-center shadow-2xl'>
=======
} from "@material-tailwind/react";
import DashboardHeading from '../../../components/DashboardHeading/DashboardHeading';

const UserProfile = () => {
    return (
        <>
            <DashboardHeading title="Profile">Edit Your Profile</DashboardHeading>
            <div className='flex justify-center my-16'>
                <Card className="mt-16">
                    <CardHeader className='flex justify-center'>
>>>>>>> 32679e509a8182085732ebf3a414e76f7e234eda
                        <Avatar
                            size="xl"
                            variant="circular"
                            alt="tania andrew"
<<<<<<< HEAD
                            className="border-2 border-white my-2"
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                            />
                        </CardHeader>
                        <CardBody>
                            <Typography variant="h2" color="blue-gray" className="mb-2 text-center">
                            Your Profile
                            </Typography>
                            <div className='grid lg:grid-cols-2 grid-cols-1 gap-4'>
                                <div className="w-72">
                                    <Input label="Username" />
                                </div>
                                <div className="w-72">
                                    <Input label="Email" />
                                </div>
                                <div className="w-72">
                                    <Input label="Location" />
                                </div>
                                <div className="w-72">
                                    <Input label="Blood Group" />
                                </div>
                            </div>
                        </CardBody>
                        <CardFooter className="pt-0 flex justify-center">
                            <Button>Edit Profile</Button>
                        </CardFooter>
                </Card>
        </div>
=======
                            className=" my-2"
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                        />
                    </CardHeader>
                    <CardBody>
                        <Typography variant="h4" color="blue-gray" className="mb-2 text-center">
                            Profile Data
                        </Typography>
                        <div className='grid lg:grid-cols-2 grid-cols-1 gap-4'>
                            <div className="max-w-72">
                                <Input color='teal' label="Username" />
                            </div>
                            <div className="max-w-72">
                                <Input color='teal' label="Email" />
                            </div>
                            <div className="max-w-72">
                                <Input color='teal' label="Location" />
                            </div>
                            <div className="max-w-72">
                                <Input color='teal' label="Blood Group" />
                            </div>
                        </div>
                    </CardBody>
                    <CardFooter className="pt-0 flex justify-center">
                        <Button color='teal'>Edit Profile</Button>
                    </CardFooter>
                </Card>
            </div>
        </>
>>>>>>> 32679e509a8182085732ebf3a414e76f7e234eda
    );
};

export default UserProfile;