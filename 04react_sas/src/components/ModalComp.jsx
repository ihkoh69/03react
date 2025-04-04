import React from "react";

function ModalComp({ sendData, sendNum, unModal }) {
  return (
    <>
      <div className="modal">
        <div className="modelContents">
          <div className="titleWrap">
            <h3>{sendNum}</h3>
            <h3>{sendData[sendNum].title}</h3>
            <p>X</p>
          </div>
          {<p>{sendData[sendNum].addr1}</p>}
          {<p>{sendData[sendNum].addr2}</p>}
          <button className="btnClose" onClick={unModal}>
            닫기
          </button>
        </div>
      </div>
    </>
  );
}

export default ModalComp;
