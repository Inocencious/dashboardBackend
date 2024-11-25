import { ResponsiveContainer, LineChart, Line } from "recharts";
import { useData } from "../context/DataContext";


const TotalBalance = () => {
    const { data } = useData();

  return (
    <ResponsiveContainer width="100%" height={100}>
      <LineChart data={data?.monthlyData}>
        <Line
          dot={false}
          type="monotone"
          dataKey="cumulativeSaving"
          stroke="#008000"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default TotalBalance;
