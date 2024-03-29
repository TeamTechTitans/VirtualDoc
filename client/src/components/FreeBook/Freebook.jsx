import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Freebook = () => {
  return (
    <div>
      <div
        className="h-60 bg-dark-blue mt-20 flex justify-center items-center"
        style={{
          backgroundImage:
            "url(https://laborex.smartdemowp.com/wp-content/uploads/2021/05/shape-61.png)",
        }}
      >
        <div
          className="w-11/12 container mx-auto md:flex justify-between
          "
        >
          <h1 className="text-white text-4xl font-semibold">
            Accurate Product Testing <br /> by Expert Scientists
          </h1>
          <Link to='/appointment'>
          <Button className="rounded-full h-10 mt-5" color="cyan">
            Book Free Sampling Here
          </Button>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Freebook;
