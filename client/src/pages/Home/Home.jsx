import LaboratoryServices from "./components/LaboratoryServices/LaboratoryServices";
import ClinicalServices from "./components/clinicalServices/ClinicalServices";
import OurEvents from "./components/ourEvents/OurEvents";

const Home = () => {
      return (
            <div>
                  <section>
                        <LaboratoryServices></LaboratoryServices>
                  </section>
                  <section>
                        <ClinicalServices></ClinicalServices>
                  </section>
                  <section>
                        <OurEvents></OurEvents>
                  </section>
            </div>
      );
};

export default Home;