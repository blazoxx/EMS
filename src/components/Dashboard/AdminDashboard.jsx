import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTasks from "../other/AllTasks";
import AllTasks2 from "../experimental/AllTasks";

const AdminDashboard = () => {
  return (
    <div className="bg-[#1c1c1c] h-full w-full md:p-10 p-5">
      <Header />
      <CreateTask />
      {/* <AllTasks /> */}
      <AllTasks2 />
    </div>
  );
};

export default AdminDashboard;
