import SiteHeader from "../../../components/siteHeader/SiteHeader";
import Calender from "./Calender";
import OurTeeth from "./OurTeeth";
import UserServices from "./UserServices";

const UserAppointment = () => {
  return (
    <div>
      <SiteHeader title={"User Appointment"}>User Appointment</SiteHeader>
      <Calender></Calender>
      <UserServices></UserServices>
      <OurTeeth></OurTeeth>
    </div>
  );
};

export default UserAppointment;
