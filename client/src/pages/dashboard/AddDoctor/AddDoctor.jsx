import { Button, Input, Option, Select } from "@material-tailwind/react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { FaImage } from "react-icons/fa6";
import DashboardHeading from "../../../components/DashboardHeading/DashboardHeading";
import useAxiosPublic from "../../../lib/hooks/useAxiosPublic";
import Swal from "sweetalert2";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddDoctor = () => {
  const { register, handleSubmit } = useForm();
  const axiosPublic = useAxiosPublic();

  const onSubmit = async (data) => {
    console.log(data);

    const imageFile = { image: data.image[0] };
    const res = await axios.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const image = res.data.data.display_url;
      const doctorData = {
        name: data.name,
        email: data.email,
        blood_group: data.blood_group,
        loc: data.loc,
        image: image,
        education: data.education,
        registration: data.registration,
        health_category: data.health_category,
        about: data.about,
        password: "A@1234",
        role: "doctor",
      };
      console.log(doctorData);
      const response = await axiosPublic.post("/doctors/createDoctors", doctorData);
    if (response) {
      Swal.fire({
        icon: "success",
        title: "Doctor Added to database",
        showConfirmButton: false,
        timer: 1000,
      });
    }
  }
  };
  return (
    <div className="mt-8 ml-8">
      <DashboardHeading title="Add doctor">Add a New Doctor</DashboardHeading>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="shadow-xl p-5 m-auto w-96"
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Name</span>
          </label>
          <Input
            color="teal"
            label="Doctor name"
            type="text"
            {...register("name", { required: true })}
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Email</span>
          </label>
          <Input
            color="teal"
            label="Doctor email"
            {...register("email", { required: true })}
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Specialty</span>
          </label>
          <select
            label="Category"
            color="teal"
            defaultValue="default"
            {...register("health_category", { required: true })}
            className="input focus:outline-0 h-10 input-bordered"
          >
            <option value="default" disabled>
              Select a Specialty
            </option>
            <option value="teethOrthodontics">Teeth Orthodontics</option>
            <option value="dermatologist">Dermatologist</option>
            <option value="heart">Heart</option>
            <option value="kidney">Kidney</option>
            <option value="brain">Brain</option>
          </select>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Blood Group</span>
          </label>
          <select
            label="Category"
            color="teal"
            defaultValue="default"
            {...register("blood_group", { required: true })}
            className="input focus:outline-0 h-10 input-bordered"
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
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Location</span>
          </label>
          <Input {...register("loc")} label="Location" color="teal" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Registration No.</span>
          </label>
          <Input
            {...register("registration")}
            label="Registration No."
            color="teal"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Education</span>
          </label>
          <Input {...register("education")} label="Education" color="teal" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">About</span>
          </label>
          <Input {...register("about")} label="About" color="teal" />
        </div>
        <div className="form-control h-36 w-full border border-black cursor-pointer focus:border-primary-teal hover:border-primary-teal  rounded-lg my-10">
          <label
            htmlFor="image"
            className="w-full h-full flex flex-col justify-center items-center cursor-pointer text-gray-500 text-center"
          >
            Upload Your Photo <FaImage className="mx-auto text-3xl" />
            <input
              id="image"
              {...register("image", { required: true })}
              type="file"
              placeholder="Upload Photo"
              className="input hidden pt-2 h-full"
            />
          </label>
        </div>
        <div className="w-full">
          <Button type="submit" color="teal" className="w-full text-white ">
            Add
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddDoctor;
