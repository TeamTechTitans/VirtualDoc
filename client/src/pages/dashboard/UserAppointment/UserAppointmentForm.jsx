import React, { useState } from "react";
import DashboardHeading from "../../../components/DashboardHeading/DashboardHeading";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
<<<<<<< HEAD
import useAuth from "../../../lib/hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../lib/hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const UserAppointmentForm = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic()
  const navigate = useNavigate()
  const [selectedCategory, setSelectedCategory] = useState("");
  const [appointmentDate, setAppointmentDate] = useState(new Date());
  const { register, handleSubmit, reset } = useForm();
  //const loadedData=useLoaderData;
  // const {_id,name,image,loc,education,registration,health_category,email,about,password}=loadedData;

  const { data: doctorDetails = [] } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/doctors");
      const doctors = await res.json();
      //console.log(doctors);
      return doctors;
    },
  });
  const filtered_doctor = doctorDetails.filter(
    (doctor) => doctor.health_category == selectedCategory
  );
  // const filtered_doctor_map=filtered_doctor.map(doctor=>doctor);
  // console.log(filtered_doctor_map);
  const { data: doctorHealthCategory = [] } = useQuery({
    queryKey: ["doctorsHealthCategory"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/doctorsHealthCategory");
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
    console.log(data)
    const appointment_data = {
      health_category: selectedCategory,
      doctor_id: data.doctors,
      timing_slot: data.timingSlot,
      date: appointmentDate,
      patient_email: user.email,
      patient_name: user?.displayName,
      patient_age: data.patientAge,
      description: data.healthIssue,
      payment: 500,
      paidStatus: false
    };
    console.log(appointment_data);
    
    const res = await axiosPublic.post('/appointment/bookAppointment',appointment_data)
    console.log(res.data)
    const appointmentId = res.data
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
    
  };
  return (
    <div>
      <DashboardHeading title="Deal with our Healthcare Professionals">
        Book An Appointment
      </DashboardHeading>
      <h2>{filtered_doctor.length}</h2>
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
                    {doctorHealthCategory.map((health_category) => (
                      <option
                        key={health_category._id}
                        value={health_category.cat_value}
                      >
                        {health_category.cat_name}
                      </option>
                    ))}
                  </select>
=======
import useAuth from '../../../lib/hooks/useAuth';
import Swal from 'sweetalert2';
import useApiLink from '../../../lib/hooks/useApiLink';

const UserAppointmentForm = () => {
    const apiLink = useApiLink()
    const {user}=useAuth();
    const [selectedCategory, setSelectedCategory] = useState('');
    const [appointmentDate, setAppointmentDate] = useState(new Date());
    const { register, handleSubmit,reset } = useForm();
    //const loadedData=useLoaderData;
   // const {_id,name,image,loc,education,registration,health_category,email,about,password}=loadedData;
    
    const { data: doctorDetails = [] } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
          const res = await fetch(`${apiLink}/doctors`);
          const doctors = await res.json();
          return doctors;
        },
    });

    const filtered_doctor=doctorDetails?.filter(doctor=>doctor.health_category==selectedCategory);
    // const filtered_doctor_map=filtered_doctor.map(doctor=>doctor);
    // console.log(filtered_doctor_map);
    const { data: doctorHealthCategory = [] } = useQuery({
        queryKey: ['doctorsHealthCategory'],
        queryFn: async () => {
          const res = await fetch(`${apiLink}/doctorsHealthCategory`);
          const doctorsHealthCategory = await res.json();
          console.log(doctorsHealthCategory);
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
      const onSubmit = data =>{
        const appointment_data={
            health_category:selectedCategory,
            doctor_id:data.doctors,
            timing_slot:data.timingSlot,
            date:appointmentDate,
            patient_email:user.email,
            patient_name:user.displayName,
            patient_age:data.patientAge,
            description:data.healthIssue,
            payment:500
        }
        console.log(appointment_data);
        // if(appointment_data.doctor_id=='' && appointment_data.timing_slot=='' && appointment_data.date=='' )
        //     {

        //     }
            fetch(`${apiLink}/appointment/bookAppointment`,{
              method:"POST",
              headers: {
                  'content-type': 'application/json'
                },
              body:JSON.stringify(appointment_data)
          })
          .then(res=>res.json())
          .then(data=>{
              console.log(data);
              if(data._id){
                Swal.fire({
                  position: "top-center",
                  icon: "success",
                  title: "Your Appointment has been Scheduled",
                  text: "You will see all details at your dashboard",
                  showConfirmButton: false,
                  timer: 7000
                });
              }
              else{
                Swal.fire({
                icon: "error",
                title: "Time Slot Already Booked",
                text: "Please book another time slot ",
                timer: 4000      
                });
              }
          })
      }
  return (<div>
        <DashboardHeading title="Deal with our Healthcare Professionals">Book An Appiontment</DashboardHeading>
      <h2>{filtered_doctor.length}</h2>
       <div className="hero">
            <div className="hero-content flex-col">
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
                    <div className='grid md:grid-cols-3 grid-cols-1 gap-6'>
                    <div className="form-control">
                            <label className="label">
                                <span className="label-text">Health Category</span>
                            </label>
                            <select onChange={handleCategoryChange} className="select select-bordered w-full">
                                {doctorHealthCategory.map((health_category, idx)=>(
                                    <option key={idx} value={health_category.cat_value}>{health_category.cat_name}</option>
                                ))}   
                            </select>
                    </div>
                    <div className="form-control">
                            <label className="label">
                                <span className="label-text">Doctors</span>
                            </label>
                            <select {...register('doctors', { required: true })} className="select select-bordered w-full">
                            <option disabled value="default">Select Doctors</option>
                            {filtered_doctor.map((filteredDoctors) => (<option key={filteredDoctors._id} value={filteredDoctors._id}>
                             {filteredDoctors.name}
                             </option>
                            ))}
                            </select>
                    </div>
                    <div className="form-control">
                            <label className="label">
                                <span className="label-text">Timing Slot</span>
                            </label>
                            <select {...register('timingSlot', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="default">Select Timing</option>
                                <option value="slotOne">6.00PM-6.45PM</option>
                                <option value="slotTwo">7.00PM-7.45PM</option>
                                <option value="slotThree">8.00PM-8.45PM</option>
                                <option value="slotFour">9.00PM-9.45PM</option>
                                <option value="slotFive">10.00PM-10.45PM</option>
                            </select>
                    </div>
                    <div className="form-control">
                            <label className="label">
                                <span className="label-text">Appointment Date</span>
                            </label>
                            <DatePicker minDate={new Date()} dateFormat="dd/MM/yyyy" className="input input-bordered" selected={appointmentDate} onChange={(date) => setAppointmentDate(date)} />
                    </div>
                    <div className="form-control">
                            <label className="label">
                                <span className="label-text">Patient's Name</span>
                            </label>
                            <input type="text" defaultValue={user?.displayName} name='patientName' {...register('patientName')}  className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                            <label className="label">
                                <span className="label-text">Patient' Age</span>
                            </label>
                            <input type="text" name='patientAge' {...register('patientAge')}  className="input input-bordered" required />
                    </div>
                    <div className="form-control col-span-3">
                        <label className="label">
                            <span className="label-text">Describe Health Issue</span>
                        </label>
                        <textarea className="textarea textarea-bordered" name='healthIssue' {...register('healthIssue')} placeholder="Health Issue"></textarea>
                        </div>     
                    </div>
                    <div className="inline mx-auto form-control mt-6">
                        <button type='submit' className="mx-4 px-12 btn border-none text-white btn-success">Pay Fees-500BDT</button>
                    </div>
                
                </form>
>>>>>>> 0601427827af410e2843b874d9af7eab04c97e3d
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
                    {filtered_doctor.map((filteredDoctors) => (
                      <option
                        key={filteredDoctors._id}
                        value={filteredDoctors._id}
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
                    <option value="slotOne">6.00PM-6.45PM</option>
                    <option value="slotTwo">7.00PM-7.45PM</option>
                    <option value="slotThree">8.00PM-8.45PM</option>
                    <option value="slotFour">9.00PM-9.45PM</option>
                    <option value="slotFive">10.00PM-10.45PM</option>
                  </select>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Appointment Date</span>
                  </label>
                  <DatePicker
                    minDate={new Date()}
                    dateFormat="dd/MM/yyyy"
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
