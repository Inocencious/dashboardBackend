import {
    RadialBar,
    RadialBarChart,
    Legend,
    ResponsiveContainer,
    Text,
  } from "recharts";
import { useData } from "../context/DataContext";

  const SavingGoal = () => {
    const { data } = useData()
    return (
      <ResponsiveContainer height={300} width="100%">
        <RadialBarChart
          margin={{ bottom: 50 }}
          innerRadius="10%"
          outerRadius="80%"
          data={data?.savingGoals}
          startAngle={180}
          endAngle={-180}
        >
          <RadialBar
            label={{ fill: "#666", position: "insideStart" }}
            background
            dataKey="percent"
          />
          <Legend verticalAlign="bottom" height={15} iconSize={5} />
          <Text scaleToFit={true}></Text>
        </RadialBarChart>
      </ResponsiveContainer>
    );
  };
  
  export default SavingGoal;
  