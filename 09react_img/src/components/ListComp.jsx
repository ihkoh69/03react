// import axios from "axios";
import React, { useEffect, useState } from "react";
import { getList } from "../api/testImageApi";
import dayjs from "dayjs";
import { Link } from "react-router-dom";

function ListComp() {
  const [testData, setTestData] = useState([]);
  const size = 5;
  const [page, setPage] = useState(0);
  const [totalElements, setTotlElements] = useState(0);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    // async function listData() {
    //   const listDataView = await axios.get("http://localhost:8080/test");
    //   console.log(listDataView.data.content);

    //   setTestData(listDataView.data.content);
    // }

    // listData();
    getList({ page, size }).then((data) => {
      console.log(data);
      setTestData(data.content);
      setTotlElements(data.totalElements);
      setTotalPage(data.totalPages);
    });
  }, [page]);

  function handlePageChange(newPage) {
    setPage(newPage);
  }

  return (
    <div>
      <h3>글리스트</h3>
      <hr />
      <ul>
        <li className="flex justify-between py-4 border-b">
          <div className="flex gap-3">
            <span className="w-4">n</span>
            <span>제목</span>
          </div>
          <div className="flex gap-3">
            <span>작성자</span>
            <span className="w-[85px] text-end">날짜</span>
          </div>
        </li>

        {testData.map((item, i) => {
          return (
            <>
              <div className="flex justify-between py-4 border-b">
                <div className="flex gap-3">
                  <span>{totalElements - (page * size + i)}</span>
                  <span>
                    <img
                      src={`http://localhost:8080/images/thumb_${item.imageFileNames}`}
                      alt=""
                    />
                  </span>
                </div>
                <div className="flex gap-3">
                  <span>{totalElements - (page * size + i)}</span>
                  <span>{item.title}</span>
                </div>
                <div className="flex gap-3">
                  <span>{item.name}</span>
                  <span>{dayjs(item.startdate).format("YYYY.MM.DD")}</span>
                </div>
              </div>
            </>
          );
        })}
      </ul>
      <div className="flex justify-center mt-4">
        <button
          className="px-2 py-1 text-sm text-white bg-purple-400 rounded"
          onClick={() => {
            handlePageChange(page - 1);
          }}
          disabled={page <= 0}
        >
          Prev
        </button>
        {page + 1}/ {totalPage}
        <button
          className="px-2 py-1 text-sm text-white bg-purple-400 rounded"
          onClick={() => {
            handlePageChange(page + 1);
          }}
          disabled={page + 1 >= totalPage}
        >
          Next
        </button>
      </div>
      <div className="flex justify-end mt-3">
        <Link
          to="/wirte"
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 "
        >
          글작성
        </Link>
      </div>
    </div>
  );
}

export default ListComp;
