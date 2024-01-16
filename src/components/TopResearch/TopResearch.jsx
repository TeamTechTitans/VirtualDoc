import largeLeftBg from "../../assets/TopResearchImg/team-1.jpg";
import decorImg from "../../assets/TopResearchImg/decor-2.png";

const TopResearch = () => {
  return (
    <div className="my-5">
      {/* 1st section title with large picture */}
      <div className="flex gap-10">
        <div>
          <img src={largeLeftBg} alt="" className="p-10" />
        </div>
        <div className="mt-28">
          {/* for title */}
          <div className="flex items-center justify-center gap-2">
            <div>
              <img src={decorImg} alt="" />
            </div>
            <div>
              <h6 className="text-center text-base font-semibold text-[#22b6af] uppercase">
                Top Research
              </h6>
            </div>
          </div>
        </div>
      </div>
      {/* 2nd section team members */}
    </div>
  );
};

export default TopResearch;
