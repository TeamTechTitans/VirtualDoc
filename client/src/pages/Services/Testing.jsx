import { Button } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";

const Testing = () => {
  return (
    <div className="py-20 bg-[#06194b]">
      <div className="container mx-auto flex justify-around items-center ">
        <h1 className="text-4xl text-white font-bold ">
          Accurate Product Testing <br></br> by Expert Scientists
        </h1>
        <Link to='/appointment'>
        <Button className="text-white rounded-full normal-case font-bold text-right hover:bg-black bg-primary-teal">
          Book Free Samoling Here
        </Button>
        </Link>
      </div>
    </div>
  );
};

export default Testing;
