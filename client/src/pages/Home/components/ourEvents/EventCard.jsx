import { Card, CardHeader, CardBody, CardFooter, Typography, Avatar, Tooltip, } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineWatchLater } from "react-icons/md";

const EventCard = () => {
    return (
        <div className="grid grid-cols-1 p-4 gap-5 md:grid-cols-2 xl:grid-cols-4 mt-8">
            <Card className="max-w-[24rem] p-2 pt-10 relative hover:shadow-xl transition duration-300">
                <div className="w-24 z-50 flex justify-center flex-col items-center h-24 absolute -top-12 left-7 bg-blue-gray-50 shadow-lg rounded-full border-4 border-solid border-white">
                    <div className="text-4xl font-bold text-primary-teal">
                        27
                    </div>
                    <div className="font-semibold">
                        May
                    </div>
                </div>
                <CardBody>
                    <Typography variant="h5" className="text-black hover:text-primary-teal transition">
                        <Link to='/'>
                            Decade of Action on Nutrition and Global Initiatives
                        </Link>
                    </Typography>
                    <div className="flex gap-2 items-center">
                        <IoLocationOutline className="text-2xl text-primary-teal my-2" />
                        3491 Pall Mall Drive, NY
                    </div>
                    <div className="flex gap-2 items-center">
                        <MdOutlineWatchLater className="text-2xl text-primary-teal my-1" />
                        08:00am - 05:00pm
                    </div>
                    <Typography color="gray" className="mt-3 font-normal">
                        Quasi architebeat vitae dicta sunt explic nemo enim ipsam voluptam.
                    </Typography>
                </CardBody>
                <CardFooter className="flex items-center justify-between">
                    <div className="flex items-center -space-x-3">
                        <Tooltip content="Natali Craig">
                            <Avatar
                                size="sm"
                                variant="circular"
                                alt="natali craig"
                                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                                className="border-2 border-white hover:z-10"
                            />
                        </Tooltip>
                        <Tooltip content="Tania Andrew">
                            <Avatar
                                size="sm"
                                variant="circular"
                                alt="tania andrew"
                                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                                className="border-2 border-white hover:z-10"
                            />
                        </Tooltip>
                        <Tooltip content="Noha Makne">
                            <Avatar
                                size="sm"
                                variant="circular"
                                alt="Noha Makne"
                                src="https://t3.ftcdn.net/jpg/02/00/90/24/360_F_200902415_G4eZ9Ok3Ypd4SZZKjc8nqJyFVp1eOD6V.jpg"
                                className="border-2 border-white hover:z-10"
                            />
                        </Tooltip>
                    </div>
                    <Typography className="font-normal">January 10</Typography>
                </CardFooter>
            </Card>
            <Card className="max-w-[24rem] p-2 pt-10 relative hover:shadow-xl transition duration-300">
                <div className="w-24 z-50 flex justify-center flex-col items-center h-24 absolute -top-12 left-7 bg-blue-gray-50 shadow-lg rounded-full border-4 border-solid border-white">
                    <div className="text-4xl font-bold text-primary-teal">
                        27
                    </div>
                    <div className="font-semibold">
                        May
                    </div>
                </div>
                <CardBody>
                    <Typography variant="h5" className="text-black hover:text-primary-teal transition">
                        <Link to='/'>
                            Decade of Action on Nutrition and Global Initiatives
                        </Link>
                    </Typography>
                    <div className="flex gap-2 items-center">
                        <IoLocationOutline className="text-2xl text-primary-teal my-2" />
                        3491 Pall Mall Drive, NY
                    </div>
                    <div className="flex gap-2 items-center">
                        <MdOutlineWatchLater className="text-2xl text-primary-teal my-1" />
                        08:00am - 05:00pm
                    </div>
                    <Typography color="gray" className="mt-3 font-normal">
                        Quasi architebeat vitae dicta sunt explic nemo enim ipsam voluptam.
                    </Typography>
                </CardBody>
                <CardFooter className="flex items-center justify-between">
                    <div className="flex items-center -space-x-3">
                        <Tooltip content="Natali Craig">
                            <Avatar
                                size="sm"
                                variant="circular"
                                alt="natali craig"
                                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                                className="border-2 border-white hover:z-10"
                            />
                        </Tooltip>
                        <Tooltip content="Tania Andrew">
                            <Avatar
                                size="sm"
                                variant="circular"
                                alt="tania andrew"
                                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                                className="border-2 border-white hover:z-10"
                            />
                        </Tooltip>
                        <Tooltip content="Noha Makne">
                            <Avatar
                                size="sm"
                                variant="circular"
                                alt="Noha Makne"
                                src="https://t3.ftcdn.net/jpg/02/00/90/24/360_F_200902415_G4eZ9Ok3Ypd4SZZKjc8nqJyFVp1eOD6V.jpg"
                                className="border-2 border-white hover:z-10"
                            />
                        </Tooltip>
                    </div>
                    <Typography className="font-normal">January 10</Typography>
                </CardFooter>
            </Card>
            <Card className="max-w-[24rem] p-2 pt-10 relative hover:shadow-xl transition duration-300">
                <div className="w-24 z-50 flex justify-center flex-col items-center h-24 absolute -top-12 left-7 bg-blue-gray-50 shadow-lg rounded-full border-4 border-solid border-white">
                    <div className="text-4xl font-bold text-primary-teal">
                        27
                    </div>
                    <div className="font-semibold">
                        May
                    </div>
                </div>
                <CardBody>
                    <Typography variant="h5" className="text-black hover:text-primary-teal transition">
                        <Link to='/'>
                            Decade of Action on Nutrition and Global Initiatives
                        </Link>
                    </Typography>
                    <div className="flex gap-2 items-center">
                        <IoLocationOutline className="text-2xl text-primary-teal my-2" />
                        3491 Pall Mall Drive, NY
                    </div>
                    <div className="flex gap-2 items-center">
                        <MdOutlineWatchLater className="text-2xl text-primary-teal my-1" />
                        08:00am - 05:00pm
                    </div>
                    <Typography color="gray" className="mt-3 font-normal">
                        Quasi architebeat vitae dicta sunt explic nemo enim ipsam voluptam.
                    </Typography>
                </CardBody>
                <CardFooter className="flex items-center justify-between">
                    <div className="flex items-center -space-x-3">
                        <Tooltip content="Natali Craig">
                            <Avatar
                                size="sm"
                                variant="circular"
                                alt="natali craig"
                                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                                className="border-2 border-white hover:z-10"
                            />
                        </Tooltip>
                        <Tooltip content="Tania Andrew">
                            <Avatar
                                size="sm"
                                variant="circular"
                                alt="tania andrew"
                                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                                className="border-2 border-white hover:z-10"
                            />
                        </Tooltip>
                        <Tooltip content="Noha Makne">
                            <Avatar
                                size="sm"
                                variant="circular"
                                alt="Noha Makne"
                                src="https://t3.ftcdn.net/jpg/02/00/90/24/360_F_200902415_G4eZ9Ok3Ypd4SZZKjc8nqJyFVp1eOD6V.jpg"
                                className="border-2 border-white hover:z-10"
                            />
                        </Tooltip>
                    </div>
                    <Typography className="font-normal">January 10</Typography>
                </CardFooter>
            </Card>
            <Card className="max-w-[24rem] p-2 pt-10 relative hover:shadow-xl transition duration-300">
                <div className="w-24 z-50 flex justify-center flex-col items-center h-24 absolute -top-12 left-7 bg-blue-gray-50 shadow-lg rounded-full border-4 border-solid border-white">
                    <div className="text-4xl font-bold text-primary-teal">
                        27
                    </div>
                    <div className="font-semibold">
                        May
                    </div>
                </div>
                <CardBody>
                    <Typography variant="h5" className="text-black hover:text-primary-teal transition">
                        <Link to='/'>
                            Decade of Action on Nutrition and Global Initiatives
                        </Link>
                    </Typography>
                    <div className="flex gap-2 items-center">
                        <IoLocationOutline className="text-2xl text-primary-teal my-2" />
                        3491 Pall Mall Drive, NY
                    </div>
                    <div className="flex gap-2 items-center">
                        <MdOutlineWatchLater className="text-2xl text-primary-teal my-1" />
                        08:00am - 05:00pm
                    </div>
                    <Typography color="gray" className="mt-3 font-normal">
                        Quasi architebeat vitae dicta sunt explic nemo enim ipsam voluptam.
                    </Typography>
                </CardBody>
                <CardFooter className="flex items-center justify-between">
                    <div className="flex items-center -space-x-3">
                        <Tooltip content="Natali Craig">
                            <Avatar
                                size="sm"
                                variant="circular"
                                alt="natali craig"
                                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                                className="border-2 border-white hover:z-10"
                            />
                        </Tooltip>
                        <Tooltip content="Tania Andrew">
                            <Avatar
                                size="sm"
                                variant="circular"
                                alt="tania andrew"
                                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                                className="border-2 border-white hover:z-10"
                            />
                        </Tooltip>
                        <Tooltip content="Noha Makne">
                            <Avatar
                                size="sm"
                                variant="circular"
                                alt="Noha Makne"
                                src="https://t3.ftcdn.net/jpg/02/00/90/24/360_F_200902415_G4eZ9Ok3Ypd4SZZKjc8nqJyFVp1eOD6V.jpg"
                                className="border-2 border-white hover:z-10"
                            />
                        </Tooltip>
                    </div>
                    <Typography className="font-normal">January 10</Typography>
                </CardFooter>
            </Card>
        </div>
    );
};

export default EventCard;