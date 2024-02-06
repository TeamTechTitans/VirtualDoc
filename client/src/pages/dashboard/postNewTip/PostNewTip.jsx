import { useForm } from "react-hook-form";
import DashboardHeading from "../../../components/DashboardHeading/DashboardHeading";
import { Button, Input, Option, Select, Textarea } from "@material-tailwind/react";
import { useState } from "react";
import { CiCircleRemove } from "react-icons/ci";
import useAxiosPublic from "../../../lib/hooks/useAxiosPublic";
import useAuth from "../../../lib/hooks/useAuth";
import Swal from "sweetalert2";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const PostNewTip = () => {
  const { handleSubmit, register } = useForm();
  const [hashtags, setHashtags] = useState([]);
  const [newHashtag, setNewHashtag] = useState("");
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth()

  const addHashtag = () => {
    if (newHashtag.trim() !== "") {
      setHashtags([...hashtags, newHashtag.trim()]);
      setNewHashtag("");
    }
  };

  const removeHashtag = (index) => {
    const updatedHashtags = [...hashtags];
    updatedHashtags.splice(index, 1);
    setHashtags(updatedHashtags);
  };

  const onSubmit = async (data) => {
    console.log(data);
    const coverImageFile = {
      image: data.cover[0],
    };
    const addFile1 = {
      image: data.add_img_1[0],
    };
    const addFile2 = {
      image: data.add_img_2[0],
    };
    const addFile3 = {
      image: data.add_img_3[0],
    };
    const res = await axiosPublic.post(image_hosting_api, addFile1, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    const addImage1 = res.data.data.display_url
    const res2 = await axiosPublic.post(image_hosting_api, addFile2, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      const addImage2 = res2.data.data.display_url
    const res3 = await axiosPublic.post(image_hosting_api, addFile3, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      const addImage3 = res3.data.data.display_url
    const resCover = await axiosPublic.post(image_hosting_api, coverImageFile, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      const coverImage = resCover.data.data.display_url
    //   console.log(addImage1, addImage2, addImage3, coverImage)
    if(res, res2, res3, resCover){
        const tip = {
            cover: coverImage,
            title: data.title,
            description: data.description,
            date: data.date,
            month: data.month,
            images: [addImage1, addImage2, addImage3],
            hashtags: hashtags,
            author: user?.displayName
        }
        console.log(tip)
        const response = await axiosPublic.post('/tips', tip)
    if(response){
        Swal.fire({
            icon: "success",
            title: "Tip posted successfully",
            showConfirmButton: false,
            timer: 1500,
          });
    }
    }
  };
  return (
    <div>
      <DashboardHeading title="Tip">Post a new Tip</DashboardHeading>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="shadow-xl p-5 pt-0 rounded-xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Title</span>
              </label>
              <Input
                color="teal"
                label="Title"
                type="text"
                {...register("title", { required: true })}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Cover Image</span>
              </label>
              <Input
                type="file"
                label="Cover Image"
                {...register("cover")}
                required
              />
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Description</span>
            </label>
            <div>
              <Textarea
                color="teal"
                type="text"
                label="Description"
                {...register("description", { required: true })}
                className="input h-16 input-bordered"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Month</span>
              </label>
              <select
                name="month"
                defaultValue="default"
                {...register("month", { required: true })}
                className="select focus:outline-0 select-bordered"
              >
                <option value="default" disabled>
                  Select Month
                </option>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
              </select>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Date</span>
              </label>
              <Input
                color="teal"
                label="Date"
                type="number"
                {...register("date", { required: true })}
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">
                  Additional Image 1
                </span>
              </label>
              <Input
                type="file"
                label="Additional Image 1"
                {...register("add_img_1")}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">
                  Additional Image 2
                </span>
              </label>
              <Input
                type="file"
                label="Additional Image 2"
                {...register("add_img_2")}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">
                  Additional Image 3
                </span>
              </label>
              <Input
                type="file"
                label="Additional Image 3"
                {...register("add_img_3")}
                required
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Hashtags</span>
            </label>
            <div className="flex items-center space-x-2">
              <Input
                color="teal"
                label="Hashtags"
                type="text"
                value={newHashtag}
                onChange={(e) => setNewHashtag(e.target.value)}
                className="input input-bordered"
              />
              <button
                type="button"
                className="btn btn-sm btn-outline"
                onClick={addHashtag}
              >
                Add
              </button>
            </div>
            <div className="mt-2">
              {hashtags.map((tag, index) => (
                <span
                  key={index}
                  className="tag p-2 bg-blue-gray-100 rounded-xl ml-2"
                >
                  {tag}
                  <button
                    type="button"
                    className="ml-2 font-bold text-lg text-red-500"
                    onClick={() => removeHashtag(index)}
                  >
                    <CiCircleRemove />
                  </button>
                </span>
              ))}
            </div>
          </div>
          <div className="w-full text-center mt-3">
          <Button type="submit" color="teal" className=" text-white ">
            Add
          </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostNewTip;
