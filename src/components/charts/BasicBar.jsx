import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const chartSettings = {
  yAxis: [
    {
      label: "No of bugs",
      disableTicks: true,
    },
  ],
  xAxis: [
    {
      scaleType: "band",
      data: ["Project 1", "Project 2", "Project 3"],
    },
  ],
  width: 500,
  height: 400,
};

export default function CustomLabels() {
  return (
    <BarChart
      colors={["#72ff5b", "#ffc328", "#933eff", "#ff6868"]}
      series={[
        { data: [6, 4, 5], stack: "A", label: "Completed" },
        { data: [12, 8, 9], stack: "A", label: "Todo" },
        { data: [12, 8, 12], stack: "A", label: "In Progress" },
        { data: [, ,], stack: "A", label: "Halted" }, // Placeholder data for "Halted"
      ]}
      barLabel={(item) => {
        return item.value?.toString();
      }}
      {...chartSettings}
    />
  );
}
