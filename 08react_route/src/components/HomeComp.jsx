import React from "react";
import NavComp from "./NavComp";
import SlideComp from "./SlideComp";

function HomeComp() {
  return (
    <>
      <NavComp />
      <div>
        <SlideComp />
      </div>
    </>
  );
}

export default HomeComp;
