import React from "react";
import { Route, Routes } from "react-router-dom";
import UserEditPage from "../pages/UserEditPage";
import UsersListPage from "../pages/UsersListPage";
import UsersListPageId from "../pages/UsersListPageId";
import UserPage from "../pages/UserPage";
import UsersPage from "../pages/UsersPage";


const Users = () => {
    return (
        <>
          <h1>
               Users
           </h1>
           <Routes>
               <Route path={"listpage"} element={<UsersListPage/>}>
                         <Route index element={<UsersPage/>}/> 
                         <Route path={":userId"} element={<UsersListPageId/>}>
                             <Route index element={<UserPage/>}/>
                             <Route path={"edit"} element={<UserEditPage/>}/>
                         </Route>
                </Route>
           </Routes>
        </>
    );
};

export default Users ;
