import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./Navbar.tsx";

const Root = () => {
  return (
    <div className="max-w-screen min-h-screen">
      <Navbar />
      <div className="px-20 pt-4 h-fit w-full max-lg:px-[1rem] max-xl:px-[2rem]">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
