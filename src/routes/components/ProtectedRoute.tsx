import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoute = () => {
  let isAuthenticated = true;
  const location = useLocation();

  // If logged in and trying to visit /login, redirect to /dashboard
  if (isAuthenticated && location.pathname === "/login") {
    return <Navigate to="/dashboard" replace />;
  }

  // If not logged in and NOT on /login, redirect to /login
  if (!isAuthenticated && location.pathname !== "/login") {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  // Otherwise render the requested route
  return <Outlet />;
};

export default ProtectedRoute;
