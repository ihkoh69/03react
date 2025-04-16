import React, { useEffect, useState } from "react";
import NavComp from "./NavComp.jsx";
import FooterComp from "./FooterComp.jsx";
import axios from "axios";
import { Link } from "react-router-dom";
import "./cmmon.jsx"

function ListComp() {


  // 최초 로딩 시 언어는 한국어로 설정한다.
  setLanguage();



  const API_KEY =
    "1C42I%2BvS%2BEOZYNiN75gWOVCBJS9WTLlqh%2B4hyBjlz7njXFfqG%2Fv4qj5j6sA1TaQLjkS0T7qY1H%2BDFEUSTxiTJw%3D%3D";

  const [myData, setMyData] = useState([]);
  const [totalCount, setTotal] = useState("");

  let currentPage = 1;
  const pageSize = 10;
  // let keyword = "서울빛초롱축제";
  let keyword = "";

  useEffect(() => {
    async function fetchData(page) {
      currentPage = page;

      let API_URI = "";
      if (keyword == null || keyword == "") {
        API_URI = `${URL_HEAD}/areaBasedList1?MobileOS=ETC&MobileApp=AppTest&ServiceKey=${API_KEY}&listYN=Y&arrange=O&_type=json&numOfRows=${pageSize}&pageNo=${page}`;
      } else {
        API_URI = `${URL_HEAD}/searchKeyword1?MobileOS=ETC&MobileApp=AppTest&ServiceKey=${API_KEY}&listYN=Y&arrange=O&areaCode=&sigunguCode=&contentTypeId=&cat1=&cat2=&cat3=&_type=json&keyword=${keyword}&numOfRows=${pageSize}&pageNo=${page}`;
      }

      const res = await axios(API_URI);
      console.log(res.data.response.body.items.item);
      setMyData(res.data.response.body.items.item);
      setTotal(res.data.response.body.totalCount);
    }

    fetchData();
  }, []);

  return (
    <>
      <NavComp />
      <div>totalCount : {totalCount}</div>
      <div className="container">
        <ul>
          {myData.map((item, i) => {
            return (
              <>
                <li key={i} className="flex">
                  <Link to={`/view/${item.contentid}`}>
                    <p>{item.titel}</p>
                    <p>{item.addr1}</p>
                    <p>{item.addr2}</p>
                    <p>{item.mapx}</p>
                    <p>{item.mapy}</p>
                    {/* <img
                    src={item.firstimage}
                    alt=""
                    style={{ width: "200px" }}
                  /> */}
                  </Link>
                </li>
              </>
            );
          })}
        </ul>
      </div>
      <FooterComp />
    </>
  );
}

export default ListComp;
