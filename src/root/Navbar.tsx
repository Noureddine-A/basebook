import React from "react";

const Navbar = () => {
  return (
    <section id="navbar">
      <div className="flex w-full h-24 border-b-2 border-gray-200">
        <div className="pl-20 flex items-center w-1/4 h-full max-sm:pl-4">
          <h1 className="text-3xl font-bold">Basebook</h1>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
