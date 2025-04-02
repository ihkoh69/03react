/* eslint-disable */
import React, { useState } from "react";
import "./App.css";

function App() {
  const [modal, setModal] = useState("test");
  const [data, setData] = useState(100);

  // let [a, b] = [1, 2];

  function modalClick() {
    setModal("hi");
  }

  function setTest() {
    setModal("test");
  }

  function modData() {
    setData(200);
  }

  return (
    <div>
      {/* <h3>props / {a} </h3> */}
      {/* <p>Lorem ipsum dolor</p> */}
      {modal}
      <button onClick={modalClick}>클릭</button>
      <ChildComp
        content={modal}
        number={data}
        modalEvent={modalClick}
        unsetEvent={setTest}
        numEvent={modData}
      />
    </div>
  );
}

function ChildComp({ content, number, modalEvent, unsetEvent, numEvent }) {
  return (
    <div className="subModule">
      모듈 <p>자료받음: {content}</p>
      <p>velue: {number}</p>
      <button onClick={modalEvent}>자료변경</button>
      <button onClick={unsetEvent}>자료복구</button>
      <button onClick={numEvent}>수치변경</button>
    </div>
  );
}

// function ChildComp(comp) {
//   return (
//     <div>
//       childComp <p>자료받음: {comp.content}</p>
//       <p>velue: {comp.number}</p>
//       <button onClick={comp.modalEvent}>자료변경</button>
//     </div>
//   );
// }

export default App;
