import { Button, Input, Option, Select } from "@material-tailwind/react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { FaImage } from "react-icons/fa6";
import DashboardHeading from "../../../components/DashboardHeading/DashboardHeading";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddDoctor = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    console.log(data);

    const imageFile = { image: data.image[0] };
    const res = await axios.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      console.log("Hello");
      console.log(res.data);
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
            {...register("category", { required: true })}
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
              placeholder="Upload Your Photo"
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
