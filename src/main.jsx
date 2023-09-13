import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/Config.css";
import "./styles/swal.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Component imports
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/user/Dashboard";
import { Courses } from "./pages/user/Courses";
import { Lecture } from "./pages/user/Lecture";
import { Ranking } from "./pages/user/Ranking";
import { Transfer } from "./pages/user/Transfer";
import { Request } from "./pages/user/Request";

import { DashboardAdmin } from "./pages/admin/DashboardAdmin";
import { Tools } from "./pages/admin/Tools";

import { LanguageContextProvider } from "./components/home/LanguageContext";

// Create a React router using react-router-dom.
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/user/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/user/courses",
    element: <Courses />,
  },
  {
    path: "/user/lecture",
    element: <Lecture />,
  },
  {
    path: "/user/ranking",
    element: <Ranking />,
  },
  {
    path: "/user/transfer",
    element: <Transfer />,
  },
  {
    path: "/user/request",
    element: <Request />,
  },
  {
    path: "/admin/dashboard",
    element: <DashboardAdmin />,
  },
  {
    path: "/admin/tools",
    element: <Tools />,
  },
]);

// Render the application to the element with ID "root."
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Provides a language context for the entire application */}
    <LanguageContextProvider>
      {/* Provides the previously created router for navigation */}
      <RouterProvider router={router}></RouterProvider>
    </LanguageContextProvider>
  </React.StrictMode>
);
