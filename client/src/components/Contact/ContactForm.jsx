import emailjs from '@emailjs/browser';
import { Button, } from "@material-tailwind/react";
import { useRef } from "react";
import Swal from 'sweetalert2';

const ContactForm = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_60oukpk', 'template_vqqudzj', form.current, 'gxPZE-jijqxBj_CBJ')
      .then((result) => {
          // console.log(result.text);
          Swal.fire('Message successfully sent.');
          form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
      
  };

  return (
    <div className="card  max-w-[480px]  rounded-3xl p-4 pb-5 md:p-8 bg-secondary-blue text-white">
      <h1 className="text-4xl font-bold text-left">
        Contact with Us For <br />Better result{" "}
      </h1>
      <form ref={form} onSubmit={sendEmail} className="card-body p-0">
        <div className="flex flex-col md:flex-row gap-4 my-4 justify-between">
          <div className="form-control">
            <input

              type="email"
              placeholder="Email"
              className="rounded-full p-2 px-4 bg-[#1A53B8] placeholder:text-white outline-none focus:border-white border-2 border-solid border-transparent w-full"
              name="from_email"
              required
            />
          </div>
          <div className="form-control">
            <input

              type="number"
              placeholder="Phone"
              className="rounded-full p-2 px-4 bg-[#1A53B8] placeholder:text-white outline-none focus:border-white border-2 border-solid border-transparent w-full"
              name="from_number"
            />
          </div>
        </div>


        <div className="form-control ">
          <textarea
            rows={5}
            placeholder="message..."
            className="rounded-xl p-2 bg-[#1A53B8] placeholder:text-white outline-none focus:border-white border-2 border-solid border-transparent w-full"
            label="Message"
            name="message"
            required
          />
        </div>
        <div className="form-control mt-4">
          <Button type="submit" className="rounded-full bg-primary-teal">Submit Now</Button>
        </div>
      </form>
    </div>
  );
};
export default ContactForm;
