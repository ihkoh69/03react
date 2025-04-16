import React from "react";
import NavComp from "./NavComp";
import FooterComp from "./FooterComp";
import "./common.js";

function ViewComp() {
  async function fetchData() {}

  const API_URI_DETAIL = `${URL_HEAD}/detailCommon1?ServiceKey=${API_KEY}&contentTypeId=&contentId=${contentid}&MobileOS=ETC&MobileApp=AppTest&defaultYN=Y&firstImageYN=Y&areacodeYN=Y&catcodeYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y&_type=json`;

  return (
    <>
      <NavComp />
      <div>ViewComp</div>
      <FooterComp />
    </>
  );
}

export default ViewComp;
