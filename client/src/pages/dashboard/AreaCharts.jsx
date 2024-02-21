import { curveCardinal } from 'd3-shape';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';



const cardinal = curveCardinal.tension(0.2);


const AreaCharts = ({appointments}) => {
  // appointments.map(item => item.date)
  const monthJan = appointments?.filter((month) => month?.date?.slice(5,7) === "01")
  const monthFeb = appointments?.filter((month) => month?.date?.slice(5,7) === "02")
  const monthMar = appointments?.filter((month) => month?.date?.slice(5,7) === "03")
  const monthApr = appointments?.filter((month) => month?.date?.slice(5,7) === "04")
  const monthMay = appointments?.filter((month) => month?.date?.slice(5,7) === "05")
  const monthJun = appointments?.filter((month) => month?.date?.slice(5,7) === "06")
  const monthJul = appointments?.filter((month) => month?.date?.slice(5,7) === "07")
  const monthAug = appointments?.filter((month) => month?.date?.slice(5,7) === "08")
  const monthSep = appointments?.filter((month) => month?.date?.slice(5,7) === "09")
  const monthOct = appointments?.filter((month) => month?.date?.slice(5,7) === "10")
  const monthNov = appointments?.filter((month) => month?.date?.slice(5,7) === "11")
  const monthDec = appointments?.filter((month) => month?.date?.slice(5,7) === "12")
  // const monthDec = appointments?.filter((month) => console.log(month?.date?.slice(5,7) === "12"))
  // console.log(monthName);

  const data = [
  {
    name: "Jan",
    uv: monthJan.length,
  },
  {
    name: "Feb",
    uv: monthFeb.length,
  },
  {
    name: "Mar",
    uv: monthMar.length,
  },
  {
    name: "Apr",
    uv: monthApr.length,
  },
  {
    name: "May",
    uv: monthMay.length,
  },
  {
    name: "Jun",
    uv: monthJun.length,
  },
  {
    name: "Jul",
    uv: monthJul.length,
  },
  {
    name: "Aug",
    uv: monthAug.length,

  },
  {
    name: "Sep",
    uv: monthSep.length,

  },
  {
    name: "Oct",
    uv: monthOct.length,

  },
  {
    name: "Nov",
    uv: monthNov.length,

  },
  {
    name: "Dec",
    uv: monthDec.length,

  },
];


  return (
    <div className="h-72 bg-white p-5 rounded-lg shadow-md">
    <div>
      <h1 className="font-bold text-gray-600">Appointment</h1>
      <hr className="my-3 h-0.5 bg-gray-300"/>
    </div>
    <div className="flex justify-center my-5">
    <AreaChart
      width={600}
      height={200}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      {/* <Area
        type="monotone"
        dataKey="uv"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.3}
      /> */}
      <Area
        type={cardinal}
        dataKey="uv"
        stroke="#82ca9d"
        fill="#82ca9d"
        fillOpacity={0.3}
      />
    </AreaChart>
    </div>
  </div>
  );
};

export default AreaCharts;