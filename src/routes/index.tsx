// src/routes/index.tsx
import { createBrowserRouter } from "react-router-dom";
import PublicRoutes from "./publicRoutes";
import PrivateRoutes from "./privateRoutes";

const Router = createBrowserRouter([...PublicRoutes, ...PrivateRoutes]);

export default Router;
