// ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, user }) => {
  return localStorage.getItem("isLogged") == "true" ? (
    children
  ) : (
    <Navigate to="/"></Navigate>
  );
};

export default ProtectedRoute;
