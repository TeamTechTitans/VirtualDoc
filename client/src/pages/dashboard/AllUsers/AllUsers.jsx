import { useQuery } from "@tanstack/react-query";
import DashboardHeading from "../../../components/DashboardHeading/DashboardHeading";
import React from "react";
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";
import ManageModal from "./ManageModal";

const AllUsers = () => {
  const [userData, setUserData] = React.useState([]);
  const TABLE_HEAD = ["Name", "Email", "location", "Blood-Group", "Action"];


  const { data: userDetails = [] } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await fetch("https://virtual-doc-backend.vercel.app/users");
      const users = await res.json();
      return users;
    },
  });

  // const { data } = useQuery({
  //   queryKey: ['repoData'],
  //   queryFn: () =>
  //     fetch('https://virtual-doc-backend.vercel.app/users').then((res) =>
  //       res.json(),
  //     ),
  // })
  const classes = "p-4 border-b border-blue-gray-50";

  //  Manage Modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = (user) => {
    setOpen(!open)
    setUserData(user)
  };


  return (
    <div className="flex p-2 flex-col items-center">
      <DashboardHeading title="All users">Manage All Users</DashboardHeading>
      <Card className="w-full max-w-7xl overflow-auto">
        <table className="w-full min-w-max table-auto text-center font-barlow">
          <thead>
            <tr>
              {TABLE_HEAD.map((head, idx) => (
                <th
                  key={idx}
                  className="border-b border-blue-gray-100 bg-secondary-teal p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody >
            {userDetails?.map((user, index) => <tr className="font-barlow" key={index}>
              <td className={classes}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {user?.name}
                </Typography>
              </td>
              <td className={classes}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {user?.email}
                </Typography>
              </td>
              <td className={classes}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {user?.loc}
                </Typography>
              </td>
              <td className={classes}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {user?.blood_group}
                </Typography>
              </td>
              <td className={classes}>
                <Button color="blue" onClick={() => handleOpen(user)} className="px-2 py-1 rounded-none mr-2 normal-case">Manage</Button>

                <Button className="px-2 py-1 rounded-none normal-case" color="red">Delete</Button>
              </td>
            </tr>

            )}
          </tbody>
        </table>
      </Card>
      <ManageModal handleOpen={handleOpen} open={open} user={userData}></ManageModal>
    </div >
  );
};

export default AllUsers;