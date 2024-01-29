import {
  Cog6ToothIcon,
  InboxIcon,
  MagnifyingGlassIcon,
  PowerIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import {
  Card,
  Chip,
  Input,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../logo/Logo";

const DashboardNav = () => {
  const [open, setOpen] = React.useState(0);
  const [openAlert, setOpenAlert] = React.useState(true);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Card className="h-[100vh] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 flex items-center gap-4 p-4">
        <img
          src="https://docs.material-tailwind.com/img/logo-ct-dark.png"
          alt="brand"
          className="h-8 w-8"
        />
        <Typography variant="h5" color="blue-gray">
          Sidebar
        </Typography>
      </div>
      <div className="p-2">
        <Input
          icon={<MagnifyingGlassIcon className="h-5 w-5" />}
          label="Search"
        />
      </div>
      <List>
        <Link to={"/dashboard"}>
          <ListItem className="p-0">
            <Typography color="blue-gray" className="mr-auto p-2 font-normal">
              Dashboard
            </Typography>
          </ListItem>
        </Link>
        <Link to={"/dashboard"}>
          <ListItem className="p-0">
            <Typography color="blue-gray" className="mr-auto p-2 font-normal">
              Dashboard
            </Typography>
          </ListItem>
        </Link>
        <Link to={"/dashboard/userappoinment"}>
          <ListItem className="p-0">
            <Typography color="blue-gray" className="mr-auto p-2 font-normal">
              User Services
            </Typography>
          </ListItem>
        </Link>
        <Link to={"/dashboard"}>
          <ListItem className="p-0">
            <Typography color="blue-gray" className="mr-auto p-2 font-normal">
              Dashboard
            </Typography>
          </ListItem>
        </Link>
        <Link to={"/dashboard"}>
          <ListItem className="p-0">
            <Typography color="blue-gray" className="mr-auto p-2 font-normal">
              Dashboard
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
            <Chip
              value="14"
              size="sm"
              variant="ghost"
              color="blue-gray"
              className="rounded-full"
            />
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
