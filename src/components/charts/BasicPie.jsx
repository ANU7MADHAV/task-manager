import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { colors } from "@mui/material";

export default function BasicPie() {
  return (
    <PieChart
      colors={["#933eff", "#ff6868", "#72ff5b", "#ffc328"]}
      series={[
        {
          data: [
            { id: 0, value: 10, label: "Todo" },
            { id: 1, value: 15, label: "Halted" },
            { id: 2, value: 20, label: "Completed" },
            { id: 3, value: 20, label: "in Progress" },
          ],
        },
      ]}
      width={500}
      height={200}
    />
  );
}
