import React, { useState } from "react";
import "./assets/vdata.scss";
import ModalComp from "./components/ModalComp";

function App() {
  // const vData = [
  //   "1.Lorem ipsum, dolor sit amet ",
  //   "2.consectetur adipisicing elit. Sint velit, ",
  //   "3j.ratione voluptates molestias magnam quas.",
  // ];

  const vData = [
    {
      title: "1.Lorem ipsum, dolor sit amet",
      content: "첫번째 컨텐츠",
    },
    {
      title: "2.consectetur adipisicing elit. Sint velit, ",
      content: "두번째 컨텐츠",
    },
    {
      title: "3j.ratione voluptates molestias magnam quas.",
      content: "세번째 컨텐츠",
    },
  ];

  const [num, setNum] = useState(0);
  const [view, setView] = useState(true);

  function unModal() {
    setView(false);
  }

  return (
    <>
      <h2>testView</h2>
      <ul className="lists">
        {/* {vData.map((item, i) => {
          return (
            <>
              <li>{item}</li>
            </>
          );
        })} */}
      </ul>
      {view ? (
        <ModalComp sendData={vData} sendNum={num} unModal={unModal} />
      ) : null}
    </>
  );
}

export default App;
