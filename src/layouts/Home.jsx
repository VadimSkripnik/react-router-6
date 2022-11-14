import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex grow flex-col justify-center items-center  dark:text-slate-200 ">
      <h1>Home</h1>
      <NavLink to={`/users/listpage`}>NavLink to user list</NavLink>
    </div>
  );
};

export default Home;
