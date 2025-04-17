import axios from "axios";
import React, { useEffect, useState } from "react";
import NavComp from "./NavComp";
import FooterComp from "./FooterComp";
import { Link } from "react-router-dom";

function PostListComp() {
  const [postData, setPostData] = useState([]);
  const listCnt = 10;
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  async function postListData() {
    // const resData = await axios(
    //   `https://jsonplaceholder.typicode.com/posts?_page=1&_limit=5`
    // );
    const resData = await axios(`https://jsonplaceholder.typicode.com/posts`, {
      params: {
        _page: currentPage,
        _limit: listCnt,
      },
    });
    // console.log(resData);
    // console.log(resData.headers["x-total-count"]);
    const totalPages = Math.ceil(resData.headers["x-total-count"] / listCnt);
    setTotalPages(totalPages);
    setPostData(resData.data);
  }

  useEffect(() => {
    postListData();
  }, [currentPage]);

  function gotoPage(page) {
    // alert(page);
    if (page <= totalPages && page >= 1) {
      setCurrentPage(page);
    }
  }

  function renderPageNumber() {
    const pageNumbers = [];
    const pagerCnt = 5;

    let startPage = Math.floor((currentPage - 1) / pagerCnt) * pagerCnt + 1;
    let endPage = startPage + pagerCnt - 1;

    console.log(startPage, endPage);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <span
          onClick={() => {
            setCurrentPage(i);
          }}
          className={`${
            i == currentPage ? "active" : ""
          } rounded-lg px-2 hover:bg-slate-400`}
          style={
            i == currentPage
              ? { backgroundColor: "skyblue" }
              : { backgroundColor: "white" }
          }
        >
          {i}
        </span>
      );
    }

    return pageNumbers;
  }

  return (
    <>
      <NavComp />
      {currentPage} / {totalPages}
      <ul>
        {postData.map((item, i) => {
          return (
            <>
              <li key={i}>
                <Link to={`/view/${item.id}`}>{item.title}onClick</Link>
              </li>
            </>
          );
        })}
      </ul>
      {/* <div>
        <span
          onClick={() => {
            setCurrentPage(1);
          }}
        >
          1
        </span>
        <span
          onClick={() => {
            setCurrentPage(2);
          }}
        >
          2
        </span>
        <span
          onClick={() => {
            setCurrentPage(3);
          }}
        >
          3
        </span>
      </div> */}
      <div className="flex justify-center items-center gap-3 py-4">
        <button
          onClick={() => {
            gotoPage(currentPage - 1);
          }}
          disabled={currentPage == 1}
          className="px-3 py-1 bg-gray-300 hover:bg-gray-400  disabled:opacity-50"
        >
          이전
        </button>
        {renderPageNumber()}
        <button
          onClick={() => {
            gotoPage(currentPage + 1);
          }}
          disabled={currentPage == totalPages}
          className="px-3 py-1 bg-gray-300 hover:bg-gray-400 disabled:opacity-50"
        >
          다음
        </button>
      </div>
      <FooterComp />
    </>
  );
}

export default PostListComp;
