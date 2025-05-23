import type { RouteObject } from "react-router-dom";
import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const NotFound = lazy(() => import("../pages/NotFound"));

const PublicRoutes: RouteObject[] = [
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/",
    element: <Home />,
  },
];
export default PublicRoutes;
