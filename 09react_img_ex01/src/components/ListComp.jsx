import React, { useEffect, useState } from "react";

function ListComp() {
  const [dataLists, setDataLists] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [totalElements, setTotalElements] = useState(0);

  const size = 5;

  useEffect(() => {}, [page]);

  return (
    <>
      <div>
        <ul className="container flex justify-between">
          <li>이미지</li>
          <li>제목</li>
          <li>작성자</li>
          <li>등록일</li>
        </ul>
        <ul className="container flex justify-between">
          <li>이미지</li>
          <li>제목</li>
          <li>작성자</li>
          <li>등록일</li>
        </ul>
      </div>
    </>
  );
}

export default ListComp;
