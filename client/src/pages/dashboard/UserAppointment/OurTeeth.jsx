import TitleDashboard from "./TitleDashboard";
import ClinicalServices from "../../Home/components/clinicalServices/ClinicalServices";
import UserServicesCard from "./UserServicesCard";

const OurTeeth = () => {
  return (
    <div>
      <TitleDashboard title="Available slotes for teeth orthodontics"></TitleDashboard>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-2 gap-5">
        <UserServicesCard></UserServicesCard>
        <UserServicesCard></UserServicesCard>
        <UserServicesCard></UserServicesCard>
      </div>
    </div>
  );
};

export default OurTeeth;
