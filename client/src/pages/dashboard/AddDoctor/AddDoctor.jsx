import { useForm } from "react-hook-form";
import { FaImage } from "react-icons/fa6";
import axios from 'axios';
<<<<<<< HEAD
=======
import { Button, Input, Option, Select } from "@material-tailwind/react";
import DashboardHeading from "../../../components/DashboardHeading/DashboardHeading";
>>>>>>> 32679e509a8182085732ebf3a414e76f7e234eda
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddDoctor = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        console.log(data);

        const imageFile = { image: data.image[0] };
        const res = await axios.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        if (res.data.success) {
            console.log("Hello")
            console.log(res.data)
        }
    };
    return (
        <div className="mt-8 ml-8">
<<<<<<< HEAD
            <h2 className="font-bold text-xl">Add a New Doctor</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="shadow-xl p-6">
=======
            <DashboardHeading title="Add doctor">Add a New Doctor</DashboardHeading>
            <form onSubmit={handleSubmit(onSubmit)} className="shadow-xl p-5 m-auto w-96">
>>>>>>> 32679e509a8182085732ebf3a414e76f7e234eda
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Name</span>
                    </label>
<<<<<<< HEAD
                    <input
                        type="text"
                        {...register("name", { required: true })}
                        placeholder="Enter Your Name"
=======
                    <Input
                        color="teal"
                        label="Doctor name"
                        type="text"
                        {...register("name", { required: true })}
>>>>>>> 32679e509a8182085732ebf3a414e76f7e234eda
                        className="input input-bordered"
                        required
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Email</span>
                    </label>
<<<<<<< HEAD
                    <input
                        type="text"
                        {...register("email", { required: true })}
                        placeholder="Enter Your Email"
=======
                    <Input
                        color="teal"
                        label="Doctor email"
                        {...register("email", { required: true })}
>>>>>>> 32679e509a8182085732ebf3a414e76f7e234eda
                        className="input input-bordered"
                        required
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Specialty</span>
                    </label>
<<<<<<< HEAD
                    <select
                        defaultValue="default"
                        {...register("category", { required: true })}
                        className="select select-bordered w-full"
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
                <div className="form-control relative h-36 w-full my-6">
                    <label className="absolute top-12 text-gray-500 text-center w-full">
                        Upload Your Photo <FaImage className="mx-auto text-3xl" />
                    </label>
                    <input
                        {...register("image", { required: true })}
                        type="file"
                        placeholder="Upload Your Photo"
                        className="input input-bordered pt-2 h-full"
                    />
                </div>
                <div className="w-full">
                    <button className="btn w-full bg-[#102e18] text-white hover:bg-[#194926]">Add</button>
=======
                    <Select
                        label="Category"
                        color="teal"
                        defaultValue="default"
                        {...register("category", { required: true })}
                        className="w-full"
                    >
                        <Option value="default" disabled>
                            Select a Specialty
                        </Option>
                        <Option value="teethOrthodontics">Teeth Orthodontics</Option>
                        <Option value="dermatologist">Dermatologist</Option>
                        <Option value="heart">Heart</Option>
                        <Option value="kidney">Kidney</Option>
                        <Option value="brain">Brain</Option>
                    </Select>
                </div>
                <div className="form-control h-36 w-full border border-black cursor-pointer focus:border-primary-teal hover:border-primary-teal  rounded-lg my-10">
                    <label htmlFor="image" className="w-full h-full flex flex-col justify-center items-center cursor-pointer text-gray-500 text-center">
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
                    <Button color="teal" className="w-full text-white ">Add</Button>
>>>>>>> 32679e509a8182085732ebf3a414e76f7e234eda
                </div>
            </form>
        </div>
    );
};

export default AddDoctor;