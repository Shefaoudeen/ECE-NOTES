import React from "react";
import { NavLink, Route, Routes, BrowserRouter } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-6">
      <NavLink to="/notes" className="w-[75%] flex justify-center border">
        <button className="h-[100px] w-full border-none flex justify-center items-center rounded-xl bg-gradient-to-r from-slate-400 via-slate-300 to-slate-400">
          <h1 className="text-xl font-extrabold">Notes</h1>
        </button>
      </NavLink>
      <NavLink to="/cat" className="w-[75%] flex justify-center">
        <div className="h-[100px] w-full  border-none flex justify-center items-center rounded-xl bg-gradient-to-r from-slate-400 via-slate-300 to-slate-400">
          <h1 className="text-xl font-extrabold">CAT Questions</h1>
        </div>
      </NavLink>
      <NavLink to="/previous" className="w-[75%] flex justify-center">
        <div className="h-[100px] w-full border-none flex justify-center items-center rounded-xl bg-gradient-to-r from-slate-400 via-slate-300 to-slate-400">
          <h1 className="text-xl font-extrabold">Previous Year Questions</h1>
        </div>
      </NavLink>
    </div>
  );
};

export default Home;
