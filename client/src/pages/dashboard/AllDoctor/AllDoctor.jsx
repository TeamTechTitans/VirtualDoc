import { useQuery } from "@tanstack/react-query";
import { Button, Card, Typography } from "@material-tailwind/react";
import ManageModal from "./ManageModal";
import useApiLink from "../../../lib/hooks/useApiLink";
import { useState } from "react";
import DashboardHeading from "../../../components/DashboardHeading/DashboardHeading";
import useAxiosPublic from "../../../lib/hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AllDoctor = () => {
  const [doctorData, setDoctorData] = useState([]);
  const TABLE_HEAD = ["Personal Info", "Education", "Extra Info", "Action"];
  const apiLink = useApiLink();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const { data: doctorDetails = [], refetch } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      const res = await fetch(`${apiLink}/doctors`);
      const doctors = await res.json();
      return doctors;
    },
  });

  const classes = "p-4 border-b border-blue-gray-50";
  const handleDeleteDoctor = (id) => {
    // console.log(id)
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete this doctor from database?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const deleteRes = await axiosPublic.delete(`/doctor/${id}`);
        // console.log(deleteRes);
        if (deleteRes) {
          Swal.fire(
            "Deleted!",
            "Doctor has been removed from database",
            "success"
          );
          navigate("/dashboard/allDoctor");
          refetch();
        }
      }
    });
  };
  refetch();
  //  Manage Modal
  const [open, setOpen] = useState(false);
  const handleOpen = (doctor) => {
    // setDoctorData(null);
    setOpen(!open);
    refetch();
    if (doctor) {
      setDoctorData(doctor);
      refetch()
    }
    refetch()
  };
  return (
    <div className="flex p-2 flex-col">
      <DashboardHeading title="All Doctor">Manage All Doctor</DashboardHeading>
      <Card className="w-full max-w-7xl overflow-auto">
        <table className="w-full table-auto  font-barlow">
          <thead>
            <tr className="">
              {TABLE_HEAD.map((head, idx) => (
                <th
                  key={idx}
                  className="border-b border-blue-gray-100 bg-secondary-teal p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal text-left leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {doctorDetails?.map((doctor, index) => <tr className="font-barlow" key={index}>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray">
                    <span className="font-semibold">Name: </span>
                    {doctor?.name}
                    <br />
                    <span className="font-semibold">Email: </span>
                    {doctor?.email}
                    <br />
                    <span className="font-semibold">Blood Group: </span>
                    {doctor?.blood_group}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray">
                    {doctor?.education}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    //   className="text-center"
                  >
                    <span className="font-semibold">Location: </span>
                    {doctor?.loc}
                    <br />
                    <span className="font-semibold">Category: </span>
                    {doctor?.health_category}
                    <br />
                    <span className="font-semibold">Registration No: </span>
                    {doctor?.registration}
                    <br />
                  </Typography>
                </td>
                <td className={classes}>
                  <Button
                    color="blue"
                    onClick={() => handleOpen(doctor)}
                    className="px-2 py-1 rounded-none mr-2 normal-case"
                  >
                    Manage
                  </Button>

                  <Button
                    onClick={() => handleDeleteDoctor(doctor._id)}
                    className="px-2 py-1 rounded-none normal-case"
                    color="red"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </Card>
      <ManageModal
        handleOpen={handleOpen}
        open={open}
        doctor={doctorData}
        refetch={refetch}
      ></ManageModal>
    </div>
  );
};

export default AllDoctor;
