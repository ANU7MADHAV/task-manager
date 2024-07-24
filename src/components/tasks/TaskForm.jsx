import React from "react";
import Form from "./Form";

const TaskForm = () => {
  return (
    <div className="flex justify-center">
      <div className="mx-4 w-[600px] bg-white p-8 shadow-lg">
        <h3 className="mx-4 my-3 text-2xl">Add New Task</h3>
        <Form />
      </div>
    </div>
  );
};

export default TaskForm;
