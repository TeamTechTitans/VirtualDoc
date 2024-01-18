import AboutResearch from "../../../components/AboutResearch/AboutResearch";
import Article from "../Article/Article";
import Location from "../Location/Location";

import ClinicalServices from "../components/clinicalServices/ClinicalServices";
import OurEvents from "../components/ourEvents/OurEvents";
import '../components/animation.css'
<<<<<<< HEAD
import LaboratoryServices from "../../../components/LaboratoryServices/LaboratoryServices";
=======
import FaQueSection from "../FaQueSection/FaQueSection";
>>>>>>> development


const Home = () => {
      return (
            <div>
                  <AboutResearch />
                  <Article></Article>
                  <LaboratoryServices></LaboratoryServices>
                  <ClinicalServices></ClinicalServices>
                  <OurEvents></OurEvents>
                  <FaQueSection />
                  <Location></Location>
            </div>
      );
};

export default Home;