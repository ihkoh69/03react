import axios from "axios";
import React, { useEffect, useState } from "react";
import NavComp from "./NavComp";

function PostListComp() {
  const [myData, setData] = useState([]);
  const [userId, setId] = useState("");

  useEffect(() => {
    async function fetchData() {
      const res = await axios(`https://jsonplaceholder.typicode.com/posts`);
      console.log(res.data);
      setData(res.data);
    }
    fetchData();
  }, []);

  return (
    <>
      <NavComp />
      <div className="container m-auto">
        <h1>Route 연습</h1>
        {myData.map((item) => {
          return (
            <>
              <div className="p-3 m-3 border rounded bg-blue-50">
                <p>{item.title}</p>
                <p>{item.body}</p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default PostListComp;
