import SiteHeader from "../../../components/siteHeader/SiteHeader";
import OurTeeth from "./OurTeeth";
import UserAppointmentForm from "./UserAppointmentForm";
import UserServices from "./UserServices";

const UserAppointment = () => {
  return (
    <div>
      <SiteHeader title={"Appointment"}>Get an Appointment</SiteHeader>
      <UserAppointmentForm/>
      {/* <Calender></Calender> */}
      <UserServices></UserServices>
      <OurTeeth></OurTeeth>
    </div>
  );
};

export default UserAppointment;
