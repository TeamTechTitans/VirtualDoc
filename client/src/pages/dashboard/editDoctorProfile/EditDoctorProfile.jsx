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
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../lib/hooks/useAxiosPublic";

const EditDoctorProfile = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);

  const { data: doctor = [] } = useQuery({
    queryKey: ["doctor", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/doctor/${user?.email}`);
      return res.data;
    },
  });
  //   console.log(doctor)

  const handleUpdateForm = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.u_name.value;
    const email = form.u_email.value;
    const blood_group = form.u_blood_group.value;
    const location = form.u_loc.value;
    const updateUserData = {
      name,
      email,
      blood_group,
      location,
      image: doctor.image,
      education: doctor.education,
      registration: doctor.registration,
      health_category: doctor.health_category,
      about: doctor.about,
      password: doctor.password,
      role: doctor.role,
    };
    // console.log(updateUserData);
    const res = await axiosPublic.put(
      `/doctor/${doctor.email}`,
      updateUserData
    );
    // console.log(res.data);
    if (res.data.modifiedCount > 0) {
      Swal.fire({
        icon: "success",
        title: "Data Updated",
        timer: 1000,
      });
    }
  };

  return (
    <>
      <div className="flex justify-center my-16">
        <form onSubmit={handleUpdateForm}>
          <Card className="mt-20">
            <CardHeader className="flex justify-center shadow-2xl">
              <Avatar
                size="xl"
                variant="circular"
                alt="tania andrew"
                className="border-2 border-white my-2"
                src={`${doctor?.image}`}
              />
            </CardHeader>
            <CardBody>
              <Typography
                variant="h2"
                color="blue-gray"
                className="mb-2 text-center"
              >
                {doctor?.name}'s Profile
              </Typography>
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                <div className="w-72">
                  <Input
                    defaultValue={doctor?.name}
                    name="u_name"
                    label="Username"
                  />
                </div>
                <div className="w-72">
                  <Input
                    readOnly
                    defaultValue={doctor?.email}
                    name="u_email"
                    label="Email"
                  />
                </div>
                <div className="w-72">
                  <Input
                    defaultValue={doctor?.loc}
                    name="u_loc"
                    label="Location"
                  />
                </div>
                <div className="w-72">
                  <Input
                    defaultValue={doctor?.blood_group}
                    name="u_blood_group"
                    label="Blood Group"
                  />
                </div>
              </div>
            </CardBody>
            <CardFooter className="pt-0 flex justify-center">
              <Button type="submit">Update Profile</Button>
            </CardFooter>
          </Card>
        </form>
      </div>
    </>
  );
};

export default EditDoctorProfile;
