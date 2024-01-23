import { Button, Input, Textarea } from "@material-tailwind/react";
import { FaLocationDot } from "react-icons/fa6";
import { IoCallSharp } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { Form } from "react-router-dom";
import CustomTitle from "./../../components/CustomTitle/CustomTitle";
import Map from './../../components/Map/Map';
import PageBanner from './../../components/PageBanner/PageBanner';
const Contact = () => {
  return (
    <div>
      <PageBanner title="Contact Us" subtitle='Home - Contact us'></PageBanner>
      <div className="relative -mt-6" >
        <Map></Map>
        <div className="w-11/12 mx-auto">
        <div className="absolute bg-dark-blue p-16 w-11/12 mx-auto rounded-xl md:flex justify-around -mt-40">
          <div className="flex gap-5">
          <div className="bg-primary-black flex justify-center items-center rounded-full w-14 h-14">
          <FaLocationDot className="text-primary-teal text-3xl " />
          </div>
            <div>
            <h1 className="font-bold text-white mb-3">Office Location</h1>
            <p className="text-gray-500">House 9, Road 15,<br /> Uttara, Dhaka</p>
            </div>
          </div>

          <div className="flex gap-5 my-10 md:my-0">
          <div className="bg-primary-black flex justify-center items-center rounded-full w-14 h-14">
          <IoCallSharp className="text-primary-teal text-3xl " />
          </div>
            <div>
            <h1 className="font-bold text-white mb-3">Phone Number</h1>
            <p className="text-gray-500">+88011111111</p>
            <p className="text-gray-500">+88011111112</p>
            </div>
          </div>

          <div className="flex gap-5">
          <div className="bg-primary-black flex justify-center items-center rounded-full w-14 h-14">
          <MdEmail className="text-primary-teal text-3xl " />
          </div>
            <div>
            <h1 className="font-bold text-white mb-3">Email</h1>
            <p className="text-gray-500">mail.techtitan@gmail.com</p>
            <p className="text-gray-500">mail.techtitan@gmail.com</p>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col items-center text-center justify-center mt-24">
          <CustomTitle title={"RESEARCH TOPIC"} double></CustomTitle>
        </div>
        <div className="mb-14">
          <h2 className="text-3xl text-center font-barlow font-bold dark-blue">
            Have Any Questins Contact With Us Full Name
          </h2>
        </div>
        <Form className="w-11/12 mx-auto">
          <div className="md:flex gap-6">
            <div className="md:w-1/2">
            <Input  label="Full Name " type="text" />
            </div>
            <div className="mt-6 md:mt-0 md:w-1/2">
            <Input label="Email" type="email" />
            </div>
          </div>
          <div className="md:flex gap-6 my-6">
            <div className="md:w-1/2">
            <Input label="Phone" type="number" />
            </div>
            <div className="mt-6 md:mt-0 md:w-1/2">
            <Input label="Subject" type="text" />
            </div>
          </div>
          <div>
            <Textarea className="h-48" label="Message" type="text" />
          </div>
          <div className="text-center">
            <Button className="rounded-full mt-5" color="cyan">
              Send Message
            </Button>
          </div>
        </Form>
        <div
          className="h-60 bg-dark-blue mt-20 flex justify-center items-center"
          style={{
            backgroundImage:
              "url(https://laborex.smartdemowp.com/wp-content/uploads/2021/05/shape-61.png)",
          }}
        >
          <div
            className="w-11/12 mx-auto md:flex justify-between
          "
          >
            <h1 className="text-white text-4xl font-semibold">
              Accurate Product Testing <br /> by Expert Scientists
            </h1>
            <Button className="rounded-full h-10 mt-5" color="cyan">
              Book Free Sampling Here
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
