import { Button, Card, Typography, button } from "@material-tailwind/react";
import { FcVideoCall } from "react-icons/fc";
import { Link } from "react-router-dom";
import DashboardHeading from "../../../components/DashboardHeading/DashboardHeading";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../lib/hooks/useAuth";
import useAxiosPublic from "../../../lib/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { useState } from "react";
import { useForm } from 'react-hook-form';
import Prescription from "./Prescription/Prescription";
import useAxiosSecure from "../../../lib/hooks/useAxiosSecure";
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

const DoctorAppointmentPescription = () => {
  // const [appoinment, setAppointment] = useState([]);
  const [size, setSize] = useState(null);

  const handleOpen = (value) => setSize(value);
  const navigate = useNavigate()

  const TABLE_HEAD = ["Patient Name", "Date", "Time", "Health Issue", "Video Call", "Prescription"];

  const { user } = useAuth()
  const axiosPublic = useAxiosPublic()
  const axiosSecure = useAxiosSecure()

  const { data: appointments = [] } = useQuery({
    queryKey: ['appointments', user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/doctorAppointment/${user?.email}`)
      return res.data;
    }
  })

  const { data: doctors = [] } = useQuery({
    queryKey: ['doctors'],
    queryFn: async () => {
      //const res = await fetch(`${apiLink}/doctors`);
      const res = await axiosPublic.get(`/doctors`)
      //const doctors = await res.json();
      // console.log('doctors data',res.data);
      return res.data;
    },
  });
  const { data: users = [], isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      //const res = await fetch(`${apiLink}/doctors`);
      const res = await axiosSecure.get(`/users`)
      //const doctors = await res.json();
      return res.data;
    },
  });



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

  if (isLoading) return <div className="w-full h-screen flex justify-center items-center"> <span className="loading loading-dots loading-lg"></span></div>

  return (<>
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
            {appointments.map(({ _id, patient_name, date, timing_slot, doctor_email, patient_email, description, paidStatus }, index) => {
              const isLast = index === appointments.length - 1;
              const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
              const filtered_doctor = doctors?.find(doctor => doctor.email === doctor_email)
              const filtered_patient = users?.find(patient => patient.email === patient_email)
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

                          {patient_name}

                        </Typography>
                      </div>
                    </div>
                  </td>
                  <td className={classes}>
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
                      {description}
                    </Typography>
                  </td>
                  <td className={classes}>
                    {
                      paidStatus ?
                        <Link onClick={() => handleReload(_id)}><FcVideoCall className="mx-auto text-3xl" /></Link>
                        :
                        <button onClick={() => handleModalForPayment()}><FcVideoCall className="mx-auto opacity-30 text-3xl" /></button>
                    }

                    {/* <Link to='/dashboard/videocall'><FcVideoCall className="mx-auto text-3xl" /></Link> */}
                  </td>
                  <td className={classes}>
                    <Prescription filtered_doctor_id={filtered_doctor?._id} filtered_patient_id={filtered_patient?._id} appointments_id={_id}></Prescription>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </div>
  </>);
};

export default DoctorAppointmentPescription;