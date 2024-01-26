import { Button, Card, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";



const Appoinment = () => {
  const [appoinment,setAppoinment]=useState([]);
  const TABLE_HEAD = ["Name", "Date", "Time", "Treatment","Payment"];

  useEffect(()=>{
    fetch('../../../../public/appoinment.json')
    .then(res=>res.json())
    .then(data=>setAppoinment(data))
  },[])

  return (
    <div className="">
      <Card className="h-full lg:w-[50rem] w-11/12 mx-auto my-6 ml-6">
      <table className="table-auto text-center font-barlow">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-gray-200  p-4"
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
          {appoinment.map(({ name, date, time, treatment,pay }, index) => {
            const isLast = index === appoinment.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr className="font-barlow" key={name}>
                <td className={classes}>
                      <div className="flex items-center gap-3">
                      <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold mx-3"
                          >
                            {index+1}
                          </Typography>
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {name}
                          </Typography>
                        </div>
                      </div>
                    </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {date}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {time}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {treatment}
                  </Typography>
                </td>
                <td className={classes}>
                    <Button className="bg-secondary-blue" size="sm">Pay</Button>
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

export default Appoinment;