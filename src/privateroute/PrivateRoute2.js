import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute2 = ({ children }) => {
  const isAuth = localStorage.getItem("auth");
  return isAuth != "true" || isAuth == null ? (
    <Outlet />
  ) : (
    <Navigate to="/home" />
  );
};
