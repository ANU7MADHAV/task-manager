import React from "react";

const Card = ({ name, number }) => {
  return (
    <div className="bg-[#f1f1f1] shadow-md p-2 w-[295px]  h-auto">
      <h3 className="text-xs">{name}</h3>
      <section className="py-3 gap-x-1 flex">
        <h2 className="font-medium text-3xl">{number}</h2>
        <p className="text-sm font-light flex items-end pb-0.5">Tasks</p>
      </section>
    </div>
  );
};

export default Card;
