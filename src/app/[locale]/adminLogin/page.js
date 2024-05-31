"use client";

import React, { useState } from "react";

import { setIsAuthenticated } from "../auth/page.js";
import { useRouter } from "next/navigation";
 function AdminLogin() {
  const t_name = "admin";
  const t_password = "password";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const loginHandler = (event) => {
    event.preventDefault();
    if (username === t_name && password === t_password) {
      sessionStorage.setItem("token", "34566rfger234f3242321");
      setIsAuthenticated(true);
      router.replace(`dashboard`);
    }
  };

  return (
    <main className="flex items-center justify-center h-screen lr">
      <div className=" rounded-lg border-2 p-8 ">
        <h1 className="text-[1.2vw] font-[500] text-center mb-[2vh]">
          Dashboard
        </h1>
        <form onSubmit={loginHandler} className="flex flex-col gap-4">
          <input
            type="text"
            className="border p-4 rounded-lg w-[350px] outline-none focus:border-primary3 duration-300"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="border p-4 rounded-lg w-[350px] outline-none focus:border-primary3 duration-300"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-primary3 text-white text-[18px] rounded-lg w-full p-4 disabled:bg-slate-500 font-[600] ">
            Login
          </button>
        </form>
      </div>
    </main>
  );
}
export default AdminLogin
