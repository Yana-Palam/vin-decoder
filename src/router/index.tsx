import { Navigate, createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/Home/HomePage";
import VariableDetailsPage from "../pages/VariableDetails/VariableDetailsPage";
import VariablesPage from "../pages/Variables/VariablesPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "variables",
        children: [
          {
            index: true,
            element: <VariablesPage />,
          },
          {
            path: ":variableId",
            element: <VariableDetailsPage />,
          },
        ],
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);
