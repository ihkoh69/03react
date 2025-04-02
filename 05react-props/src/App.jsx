/* eslint-disable */
import React, { useState } from "react";
import ModalComp from "./components/ModalComp";
import "./App.css";

function App() {
  const vData = [
    "1. Lorem, ipsum dolor sit amet",
    "2. consectetur adipisicing elit. Molestias consequuntur",
    "3. vel sed est dignissimos nisi?",
  ];

  const [index, setIndex] = useState(0);
  let [data, setData] = useState(false);

  function doModal() {
    setData(true);
  }

  function unModal() {
    setData(false);
  }

  return (
    <div>
      <h3>Modal</h3>
      {data ? (
        <ModalComp vData={vData} index={index} unModal={unModal} />
      ) : null}
      <button onClick={doModal}>모달클릭</button>

      <ul className="tab">
        <li
          onClick={() => {
            setIndex(0);
          }}
        >
          1
        </li>
        <li
          onClick={() => {
            setIndex(1);
          }}
        >
          2
        </li>
        <li
          onClick={() => {
            setIndex(2);
          }}
        >
          3
        </li>
      </ul>
    </div>
  );
}

export default App;
