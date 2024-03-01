import React, { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import useApiLink from "../../../lib/hooks/useApiLink";
import useAxiosPublic from "../../../lib/hooks/useAxiosPublic";
const Login = () => {
  const apiLink = useApiLink();
  const { register, handleSubmit, required, reset } = useForm();
  const { logIn, googleSignIn, fbLogin } = useContext(AuthContext);
  const location = useLocation();
  const axiosPublic = useAxiosPublic();
  // console.log(location);
  const navigate = useNavigate();
  const onSubmit = (data) => {
    // console.log(data);
    logIn(data.email, data.password)
      .then((userCredential) => {
        Swal.fire("Logged In Successfully");
        const user = userCredential.user;
        // {
        //   Navigate(location.state ? location.state : '/');
        // }
        navigate(location.state ? location.state : "/", { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast("Invalid Email Or Password.Please Try Again");
      });
    reset();
  };
  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        navigate(location.state ? location?.state : "/", { replace: true });

        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // console.log(user);
        //data collected from google

        const googleData = {
          name: user.displayName,
          image: user.photoURL,
          loc: " ",
          blood_group: " ",
          email: user.email,
          password: " ",
          role: "user",
        }
        // console.log(googleData);
        //data insertion
        fetch(`${apiLink}/users/createUser`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(googleData),
        })
          .then(res => res.json())
          .then(data => {
            // console.log(data._id);
            if (data._id) {
              Swal.fire("Login Successful");
              navigate(location.state ? location.state : "/", {
                replace: true,
              });
            }
          });
        // Swal.fire('Login Successful');
        //  navigate('/');
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        toast("Invalid Email Or Password.Please Try Again");
        // ...
      });
  };
  const handleFbLogin = () => {
    fbLogin()
      .then((result) => {
        // console.log("Logged in ", result);
        const user = result.user;
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        // console.log(user);
        const fbData = {
          name: user.displayName,
          image: user.photoURL,
          loc: " ",
          blood_group: " ",
          email: user.email,
          password: " ",
          role: "user",
        }
        fetch(`${apiLink}/users/createUser`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(fbData),
        })
          .then(res => res.json())
          .then(data => {
            // console.log(data._id);
            if (data._id) {
              Swal.fire("Login Successful");
              navigate(location.state ? location.state : "/", {
                replace: true,
              });
            }
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        // console.log(errorCode, errorMessage, email);
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);

        // ...
      });
  };
  return (
    <div className="max-w-6xl mx-auto relative flex border-b-0 text-gray-700 flex-col lg:flex-row my-10">
      <CardHeader
        shadow={false}
        floated={false}
        className="flex-1 relative m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0"
      >
        <img
          loading="lazy"
          src="https://i.ibb.co/8mvfykY/Mobile-login-pana.png"
          alt="card-image"
          className="lg:max-w-lg lg:ml-36 mt-20"
        />
      </CardHeader>
      <CardBody className="relative lg:mt-28  lg:mr-24 mx-auto flex flex-col text-gray-700 bg-white rounded-xl bg-clip-border">
        <Card className="md:w-[400px] lg:w-[350px]">
          <CardHeader
            variant="gradient"
            className="mb-4 grid h-16 place-items-center bg-gradient-to-tr from-[#1565c0] to-[#0d47a1]"
          >
            <Typography variant="h3" color="white">
              Sign In
            </Typography>
          </CardHeader>
          <form onSubmit={handleSubmit(onSubmit)}>
            <CardBody className="flex flex-col gap-4">
              <Input
                type="email"
                label="Email"
                {...register("email")}
                size="lg"
              />
              <Input
                type="password"
                label="Password"
                {...register("password")}
                size="lg"
              />
              <Button type="submit" variant="gradient" fullWidth>
                Sign In
              </Button>
              <Button onClick={handleGoogleLogin} color="teal" fullWidth>
                Google Sign In
              </Button>
              <Button onClick={handleFbLogin} color="teal" fullWidth>
                Facebook
              </Button>
            </CardBody>
          </form>
          <CardFooter className="pt-0">
            <Typography variant="small" className="mt-6 flex justify-center">
              Don&apos;t have an account?
              <Link
                className="label-text-alt link link-hover text-base text-[#1565c0] pl-2"
                to="/register"
              >
                Register
              </Link>
            </Typography>
          </CardFooter>
        </Card>
      </CardBody>
    </div>
  );
};

export default Login;
