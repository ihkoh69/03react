import React from "react";
import NavComp from "./NavComp";
import SlideComp from "./SlideComp";
import FooterComp from "./FooterComp";

function HomeComp() {
  return (
    <>
      <NavComp />
      <div>
        <SlideComp />
      </div>
      <FooterComp />
    </>
  );
}

export default HomeComp;
