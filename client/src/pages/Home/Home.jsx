import LaboratoryServices from "./components/LaboratoryServices/LaboratoryServices";
import ClinicalServices from "./components/clinicalServices/ClinicalServices";

const Home = () => {
      return (
            <div>
                  <section>
                        <LaboratoryServices></LaboratoryServices>
                  </section>
                  <section>
                        <ClinicalServices></ClinicalServices>
                  </section>
            </div>
      );
};

export default Home;