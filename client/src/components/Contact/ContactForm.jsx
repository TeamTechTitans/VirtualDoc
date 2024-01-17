import { useForm } from "react-hook-form";
import { Button, Input, Textarea } from "@material-tailwind/react";
const ContactForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    // reset()
  };
  return (
    <div className="card max-w-[480px] rounded-3xl p-8 bg-[#0b66e5c7] text-white">
      <h1 className="text-4xl font-bold text-left">
        Contact with Us For <br />Better result{" "}
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="flex gap-4 my-4 justify-between">
            <div className="form-control">
          <Input
            size="md"
            type="email"
            label="Email Address" color="white" className="rounded-xl"
            {...register("email", { required: true })}
          />
        </div>
        <div className="form-control">
          <Input
            size="md"
            type="text"
            label="Phone" color="white" className="rounded-xl"
            {...register("phone", { required: true })}
          />
        </div>
        </div>
        

        <div className="form-control ">
          <Textarea 
            label="Message" className="text-white rounded-xl"
            {...register("Message", { required: true })}
          />
        </div>
        <div className="form-control mt-4">
        <Button type="submit"  className="rounded-full bg-[#30bde4e7]">Submit Now</Button>
        </div>
      </form>
    </div>
  );
};
export default ContactForm;
