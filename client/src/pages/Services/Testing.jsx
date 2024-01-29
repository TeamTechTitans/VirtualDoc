import { Button } from "@material-tailwind/react";
import React from "react";

const Testing = () => {
  return (
    <div className="py-28 bg-[#06194b]">
      <div className="container mx-auto flex justify-around items-center ">
        <h1 className="text-4xl text-white font-bold ">
          Accurate Product Testing <br></br> by Expert Scientists
        </h1>
        <Button className="text-white font-bold text-right hover:bg-black bg-primary-teal">
          Book Free Samoling Here
        </Button>
      </div>
    </div>
  );
};

export default Testing;
