import { useLoaderData, useLocation, useParams } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import TipBanner from "../Component/TipBanner/TipBanner";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import SiteHeader from "../../../components/siteHeader/SiteHeader";
import Comments from "./Comments/Comments";

const TipDetails = () => {
  const location = useLocation();
  const tips = location.state?.tip;

  return (
    <div>
      <SiteHeader title={'by doctor'}>Tips Detail</SiteHeader>
      <div className="container mx-auto mt-10 md:grid grid-cols-12 gap-4">
        <div className="col-span-8">
          <div className="space-y-5 my-10">
            <div className="flex gap-4">
              <div className=" text-center rounded-full border-white w-[95px] h-[95px] border-[5px] bg-light-teal shadow-lg p-6 ">
                <p className="font-bold text-primary-teal  text-3xl leading-none">
                  {tips?.date}
                </p>
                <p className="font-semibold">{tips?.month}</p>
              </div>
              <div className="space-y-2">
                <h1 className="text-[20px] md:text-[30px] font-bold">{tips?.title}</h1>
                <p className="text-sm font-normal text-gray-400">
                  by {tips?.author}, {tips?.comments} Comments
                </p>
              </div>
            </div>
            <div>
              <img
                loading="lazy"
                src={tips?.cover}
                alt="img"
                className="w-full  rounded-2xl max-h-[500px]"
              />
            </div>
            <div className="space-y-4">
              <p className="my-4 font-normal text-gray-700">
                {tips?.description}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {tips?.images?.map((image, index) => (
                  <div className="w-full items-center" key={index}>
                    <img
                      src={image}
                      className="mx-auto"
                      alt={`Image ${index + 1}`}
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="flex gap-2 my-8 text-[18px] font-medium">
                  <p className="text-[#0c1529] ">Tags: </p>
                  <div className="flex flex-wrap gap-1 text-[#808080]">
                    {tips?.hashtags.map((hashtag, index) => (
                      <span key={index}>
                        {hashtag}
                        {index !== tips?.hashtags.length - 1 && ","}
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
              <Comments tip = {tips}></Comments>
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

export default TipDetails;
