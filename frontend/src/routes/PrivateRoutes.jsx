import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const isAuthenticated = true;

  return isAuthenticated ? (
    <div className="">
      <Outlet />
    </div>
  ) : (
    <Navigate to="/auth/login"></Navigate>
  );
};

export default PrivateRoutes;
