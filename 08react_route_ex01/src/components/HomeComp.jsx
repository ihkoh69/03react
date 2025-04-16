import React from "react";
import NavComp from "./NavComp";
import FooterComp from "./FooterComp";
import SlideComp from "./SlideComp";

function HomeComp() {
  return (
    <>
      <NavComp />
      <div className="container m-5">
        <SlideComp />
      </div>
      <FooterComp />
    </>
  );
}

export default HomeComp;
