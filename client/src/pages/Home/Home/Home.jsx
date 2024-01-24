import Location from "../Location/Location";

import ClinicalServices from "../components/clinicalServices/ClinicalServices";
import OurEvents from "../components/ourEvents/OurEvents";
import '../components/animation.css'
import LaboratoryServices from "../../../components/LaboratoryServices/LaboratoryServices";
import FaQueSection from "../FaQueSection/FaQueSection";
import Testimonial from "../components/Testimonial/Testimonial";
import Banner from "../components/Banner/Banner";


const Home = () => {
      return (
            <div>
                
                  <Location></Location>
                  <LaboratoryServices/>
            </div>
      );
};

export default Home;
