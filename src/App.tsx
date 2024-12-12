import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./root/Root.tsx";
import Team from "./main/Team.tsx";

import { loader as departmentsLoader } from "./main/Team.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Team />,
        loader: departmentsLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
