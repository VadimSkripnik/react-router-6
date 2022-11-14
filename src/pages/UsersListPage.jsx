import React from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

const UserListPage = () => {
  return (
    <>
      <h1>UsersListPage</h1>
      <NavLink to={`/`}>NavLink to home page</NavLink>
      <Outlet />
    </>
  );
};

export default UserListPage;
