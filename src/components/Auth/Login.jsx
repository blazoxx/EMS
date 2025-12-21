import React, { useState } from "react";

const Login = ({handleLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    
    const adminData = JSON.parse(localStorage.getItem("admin"));
    
    // Check if login is for admin
    if (adminData && adminData[0]?.email === email && adminData[0]?.password === password) {
      handleLogin(email, password, "admin");
    } else {
      handleLogin(email, password, "employee");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <div className="border-2 border-emerald-600 p-10 rounded-xl">
        <form onSubmit={submitHandler} className="flex flex-col items-center justify-center gap-5">
          <input
            className="border-2 border-emerald-600 py-3 px-5 bg-transparent outline-none rounded-full placeholder:text-gray-300"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="border-2 border-emerald-600 py-3 px-5 bg-transparent outline-none rounded-full placeholder:text-gray-300"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="border-2 bg-emerald-600 py-3 px-5 rounded-full">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;