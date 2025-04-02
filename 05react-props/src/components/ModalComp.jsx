/* eslint-disable */

import React from "react";

// function ModalComp(vData) {
//   //   const vData = props.vData;
//   //   const index = props.index;

//   return (
//     <div>{vData[0]}</div>
//     // <div className="modal">
//     //   <div className="modalContents">
//     //     <div className="titleWrap">
//     //       <h3>모달창입니다.</h3>
//     //       <p>X</p>
//     //     </div>

//     //     <p>
//     //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
//     //       explicabo adipisci voluptas harum fugit earum architecto iusto
//     //       voluptate tempora, aperiam, nam delectus, in laborum? Blanditiis eaque
//     //       veniam sed voluptatem aliquid!
//     //     </p>
//     //     <button className="btnClose">닫기</button>
//     //   </div>
//     // </div>
//   );
// }
function ModalComp({ vData, index, unModal }) {
  return (
    <div className="modal">
      <div className="modalContents">
        <div className="titleWrap">
          <h3>모달창입니다.</h3>
          <p onClick={unModal}>X</p>
        </div>
        <br />
        <div className="myMessage">{vData[index]}</div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          explicabo adipisci voluptas harum fugit earum architecto iusto
          voluptate tempora,aperiam, nam delectus, in laborum? Blanditiis eaque
          veniam sed voluptatem aliquid!
        </p>
        <button className="btnClose" onClick={unModal}>
          닫기
        </button>
      </div>
    </div>
  );
}

export default ModalComp;
