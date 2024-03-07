import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Card, Typography, Button } from "@material-tailwind/react";
import DashboardHeading from "../../../components/DashboardHeading/DashboardHeading";
import { Link } from "react-router-dom";
import useApiLink from "../../../lib/hooks/useApiLink";

const DoctorApproval = () => {
  const [doctor, setDoctor] = useState([]);
  const TABLE_HEAD = ["Name", "Email", "Education", "Registration", "Action"];

  const apiLink = useApiLink()


  const { data: doctorDetails = [], refetch } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      const res = await fetch(
        `${apiLink}/doctorsRequest`
      );
      const doctor = await res.json();
      // console.log(doctor);
      return doctor;
    },
  });

  return (
    <>
      <DashboardHeading title="Validate Healthcare Professionals">
        Registration Request from Doctors
      </DashboardHeading>
      <Card className="w-full mx-auto max-w-7xl overflow-auto">
        <table className="w-full min-w-max table-auto text-center font-barlow">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-[#BBE8E6] p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {doctorDetails.map(
              ({ _id, name, email, education, registration }, index) => {
                const isLast = index === doctorDetails.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr className="font-barlow" key={name}>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {name}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {email}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {education}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {registration}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Link
                        to={`/dashboard/doctorDetail/${_id}`}
                        className="btn btn-outline btn-sm btn-primary"
                      >
                        See Details
                      </Link>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </Card>
    </>
  );
};

export default DoctorApproval;
