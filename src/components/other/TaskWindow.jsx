import React from "react";

const TaskWindow = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap justify-between gap-5 screen mt-10 md:mt-20">
      <div className="w-[45%] rounded-xl py-6 px-9 bg-red-400">
        <h2 className="text-2xl font-bold">0</h2>
        <h3 className="md:text-xl text-sm whitespace-nowrap font-medium">New Task</h3>
      </div>
      <div className="w-[45%] rounded-xl py-6 px-9 bg-blue-400">
        <h2 className="text-2xl font-bold">0</h2>
        <h3 className="md:text-xl text-sm whitespace-nowrap font-medium">New Task</h3>
      </div>
      <div className="w-[45%] rounded-xl py-6 px-9 bg-green-400">
        <h2 className="text-2xl font-bold">0</h2>
        <h3 className="md:text-xl text-sm whitespace-nowrap font-medium">New Task</h3>
      </div>
      <div className="w-[45%] rounded-xl py-6 px-9 bg-yellow-400">
        <h2 className="text-2xl font-bold">0</h2>
        <h3 className="md:text-xl text-sm whitespace-nowrap font-medium">New Task</h3>
      </div>
    </div>
  );
};

export default TaskWindow;
