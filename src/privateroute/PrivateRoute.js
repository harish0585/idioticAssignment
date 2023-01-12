import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const isAuth = localStorage.getItem("auth");
  return isAuth == "true" || null ? <Outlet /> : <Navigate to="/login" />;
};
