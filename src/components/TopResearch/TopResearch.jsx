import largeLeftBg from "../../assets/TopResearchImg/team-1.jpg";
import decorImg from "../../assets/TopResearchImg/decor-2.png";
import img1 from "../../assets/TopResearchImg/team-2.jpg";
import img2 from "../../assets/TopResearchImg/team-3.jpg";
import img3 from "../../assets/TopResearchImg/team-4.jpg";
import img4 from "../../assets/TopResearchImg/team-5.jpg";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";
import { Button } from "@material-tailwind/react";
const TopResearch = () => {
  return (
    <div className="my-5 p-2">
      {/* 1st section title with large picture */}
      <div className="flex flex-col lg:flex-row gap-2 lg:gap-10">
        <div className="lg:w-1/2">
          <img src={largeLeftBg} alt="" className="lg:p-10" />
        </div>
        <div className="lg:mt-28 lg:w-1/2">
          {/* for main title */}
          <div className="flex items-center  gap-2">
            <div>
              <img src={decorImg} alt="" />
            </div>
            <div>
              <h6 className="text-center text-base font-semibold text-[#22b6af] uppercase">
                Top Research
              </h6>
            </div>
          </div>
          <h2 className="text-[42px] font-bold text-black py-4">
            Dr. Merrie Lewis
          </h2>
          <p className="text-gray-500 text-lg font-normal py-2">
            Cancer Research Fellow <br /> from Eastern Mediterranean University
          </p>
          <h3 className="text-[22px] font-bold text-black py-4">Biography</h3>
          <p className="text-gray-500 text-lg font-normal py-2">
            Lorem ipsum dolor amet consectet adipiscing do eiusmod tempor
            incididunt labore dolor magna aliqua ipsum suspen disse ultrices
            gravida Risus maecenas.
          </p>
          {/* social icon */}
          <div className="flex gap-5 py-5">
            <div>
              <Button
                variant="text"
                size="lg"
                className="rounded-3xl hover:bg-teal-300 hover:text-white"
              >
                <FaFacebookF />
              </Button>
            </div>
            <div>
              <Button
                variant="text"
                size="lg"
                className="rounded-3xl hover:bg-teal-300 hover:text-white"
              >
                <FaTwitter />
              </Button>
            </div>
            <div>
              <Button
                variant="text"
                size="lg"
                className="rounded-3xl hover:bg-teal-300 hover:text-white"
              >
                <FaInstagram />
              </Button>
            </div>
            <div>
              <Button
                variant="text"
                size="lg"
                className="rounded-3xl hover:bg-teal-300 hover:text-white"
              >
                <FaPinterestP />
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* 2nd section team members */}
      <div className="flex flex-col lg:flex-row gap-7 justify-center items-center">
        <div className="group relative">
          <div className="relative">
            <img src={img1} alt="" className="w-full h-auto" />
            <div className="hidden group-hover:flex flex-col items-center justify-center absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 rounded-2xl">
            <div className="flex gap-2">
            <div>
              <Button
                variant="text"
                size="lg"
                className="rounded-3xl bg-white hover:bg-teal-300 hover:text-white"
              >
                <FaFacebookF />
              </Button>
            </div>
            <div>
              <Button
                variant="text"
                size="lg"
                className="rounded-3xl bg-white hover:bg-teal-300 hover:text-white"
              >
                <FaTwitter />
              </Button>
            </div>
            <div>
              <Button
                variant="text"
                size="lg"
                className="rounded-3xl bg-white hover:bg-teal-300 hover:text-white"
              >
                <FaInstagram />
              </Button>
            </div>
           
          </div>
            </div>
          </div>
          <h4 className="font-bold text-2xl pt-2 hover:text-teal-300">Dr. Antonio Banderas</h4>
          <p className="text-gray-500 text-lg font-normal py-2">PHD Student</p>
        </div>
        <div className="group relative">
          <div className="relative">
            <img src={img2} alt="" className="w-full h-auto" />
            <div className="hidden group-hover:flex flex-col items-center justify-center absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 rounded-2xl">
            <div className="flex gap-2">
            <div>
              <Button
                variant="text"
                size="lg"
                className="rounded-3xl bg-white hover:bg-teal-300 hover:text-white"
              >
                <FaFacebookF />
              </Button>
            </div>
            <div>
              <Button
                variant="text"
                size="lg"
                className="rounded-3xl bg-white hover:bg-teal-300 hover:text-white"
              >
                <FaTwitter />
              </Button>
            </div>
            <div>
              <Button
                variant="text"
                size="lg"
                className="rounded-3xl bg-white hover:bg-teal-300 hover:text-white"
              >
                <FaInstagram />
              </Button>
            </div>
           
          </div>
            </div>
          </div>
          <h4 className="font-bold text-2xl pt-2 hover:text-teal-300">Dr. Margot Robbie</h4>
          <p className="text-gray-500 text-lg font-normal py-2">PHD Student</p>
        </div>
        <div className="group relative">
          <div className="relative">
            <img src={img3} alt="" className="w-full h-auto" />
            <div className="hidden group-hover:flex flex-col items-center justify-center absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 rounded-2xl">
            <div className="flex gap-2">
            <div>
              <Button
                variant="text"
                size="lg"
                className="rounded-3xl bg-white hover:bg-teal-300 hover:text-white"
              >
                <FaFacebookF />
              </Button>
            </div>
            <div>
              <Button
                variant="text"
                size="lg"
                className="rounded-3xl bg-white hover:bg-teal-300 hover:text-white"
              >
                <FaTwitter />
              </Button>
            </div>
            <div>
              <Button
                variant="text"
                size="lg"
                className="rounded-3xl bg-white hover:bg-teal-300 hover:text-white"
              >
                <FaInstagram />
              </Button>
            </div>
           
          </div>
            </div>
          </div>
          <h4 className="font-bold text-2xl pt-2 hover:text-teal-300">Dr. Gerard Butler</h4>
          <p className="text-gray-500 text-lg font-normal py-2">PHD Student</p>
        </div>
        <div className="group relative">
          <div className="relative">
            <img src={img4} alt="" className="w-full h-auto" />
            <div className="hidden group-hover:flex flex-col items-center justify-center absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 rounded-2xl">
            <div className="flex gap-2">
            <div>
              <Button
                variant="text"
                size="lg"
                className="rounded-3xl bg-white hover:bg-teal-300 hover:text-white"
              >
                <FaFacebookF />
              </Button>
            </div>
            <div>
              <Button
                variant="text"
                size="lg"
                className="rounded-3xl bg-white hover:bg-teal-300 hover:text-white"
              >
                <FaTwitter />
              </Button>
            </div>
            <div>
              <Button
                variant="text"
                size="lg"
                className="rounded-3xl bg-white hover:bg-teal-300 hover:text-white"
              >
                <FaInstagram />
              </Button>
            </div>
           
          </div>
            </div>
          </div>
          <h4 className="font-bold text-2xl pt-2 hover:text-teal-300">Dr. Brie Larson</h4>
          <p className="text-gray-500 text-lg font-normal py-2">PHD Student</p>
        </div>
        {/* done */}
      </div>
    </div>
  );
};

export default TopResearch;
