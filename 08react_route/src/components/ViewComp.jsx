import React, { useEffect, useState } from "react";
import NavComp from "./NavComp";
import FooterComp from "./FooterComp";
import { useParams } from "react-router-dom";
import axios from "axios";

function ViewComp() {
  const { id } = useParams();
  const [view, setViewData] = useState({});
  const [loading, setLoading] = useState(true);

  //   useEffect(()=>{},[]);
  useEffect(() => {
    // async function resData() {}
    // resData()
    const resData = async () => {
      //   try {

      //   } catch (error) {
      //   } finally {
      //   }

      try {
        // axios.get("url")
        // axios("https://jsonplaceholder.typicode.com/posts/" + id)
        const res = await axios(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        console.log(id);
        console.log(res.data);
        const user = res.data.userId;
        console.log(user);

        const userData = await axios(
          `https://jsonplaceholder.typicode.com/users/${user}`
        );
        const newData = {
          name: userData.data.name,
          email: userData.data.email,
          title: res.data.title,
          body: res.data.body,
        };

        setViewData(newData);
      } catch (error) {
        console.error("데이터가져오기 실패 : " + error);
      } finally {
        setLoading(false);
      }
    };
    resData();
  }, []);

  return (
    <>
      <NavComp />

      {/* {loading ? () : () } */}
      {loading ? <p>데이터준비중입니다.</p> : null}
      <div className="container mx-auto">
        <h4>글내용 보기 / {id}</h4>
        <hr />
        <div>
          <p>작성자 : {view.name}</p>
          <p>email : {view.email}</p>
          <p>제목 : {view.title}</p>
          <p>내용 : {view.body}</p>
        </div>
      </div>
      <FooterComp />
    </>
  );
}

export default ViewComp;
