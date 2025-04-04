import React from "react";
import { myData } from "./assets/myData";

function App() {
  return (
    <>
      <div className="container bg-blue-100">
        <ul className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
          {myData.map((item, i) => {
            return (
              <li className="flex-1 sm:min-w-[40%] lg:min-w-[30%] xl:min-w-[20%] card border">
                <div className="titleWrap flex justify-between">
                  <h3>{item.title}</h3>
                  <span>X</span>
                </div>
                <img
                  src={item.firstimage ? item.firstimage : "images/No_Img.jpg"}
                  className="border border-red-100"
                  alt=""
                />
                <p>
                  {item.addr1} {item.addr2}
                </p>

                {item.title}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
