import React from "react";

const priority = "High";
const date = "Jun'25";

const TaskList = () => {
  return (
    <div
      id="tasklist"
      className="h-[50%] w-full md:mt-20 mt-10 py-5 flex flex-nowrap justify-start items-center gap-5 overflow-x-auto "
    >
      <div className="shrink-0 h-full md:w-80 w-68 bg-red-400 rounded-xl">
        <div className="flex justify-between items-baseline p-3">
          <h2 className="bg-red-600 px-3 py-1 rounded text-sm">{priority}</h2>
          <h3 className="text-sm">{date}</h3>
        </div>
        <h2 className="mt-5 p-3 text-xl font-semibold">Make a Youtube video</h2>
        <p className="text-sm mt-2 p-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
          delectus perferendis iste excepturi dolore aperiam.
        </p>
      </div>
      <div className="shrink-0 h-full md:w-80 w-68 bg-blue-400 rounded-xl">
        <div className="flex justify-between items-baseline p-3">
          <h2 className="bg-red-600 px-3 py-1 rounded text-sm">{priority}</h2>
          <h3 className="text-sm">{date}</h3>
        </div>
        <h2 className="mt-5 p-3 text-xl font-semibold">Make a Youtube video</h2>
        <p className="text-sm mt-2 p-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
          delectus perferendis iste excepturi dolore aperiam.
        </p>
      </div>
      <div className="shrink-0 h-full md:w-80 w-68 bg-green-400 rounded-xl">
        <div className="flex justify-between items-baseline p-3">
          <h2 className="bg-red-600 px-3 py-1 rounded text-sm">{priority}</h2>
          <h3 className="text-sm">{date}</h3>
        </div>
        <h2 className="mt-5 p-3 text-xl font-semibold">Make a Youtube video</h2>
        <p className="text-sm mt-2 p-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
          delectus perferendis iste excepturi dolore aperiam.
        </p>
      </div>
      <div className="shrink-0 h-full md:w-80 w-68 bg-yellow-400 rounded-xl">
        <div className="flex justify-between items-baseline p-3">
          <h2 className="bg-red-600 px-3 py-1 rounded text-sm">{priority}</h2>
          <h3 className="text-sm">{date}</h3>
        </div>
        <h2 className="mt-5 p-3 text-xl font-semibold">Make a Youtube video</h2>
        <p className="text-sm mt-2 p-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
          delectus perferendis iste excepturi dolore aperiam.
        </p>
      </div>
      <div className="shrink-0 h-full md:w-80 w-68 bg-red-400 rounded-xl">
        <div className="flex justify-between items-baseline p-3">
          <h2 className="bg-red-600 px-3 py-1 rounded text-sm">{priority}</h2>
          <h3 className="text-sm">{date}</h3>
        </div>
        <h2 className="mt-5 p-3 text-xl font-semibold">Make a Youtube video</h2>
        <p className="text-sm mt-2 p-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
          delectus perferendis iste excepturi dolore aperiam.
        </p>
      </div>
      <div className="shrink-0 h-full md:w-80 w-68 bg-blue-400 rounded-xl">
        <div className="flex justify-between items-baseline p-3">
          <h2 className="bg-red-600 px-3 py-1 rounded text-sm">{priority}</h2>
          <h3 className="text-sm">{date}</h3>
        </div>
        <h2 className="mt-5 p-3 text-xl font-semibold">Make a Youtube video</h2>
        <p className="text-sm mt-2 p-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
          delectus perferendis iste excepturi dolore aperiam.
        </p>
      </div>
    </div>
  );
};

export default TaskList;
