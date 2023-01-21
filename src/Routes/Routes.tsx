import React from "react";
import ErrorPage from "../Pages/ErrorPage";
import {createBrowserRouter} from "react-router-dom";

// eslint-disable-next-line @typescript-eslint/typedef -- No exported type
export const ROUTES = createBrowserRouter([
  {
    path: "/",
    element: <ErrorPage />,
    errorElement: <ErrorPage />,
  },
]);
