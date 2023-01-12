import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import { PrivateRoute } from "../privateroute/PrivateRoute";
import { PrivateRoute2 } from "../privateroute/PrivateRoute2";

const RouterComponent = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<PrivateRoute2 />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/signup" element={<PrivateRoute2 />}>
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route path="/home" element={<PrivateRoute />}>
          <Route path="/home" element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default RouterComponent;
