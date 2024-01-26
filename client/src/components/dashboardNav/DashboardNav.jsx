import {
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
    UserCircleIcon
} from "@heroicons/react/24/solid";
import {
    Card,
    Chip,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Typography
} from "@material-tailwind/react";
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../logo/Logo";



const DashboardNav = () => {


    const [open, setOpen] = React.useState(0);
    const [openAlert, setOpenAlert] = React.useState(true);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };


    return (
        <Card className="h-screen overflow-auto w-full max-w-[20rem] p-4">
            <div className="bg-white z-50 justify-between items-center">
                <Logo></Logo>
            </div>
            <List>
                <Link to={'/dashboard'}>
                    <ListItem className="p-0">
                        <Typography color="blue-gray" className="mr-auto p-2 font-normal">
                            Dashboard
                        </Typography>
                    </ListItem>
                </Link>

                <Link to={'/dashboard/allUser'}>
                    <ListItem className="p-0">
                        <Typography color="blue-gray" className="mr-auto p-2 font-normal">
                            All Users
                        </Typography>
                    </ListItem>
                </Link>
                <Link to={'/dashboard'}>
                    <ListItem className="p-0">
                        <Typography color="blue-gray" className="mr-auto p-2 font-normal">
                            All Doctors
                        </Typography>
                    </ListItem>
                </Link>
                <Link to={'/dashboard/appoinment'}>
                    <ListItem className="p-0">
                        <Typography color="blue-gray" className="mr-auto p-2 font-normal">
                        Appoinments
                        </Typography>
                    </ListItem>
                </Link>
                <Link to={'/dashboard/addDoctor'}>
                    <ListItem className="p-0">
                        <Typography color="blue-gray" className="mr-auto p-2 font-normal">
                            Add a Doctor
                        </Typography>
                    </ListItem>
                </Link>
                <Link to={'/dashboard/userProfile'}>
                    <ListItem className="p-0">
                        <Typography color="blue-gray" className="mr-auto p-2 font-normal">
                            Edit Profile
                        </Typography>
                    </ListItem>
                </Link>

                <hr className="my-2 border-blue-gray-50" />
                <ListItem>
                    <ListItemPrefix>
                        <InboxIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Inbox
                    <ListItemSuffix>
                        <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
                    </ListItemSuffix>
                </ListItem>
                <ListItem>
                    <ListItemPrefix>
                        <UserCircleIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Profile
                </ListItem>
                <ListItem>
                    <ListItemPrefix>
                        <Cog6ToothIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Settings
                </ListItem>
                <ListItem>
                    <ListItemPrefix>
                        <PowerIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Log Out
                </ListItem>
            </List>

        </Card>
    );
};

export default DashboardNav;