import React from "react";
import axios from "axios";
import { useState } from "react";
import "./assets/css/style.scss";
import { useEffect } from "react";

function App() {
  // const sampData = [
  //   {
  //     id: 1,
  //     name: "Leanne Graham",
  //     username: "Bret",
  //     email: "Sincere@april.biz",
  //     address: {
  //       street: "Kulas Light",
  //       suite: "Apt. 556",
  //       city: "Gwenborough",
  //       zipcode: "92998-3874",
  //       geo: {
  //         lat: "-37.3159",
  //         lng: "81.1496",
  //       },
  //     },
  //     phone: "1-770-736-8031 x56442",
  //     website: "hildegard.org",
  //     company: {
  //       name: "Romaguera-Crona",
  //       catchPhrase: "Multi-layered client-server neural-net",
  //       bs: "harness real-time e-markets",
  //     },
  //   },
  // ];

  const [myData, setData] = useState([]);

  async function getData() {
    alert("getData");
    const res = await axios("https://jsonplaceholder.typicode.com/users");
    console.log(res.data);
    setData(res.data);
  }

  useEffect(() => {
    async function FetchData() {
      const res = await axios("https://jsonplaceholder.typicode.com/users");
      console.log(res.data);
      setData(res.data);
    }
    FetchData();
  }, []);

  return (
    <>
      <div className="container">
        <h3>Usernames</h3>
        <button
          onClick={() => {
            getData();
          }}
        >
          가져오기
        </button>
        <table>
          {myData.map((item) => {
            return (
              <>
                <tr>
                  <td>{item.name}</td>
                  <td>{item.username}</td>
                </tr>
              </>
            );
          })}
        </table>
      </div>
    </>
  );
}

export default App;
