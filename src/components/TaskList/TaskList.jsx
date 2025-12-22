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
          className="relative noScroll shrink-0 h-68 sm:w-68 w-56 rounded-xl overflow-hidden"
          style={{ backgroundColor: getBackgroundColor(index) }}
        >
          <div 
            className="sticky top-0 z-10 flex justify-between items-baseline p-3"
            style={{ backgroundColor: getBackgroundColor(index) }}
          >
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
          
          <div className="noScroll overflow-auto h-full pb-14 md:pb-20">
            <h2 className="px-4 text-xl font-semibold">{task.title}</h2>
            <p className="text-sm px-4">{task.description}</p>
            
            {/* Buttons inline on mobile */}
            <div className="flex md:hidden justify-between items-center p-2 mt-4">
              <button className="bg-green-500 py-1 px-2 text-xs font-semibold rounded m-1 active:scale-95">
                Mark as Completed
              </button>
              <button className="bg-red-500 py-1 px-2 text-xs font-semibold rounded m-1 active:scale-95">
                Mark as Failed
              </button>
            </div>
          </div>

          {/* Buttons fixed at bottom on desktop */}
          <div className="hidden md:flex absolute bottom-0 left-0 right-0 p-2 justify-between items-center">
            <button className="bg-green-500 py-1 px-2 text-sm font-semibold rounded m-1 active:scale-95 cursor-pointer">
              Mark as Completed
            </button>
            <button className="bg-red-500 py-1 px-2 text-sm font-semibold rounded m-1 active:scale-95 cursor-pointer">
              Mark as Failed
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
