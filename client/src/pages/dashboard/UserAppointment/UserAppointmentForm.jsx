import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import DashboardHeading from "../../../components/DashboardHeading/DashboardHeading";
import useApiLink from "../../../lib/hooks/useApiLink";
import useAuth from "../../../lib/hooks/useAuth";
import useAxiosPublic from "../../../lib/hooks/useAxiosPublic";

const UserAppointmentForm = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic()
  const navigate = useNavigate()
  const [selectedCategory, setSelectedCategory] = useState("");
  const [appointmentDate, setAppointmentDate] = useState(new Date());
  const { register, handleSubmit, reset } = useForm();
  //const loadedData=useLoaderData;
  // const {_id,name,image,loc,education,registration,health_category,email,about,password}=loadedData;

  const apiLink = useApiLink()

  const { data: doctorDetails = [] } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      const res = await fetch(`${apiLink}/doctors`);
      const doctors = await res.json();
      //console.log(doctors);
      return doctors;
    },
  });
  const filtered_doctor = doctorDetails?.filter(
    (doctor) => doctor.health_category == selectedCategory
  );
  // const filtered_doctor_map=filtered_doctor.map(doctor=>doctor);
  // console.log(filtered_doctor_map);
  const { data: doctorHealthCategory = [] } = useQuery({
    queryKey: ["doctorsHealthCategory"],
    queryFn: async () => {
      const res = await fetch(`${apiLink}/doctorsHealthCategory`);
      const doctorsHealthCategory = await res.json();
      //console.log(doctorsHealthCategory);
      return doctorsHealthCategory;
    },
  });
  const handleCategoryChange = (event) => {
    const category = event.target.value;
    console.log(category);
    setSelectedCategory(category);
    //alert(category);
    // Reset selected doctor when category changes
    // setSelectedDoctor('');
  };
  const onSubmit = async (data) => {
   // console.log(data)
    const appointment_data = {
      health_category: selectedCategory,
      doctor_email: data.doctors,
      timing_slot: data.timingSlot,
      date: appointmentDate.toISOString().split('T')[0],
      patient_email: user.email,
      patient_name: user?.displayName,
      patient_age: data.patientAge,
      description: data.healthIssue,
      payment: 500,
      paidStatus: false
    };
    console.log(appointment_data);
    
    const res = await axiosPublic.post('/appointment/bookAppointment',appointment_data)
    // console.log(res.data._id);
    const appointmentId = res.data._id;
    if (appointmentId){
        const appointment = {
            appointmentId: appointmentId,
            name: appointment_data.patient_name,
            treatment: appointment_data.description,
            date: appointment_data.date,
            time: appointment_data.timing_slot,
            pay: appointment_data.payment
          }
          navigate('/cart', { state: appointment });
    }
    else{
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Oops.Try Again...",
        text: "Your Selected Timing Slot is Booked. ",
        showConfirmButton: false,
        timer: 4000
      });
    }
    
  };
  return (
    <div>
      <DashboardHeading title="Deal with our Healthcare Professionals">
        Book An Appointment
      </DashboardHeading>
      <h2>{filtered_doctor?.length}</h2>
      <div className="hero">
        <div className="hero-content flex-col">
          <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
              <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Health Category</span>
                  </label>
                  <select
                    onChange={handleCategoryChange}
                    className="select select-bordered w-full"
                  >
                    {doctorHealthCategory?.map((health_category) => (
                      <option
                        key={health_category._id}
                        value={health_category.cat_value}
                      >
                        {health_category.cat_name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Doctors</span>
                  </label>
                  <select
                    {...register("doctors", { required: true })}
                    className="select select-bordered w-full"
                  >
                    <option disabled value="default">
                      Select Doctor
                    </option>
                    {filtered_doctor?.map((filteredDoctors) => (
                      <option
                        key={filteredDoctors._id}
                        value={filteredDoctors.email}
                      >
                        {filteredDoctors.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Timing Slot</span>
                  </label>
                  <select
                    {...register("timingSlot", { required: true })}
                    className="select select-bordered w-full"
                  >
                    <option disabled value="default">
                      Select Timing
                    </option>
                    <option value="6.00PM-6.45PM">6.00PM-6.45PM</option>
                    <option value="7.00PM-7.45PM">7.00PM-7.45PM</option>
                    <option value="8.00PM-8.45PM">8.00PM-8.45PM</option>
                    <option value="9.00PM-9.45PM">9.00PM-9.45PM</option>
                    <option value="10.00PM-10.45PM">10.00PM-10.45PM</option>
                  </select>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Appointment Date</span>
                  </label>
                  <DatePicker
                    minDate={new Date()}
                    // dateFormat="dd/MM/yyyy"
                    dateFormat="MMM dd YY"
                    className="input input-bordered"
                    selected={appointmentDate}
                    onChange={(date) => setAppointmentDate(date)}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Patient's Name</span>
                  </label>
                  <input
                    type="text"
                    defaultValue={user?.displayName}
                    name="patientName"
                    {...register("patientName")}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Patient' Age</span>
                  </label>
                  <input
                    type="text"
                    name="patientAge"
                    {...register("patientAge")}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control col-span-3">
                  <label className="label">
                    <span className="label-text">Describe Health Issue</span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered"
                    name="healthIssue"
                    {...register("healthIssue")}
                    placeholder="Health Issue"
                  ></textarea>
                </div>
              </div>
              <div className="inline mx-auto form-control mt-6">
                <button
                  type="submit"
                  className="mx-4 px-12 btn border-none text-white btn-success"
                >
                  Pay Fees-500BDT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAppointmentForm;
