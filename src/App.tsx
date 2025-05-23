import { RouterProvider } from "react-router-dom";
import Router from "./routes";

const App = () => {
  return (
    <RouterProvider
      fallbackElement={<h1>Loading...</h1>}
      router={Router}
      future={{ v7_startTransition: true }}
    ></RouterProvider>
  );
};

export default App;
