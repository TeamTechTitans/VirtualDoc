import { useEffect, useState } from "react";
import TitleDashboard from "./TitleDashboard";
const UserServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("article.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  console.log(services);
  return (
    <div className="py-10">
      <TitleDashboard
        title="Please Select a ServiceFF"
        subTitle="available service 30, january , 2024"
      ></TitleDashboard>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-2 gap-2 py-5">
          {services?.slice(0, 3)?.map((item) => (
            <div className="rounded shadow-2xl py-10 px-2">
              <div>
              
                <h1 className="text-lg font-medium ml-2 ">{item?.title}</h1>
              </div>
              <img className="rounded-xl py-5" src={item?.image} alt="" />
              <p className="px-2">{item?.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserServices;
