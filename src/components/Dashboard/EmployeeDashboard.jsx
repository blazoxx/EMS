import React from "react";
import Header from "../other/Header";
import TaskWindow from "../other/TaskWindow";
import TaskList from "../TaskList/TaskList";
import { useState } from "react";

const EmployeeDashboard = ({ data }) => {
  // console.log(data)
  // const [employeeData, setEmployeeData] = useState(data);

  // const handleTaskStatusChange = (taskId, newStatus) => {
  //   setEmployeeData((prev) => ({
  //     ...prev,
  //     tasks: prev.tasks.map((task) =>
  //       task.id === taskId ? { ...task, status: newStatus } : task
  //     ),
  //   }));
  // };

  // Usage
  

  return (
    <div className="bg-[#1c1c1c] h-screen md:p-10 p-5">
      <Header data={data} />
      <TaskWindow data={data} />
      <TaskList data={data} />
      {/* <TaskList data={employeeData} onTaskStatusChange={handleTaskStatusChange} />; */}
    </div>
  );
};

export default EmployeeDashboard;
