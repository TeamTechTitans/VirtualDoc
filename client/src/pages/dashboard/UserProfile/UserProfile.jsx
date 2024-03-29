import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Input,
  CardHeader,
  Avatar,
} from "@material-tailwind/react";
import { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import useApiLink from '../../../lib/hooks/useApiLink';
import useAxiosSecure from "../../../lib/hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import profileImg from './../../../assets/profile.png'

const UserProfile = () => {

  const apiLink = useApiLink()
  const { user } = useContext(AuthContext);


  const axiosSecure = useAxiosSecure()

  const { data: users, isLoading } = useQuery({
    queryKey: ['specificUser'],
    queryFn: async () => {
      const userData = await axiosSecure.get(`/users/${user?.email}`)
      return userData.data
    }
  })

  // console.log(users)

  const handleUpdateForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.u_name.value;
    const email = form.u_email.value;
    const blood_group = form.u_blood_group.value;
    const location = form.u_loc.value;
    const updateUserData = { name, email, blood_group, location };
    // console.log(updateUserData);
    fetch(`${apiLink}/users/${users?._id}`, {
      method: "PUT",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updateUserData)
    })
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Data Updated",
            icon: "success"
          });
        }
      })
  }

  if (isLoading) return <div className="w-full h-screen flex justify-center items-center"> <span className="loading loading-dots loading-lg"></span></div>

  return (
    <>
      <div className="flex justify-center my-16">
        <form onSubmit={handleUpdateForm}>
          <Card className="mt-20">
            <CardHeader className="flex justify-center shadow-2xl">
              {
                user?.photoURL ?
                <Avatar
                size="xl"
                variant="circular"
                alt='image'
                className="border-2 border-white my-2"
                src={user?.photoURL}
              /> :
              <Avatar
                size="xl"
                variant="circular"
                alt='image'
                className="border-2 border-white my-2"
                src={profileImg}
              />
              }
              
            </CardHeader>
            <CardBody>
              <Typography
                variant="h2"
                color="blue-gray"
                className="mb-2 text-center"
              >
                {users?.name}'s Profile
              </Typography>
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                <div className="w-72">
                  <Input
                    defaultValue={users?.name}
                    name="u_name"
                    label="Username"
                  />
                </div>
                <div className="w-72">
                  <Input
                    defaultValue={users?.email}
                    name="u_email"
                    label="Email"
                  />
                </div>
                <div className="w-72">
                  <Input
                    defaultValue={users?.loc}
                    name="u_loc"
                    label="Location"
                  />
                </div>
                <div className="w-72">
                  <Input
                    defaultValue={users?.blood_group}
                    name="u_blood_group"
                    label="Blood Group"
                  />
                </div>
              </div>
            </CardBody>
            <CardFooter className="pt-0 flex justify-center">
              <Button type="submit">Edit Profile</Button>
            </CardFooter>
          </Card>
        </form>
      </div>
    </>
  );
};

export default UserProfile;
