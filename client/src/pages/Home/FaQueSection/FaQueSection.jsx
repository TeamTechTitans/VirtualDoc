import Title from "../../../components/Title/Title";
import Faq from "./Faq";
import ImageSection from "./ImageSection";

const FaQueSection = () => {
  return (
    <div className="max-w-[1280px] mx-auto ">
      <div className="flex-1 lg:flex  justify-center items-center mx-5 ">
        {/* fa que section */}
        <div>
          <Title title="FAQ’S"></Title>
          <h1 className="text-3xl md:text-5xl text-[#142441] font-semibold">
            Frequently <br></br> Asked Questions.
          </h1>
          <Faq></Faq>
        </div>
        {/* fa que image section */}
        <div className="mx-10 mt-10 mb-10">
          <ImageSection></ImageSection>
        </div>
      </div>
    </div>
  );
};

export default FaQueSection;
