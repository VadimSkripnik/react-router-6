import React from "react";
import { NavLink, Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const UserPage = () => {
  const data = [0, 1, 2, 3, 4, 5];
  const { userId } = useParams();
  const some = data.filter((el) => userId.includes(el));
  if (!some.length) {
    return <Navigate to="/users/listpage" />;
  }
  return (
    <div className="bg-gray-50 flex justify-center items-center grow ">
      <div className="d-flex flex-column mb-3 ms-5 mt-5">
        <h1>UserPage</h1>
        <NavLink to={`/users/listpage/${userId}/edit`}>
          1. NavLink to user edit page
        </NavLink>
        <NavLink to={`/users/listpage`}> 2. NavLink to users list</NavLink>
        <h2>{"UserId :" + " " + userId}</h2>
      </div>
    </div>
  );
};

export default UserPage;
