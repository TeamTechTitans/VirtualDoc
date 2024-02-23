import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import DashboardHeading from "../../../components/DashboardHeading/DashboardHeading";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../lib/hooks/useAxiosPublic";

const DoctorApprovalDetails = () => {
  const loadedData = useLoaderData();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const {
    _id,
    name,
    image,
    loc,
    education,
    registration,
    health_category,
    email,
    about,
    password,
  } = loadedData;
  // console.log(loadedData);
  //const {id}=useParams();
  const { register, handleSubmit, reset } = useForm();
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to decline this doctor request?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const deleteRes = await axiosPublic.delete(
          `/deleteDoctorRequest/${_id}`
        );
        // console.log(deleteRes)
        if (deleteRes) {
          Swal.fire("Deleted!", "Doctor request declined", "success");
          navigate("/dashboard/doctorApproval");
          //  console.log('remainin',remaining);
        }
      }
    });
  };

  const onSubmit = async (data) => {
    const doctorData = {
      name: data.name,
      image: data.image,
      loc: data.loc,
      education: data.education,
      registration: data.registration,
      health_category: data.health_category,
      email: data.email,
      about: data.about,
      password: data.password,
      role: "doctor",
    };
    // console.log(doctorData);
    const res = await axiosPublic.post("/doctors/createDoctors", doctorData);
    if (res) {
      Swal.fire({
        icon: "success",
        title: "Request has been Accepted",
        text: "Approved as a Doctor",
        showConfirmButton: false,
        timer: 1000,
      });
      const deleteRes = await axiosPublic.delete(`/deleteDoctorRequest/${_id}`);
      navigate("/dashboard/doctorApproval");
    }

  };
  return (
    <div>
      <DashboardHeading title="Validate Healthcare Professionals">
        Doctors Registration validation Process
      </DashboardHeading>
      <div className="hero">
        <div className="hero-content flex-col">
          <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
              <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Doctor Name</span>
                  </label>
                  <input
                    type="text"
                    defaultValue={name}
                    name="doctor_name"
                    {...register("name")}
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Profile Photo</span>
                  </label>
                  <input
                    type="text"
                    defaultValue={image}
                    name="image"
                    {...register("image")}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Location</span>
                  </label>
                  <input
                    type="text"
                    defaultValue={loc}
                    name="loc"
                    {...register("loc")}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Education</span>
                  </label>
                  <input
                    type="text"
                    defaultValue={education}
                    name="education"
                    {...register("education")}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Registration No.</span>
                  </label>
                  <input
                    type="text"
                    defaultValue={registration}
                    name="registration"
                    {...register("registration")}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Health Category</span>
                  </label>
                  <input
                    type="text"
                    defaultValue={health_category}
                    {...register("health_category")}
                    name="health_category"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    {...register("email")}
                    defaultValue={email}
                    name="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">About Doctor</span>
                  </label>
                  <input
                    type="text"
                    defaultValue={about}
                    {...register("about")}
                    name="about"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    defaultValue={password}
                    name="password"
                    {...register("password")}
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div className="inline mx-auto form-control mt-6">
                <button
                  type="submit"
                  className="mx-4 px-12 btn border-none text-white btn-success"
                >
                  Approve
                </button>
                <Link
                  onClick={() => handleDelete(_id)}
                  className="btn px-12  text-white btn-error"
                >
                  Decline
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorApprovalDetails;
