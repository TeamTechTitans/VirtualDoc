import TitleDashboard from "./TitleDashboard";
import UserServicesCard from "./UserServicesCard";
const UserServices = () => {
  return (
    <div>
      <TitleDashboard
        title="Please Select a ServiceFF"
        subTitle="available service 30, january , 2024"
      ></TitleDashboard>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-2 gap-2">
          <UserServicesCard></UserServicesCard>
          <UserServicesCard></UserServicesCard>
          <UserServicesCard></UserServicesCard>
          <UserServicesCard></UserServicesCard>
          <UserServicesCard></UserServicesCard>
          <UserServicesCard></UserServicesCard>
          <UserServicesCard></UserServicesCard>
          <UserServicesCard></UserServicesCard>
        </div>
      </div>
    </div>
  );
};

export default UserServices;
