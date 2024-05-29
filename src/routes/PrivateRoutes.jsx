import React from "react";
import useAuth from "../Hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivateRoutes = ({ children }) => {
  const location = useLocation();
  const { loading, users } = useAuth();
  if (loading) {
    return <span>Loading.....</span>;
  }
  if (users) {
    return children;
  }
  return <Navigate to="login" replace state={{ from: location }}></Navigate>;
};

export default PrivateRoutes;
