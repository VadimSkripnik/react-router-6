import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./layouts/Home";
import Users from "./layouts/Users";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="users/*" element={<Users />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
