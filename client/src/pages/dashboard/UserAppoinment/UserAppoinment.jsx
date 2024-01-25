import SiteHeader from "../../../components/siteHeader/SiteHeader";
import Calender from "./Calender";
import OurTeeth from "./OurTeeth";
import UserServices from "./UserServices";

const UserAppoinment = () => {
  return (
    <div>
      <SiteHeader title={"User Appoinment"}>User Appoinment</SiteHeader>
      <Calender></Calender>
      <UserServices></UserServices>
      <OurTeeth></OurTeeth>
    </div>
  );
};

export default UserAppoinment;
