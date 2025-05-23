import type { RouteObject } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import { lazy } from "react";

const Login = lazy(() => import("../pages/Login"));

const PrivateRoutes: RouteObject[] = [
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
];
export default PrivateRoutes;
