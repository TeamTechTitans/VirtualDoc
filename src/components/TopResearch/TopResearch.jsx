import largeLeftBg from "../../assets/TopResearchImg/team-1.jpg";
import decorImg from "../../assets/TopResearchImg/decor-2.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
const TopResearch = () => {
  return (
    <div className="my-5">
      {/* 1st section title with large picture */}
      <div className="flex gap-10">
        <div className="w-1/2">
          <img src={largeLeftBg} alt="" className="p-10" />
        </div>
        <div className="mt-28 w-1/2">
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
          <div className="flex gap-5 py-5 text-3xl ">
            <div>
              <button className="btn rounded-lg">
              <FaFacebookF />
              </button>
            </div>
            <div>
              <button className="btn rounded-lg">
              <FaTwitter />
              </button>
            </div>
            <div>
              <button className="btn rounded-lg">
              <FaInstagram />
              </button>
            </div>
            <div>
              <button className="btn rounded-lg">
              <FaPinterestP />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* 2nd section team members */}
    </div>
  );
};

export default TopResearch;
