import React from "react";

// const getBackgroundColor = (index) => {
//   if (index === 0) return '#51A2FE';
//   if (index === 1) return '#FCC600';
//   if (index === 2) return '#04DE72';
//   return '#FE6466';
// };

const TaskWindow = ({ data }) => {
  return (
    <div className="sm:mt-15 md:mt-20 mt-8">
      <h1 className="font-semibold sm:text-xl">Total Tasks: {data.taskNumbers.total}</h1>
      <div className="flex flex-wrap md:flex-nowrap justify-between gap-5 screen mt-3 sm:mt-5  text-center">
        <div className="w-[45%] rounded-xl py-6 bg-red-400">
          <h2 className="text-2xl font-bold">{data.taskNumbers.active}</h2>
          <h3 className="px-2 sm:text-xl font-semibold text-sm whitespace-nowrap">
            Active Tasks
          </h3>
        </div>
        <div className="w-[45%] rounded-xl py-6 bg-blue-400">
          <h2 className="text-2xl font-bold">{data.taskNumbers.newTask}</h2>
          <h3 className="px-2 sm:text-xl font-semibold text-sm whitespace-nowrap">
            New Tasks
          </h3>
        </div>
        <div className="w-[45%] rounded-xl py-6 bg-green-400">
          <h2 className="text-2xl font-bold">{data.taskNumbers.completed}</h2>
          <h3 className="px-2 sm:text-xl font-semibold text-sm whitespace-nowrap">
            Completed Tasks
          </h3>
        </div>
        <div className="w-[45%] rounded-xl py-6 bg-yellow-400">
          <h2 className="text-2xl font-bold">{data.taskNumbers.failed}</h2>
          <h3 className="px-2 sm:text-xl font-semibold text-sm whitespace-nowrap">
            Failed Tasks
          </h3>
        </div>
      </div>
    </div>
  );
};

export default TaskWindow;
