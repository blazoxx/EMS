import React from "react";

const CreateTask = () => {
  return (
    <>
      <form className="bg-[#303030] flex flex-col md:flex-row md:flex-wrap w-full justify-center md:justify-between items-start mt-5 p-5 rounded-md mb-10">
        <div className="md:w-1/2 w-full">
          <div>
            <h3 className="text-gray-300 md:text-lg mb-0.5">Task Title</h3>
            <input
              className="outline-none text-sm py-2 px-3 md:w-11/12 w-full rounded bg-transparent border border-gray-400 mb-4"
              type="text"
              placeholder="Enter task title"
            />
          </div>
          <div>
            <h3 className="text-gray-300 md:text-lg mb-0.5">Date</h3>
            <input
              className="outline-none text-sm py-2 px-3 md:w-11/12 w-full rounded bg-transparent border border-gray-400 mb-4"
              type="date"
            />
          </div>
          <div>
            <h3 className="text-gray-300 md:text-lg mb-0.5">Asigned To</h3>
            <input
              className="outline-none text-sm py-2 px-3 md:w-11/12 w-full rounded bg-transparent border border-gray-400 mb-4"
              type="text"
              placeholder="Employee name"
            />
          </div>
          <div>
            <h3 className="text-gray-300 md:text-lg mb-0.5">Category</h3>
            <input
              className="outline-none text-sm py-2 px-3 md:w-11/12 w-full rounded bg-transparent border border-gray-400 mb-4"
              type="text"
              placeholder="design, dev, etc."
            />
          </div>
        </div>

        <div className="md:w-1/2 w-full">
          <h3 className="text-gray-300 md:text-lg mb-0.5">Description</h3>
          <textarea
            className="outline-none text-sm py-2 px-3 w-full md:w-11/12 h-40 md:h-60 rounded bg-transparent border border-gray-400 mb-4"
            name=""
            id=""
            placeholder="Description of work"
          ></textarea>
        </div>

        <button className="block mx-auto md:mt-10 bg-emerald-500 hover:bg-emerald-600 py-2 cursor-pointer px-5 text-lg rounded">
          Create Task
        </button>
      </form>
    </>
  );
};

export default CreateTask;
