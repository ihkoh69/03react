import axios from "axios";
import React, { useEffect, useState } from "react";
import NavComp from "./NavComp";
import FooterComp from "./FooterComp";
import { Link } from "react-router-dom";

function PostListComp() {
  const [myData, setData] = useState([]);
  const [userId, setId] = useState("");
  const [loading, setLoading] = useState(true);
  const listCnt = 10;
  const [currentPage, setCurrentpage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios(`https://jsonplaceholder.typicode.com/posts`);
        console.log(res.data);
        setData(res.data);

        setTimeout(() => {
          setLoading(false);
        }, 1000); // 1초
      } catch (error) {
        console.error("실패" + error);
      }
    }
    fetchData();
  }, []);

  const totalPages = Math.ceil(myData.length / listCnt);
  const lastItem = currentPage * listCnt;
  const firstItem = lastItem - listCnt; //(currentPage-1)*listCnnt;

  const currentItem = myData.slice(firstItem, lastItem);

  console.log(firstItem, lastItem, currentItem, totalPages);

  function gotoPage(page) {
    // alert(page);
    if (page <= totalPages && page >= 1) {
      setCurrentpage(page);
    }
  }

  return (
    <>
      <NavComp />
      {loading ? (
        <div className="container m-auto">
          <h1>글 리스트</h1>
          {Array.from({ length: 10 }).map((_, i) => {
            return (
              <div key={i} className="pb-2 px-4 animate-pulse">
                <div className="bg-gray-300 h-4 rounded"></div>
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          <div className="container m-auto">
            <h1>글 리스트</h1>
            {currentItem.map((item, i) => {
              return (
                <>
                  <div className="flex justify-between p-3 m-3 border rounded bg-blue-50">
                    <Link to={`/view/${item.id}`}>
                      <p>{item.title}</p>
                    </Link>
                  </div>
                </>
              );
            })}
          </div>
          <div className="flex justify-center items-center gap-3 py-4">
            <button
              onClick={() => {
                gotoPage(currentPage - 1);
              }}
              disabled={currentPage == 1}
              className="px-3 py-1 bg-gray-300 hover:bg-gray-400  disabled:opacity-0"
            >
              이전
            </button>
            <span>
              페이지 {currentPage} / {totalPages}
            </span>
            <button
              onClick={() => {
                gotoPage(currentPage + 1);
              }}
              disabled={currentPage == totalPages}
              className="px-3 py-1 bg-gray-300 hover:bg-gray-400 disabled:opacity-0"
            >
              다음
            </button>
          </div>
        </div>
      )}

      <FooterComp />
    </>
  );
}

export default PostListComp;
