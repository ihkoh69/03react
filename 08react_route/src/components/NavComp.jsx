import React from "react";
import { Link } from "react-router-dom";

function NavComp() {
  return (
    <div className="container flex items-center justify-between px-5 m-auto bg-blue-300">
      <Link to="/">logo</Link>

      <div className="flex justify-between gap-3 p-2 m-2">
        <Link to="/">Home</Link>
        <Link to="/list">List</Link>
        <Link to="/view/1">VIEW</Link>
      </div>
    </div>
  );
}

export default NavComp;
