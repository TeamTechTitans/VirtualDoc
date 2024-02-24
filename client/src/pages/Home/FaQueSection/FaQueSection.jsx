import { Typography } from "@material-tailwind/react";
import Title from "../../../components/Title/Title";
import Faq from "./Faq";
import ImageSection from "./ImageSection";

const FaQueSection = () => {
    return (
        <div className="container mx-auto my-32">
            <div className="flex-1 xl:flex  justify-around items-center mx-5 ">
                {/* fa que section */}
                <div>
                    <Title title="FAQ’S"></Title>
                    <Typography variant="h2" className="font-bold">
                        Frequently <br /> Asked Questions.
                    </Typography>
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
