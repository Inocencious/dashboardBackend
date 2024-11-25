import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useData } from "../context/DataContext";

const SavingExpenseChart = () => {
  const { data } = useData();

return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart margin={{ top: 50, right: 20 }} data={data?.monthlyData}>
        <defs>
          <linearGradient id="colorexpense" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#f60100" stopOpacity={0.5} />
            <stop offset="95%" stopColor="#f60100" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorsaving" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.5} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="month" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="expense"
          stroke="#f60100"
          fillOpacity={1}
          fill="url(#colorexpense)"
        />
        <Area
          type="monotone"
          dataKey="saving"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorsaving)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default SavingExpenseChart;
