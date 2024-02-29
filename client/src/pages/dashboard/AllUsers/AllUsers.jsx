import { useQuery } from "@tanstack/react-query";
import DashboardHeading from "../../../components/DashboardHeading/DashboardHeading";
<<<<<<< HEAD
// import React from "react";
=======
import { useState, Fragment } from "react";
// import { Dialog, Transition } from '@headlessui/react'
>>>>>>> 4b65a652130f1c3540b3a1e0c7f2dc39c53da457
import {
  Button,
  Card,
  Typography,
} from "@material-tailwind/react";
<<<<<<< HEAD
import { useState } from "react";
import useAxiosSecure from "../../../lib/hooks/useAxiosSecure";
import ManageModal from "./ManageModal";
=======
// import ManageModal from "./ManageModal";
import useAxiosSecure from "../../../lib/hooks/useAxiosSecure";
import UserTable from "./UserTable";
>>>>>>> 4b65a652130f1c3540b3a1e0c7f2dc39c53da457

const AllUsers = () => {

  const TABLE_HEAD = ["Name", "Email", "location", "Blood-Group", "Action"];
  const axiosSecure = useAxiosSecure()


  const { data: userDetails = [] } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users`);
      const users = await res.data;
      return users;
    },
  });

  const classes = "p-4 border-b border-blue-gray-50";
  // const [userData, setUserData] = useState('');

  //  Manage Moda
  // const [open, setOpen] = useState(false);
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false)
  }
  function openModal() {
    setIsOpen(true)
  }

  const handleActionSubmit = () => {

  }

  const handleDelete = () => {

  }


<<<<<<< HEAD
  //  Manage Modal
  // const [open, setOpen] = React.useState(false);
  // const [userData, setUserData] = React.useState('');
  const [open, setOpen] = useState(false);
  const [userData, setUserData] = useState('');
  
=======
>>>>>>> 4b65a652130f1c3540b3a1e0c7f2dc39c53da457
  const handleOpen = async (email) => {
    setUserData(email ? email : "")
    console.log(email ? email : "")
    setOpen(!open)
  };



  return (
    <div className="flex p-2 flex-col">
      <DashboardHeading title="All users">Manage All Users</DashboardHeading>
      <Card className="w-full max-w-7xl mx-auto overflow-auto">
        <table className="w-full min-w-max table-auto  font-barlow">
          <thead>
            <tr className="">
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
            {userDetails?.map((user, index) => <UserTable key={index} index={index} classes={classes} user={user}></UserTable>)}
          </tbody>
        </table>
      </Card>

      {/* <ManageModal handleOpen={handleOpen} open={open} userEmail={userData}></ManageModal> */}

    </div >
  );
};

export default AllUsers;