import { ResponsiveContainer, Line, LineChart } from "recharts";
import { useData } from "../context/DataContext";

const SavingsOverTime = () => {
  const { data } = useData();
  return (
    <ResponsiveContainer width="100%" height={100}>
      <LineChart data={data?.monthlyData}>
        <Line dot={false} type="monotone" dataKey="expense" stroke="#f60100" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SavingsOverTime;
