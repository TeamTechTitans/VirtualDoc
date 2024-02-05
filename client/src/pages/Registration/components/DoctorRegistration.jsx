import React from 'react';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Select, 
    Option, 
    Button,
    value,
    Alert,
    Textarea
  } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
const DoctorRegistration = () => {
    const { register, handleSubmit, required  } = useForm(); 
    const onSubmit = data =>{
        console.log(data.email);
              if(data.password.length<6){
                return toast('Password should be 6 Character');
            }
            else if(!/[A-Z]/.test(data.password)){
                return toast('Kindly use at least one capital letter');
            }
            else if(!/[^\w\s]/.test(data.password)){
                return toast('Kindly use at least one special character');
            }
            else{
                                  //data insertion
                                  fetch('https://virtual-doc-backend.vercel.app/doctors/createDoctorsRequest',{
                                    method:"POST",
                                    headers: {
                                        'content-type': 'application/json'
                                      },
                                    body:JSON.stringify(data)
                                })
                                .then(res=>res.json())
                                .then(data=>{
                                    console.log(data);
                                    if(data._id){
                                      Swal.fire({
                                        position: "top-center",
                                        icon: "success",
                                        title: "Your Request has been Received",
                                        text: "Admin Will verify your details and give you access",
                                        showConfirmButton: false,
                                        timer: 7000
                                      });
                                    }
                                })
                                  
                              

    
            }
            
            
      };
    return (<>
        <div className="max-w-6xl mx-auto relative flex border-b-0 text-gray-700 flex-col lg:flex-row my-10">
          <CardHeader
            shadow={false}
            floated={false}
            className="flex-1 relative m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0"
          >
            <img loading="lazy"
              src="https://i.ibb.co/8mvfykY/Mobile-login-pana.png"
              alt="card-image"
              className="lg:max-w-lg lg:ml-36 mt-20"
            />
          </CardHeader>
          <CardBody className='relative  lg:mr-24 mx-auto flex flex-col text-gray-700 bg-white rounded-xl bg-clip-border'>
            <Card className="md:w-[400px] lg:w-[350px]">
              <CardHeader
                variant="gradient"
    
                className="mb-4 grid h-16 place-items-center bg-gradient-to-tr from-[#1565c0] to-[#0d47a1]"
              >
                <Typography variant="h3" color="white">
                 Doctor's Registration
                </Typography>
              </CardHeader>
             
              
              <form onSubmit={handleSubmit(onSubmit)}>  
                  <CardBody className="flex flex-col gap-4">
                      <Input label="Name" {...register("name")} size="lg" />
                      <Input label="Photo Link" {...register("image")} size="lg" />
                      <Input label="Location" {...register("loc")} size="lg" />
                      <Input label="Education" {...register("education")} size="lg" />
                      <Input label="Registration No" {...register("registration")} size="lg" />
                      <div className="">
                    <select {...register("health_category")}
                        className="block appearance-none h-11 w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded-md leading-tight focus:outline-none focus:shadow-outline"
                        id="health_category"
                        name="health_category"
                      >
                          <option selected disabled hidden>Health Category</option>
                          <option value="dietitian">Dietitian</option>
                          <option value="g_physician">General Physician</option>
                          <option value="sexology">Sexology</option>
                          <option value="dermatology">Dermatology</option>
                          <option value="psychiatry">Psychiatry</option>
                          <option value="stomachDigestion">Stomach and Digestion</option>
                          <option value="urology">Urology</option>
                          <option value="pediatrics">Pediatrics</option>
                      </select>
                      </div>
                      <Input type='email' label="Email" {...register("email")}  size="lg" />
                      <Input type='password' label="Password" {...register("password")} size="lg" />
                      <Textarea variant="outlined" {...register("about")} label="About Yourself" />
                      <Button type='submit' variant="gradient" fullWidth>
                        Sign Up
                      </Button>
                  </CardBody>
              </form>               
              <CardFooter className="pt-0">
                  <Typography variant="small" className="mt-6 flex justify-center">
                    Already have an account?
                    <Link className='label-text-alt link link-hover text-base text-[#1565c0] pl-2' to="/login">Sign In</Link>
                  </Typography>
              </CardFooter>
    
            </Card>
           
          </CardBody>
          
        </div>
     <ToastContainer />
     </>);
};

export default DoctorRegistration;