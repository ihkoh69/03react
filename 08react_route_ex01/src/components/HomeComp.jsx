import React from "react";
import NavComp from "./NavComp";
import FooterComp from "./FooterComp";

function HomeComp() {
  return (
    <>
      <NavComp />
      <div className="container m-5">첫화면</div>
      <FooterComp />
    </>
  );
}

export default HomeComp;
