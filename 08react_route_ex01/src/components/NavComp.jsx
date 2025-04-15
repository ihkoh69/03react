import React from "react";
import HomeComp from "./HomeComp";
import { Link } from "react-router-dom";

function NavComp() {
  return (
    <>
      <div className="flex justify-end gap-3 bg-blue-300 header">
        <Link to="/">홈</Link>
        <Link to="/list">글목록</Link>
        <Link to="/view/1">글보기</Link>
      </div>
    </>
  );
}

export default NavComp;
