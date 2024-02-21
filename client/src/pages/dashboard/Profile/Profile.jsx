import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./../../../provider/AuthProvider/AuthProvider";
import DashboardHeading from "../../../components/DashboardHeading/DashboardHeading";
import { FaEnvelope, FaLocationPin, FaPhone } from "react-icons/fa6";
import useApiLink from "../../../lib/hooks/useApiLink";

const Profile = () => {
  const apiLink = useApiLink();
  const { user } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(`${apiLink}/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  console.log(users);
  return (
    <div className="mt-20 container mx-5">
      <DashboardHeading title="Your Profile">
        {user?.displayName} this is your Profile
      </DashboardHeading>
      <h1 className="text-3xl text-[#142441] text-center font-bold py-10">
        Profile Details
      </h1>
      <div className="flex justify-around gap-5">
        {/* profile image */}
        <div>
          <img className="h-48 w-48  rounded-lg" src={users?.image} alt="" />
        </div>

        {/* details */}
        <div className="flex justify-center items-center text-[#142441] text-xl font-semibold  ">
          <div>
            <h1 className="">
              Name: <span className="text-[#1D5CCD]">{users?.name}</span>
            </h1>
            <p>
              Email: <span className="text-[#1D5CCD]">{users?.email}</span>
            </p>
            <p>
              Blood Group:
              <span className="text-[#1D5CCD]">{users?.blood_group}</span>
            </p>
            <p>
              Location: <span className="text-[#1D5CCD]">{users?.loc}</span>
            </p>
          </div>
        </div>
      </div>
      {/* location */}
      <div className="text-xl font-semibold text-[#1D5CCD] ml-5 flex justify-center items-center py-20">
        <div className="">
          <p className="flex items-center gap-2">
            <FaLocationPin className="text-primary-teal" />
            <span>House 9, Road 15, Uttara, Dhaka</span>
          </p>
          <p className="flex items-center gap-2">
            <FaPhone className="text-primary-teal" />
            <span>Call Us: +88011111111</span>
          </p>
          <p className="flex items-center gap-2">
            <FaEnvelope className="text-primary-teal" />
            <a href="mailto:mail.techtitan@gmail.com">
              mail.techtitan@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
