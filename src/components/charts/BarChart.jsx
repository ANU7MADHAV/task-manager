import React from "react";
import CustomLabels from "./BasicBar";

const BarChart = () => {
  return (
    <div className="bg-[#f1f1f1] w-auto h-[400px] flex flex-col p-2">
      <h3>Project Wise Bug Status</h3>
      <CustomLabels />
      <h3 className="flex justify-center">Projects</h3>
    </div>
  );
};

export default BarChart;
