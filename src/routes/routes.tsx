import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "@/pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

const Routes = () => {
  return (
    <>
      <RouterProvider router={router} />;
    </>
  );
};

export default Routes;
