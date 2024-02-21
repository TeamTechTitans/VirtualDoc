import { Button, Card, Typography, button } from "@material-tailwind/react";
import { FcVideoCall } from "react-icons/fc";
import { Link } from "react-router-dom";
import DashboardHeading from "../../../components/DashboardHeading/DashboardHeading";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../lib/hooks/useAuth";
import useAxiosPublic from "../../../lib/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useApiLink from "../../../lib/hooks/useApiLink";
import DisplayPrescription from "./DisplayPrescription/DisplayPrescription";


const Appointment = () => {
  // const [appoinment, setAppointment] = useState([]);

  const navigate = useNavigate()

  const TABLE_HEAD = ["Doctor Name", "Date", "Time", "Treatment", "Video Call", "Prescription"];

  const { user } = useAuth()
  const axiosPublic = useAxiosPublic()

  const { data: appointments = [] } = useQuery({
    queryKey: ['appointments', user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/appointment/${user?.email}`)
      return res.data;
    }
  })

  const { data: doctors = [] } = useQuery({
    queryKey: ['doctors'],
    queryFn: async () => {
      //const res = await fetch(`${apiLink}/doctors`);
      const res = await axiosPublic.get(`/doctors`)
      //const doctors = await res.json();
      return res.data;
    },
  });
 // console.log('Doctors Data:', doctors);



  // const handleModalForPayment = () => {
  //   Swal.fire({
  //     icon: "error",
  //     title: "Oops...",
  //     text: "Please pay the fees to start the meeting",
  //   });
  // }

  // const handleNavigateToCart = (name, _id, treatment, date, time, pay) => {
  //   const appointment = {
  //     appointmentId: _id,
  //     name: name,
  //     treatment: treatment,
  //     date: date,
  //     time: time,
  //     pay: pay
  //   }
  //   navigate('/cart', { state: appointment });

  // }
  const handleReload = (_id) => {
    // Use window.location.href to navigate to the same URL, triggering a page reload
    window.location.href = `/dashboard/videocall/${_id}`;
  };

  return (
    <div className="">
      <DashboardHeading title="Appointments">Manage Appointments</DashboardHeading>
      <Card className="h-full max-w-7xl mx-auto overflow-auto my-6">
        <table className="table-auto pr-5 text-center font-barlow">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-light-teal  p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody >
            {appointments.map(({_id,patient_name,patient_email, date, timing_slot,doctor_email, health_category, paidStatus }, index) => {
              const isLast = index === appointments.length - 1;
              const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
               const filtered_doctors=doctors?.filter(doctor=>doctor.email===doctor_email);
              // console.log(filtered_doctors)
              return (
                <tr className="font-barlow" key={_id}>
                  <td className={classes}>
                    <div className="flex items-center gap-3 font-bold mx-3">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-bold mx-3"
                      >
                        {index + 1}
                      </Typography>
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                        >
                          {/* {filtered_doctors.name} */}
                          {/* {doctor_email} */}
                        {filtered_doctors?.map((doctor) => (
      <span key={doctor?._id}>{doctor?.name}</span>
      // You can include additional information here
    ))} 
                          
                        </Typography>
                      </div>
                    </div>
                  </td>
                  <td  className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"

                    >
                      {date}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"

                    >
                      {timing_slot}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"

                    >
                      {health_category}
                    </Typography>
                  </td>
                  <td className={classes}>
                    {
                      paidStatus ?
                        <Link onClick={()=>handleReload(_id)}><FcVideoCall className="mx-auto text-3xl" /></Link>
                        :
                        <button onClick={() => handleModalForPayment()}><FcVideoCall className="mx-auto opacity-30 text-3xl" /></button>
                    }

                    {/* <Link to='/dashboard/videocall'><FcVideoCall className="mx-auto text-3xl" /></Link> */}
                  </td>
                  <td>
                    <DisplayPrescription doctor_email={doctor_email} patient_name={patient_name} patient_email={patient_email} appointment_id={_id}></DisplayPrescription>
                  </td>
                  {/* <td className={classes}>
                    {
                      paidStatus ?
                      <Button disabled className="bg-secondary-blue" size="sm" >Pay</Button>
                      :
                      <Button className="bg-secondary-blue" size="sm" onClick={() => handleNavigateToCart(name, _id, treatment, date, time, pay)} >Pay</Button>
                    }
                    
                  </td> */}
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default Appointment;