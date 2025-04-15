import React from "react";
import { Link, NavLink } from "react-router-dom";

function NavComp() {
  return (
    <div className="container flex items-center justify-between px-5 m-auto bg-blue-300">
      <Link to="/">logo</Link>

      <div className="NavBar flex justify-between gap-3 p-2 m-2">
        {/* <Link to="/">Home</Link> */}
        <NavLink to="/">Home</NavLink>
        <NavLink to="/list">List</NavLink>
        <NavLink to="/view/1">VIEW</NavLink>
      </div>
    </div>
  );
}

export default NavComp;
