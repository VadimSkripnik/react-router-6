import React from "react";
import { Outlet } from "react-router-dom";

const UserListPageId = () => {
  return (
    <>
      <h1>UsersListPageId</h1>

      <Outlet />
    </>
  );
};

export default UserListPageId;
