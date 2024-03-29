import { Input, Option, Select, Typography } from "@material-tailwind/react";
import CustomTitle from "../../../components/CustomTitle/CustomTitle";
import { useState } from "react";
import { FaMagnifyingGlass, } from "react-icons/fa6";
import StuffDetailCard from "../../../components/stuffDetailCard/StuffDetailCard";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../lib/hooks/useAxiosPublic";
import useApiLink from "../../../lib/hooks/useApiLink";

const FilterDoctor = () => {
  const axiosPublic = useAxiosPublic()
  const apiLink = useApiLink()
  const [doctorsData, setDoctorsData] = useState()

  const [displayName, setDisplayName] = useState([]);

  const { data: doctors, refetch, isLoading } = useQuery({
    queryKey: ['allDoctors'],
    queryFn: async () => {
      const allDoctors = await axiosPublic.get(`${apiLink}/doctors`)
      setDisplayName(allDoctors.data);
      //console.log()
      return allDoctors.data
    }
  })

  // console.log(data)

  const handleTitleChange = (e) => {
    if (e.currentTarget.value === "A - Z") {
      const sortedData = doctors
        .slice()
        .sort((a, b) => a.title.localeCompare(b.title));
      setDoctorsData(sortedData);
      // console.log(sortedData)
    } else if (e.currentTarget.value === "Z - A") {
      const sortedData = doctors
        .slice()
        .sort((a, b) => b.title.localeCompare(a.title));
      setDoctorsData(sortedData);
    }
  };

  // console.log(doctors)

  const handleNameSearch = (searchName) => {
    if (searchName === ' ') {
      setDisplayName(displayName);
      return;
    }
    const filterBySearch = doctors.filter((item) => {
      if (item.name.toLowerCase()
        .includes(searchName.toLowerCase())) {
        return item;
      }
      else {
        return setDisplayName(displayName);
      }
    })
    setDisplayName(filterBySearch);
    // console.log(searchName);
  }

  const handleCategorySearch = (searchName) => {

    if (searchName === ' ') {
      setDisplayName(displayName);
      return;
    }
    const filterBySearch = doctors.filter((item) => {
      if (item?.health_category?.toLowerCase()
        .includes(searchName.toLowerCase())) {
        return item;
      }
      else {
        return setDisplayName(displayName);
      }
    })
    setDisplayName(filterBySearch);
  }

  // setDisplayName(filterBySearch)
  // // console.log(searchName);
  // }


  return (
    <div>
      <div className="mt-20 mb-10 flex justify-center items-center flex-col">
        <CustomTitle title={"The doctors"} double></CustomTitle>
        <Typography variant="h2" className="text-black">
          Search or filter the doctors ({displayName?.length})
        </Typography>
      </div>
      {/* Filter */}
      <div>
        <form>
          <div className="flex items-center flex-col justify-center gap-5 md:flex-row mb-10 px-2">
            {/* <div className="w-[200px]">
              <Select onChange={handleTitleChange} color="teal" label="Sort by name" defaultValue={"A - Z"}>
                <Option value={"A - Z"}>A - Z</Option>
                <Option value={"Z - A"}>Z - A</Option>
              </Select>
            </div> */}

            <div className="w-[200px]">
              <Select onChange={handleCategorySearch} label="Select Category" color="teal">
                <Option value="Pediatrics">Pediatrics</Option>
                <Option value="Psychiatry">Psychiatry</Option>
                <Option value="G_physician">G_physician</Option>
                <Option value="Dermatology">Dermatology</Option>
                <Option value="StomachDigestion">StomachDigestion</Option>
                <Option value="Urology">Urology</Option>
              </Select>
            </div>
            <div className="w-[200px]">
              <Input
                color="teal"
                id="searchId"
                label="Search by name"
                onChange={handleNameSearch}
                icon={
                  <label htmlFor="searchId">
                    <FaMagnifyingGlass className="cursor-pointer"></FaMagnifyingGlass>
                  </label>
                }
              />
            </div>
          </div>
        </form>

        {/*  Doctors */}
        <div className="grid justify-center items-center grid-cols-1 p-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
          {isLoading ?
            <div className="w-full h-screen flex justify-center items-center"> <span className="loading loading-dots loading-lg"></span></div> :
            displayName?.map((doctor, idx) => <StuffDetailCard key={idx} doctor={doctor}></StuffDetailCard>)
          }
        </div>

        <div>
          <div className="text-center mb-10 mx-2">
            <nav aria-label="Page navigation example">
              <ul className="inline-flex -space-x-px text-base h-10">
                <li>
                  <button className="flex items-center  text-2xl  justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    &#171;
                  </button>
                </li>
                <li>
                  <button
                    aria-current="page"
                    className="flex items-center justify-center px-4 h-10 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                  >
                    1
                  </button>
                </li>
                {/* <li>
                  <button className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    1
                  </button>
                </li>
                <li>
                  <button className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    2
                  </button>
                </li> */}


                <li>
                  <a
                    href="#"
                    className="flex text-2xl items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    &#187;
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterDoctor;
