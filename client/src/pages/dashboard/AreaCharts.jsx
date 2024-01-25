import { curveCardinal } from 'd3-shape';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  {
    name: "Jan",
    uv: 1200,
  },
  {
    name: "Mar",
    uv: 1500,

  },
  {
    name: "May",
    uv: 1200,

  },
  {
    name: "jun",
    uv: 1780,

  },
  {
    name: "Aug",
    uv: 1690,

  },
  {
    name: "Oct",
    uv: 1790,

  },
  {
    name: "Dec",
    uv: 1970,

  }
];
const cardinal = curveCardinal.tension(0.2);


const AreaCharts = () => {
  return (
    <div className="h-72 bg-white p-5 rounded-lg shadow-md">
    <div>
      <h1 className="font-bold text-gray-600">Appointment</h1>
      <hr className="my-3 h-0.5 bg-gray-300"/>
    </div>
    <div className="flex justify-center my-5">
    <AreaChart
      width={400}
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
      <Area
        type="monotone"
        dataKey="uv"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.3}
      />
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