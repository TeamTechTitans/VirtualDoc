import { useForm } from "react-hook-form";
import useAuth from "../../../lib/hooks/useAuth";
import axios from "axios";
import { Input } from "@material-tailwind/react";
const Cart = () => {
    const { user } = useAuth();
  const { handleSubmit, register } = useForm();

    const onSubmit = async (data) => {
        const info = {
          name: data.name,
          email: user.email,
          address: data.address,
          phone: data.phone,
          currency: data.currency,
          price: parseFloat(totalPriceInSelectedCurrency),
          date: new Date(),
          status: 'pending'
        };
        // console.log(info)
        // const res = await axios.post('/payment', info)
        // if(res){
        //   console.log(res.data)
        //   window.location.replace(res.data.url)
        // }
      };
    
    return (
        <div>
            <div>
          <form onSubmit={handleSubmit(onSubmit)} className="shadow-xl p-5 rounded-xl">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Name</span>
              </label>
              <Input
                        color="teal"
                        label="Name"
                        type="text"
                        defaultValue={user?.displayName}
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
                        type="number"
              {...register("bill", { required: true })}
                        className="input input-bordered"
                        required
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