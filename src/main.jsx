import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import TaskPage from "./pages/tasks/TaskPage";
import "./index.css";
import HomeLayout from "./layouts/HomeLayout";
import ChartPage from "./pages/charts/ChartPage";

const router = createBrowserRouter([
  {
    element: <HomeLayout />,
    children: [
      {
        path: "/table",
        element: <TaskPage />,
      },
      {
        path: "/",
        element: <ChartPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
