import axios from "axios";
import React, { useEffect, useState } from "react";
import NavComp from "./NavComp";
import FooterComp from "./FooterComp";
import { Link } from "react-router-dom";

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
              <div className="flex justify-between p-3 m-3 border rounded bg-blue-50">
                <Link to={`/view/${item.id}`}>
                  <p>{item.title}</p>
                </Link>
                <Link to={`/view/${item.id}/comment`}>
                  <button>댓글보기</button>
                </Link>
              </div>
            </>
          );
        })}
      </div>
      <FooterComp />
    </>
  );
}

export default PostListComp;
