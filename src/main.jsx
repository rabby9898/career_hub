import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root/Root.jsx";
import Home from "./Home/Home.jsx";
import AppliedJobs from "./AppliedJobs/AppliedJobs";
import JobDetails from "./JobDetails/JobDetails";
import ErrorPage from "./Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/applied-jobs",
        element: <AppliedJobs></AppliedJobs>,
        // loader: () => fetch("../public/jobs.json"),
      },
      {
        path: "/job/:id",
        element: <JobDetails></JobDetails>,
        // loader: () => fetch("../public/jobs.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
