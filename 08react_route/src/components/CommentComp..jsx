import React, { useEffect, useState } from "react";
import NavComp from "./NavComp";
import FooterComp from "./FooterComp";
import { useParams } from "react-router-dom";
import axios from "axios";

function CommentComp() {
  const { id } = useParams();
  const [myData, setMyData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios(
          `https://jsonplaceholder.typicode.com/posts/${id}/comments`
        );
        console.log(res.data);
        setMyData(res.data);
        console.log("myData : " + myData);
      } catch (error) {
        console.error("error : " + error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);
  return (
    <>
      <NavComp />
      <div className="container mx-auto">
        <h4>댓글리스트 / {id} </h4>
        {loading ? <p>데이터로딩중</p> : null}
        <div>
          {myData.map((item) => {
            return (
              <>
                <p>postId : {item.postId}</p>
                <p>id : {item.id}</p>
                <p>이름 : {item.name}</p>
                <p>email: {item.email}</p>
                <p>내용 : {item.body}</p>
              </>
            );
          })}
        </div>
      </div>
      <FooterComp />
    </>
  );
}

export default CommentComp;
