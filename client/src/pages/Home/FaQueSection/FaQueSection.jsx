import Title from "../../../components/Title/Title";
import Faq from "./Faq";
import ImageSection from "./ImageSection";

const FaQueSection = () => {
  return (
    <div className="container mx-auto my-32">
      <div className="flex-1 lg:flex  justify-around items-center mx-5 ">
        {/* fa que section */}
        <div>
          <Title title="FAQ’S"></Title>
          <h1 className="text-3xl md:text-4xl text-[#142441] font-bold">
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
