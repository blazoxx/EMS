import React from "react";

const TaskList = ({ data }) => {
  const getBackgroundColor = (index) => {
    if (index % 4 === 0) return "#FE6466";
    if (index % 4 === 1) return "#51A2FE";
    if (index % 4 === 2) return "#04DE72";
    return "#ffc644";
  };

  return (
    <div
      id="tasklist"
      className="noScroll h-[50%] w-full md:mt-20 mt-2 flex flex-nowrap justify-start items-center gap-5 overflow-x-auto "
    >
      {data.tasks.map((task, index) => (
        <div
          key={index}
          className="noScroll shrink-0 h-68 sm:w-68 w-56 rounded-xl overflow-auto"
          style={{ backgroundColor: getBackgroundColor(index) }}
        >
          <div className="flex justify-between items-baseline p-3">
            <h2
              className="px-3 py-1 rounded font-semibold text-sm"
              style={{
                backgroundColor:
                  task.priority === "High"
                    ? "red"
                    : task.priority === "Medium"
                    ? "orange"
                    : "#1fff80",
              }}
            >
              {task.priority}
            </h2>
            <h3 className="text-sm font-semibold">{task.date}</h3>
          </div>
          <h2 className="mt-4 px-4 text-xl font-semibold">{task.title}</h2>
          <p className="text-sm px-4">{task.description}</p>

          <div className="flex p-2 justify-between items-center">
            <button className="bg-green-500 py-1 px-2 text-xs font-semibold rounded m-1 md:mt-5 active:scale-95">
              Mark as Completed
            </button>
            <button className="bg-red-500 py-1 px-2 text-xs font-semibold rounded m-1 md:mt-5 active:scale-95">
              Mark as Failed
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
