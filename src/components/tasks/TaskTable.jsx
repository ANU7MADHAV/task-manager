import React from "react";
import { useSelector } from "react-redux";

const TaskTable = () => {
  const tasks = useSelector((state) => state.form.value);

  return (
    <div className="flex w-full justify-center">
      <table className="table-auto w-full text-left">
        <thead>
          <tr className="bg-[#b6b6b6]">
            <th className="relative w-1/12 border-b border-gray-400 px-4 font-normal">
              <div className="absolute inset-0 bottom-[4px] top-[4px] border-r border-gray-500"></div>
              id
            </th>
            <th className="w-5/12 border-b border-gray-400 px-4 font-normal relative">
              <div className="absolute inset-0 top-[4px] bottom-[4px] border-r border-gray-500"></div>
              Task Description
            </th>
            <th className="w-2/12 border-b border-gray-400 px-4 font-normal relative">
              <div className="absolute inset-0 top-[4px] bottom-[4px] border-r border-gray-500"></div>
              Projects
            </th>
            <th className="w-2/12 border-b border-gray-400 px-4 font-normal relative">
              <div className="absolute inset-0 top-[4px] bottom-[4px] border-r border-gray-500"></div>
              Progress
            </th>
            <th className="w-2/12 border-b border-gray-400 px-4 font-normal">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-300 bg-[#d9d9d9]">
          {tasks.map((task) => (
            <tr key={task.id}>
              <td className="relative border-b border-r border-gray-300 px-4">
                <div className="absolute inset-0 border-r border-gray-500"></div>
                {task.id}
              </td>
              <td className="relative border-b border-r border-gray-300 px-4">
                <div className="absolute inset-0 border-r border-gray-500"></div>
                {task.task}
              </td>
              <td className="relative border-b border-r border-gray-300 px-4">
                <div className="absolute inset-0 border-r border-gray-500"></div>
                {task.project}
              </td>
              <td className="relative border-b border-r border-gray-300 px-4">
                <div className="absolute inset-0 border-r border-gray-500"></div>
                {task.progress}
              </td>
              <td className="border-b border-r border-gray-300 px-4">
                <div className="absolute inset-0 border-r border-gray-500"></div>
                {task.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskTable;
