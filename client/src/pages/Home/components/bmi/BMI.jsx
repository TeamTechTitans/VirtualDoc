import React, { useState } from "react";
import { Input, Button, Typography } from "@material-tailwind/react";
import CustomTitle from "../../../../components/CustomTitle/CustomTitle";
import SiteHeader from "../../../../components/siteHeader/SiteHeader";
import DashboardHeading from "../../../../components/DashboardHeading/DashboardHeading";

const BMI = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBMI] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const calculateBMI = () => {
    if (!height || !weight) {
      setErrorMessage("Please provide both height and weight.");
      return;
    }
    const heightMeters = height / 100; // Convert height to meters
    const bmiValue = weight / (heightMeters * heightMeters); // BMI formula
    setBMI(bmiValue.toFixed(2)); // Round to 2 decimal places
    setErrorMessage("");
  };

  const getBMICategory = (bmi) => {
    if (bmi < 18.5) {
      return "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
      return "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
      return "Overweight";
    } else {
      return "Obese";
    }
  };

  return (

    <div className="my-28">
      <div className="container text-justify  mx-auto flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2 px-4 md:mr-20 text-justify">
          <CustomTitle title="BMI Calculator" double="Calculate"></CustomTitle>
          <Typography className="mb-5 font-bold" variant="h2">
            Calculate Your BMI
          </Typography>
          <p className="mb-2">
            BMI is a measure of body fat based on height and weight. It
            categorizes individuals into different weight categories, providing
            an indication of health risks.
          </p>
          <p className="mb-4">
            <span className="font-semibold">Underweight: </span>BMI less than
            18.5. Risk factor for malnutrition and osteoporosis.
          </p>
          <p className="mb-4">
            <span className="font-semibold">Normal weight: </span>BMI between
            18.5 and 24.9. Associated with lowest risk of health problems.
          </p>
          <p className="mb-4">
            <span className="font-semibold">Overweight: </span>BMI between 25
            and 29.9. Increased risk of chronic conditions like heart disease.
          </p>
          <p className="mb-4">
            <span className="font-semibold">Obese: </span>BMI 30 or higher.
            Significantly increased risk of serious health conditions.
          </p>
        </div>
        <div className="md:w-1/2 w-full px-4">
          <div className="form-control">
            <label className="label">
              <span className="leading-none text-xl font-bold">Height</span>
            </label>
            <Input
              type="number"
              label="Height (cm)"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              color="teal"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="leading-none mt-5 text-xl font-bold">Weight (kg)</span>
            </label>
            <Input
              type="number"
              label="Weight (kg)"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              color="teal"
            />
          </div>

          {errorMessage && (
            <div className="text-red-600 mb-4">{errorMessage}</div>
          )}
          <div className="w-full">
            <Button onClick={calculateBMI} className="my-2 bg-secondary-blue">
              Calculate BMI
            </Button>
          </div>

          {bmi !== null && (
            <div className="mt-4">
              <p>
                <span className="font-semibold">Your BMI is: </span>
                {bmi}
              </p>
              <p>
                <span className="font-semibold">Your BMI category is: </span>
                {getBMICategory(parseFloat(bmi))}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BMI;
