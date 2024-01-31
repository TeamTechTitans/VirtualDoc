import { Card, Typography,Button } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const AllUsers = () => {
    const [user,setUser]=useState([]);
    const TABLE_HEAD = ["Name", "Email", "location", "Blood-Group","Action"];

    // useEffect(()=>{
    //     fetch('http://localhost:5000/users')
    //     .then(res=>res.json())
    //     .then(data=>setUser(data))
    // },[])

    const { data:userDetails=[] } = useQuery({
      queryKey: ['users'],
      queryFn: async () => {
        const res = await fetch("http://localhost:5000/users");
        const user = await res.json();
        console.log(user);
        return user;
      },
    });

    // const { data } = useQuery({
    //   queryKey: ['repoData'],
    //   queryFn: () =>
    //     fetch('http://localhost:5000/users').then((res) =>
    //       res.json(),
    //     ),
    // })

    return (<>
      <Card className="w-full max-w-7xl overflow-scroll">
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
  <tbody >
    {userDetails.map(({ name, email,loc, blood_group }, index) => {
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
              {loc}
            </Typography>
          </td>
          <td className={classes}>
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              {blood_group}
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
</>);
};

export default AllUsers;