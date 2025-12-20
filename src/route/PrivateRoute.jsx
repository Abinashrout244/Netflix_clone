import React, { useContext } from "react";
import { AuthContext } from "../context/authProvider";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="h-screen text-5xl font-semibold text-center">
        Loading!!!!
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ form: location }} replace />;
};

export default PrivateRoute;
