import React from "react";
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Select,
  Option,
} from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../lib/hooks/useAxiosPublic";
import "./swal.css"

export default function ManageModal({ handleOpen, open, doctor, refetch }) {
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit } = useForm();
    const {name} = doctor
  const onSubmit = async (data) => {
    // console.log(data);
    const updatedDoctorData = {
      name: data.name,
      email: data.email,
      blood_group: data.blood_group,
      location: data.loc,
      image: data.image,
      education: data.education,
      registration: data.registration,
      health_category: data.health_category,
      about: data.about,
      password: doctor.password,
      role: "doctor",
    };
    // console.log(updatedDoctorData)
    const res = await axiosPublic.put(
      `/doctor/${doctor.email}`,
      updatedDoctorData
    );
    console.log(res.data);
    if (res.data.modifiedCount > 0) {
      Swal.fire({
        icon: "success",
        title: "Data Updated",
        timer: 1000,
        showConfirmButton: true,
        customClass: {
          container: "swal-container",
          popup: "swal-popup",
          content: "swal-content",
          confirmButton: "swal-confirm-button",
        },
      });
    }
  };
  refetch();

  return (
    <>
      <Dialog
        size="lg"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none z-10"
      >
        <Card className="mx-auto w-full overflow-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="overflow-auto">
            <CardBody className="flex flex-col gap-4">
              <Typography variant="h4" className="text-center">
                Manage {doctor?.name + "'s "} Data
              </Typography>
              <Typography
                className="mb-3 font-normal text-red-400 max-w-[40rem] mx-auto text-center"
                variant="paragraph"
                color="gray"
              >
                Currently managing <b>{doctor?.name + "'s "}</b> data. Remember
                without doctor's permission or any kinds of emergency issue you
                should not change the doctor data.
              </Typography>

              <div className="flex flex-col grid-cols-2 gap-5 md:grid">
                <Input
                  {...register("name")}
                  label="Name"
                  color="teal"
                  defaultValue={name}
                  size="lg"
                />
                <Input
                  {...register("email")}
                  label="Email"
                  color="teal"
                  size="lg"
                  defaultValue={doctor?.email}
                />

                <select
                  {...register("blood_group")}
                  color="teal"
                  defaultValue={
                    doctor?.blood_group ? doctor.blood_group : "default"
                  }
                  className="select focus:outline-0 select-bordered"
                  //   onChange={(e) => {
                  //     const selectedValue = e.target.value;
                  //     register("blood_group").onChange(selectedValue);
                  //   }}
                >
                  <option value="default" disabled>
                    Select Blood Group
                  </option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>

                <Input
                  {...register("image")}
                  label="Image Url"
                  color="teal"
                  defaultValue={doctor?.image}
                  size="lg"
                />
                <Input
                  {...register("loc")}
                  label="Location"
                  color="teal"
                  size="lg"
                  defaultValue={doctor?.loc}
                />
                <Input
                  {...register("registration")}
                  label="Registration No."
                  color="teal"
                  size="lg"
                  defaultValue={doctor?.registration}
                />
                <Input
                  {...register("health_category")}
                  label="Category"
                  color="teal"
                  size="lg"
                  defaultValue={doctor?.health_category}
                />
                <Input
                  {...register("education")}
                  label="Education"
                  color="teal"
                  size="lg"
                  defaultValue={doctor?.education}
                />
              </div>
              <Input
                {...register("about")}
                label="About"
                color="teal"
                size="lg"
                defaultValue={doctor?.about}
              />
            </CardBody>
            <CardFooter className="pt-0 flex gap-5 flex-wrap">
              <Button
                type="submit"
                className="w-full max-w-[10rem] bg-red-500"
                fullWidth
              >
                Update
              </Button>
              <Button
                className="max-w-[10rem] bg-secondary-blue"
                onClick={handleOpen}
                fullWidth
              >
                Cancel
              </Button>
            </CardFooter>
          </form>
        </Card>
      </Dialog>
    </>
  );
}
