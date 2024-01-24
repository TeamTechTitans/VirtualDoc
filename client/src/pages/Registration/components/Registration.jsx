import React, { useContext } from 'react';
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
} from "@material-tailwind/react";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider/AuthProvider';
const Registration = () => {
  const { register, handleSubmit, required  } = useForm(); 
  const navigate=useNavigate();
  const {createUser,updateUserProfile,googleSignIn}=useContext(AuthContext);
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
          createUser(data.email,data.password)
            .then((userCredential) => {
                // Signed up 
                const res_user = userCredential.user;
                updateUserProfile(data.name,data.photo)
                    .then(() => {
                      Swal.fire('Registration Successful');
                      navigate('/');
                  }).catch((error) => {
                    // An error occurred
                    // ...
                  });

              })
              .catch((error) => {
                toast('Registration failed,Try Again');
                // ...
              });

        }
        reset();
        
  };
  const handleGoogleLogin=()=>{
    googleSignIn()
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google Api
        Swal.fire('Login Successful');
        navigate('/');
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        Swal.fire('Login Successful');
        navigate('/');

      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        toast('Invalid Email Or Password.Please Try Again');
        // ...
      });
}
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
      <CardBody className='relative lg:mt-16  lg:mr-24 mx-auto flex flex-col text-gray-700 bg-white rounded-xl bg-clip-border'>
        <Card className="md:w-[400px] lg:w-[350px]">
          <CardHeader
            variant="gradient"

            className="mb-4 grid h-16 place-items-center bg-gradient-to-tr from-[#1565c0] to-[#0d47a1]"
          >
            <Typography variant="h3" color="white">
              Registration
            </Typography>
          </CardHeader>
          <Typography variant="small" className=" flex justify-center">
                Are you a Doctor?
                <Link className='label-text-alt link link-hover text-base text-[#1565c0] pl-2' to="/doctorRegister">Register Here</Link>
          </Typography>
          
          <form onSubmit={handleSubmit(onSubmit)}>  
              <CardBody className="flex flex-col gap-4">
                  <Input label="Name" {...register("name")} size="lg" />
                  <Input label="Photo Link" {...register("image")} size="lg" />
                  <Input label="Location" {...register("loc")} size="lg" />
                  <div className="">
                    <select {...register("blood_group")}
                    className="block appearance-none h-11 w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded-md leading-tight focus:outline-none focus:shadow-outline"
                    id="blood_group"
                    name="blood_group"
                  >
                      <option selected disabled hidden>Select blood group</option>
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                  </select>
                  </div>
                  <Input type='email' label="Email" {...register("email")}  size="lg" />
                  <Input type='password' label="Password" {...register("password")} size="lg" />
                  <Button type='submit' variant="gradient" fullWidth>
                    Sign Up
                  </Button>
                  <Button onClick={handleGoogleLogin} color="teal" fullWidth>
                    Google Sign In
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

export default Registration;