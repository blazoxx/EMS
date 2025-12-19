import React from "react";
import Header from "../other/Header";
import TaskWindow from "../other/TaskWindow";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = () => {
  return (
    <div className="bg-[#1c1c1c] h-screen md:p-10 p-5">
      <Header />
      <TaskWindow />
      <TaskList />
    </div>
  );
};

export default EmployeeDashboard;
