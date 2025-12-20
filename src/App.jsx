import React, { useEffect } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { setLocalStorage } from "./utils/localStorage";
import { getLocalStorage } from "./utils/localStorage";

const App = () => {

  useEffect(() => {
    setLocalStorage();
    getLocalStorage();
  }, []);

  localStorage.clear();

  return (
    <div className="text-white w-full overflow-x-hidden">
      <>
        <Login />
        {/* <EmployeeDashboard /> */}
        <AdminDashboard />
      </>
    </div>
  );
};

export default App;
