import React, { useState } from "react";
import { myData } from "./assets/data";
import ModalComp from "./components/ModalComp";
import "./assets/vdata.scss";

function App() {
  const [view, setView] = useState(false);
  const [num, setNum] = useState(0);

  function unModal() {
    setView(false);
  }

  function doModal(i) {
    setNum(i);
    setView(true);
  }

  return (
    <>
      <h3>myTour</h3>
      <ul>
        {myData.map((item, i) => {
          return (
            <>
              {
                <li
                  onClick={() => {
                    doModal(i);
                  }}
                >
                  {item.title}
                </li>
              }
            </>
          );
        })}
      </ul>
      {view ? (
        <ModalComp sendData={myData} sendNum={num} unModal={unModal} />
      ) : null}
    </>
  );
}

export default App;
