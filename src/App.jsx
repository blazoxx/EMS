import React, { use, useEffect, useState, useContext } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider.jsx";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const authData = useContext(AuthContext);

  // useEffect(() => {
  //   const loggedInUser = localStorage.getItem("loggedInUser");
  //   if (loggedInUser) {
  //     const parsedUser = JSON.parse(loggedInUser);
  //     setUser(parsedUser.role);
  //   }
  // }, [authData]);

  const handleLogin = (email, password) => {
    if (email === "admin@me.com" && password === "123") {
      setUser({role:"admin"});
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (
      authData &&
      authData.employeesData
    ) {
      const employee = authData.employeesData[0]?.employees.find(
        (emp) => emp.email === email && emp.password === password
      )
      if (employee) {
        setUser({role:"employee"});
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee" })
        );
      }
    } else {
      console.log("Invalid Credentials");
    }
  };

  // localStorage.clear()

  return (
    <div className="text-white w-full overflow-x-hidden">
      <>
        {!user && <Login handleLogin={handleLogin} />}
        
        {/* {user == 'admin' ? <AdminDashboard /> : (user == 'employee' ? <EmployeeDashboard data={loggedInUserData}/> : null) } */}
        {user?.role === "employee" && (
          <EmployeeDashboard data={loggedInUserData} />
        )}
        {user?.role === "admin" && <AdminDashboard />}
      </>
    </div>
  );
};

export default App;
