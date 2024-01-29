import { Button, Card, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import DashboardHeading from "../../../components/DashboardHeading/DashboardHeading";

const AllUsers = () => {
  const [user, setUser] = useState([]);
  const TABLE_HEAD = ["Name", "Email", "location", "Blood-Group", "Action"];

  useEffect(() => {
    fetch('/allUsers.json')
      .then(res => res.json())
      .then(data => setUser(data))
  }, [])

  return (
    <div className="pt-10 px-5">
      <DashboardHeading title="All Users">Manage All Users</DashboardHeading>
      <Card className="h-full w-full overflow-auto">
        <table className="w-full min-w-max table-auto text-center font-barlow">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-light-teal p-4"
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
            {user.map(({ name, email, location, bloodgroup }, index) => {
              const isLast = index === user.length - 1;
              const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

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
                      {location}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {bloodgroup}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Button className="mr-2" color="red">Delete</Button>
                    <Button color="blue">Edit</Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default AllUsers;