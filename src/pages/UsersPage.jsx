import React from "react";
import { NavLink } from "react-router-dom";

const Users = () => {
  const data = [0, 1, 2, 3, 4, 5];
  return (
    <>
      <h1>UsersPage</h1>
      <div className="d-flex flex-column mb-3 ms-5">
        {data.map((item, i) => (
          <NavLink key={i} to={`/users/listpage/${i}`}>
            User: {item}
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default Users;
