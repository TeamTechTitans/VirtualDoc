import { useForm } from "react-hook-form";
import useAuth from "../../lib/hooks/useAuth";
import { Input } from "@material-tailwind/react";
import DashboardHeading from "../../components/DashboardHeading/DashboardHeading";
import useAxiosPublic from "../../lib/hooks/useAxiosPublic";
import { useLocation } from "react-router-dom";

const Cart = () => {
  const { user } = useAuth();
  const { handleSubmit, register } = useForm();
  const location = useLocation()
  const axiosPublic = useAxiosPublic();
  const appointment = location.state;
  const {name,appointmentId, treatment, pay, time, date} = appointment
  
  const onSubmit = async (data) => {
    const bill = parseFloat(data.bill).toFixed(2)
    const info = {
      name: data.name,
      email: user?.email,
      address: data.address,
      phone: data.phone,
      price: parseFloat(bill),
      billPayDate: new Date(),
      appointmentDate: date,
      appointmentTime: time,
      treatment: treatment,
      appointmentId:appointmentId
    };
    console.log(info);
    const res = await axiosPublic.post('/payment', info)
    if(res){
    //   console.log(res.data)
      window.location.replace(res.data.url)
    }
  };

  return (
    <div>
      <DashboardHeading title="Payment">Pay the Bill</DashboardHeading>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="shadow-xl p-5 w-96 mx-auto rounded-xl"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Name</span>
            </label>
            <Input
              color="teal"
              label="Name"
              type="text"
              defaultValue={name}
              {...register("name", { required: true })}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Address</span>
            </label>
            <Input
              color="teal"
              label="Address"
              type="text"
              {...register("address", { required: true })}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Phone Number</span>
            </label>
            <Input
              color="teal"
              label="Phone Number"
              type="text"
              {...register("phone", { required: true })}
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Bill</span>
            </label>
            <Input
              color="teal"
              label="Amount"
              type="text"
              defaultValue={pay}
              {...register("bill", { required: true })}
              className="input input-bordered"
              required
              readOnly
            />
          </div>
          <div className="w-full text-center mt-3">
            {/* {cart.length > 0 ? ( */}
            <button className="btn btn-outline btn-md">Pay</button>
            {/* ) : ( */}
            {/* //     <button disabled className="btn btn-outline"> 
            //       Pay
            //     </button>
            //   )} */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Cart;
