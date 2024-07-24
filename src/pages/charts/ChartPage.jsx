import React from "react";
// import Cards from "../../components/charts/Cards";
// import PieChart from "../../components/charts/PieChart";
// import CustomLabels from "../../components/charts/BasicBar";
// import BarChart from "../../components/charts/BarChart";
import Card from "../../components/charts/Card";
import BarChart from "../../components/charts/BarChart";
import PieChart from "../../components/charts/PieChart";

const ChartPage = () => {
  return (
    <div className="flex gap-4">
      <section className="grid grid-cols-1 flex-1 gap-4">
        <section className="flex gap-4">
          <Card name="Todo" number={12} />
          <Card name="In Progress" number={2} />
        </section>
        <BarChart />
      </section>
      <section className="flex-1 grid gap-4 grid-cols-1">
        <section className="flex gap-4">
          <Card name="Completed" number={20} />
          <Card name="Halted" number={12} />
        </section>
        <PieChart />
      </section>
    
    </div>
  );
};

export default ChartPage;
