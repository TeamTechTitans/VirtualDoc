import TitleDashboard from "./TitleDashboard";
import UserServicesCard from "./UserServicesCard";

const OurTeeth = () => {
  return (
    <div className="container mx-auto ">
      <TitleDashboard title="Available slotes for teeth orthodontics"></TitleDashboard>
      <div className="container mx-auto">
        <UserServicesCard></UserServicesCard>
      </div>
    </div>
  );
};

export default OurTeeth;
