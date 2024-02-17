import { Card, Typography } from "@material-tailwind/react";
import DashboardHeading from "../../../components/DashboardHeading/DashboardHeading";
import useAuth from "../../../lib/hooks/useAuth";
import useAxiosPublic from "../../../lib/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const DoctorAppointment = () => {
  const TABLE_HEAD = ["Info", "Date & Time", "Treatment", "Video Call"];
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();

  const { data: appointments = [] } = useQuery({
    queryKey: ['appointments', user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/appointment/doctor/${user?.email}`)
      return res.data;
    }
  })

  return (
    <div className="">
    <DashboardHeading title="Appointments">Manage Appointments</DashboardHeading>
    <Card className="h-full max-w-7xl mx-auto overflow-auto my-6">
      <table className="table-auto pr-5 text-center font-barlow">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-light-teal  p-4"
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
        <tbody >
          {appointments.map(({ patient_name, _id,patient_age, date,health_category, timing_slot, description, payment, paidStatus }, index) => {
            const isLast = index === appointments.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

            return (
              <tr className="font-barlow" key={_id}>
                <td className={classes}>
                  <div className="flex items-center gap-3 font-bold mx-3">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-bold mx-3"
                    >
                      {index + 1}
                    </Typography>
                    <div className="flex flex-col">
                      <Typography
                        variant="small"
                        color="blue-gray"
                      >
                        {patient_name}
                      </Typography>
                    </div>
                  </div>
                </td>
                <td  className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"

                  >
                    {date} <br /> {timing_slot}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"

                  >
                    {description}
                  </Typography>
                </td>
                <td className={classes}>
                  {
                    paidStatus ?
                      <Link to='/dashboard/videocall'><FcVideoCall className="mx-auto text-3xl" /></Link>
                      :
                      <button onClick={() => handleModalForPayment()}><FcVideoCall className="mx-auto opacity-30 text-3xl" /></button>
                  }
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  </div>
  )
};

export default DoctorAppointment;
