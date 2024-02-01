import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import DashboardHeading from '../../../components/DashboardHeading/DashboardHeading';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../provider/AuthProvider/AuthProvider';

const DoctorApprovalDetails = () => {
    const {createUser,updateUserProfile}=useContext(AuthContext);
    const loadedData=useLoaderData();
    const {_id,name,image,loc,education,registration,health_category,email,about,password}=loadedData;
   // console.log(loadedData);
   //const {id}=useParams();
   const { register, handleSubmit,reset } = useForm();
   const handleDelete=(_id)=>{
    Swal.fire({
        title: 'Are you sure?',
        text: "Do you want to decline this doctor request?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {

            fetch(`http://localhost:5000/deleteDoctorRequest/${_id}`,{
                    method:'DELETE'
                })
                .then(res=> res.json())
                .then(data=>{
                    console.log(data);
                    if(data.deletedCount > 0){
                       Swal.fire(
                        'Deleted!',
                        'Doctor request declined',
                        'success'
                       )
                       
                        //  console.log('remainin',remaining);
                    }
                }) 
        }
    })
   
}

   const onSubmit = data =>{
    console.log(data.email);
    createUser(data.email,data.password)
    .then((userCredential) => {
        // Signed up 
        const res_user = userCredential.user;
        updateUserProfile(data.name,data.image)
            .then(() => {
              //data insertion
              fetch('http://localhost:5000/doctors/createDoctors',{
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
                    title: "Request has been Accepted",
                    showConfirmButton: false,
                    timer: 1000
                    });
                }
            })
          }).catch((error) => {
            // An error occurred
            // ...
          });

      })
    .catch((error) => {
      toast('Registration failed,Try Again');
      // ...
    });           
        
  };
    return (<div>
        <DashboardHeading title="Validate Healthcare Professionals">Doctors Registration validation Process</DashboardHeading>
        <div className="hero">
            <div className="hero-content flex-col">
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
                    <div className='grid md:grid-cols-3 grid-cols-1 gap-6'>

                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Doctor Name</span>
                        </label>
                        <input type="text" defaultValue={name} name='doctor_name' {...register('name')} className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Profile Photo</span>
                        </label>
                        <input type="text" defaultValue={image} name='image' {...register('image')} className="input input-bordered" required />
                        </div>          
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input type="text" defaultValue={loc} name='loc' {...register('loc')} className="input input-bordered" required />
                        </div>       
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Education</span>
                        </label>
                        <input type="text" defaultValue={education} name='education' {...register('education')} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Registration No.</span>
                        </label>
                        <input type="text" defaultValue={registration} name='registration' {...register('registration')} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Health Category</span>
                        </label>
                        <input type="text" defaultValue={health_category} {...register('health_category')} name='health_category' className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" {...register('email')} defaultValue={email} name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">About Doctor</span>
                        </label>
                        <input type="text" defaultValue={about} {...register('about')} name='about' className="input input-bordered" required />
                        </div>
                        
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" defaultValue={password} name='password' {...register('password')} className="input input-bordered" required />
                    </div>
                
                    </div>
                    <div className="inline mx-auto form-control mt-6">
                        <button type='submit' className="mx-4 px-12 btn border-none text-white btn-success">Approve</button>
                        <Link onClick={()=>handleDelete(_id)} className="btn px-12  text-white btn-error">Decline</Link>
                    </div>
                
                </form>
                </div>
            </div>
            </div>
    </div>
    );
};

export default DoctorApprovalDetails;