import React from "react";
import Card from "./Card";

const Cards = () => {
  return (
    <div className="my-3 flex gap-x-3">
   
      <Card name="Completed" number={20} />
      <Card name="Halted" number={12} />
    </div>
  );
};

export default Cards;
