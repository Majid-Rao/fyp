import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated, isAuthenticatedT,isAuthenticatedS,isAuthenticatedE, role }) => {
  if (role === "admin" && isAuthenticated) {
    return <Outlet />;
  }

  if (role === "teacher" && isAuthenticatedT) {
    return <Outlet />;
  }

  if (role === "student" && isAuthenticatedS) {
    return <Outlet />;
  }
  if (role === "swaper" && isAuthenticatedE) {
    return <Outlet />;
  }

  return <Navigate to="/signIn" replace />;
};

export default ProtectedRoute;
