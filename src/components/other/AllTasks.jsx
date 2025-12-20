import React from "react";

const AllTasks = () => {
  return (
    <div>
      <h2 className="text-xl md:text-2xl flex justify-center mt-8 mb-5 font-bold">All Tasks</h2>
      <div className="bg-[#1c1c1c] h-50 w-full mb-5 flex justify-between gap-5 flex-wrap rounded-md overflow-auto noScroll">
        <div className="bg-red-400 px-5 py-2 rounded-md w-full md:w-1/5">
          <h2>BPS</h2>
          <h2>BPS</h2>
          <h2>BPS</h2>
          <h2>BPS</h2>
          <h2>BPS</h2>
        </div>
        <div className="bg-blue-400 px-5 py-2 rounded-md w-full md:w-1/5">
          <h2>BPS</h2>
          <h2>BPS</h2>
          <h2>BPS</h2>
        </div>
        <div className="bg-green-400 px-5 py-2 rounded-md w-full md:w-1/5">
          <h2>BPS</h2>
          <h2>BPS</h2>
          <h2>BPS</h2>
        </div>
        <div className="bg-yellow-400 px-5 py-2 rounded-md w-full md:w-1/5">
          <h2>BPS</h2>
          <h2>BPS</h2>
          <h2>BPS</h2>
        </div>
        <div className="bg-red-400 px-5 py-2 rounded-md w-full md:w-1/5">
          <h2>BPS</h2>
          <h2>BPS</h2>
          <h2>BPS</h2>
        </div>
      </div>
    </div>
  );
};

export default AllTasks;
