import { Cell, Pie, PieChart } from "recharts";


const COLORS = ["#E91E63", "#4CAF50", "#F9A825"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};


const PieCharts = ({allDoctor,allAppoinment,allUsers}) => {
  const data = [
    { name: "Doctor", value: allDoctor },
    { name: "Patient", value:  allUsers},
    { name: "Appointment", value:  allAppoinment},
  ];

  return (
    <div className="h-72 bg-white p-5 rounded-lg shadow-md">
      <div>
        <h1 className="font-bold text-gray-600">Patients</h1>
        <hr className="my-3 h-0.5 bg-gray-300"/>
      </div>
      <div className="flex justify-center my-5">
        <PieChart width={180} height={180}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) =><Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            )}
          </Pie>
        </PieChart>
      </div>
    </div>
  );
};

export default PieCharts;
