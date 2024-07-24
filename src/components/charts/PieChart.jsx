import React from "react";
import BasicPie from "./BasicPie";

const PieChart = () => {
  return (
    <div className="bg-[#f1f1f1] w-auto h-[400px] flex flex-col p-2">
      <h3>Total Bug Status %</h3>
      <BasicPie />
    </div>
  );
};

export default PieChart;
