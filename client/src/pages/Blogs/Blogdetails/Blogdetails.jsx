import { useLoaderData, useLocation, useParams } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import BlogBanner from "../Component/BlogBanner/BlogBanner";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";

const BlogDetails = () => {
  const location = useLocation();
  const blog = location.state?.blog;

  return (
    <div>
      <BlogBanner text="Tips Details" />
      <div className="container mx-auto grid grid-cols-12 gap-4">
        <div className="col-span-8">
          <div className="space-y-5 my-10">
            <div className="flex gap-4">
              <div className=" text-center rounded-full border-white w-[95px] h-[95px] border-[5px] bg-light-teal shadow-lg p-6 ">
                <p className="font-bold text-primary-teal  text-3xl leading-none">
                  {blog.date}
                </p>
                <p className="font-semibold">{blog.month}</p>
              </div>
              <div className="space-y-2">
                <h1 className="text-[30px] font-bold">{blog.title}</h1>
                <p className="text-sm font-normal text-gray-400">
                  by {blog.author}, {blog.comments} Comments
                </p>
              </div>
            </div>
            <div>
              <img
                loading="lazy"
                src={blog.cover}
                alt="img"
                className="w-full  rounded-2xl max-h-[500px]"
              />
            </div>
            <div className="space-y-4">
              <p className="my-4 font-normal text-gray-700">
                {blog.description}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {blog.images?.map((image, index) => (
                  <div className="w-full items-center" key={index}>
                    <img
                      src={image}
                      className="mx-auto"
                      alt={`Image ${index + 1}`}
                    />
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-2 my-8 text-[18px] font-medium">
                  <p className="text-[#0c1529] ">Tags: </p>
                  <div className="flex flex-wrap gap-1 text-[#808080]">
                    {blog.hashtags.map((hashtag, index) => (
                      <span key={index}>
                        {hashtag}
                        {index !== blog.hashtags.length - 1 && ","}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <ul className="flex gap-4 text-white">
                    <li>
                      <a href="">
                        <FaTwitter className="size-11 bg-[#466ca9] rounded-full p-3" />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <FaFacebook className="size-11 bg-[#dd4b39] rounded-full p-3" />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <FaPinterest className="size-11 bg-[#222222] rounded-full p-3" />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <FaInstagram className="size-11 bg-[#55acee] rounded-full p-3" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-4">
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
