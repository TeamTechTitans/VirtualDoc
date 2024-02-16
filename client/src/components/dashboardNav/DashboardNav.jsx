import {
  Cog6ToothIcon,
  HomeIcon,
  PowerIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import {
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "./../logo/Logo";
import useDoctor from "../../lib/hooks/useDoctor";
import useAdmin from "../../lib/hooks/useAdmin";

const DashboardNav = () => {
  const [isDoctor] = useDoctor();
  const [isAdmin] = useAdmin();
  const [open, setOpen] = React.useState(0);
  const [openAlert, setOpenAlert] = React.useState(true);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Card className="h-screen overflow-auto w-full max-w-[20rem] p-4">
      <div className="bg-white justify-between items-center">
        <Logo></Logo>
      </div>
      <List>
        {isAdmin ? (
          <>
          <Link to={"/dashboard"}>
              <ListItem className="p-0">
                <Typography
                  color="blue-gray"
                  className="mr-auto p-2 font-normal"
                >
                  Dashboard
                </Typography>
              </ListItem>
            </Link>
            <Link to={"/dashboard/userProfile"}>
              <ListItem className="p-0">
                <Typography
                  color="blue-gray"
                  className="mr-auto p-2 font-normal"
                >
                  Edit Profile
                </Typography>
              </ListItem>
            </Link>
            <Link to={"/dashboard/allUser"}>
              <ListItem className="p-0">
                <Typography
                  color="blue-gray"
                  className="mr-auto p-2 font-normal"
                >
                  All Users
                </Typography>
              </ListItem>
            </Link>
            <Link to={"/dashboard/allDoctor"}>
              <ListItem className="p-0">
                <Typography
                  color="blue-gray"
                  className="mr-auto p-2 font-normal"
                >
                  All Doctors
                </Typography>
              </ListItem>
            </Link>
            <Link to={"/dashboard/doctorApproval"}>
              <ListItem className="p-0">
                <Typography
                  color="blue-gray"
                  className="mr-auto p-2 font-normal"
                >
                  Doctors Approval
                </Typography>
              </ListItem>
            </Link>
            <Link to={"/dashboard/addDoctor"}>
              <ListItem className="p-0">
                <Typography
                  color="blue-gray"
                  className="mr-auto p-2 font-normal"
                >
                  Add a Doctor
                </Typography>
              </ListItem>
            </Link>
          </>
        ) : isDoctor? (
          <>
            <Link to={"/dashboard"}>
              <ListItem className="p-0">
                <Typography
                  color="blue-gray"
                  className="mr-auto p-2 font-normal"
                >
                  Dashboard
                </Typography>
              </ListItem>
            </Link>
            <Link to={"/dashboard/DoctorAppointment"}>
              <ListItem className="p-0">
                <Typography
                  color="blue-gray"
                  className="mr-auto p-2 font-normal"
                >
                  Appointments
                </Typography>
              </ListItem>
            </Link>
            <Link to={"/dashboard/postNewTip"}>
              <ListItem className="p-0">
                <Typography
                  color="blue-gray"
                  className="mr-auto p-2 font-normal"
                >
                  Post Tip
                </Typography>
              </ListItem>
            </Link>
            <Link to={"/dashboard/doctorProfile"}>
              <ListItem className="p-0">
                <Typography
                  color="blue-gray"
                  className="mr-auto p-2 font-normal"
                >
                  Edit Profile
                </Typography>
              </ListItem>
            </Link>
          </>
        ) : (
          <>
            <Link to={"/dashboard"}>
              <ListItem className="p-0">
                <Typography
                  color="blue-gray"
                  className="mr-auto p-2 font-normal"
                >
                  Dashboard
                </Typography>
              </ListItem>
            </Link>
            <Link to={"/dashboard/appoinment"}>
              <ListItem className="p-0">
                <Typography
                  color="blue-gray"
                  className="mr-auto p-2 font-normal"
                >
                  Appointments
                </Typography>
              </ListItem>
            </Link>
            <Link to={"/dashboard/paymentHistory"}>
              <ListItem className="p-0">
                <Typography
                  color="blue-gray"
                  className="mr-auto p-2 font-normal"
                >
                  Payment History
                </Typography>
              </ListItem>
            </Link>
            <Link to={"/dashboard/userProfile"}>
              <ListItem className="p-0">
                <Typography
                  color="blue-gray"
                  className="mr-auto p-2 font-normal"
                >
                  Edit Profile
                </Typography>
              </ListItem>
            </Link>
          </>
        )}
        <hr className="my-2 border-blue-gray-50" />
        <Link to="/" className="flex">
          <ListItem>
            <ListItemPrefix>
              <HomeIcon className="h-5 w-5" />
            </ListItemPrefix>
            Home
            {/* <ListItemSuffix>
                            <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
                        </ListItemSuffix> */}
          </ListItem>
        </Link>
        <Link to="/dashboard/profile">
          <ListItem>
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Profile
          </ListItem>
        </Link>

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
